import Header from "@/components/Header";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto w-full px-8">
      <Header />
      <BentoGrid />
      <Footer />
    </main>
  );
}
