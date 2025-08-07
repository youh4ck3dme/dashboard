import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Papi Hair Design PRO',
  description: 'Profesionálny kadernícky salón v Košiciach',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="sk">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
