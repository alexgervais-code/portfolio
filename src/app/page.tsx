import Header from "@/components/Header";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto w-full px-6 sm:px-0 sm:w-[712px] desktop:w-[1135px]">
      <Header />
      <BentoGrid />
      <Footer />
    </main>
  );
}
