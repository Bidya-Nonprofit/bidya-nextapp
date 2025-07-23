import {
  Courier_Prime,
  Merriweather,
  Nunito,
  Lato,
  Quicksand,
} from "next/font/google";

export const CourierPrime = Courier_Prime({
  weight: "400",
  subsets: ["latin"],
});

export const MerriweatherFont = Merriweather({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const NunitoFont = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const LatoFont = Lato({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lato",
});

export const QuicksandFont = Quicksand({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-quicksand",
});
