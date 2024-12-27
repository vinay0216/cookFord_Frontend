"use client"
import { GetAllOrder } from "@/api/order";
import React, { useEffect } from "react";

export default function Page() {
    const [allOrder,setAllOrder] = useState()
    

  useEffect(() => {
    const fetchAllOrders = async () => {
    let token = localStorage.getItem("accessToken")
      try {
        const res = await GetAllOrder(token);
        setAllOrder(res.data)
        console.log("All orders ==> ", res.data); // Ensure you log `res.data`
      } catch (error) {
        console.error("Error fetching orders: ", error);
      }
    };

    fetchAllOrders();
  }, []);

  return (
    <h1 className="flex w-3/4">All Order Page!</h1>
  );
}
