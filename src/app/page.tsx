import Banner from "@/components/Banner";
import CategorySection from "@/components/home/CategorySection";
import TopChef from "@/components/home/TopChef";
// import TopChef from "@/components/home/TopChef";
import Howitworks from "@/components/home/howitworks";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Banner />
      <Howitworks />
      <CategorySection />
      <TopChef/>
    </main>
  );
}
