import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import 'mapbox-gl/dist/mapbox-gl.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Brest Bar',
    description: 'Les bars de Brest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" suppressHydrationWarning={true}>
            <body className={`min-h-svh max-w-full bg-background text-white ${inter.className}`}>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
