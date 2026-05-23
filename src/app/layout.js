import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "IdeaVault",
  description: "Startup Idea Sharing Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.className} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main className="flex-grow">
          {children}
        </main>
        <Footer></Footer>
        </body>
      
    </html>
  );
}
