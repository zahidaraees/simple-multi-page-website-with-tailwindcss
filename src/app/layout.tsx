import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Simple Multi-Page Website-Milestone2',
  description: 'Simple multi-page website using React and Tailwind CSS by Zahida Raees',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 text-gray-900">
        <header className="bg-white shadow-md">
          <div className="container mx-auto flex items-center justify-between p-4">
            <h1 className="text-xl font-bold text-blue-600">ZR Professional Website</h1>
            <nav className="space-x-4">
              <a href="/" className="text-gray-700 hover:text-blue-700">Home</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 hover">About</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-6">{children}</main>
        <footer className="bg-slate-200 border-spacing-2 text-blue-800 text-center p-4 mt-4 text-sm">
          &copy; {new Date().getFullYear()} ZR Professional Website. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
