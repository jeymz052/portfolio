import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "James Harley Esteban | Full Stack Developer & Computer Engineer",
  description:
    "Explore the portfolio of James Harley Esteban, a Computer Engineering student at PUP Sta. Mesa specializing in Full Stack Web Development, Machine Learning, and Backend Systems. TESDA-certified in Computer Systems Servicing (NC II).",
  keywords: [
    "James Harley Esteban",
    "Full Stack Developer",
    "Computer Engineer",
    "PHP Developer",
    "Laravel Developer",
    "Machine Learning",
    "YOLOv8",
    "PUP Sta. Mesa",
    "Philippines",
  ],
  authors: [{ name: "James Harley Esteban" }],
  openGraph: {
    title: "James Harley Esteban | Personal Portfolio",
    description:
      "Full Stack Developer & Computer Engineer — Building practical, enterprise-grade software.",
    url: "https://jamesharley.vercel.app",
    siteName: "James Harley Esteban Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "James Harley Esteban Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Harley Esteban | Full Stack Developer",
    description: "Building robust web applications and ML-powered solutions.",
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
