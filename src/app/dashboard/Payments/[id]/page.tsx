"use client"
import * as React from 'react';
import dynamic from 'next/dynamic';
import { useParams, useRouter } from 'next/navigation';
import {  CreateOrder, PaymentStatus } from '@/api/order';
const Priceplane = dynamic(() => import('@/components/home/plane'));



export default function Page() {
  const { id } = useParams();

  const router = useRouter()

  React.useEffect(() => {

    const fetchPaymentStatus = async () => {
      try {
        const res = await PaymentStatus(id);
        console.log("Payment response ==>..", res);
        if(res.data){
          router.push("/dashboard/order")

        }
      } catch (error) {
        console.error("Error fetching payment status: ", error);
      }
    };

    if (id) {
      fetchPaymentStatus();
    }
  }, [id]);


  return <Priceplane />;
}