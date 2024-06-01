import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import Text from "@components/Text";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex bg-gray-100">
                    <div className="w-24 h-screen bg-gray-100 p-4 py-8 shadow-lg">
                        {/* Sidebar content goes here */}
                        <Text variant="h2">Sidebar</Text>
                    </div>
                    <div className="flex-1 p-8">
                        {/* Main content goes here */}
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
