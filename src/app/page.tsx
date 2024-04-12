import Banner from "@/components/Banner";
import CategorySection from "@/components/home/CategorySection";
import Howitworks from "@/components/home/howitworks";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner />
      <Howitworks />
      <CategorySection />
    </main>
  );
}
