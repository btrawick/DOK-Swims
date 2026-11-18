# DOK Swims — data model and feedback decisions

Status: proposed schema for implementation after coaching workflow is agreed. **No database is connected.** Fictional swimmers only.

## Confirmed product decisions

- One club with multiple invited trainers.
- One overall integer rating (1–10) per stroke, per assessment.
- Four strokes: freestyle, backstroke, breaststroke, butterfly.
- Stroke-specific selectable feedback for arm and leg technique, plus free-text coaching comments and next steps.
- Individual and team reports; CSV and PDF output in the full version.
- Assessment history is append-only by default so coaches can compare progress.
- Coach identity and timestamps must be server-generated when persistence is introduced.

## Proposed relational tables

### clubs
`id uuid PK`, `name text NOT NULL`, `created_at timestamptz`.

### club_members
`club_id uuid FK clubs`, `user_id uuid FK auth.users`, `role enum('admin','coach')`, `status enum('invited','active','disabled')`, `created_at timestamptz`.
Unique (`club_id`, `user_id`). Admins invite and remove coaches. All data access is scoped to active membership of the club.

### training_groups
`id uuid PK`, `club_id uuid FK clubs`, `name text NOT NULL`, `sort_order int`.
Unique (`club_id`, `name`).

### swimmers
`id uuid PK`, `club_id uuid FK clubs`, `group_id uuid FK training_groups NULL`, `first_name text`, `last_name text`, `birth_year int NULL`, `active boolean`, `created_at timestamptz`.
Use birth year or age band instead of full date of birth unless truly required. No contact or medical fields in initial release. Default sort is last name, first name.

### feedback_options
`id uuid PK`, `club_id uuid FK clubs NULL` (null = system preset), `stroke enum`, `body_part enum('arms','legs')`, `label text`, `active boolean`, `sort_order int`.
Use stable IDs; editing a label must not rewrite historical assessments. Clubs may eventually add their own options.

### assessments
`id uuid PK`, `club_id uuid FK clubs`, `swimmer_id uuid FK swimmers`, `coach_user_id uuid FK auth.users`, `stroke enum`, `rating int CHECK (rating BETWEEN 1 AND 10)`, `comment text CHECK (char_length(comment) <= 2000)`, `assessed_at timestamptz`, `created_at timestamptz`.
Multiple assessments for the same swimmer and stroke are allowed. Server validates that swimmer and coach belong to the same club.

### assessment_feedback
`assessment_id uuid FK assessments`, `feedback_option_id uuid FK feedback_options`, `label_snapshot text`, primary key (`assessment_id`, `feedback_option_id`).
Validate that each selected option matches the assessment stroke; snapshot the wording for accurate historical reports.

### invitations
`id uuid PK`, `club_id uuid FK clubs`, `email text`, `role enum`, `invited_by uuid`, `expires_at timestamptz`, `accepted_at timestamptz NULL`.
Invitation tokens must be managed by the authentication provider or stored only as secure hashes.

## Security requirements before real data

1. Authenticate every coach and enforce club-scoped row-level security on all tables.
2. Only active club members may read swimmers and assessments; only authorised coaches may create assessments; only admins may manage members/invitations.
3. Verify club ID, swimmer ID, coach identity, feedback IDs and rating on the server; do not trust client-submitted coach IDs.
4. Protect exports with the same access rules as on-screen reports.
5. Define data retention, deletion, backups, incident handling and lawful processing basis appropriate for minors.
6. Test cross-club access denial, revoked membership, malformed ratings and invitation expiry before launch.

## Reports

- Individual: latest rating by stroke, dated rating trend, all selected feedback and free-text notes.
- Team: swimmer/stroke matrix, group filters, assessment coverage and group averages.
- Exports: CSV first; PDF layout later. Restrict access to authorised coaches.

## Current prototype limitations

The demo stores data only in React memory. It has no real login, invitation service, persistence or PDF generator. It must not be used with identifiable children's data.

## Localization and feedback IDs

- Supported UI locales: English (`en`) and Dutch (`nl`), switchable without changing assessment data.
- Feedback options use stable identifiers and localized English/Dutch labels. Persist option IDs plus a language-neutral snapshot/translation version rather than using display text as the identifier.
- Trainers may select multiple feedback observations for a stroke and add free-text comments. Free text is not machine-translated.
- The 1–10 rating is an ordinal coaching scale; reports should avoid implying false precision from averages.
- Neon PostgreSQL is the preferred database candidate; authentication and invitation provider are separate decisions for later. No backend is connected yet.
