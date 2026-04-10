import Header from "@/components/Header";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto w-full px-6 sm:max-desktop:px-0 sm:max-desktop:w-[712px] desktop:w-[1135px] desktop:px-0">
      <Header />
      <BentoGrid />
      <Footer />
    </main>
  );
}
