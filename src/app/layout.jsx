import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-svh bg-gradient-radial from-bg-col-bg-light to-bg-col-bg-dark">
        <Header />
        <main className="max-w-6xl mx-auto pl-4 pr-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
