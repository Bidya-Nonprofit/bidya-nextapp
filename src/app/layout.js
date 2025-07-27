import "./globals.css";
import {
  MerriweatherFont,
  NunitoFont,
  LatoFont,
  QuicksandFont,
} from "@/lib/fonts/fonts";

export const metadata = {
  title: "Bidya",
  description: "Bidya uplifts underserved girls in Nepal by covering tuition, supplies, and related costs to provide access to quality education."
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${MerriweatherFont.variable} ${NunitoFont.variable} ${LatoFont.variable} ${QuicksandFont.className} select-none overflow-x-hidden`}
    >
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
