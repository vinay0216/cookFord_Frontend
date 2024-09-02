import dynamic from "next/dynamic";
const Happyclient  = dynamic(()=>import ('@/components/home/Happyclient'))
const Priceplane = dynamic(() => import('@/components/home/plane'))
const Howitworks = dynamic(() => import('@/components/home/howitworks'))
const TopChef = dynamic(()=>import('@/components/home/TopChef'))
const CategorySection = dynamic(() => import('@/components/home/CategorySection'))
const Banner = dynamic(()=>import('@/components/Banner'))


export default function Home() {
  return (
    <main className="w-full min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Banner />
      <Howitworks />
      <CategorySection />
      <TopChef/>
      <Happyclient/>
      <Priceplane/>
    </main>
  );
}
