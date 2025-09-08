import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Helidev.ai - Custom AI Solutions & Automation',
  description: 'Professional AI automation services, custom GPT development, and AI education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script async src="https://js.stripe.com/v3/"></script>
      </body>
    </html>
  );
}