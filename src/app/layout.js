import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata = {
  title: "Bonding Concepts | Technical Services in Dubai",
  description: "Reliable technical services for residential and commercial spaces in Dubai. Maintenance, installation, and contracting solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
