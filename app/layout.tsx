import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lilac Template - Therapy for Adults in Minneapolis, MN',
  description: 'Live your life in full bloom. Therapy for adults specializing in self-esteem, relationships, and burnout.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
