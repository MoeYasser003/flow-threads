import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  UserProfile,
} from "@clerk/nextjs";
import React from "react";

import "../globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Flow",
  description: "A social media application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} `}>
          
   
          {children}</body>
      </html>
    </ClerkProvider>
  );
}
