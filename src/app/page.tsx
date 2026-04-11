import Header from "@/components/Header";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="main-container mx-auto w-full">
      <Header />
      <BentoGrid />
      <Footer />
    </main>
  );
}
