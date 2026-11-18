# DOK Swims

Swim team skills tracking app built with Next.js and TypeScript for Vercel.

## Current status

Initial responsive, deployable application shell only. Authentication, database and assessments are not yet implemented. **Do not enter children's personal data** until secure access controls have been implemented and tested.

## Planned features

- Alphabetical swimmer directory (surname, then first name)
- Four strokes: freestyle, backstroke, breaststroke and butterfly
- 1–5 ratings per stroke; separate arms and legs feedback checklists
- Dated assessment history and coach attribution
- Individual and team progress reports
- Admin/coach roles and email invitations

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

## Vercel

Import `btrawick/DOK-Swims`, select Next.js, use repository root, and deploy `main` after merging the pull request. No environment variables are required for the initial shell.

## Security before launch

Add authenticated accounts, database row-level access controls, role-based authorization, server-side validation, invitation workflow, audit logs and GDPR-conscious data retention. Never expose service-role secrets in browser code.
