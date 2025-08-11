import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "freyazou.com",
    template: "%s | freyazou.com",
  },
  description: "Freya Zou - Software Engineer at Amazon, specializing in AI, software development, and system design",
  openGraph: {
    title: "freyazou.com",
    description:
      "Freya Zou - Software Engineer at Amazon, specializing in AI, software development, and system design",
    url: "https://freyazou.com",
    siteName: "freyazou.com",
    images: [
      {
        url: "https://freyazou.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Freya Zou",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.svg",
    icon: "/favicon.svg",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black dark:bg-black light:bg-white ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
