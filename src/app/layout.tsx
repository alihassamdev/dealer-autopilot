import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSProvider from "@/providers/AOSProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
// import SmoothScrollSection from "@/providers/SmoothScrollSection";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dealer Autopilot",
  description:
    "Dealer AutoPilot helps dealerships track, recover, and convert every sales opportunity — before it’s too late.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased relative flex min-h-screen flex-col `}
      >
        <GoogleAnalytics />
        <AOSProvider>
          {/* <SmoothScrollSection> */}
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          {/* </SmoothScrollSection> */}
        </AOSProvider>
      </body>
    </html>
  );
}
