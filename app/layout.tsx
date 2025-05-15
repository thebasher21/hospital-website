import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ClientScripts from "@/components/ClientScripts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "SADH Care Hospital - Care Compassion Empathy",
    description:
        "SADH Care Hospital - Your trusted healthcare partner providing quality medical services with Care, Compassion, and Empathy",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta name="color-scheme" content="light dark" />
                <ClientScripts />
            </head>
            <body
                className={cn(
                    "min-h-screen font-sans antialiased",
                    geistSans.variable,
                    geistMono.variable
                )}
            >
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-grow w-full overflow-x-hidden">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
