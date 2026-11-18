import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'DOK Swims | Team Skills', description: 'Swimming skills and progress tracking for coaches.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
