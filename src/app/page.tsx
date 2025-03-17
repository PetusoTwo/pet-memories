import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
