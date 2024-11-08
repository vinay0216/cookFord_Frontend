"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { GetCategory } from '@/api/category';
import Link from 'next/link';

const CategorySection = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await GetCategory();
        setCategory(res.data);
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    }
    getData();
  }, []);

  return (
    <section className="p-5">
      <h2 className="text-3xl font-bold text-center mb-8">
        Top Categories
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {category?.map((item, index) => (
          <div className="flex justify-center items-center h-52 w-52" key={index}>
            <div
              className="bg-cover bg-center"
              style={{ backgroundImage: `url(/images/logo.jpg)` }}
            >
              <div className="bg-white bg-opacity-80 rounded-lg overflow-hidden h-48 w-48 flex items-center justify-center">
                <Link href={`/provider/${item?.name}`}>
                  <h3 className="text-xl text-center font-semibold text-gray-800">
                    {item?.name}
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
