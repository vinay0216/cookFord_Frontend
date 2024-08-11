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
    <div>
      <section className="container mx-auto mt-4 sm:p-4 md:p-8 lg:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Top Categories
        </h2>
        <div className="flex flex-wrap justify-center">
          {category?.map((item, index) => (
            <div className="p-2" key={index}>
              <div
                className="px-4 mb-6 bg-cover bg-center"
                style={{ backgroundImage: `url(/images/logo.jpg)` }}
              >
                <div className="bg-white bg-opacity-80 rounded-lg overflow-hidden h-48 w-44 p-6">
                  <Link href={`/provider/${item?.name}`}>
                    <h3 className="mt-4 text-xl text-center font-semibold text-gray-800">
                      {item?.name}
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategorySection;
