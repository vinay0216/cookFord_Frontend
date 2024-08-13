import * as React from 'react';
// import Priceplane from "@/components/home/plane";
import dynamic from 'next/dynamic';
const Priceplane = dynamic(() => import('@/components/home/plane'));




export default function page() {
  return (
    <Priceplane/>
  );
}