import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';
import './globals.css';

import ToastHook from '@/hooks/toast-hook';

import UseHandleErroredHook from '@/core/hooks/use-handle-errored-hook';

const robotoSlab = Roboto_Slab({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Go Barber 2.0',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={robotoSlab.className}>
        <UseHandleErroredHook>
          <ToastHook>{children}</ToastHook>
        </UseHandleErroredHook>
      </body>
    </html>
  );
}
