import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./component/layout/Header";
import { Footer } from "./component/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Papa-Laundry",
  description: "Your Everyday PAPA for Laundry",
};

     const homeNavBtns = [
    { id: "nav_services", text: "Services", link: "/home/laundry-services" },
    { id: "nav_order", text: "Book Now", link: "/home/order" },
    { id: "nav_tutorial", text: "About Us", link: "/home/about-us" },
  ];


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
