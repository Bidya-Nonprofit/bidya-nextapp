import "./globals.css";
import {
  MerriweatherFont,
  NunitoFont,
  LatoFont,
  QuicksandFont,
} from "@/lib/fonts/fonts";

export const metadata = {
  title: "Bidya",
  description: "Bidya uplifts girls from underserved backgrounds by covering school costs, giving them access to quality education and lifelong opportunities."
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
