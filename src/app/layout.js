// import { Inter } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/transitionProvider';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Saurav Gurung',
  description: 'The best portfolio page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black pb-6">
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
