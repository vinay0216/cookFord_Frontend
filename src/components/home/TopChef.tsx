
import React from 'react';
import Image from 'next/image';



const TopChef: React.FC = () => {
    // create dummy data structure 4 
    let data = [
        {
            "id": 1,
            "imageUrl": "/images/logo.png",
            "chefName": "Rahul kumar",
            "location": "noida",
            "reasons": "Reasons to hire me",
            "shortSentence": "Short sentence about the chef.",
            "rate": " ₹ 200 / hour"
        },
        {
            "id": 2,
            "imageUrl": "/images/defaultchef.png",
            "chefName": "Sandeep kumar",
            "location": "Delhi",
            "reasons": "Reasons to hire me",
            "shortSentence": "Short sentence about the chef.",
            "rate": "₹ 7000 / Months"
        },
         {
            "id": 3,
            "imageUrl": "/images/defaultchef.png",
            "chefName": "vimal kumar",
            "location": "Gurugram",
            "reasons": "Reasons to hire me",
            "shortSentence": "Short sentence about the chef.",
            "rate": "₹ 300 / hour"
        },
         {
            "id": 4,
            "imageUrl": "/images/defaultchef.png",
            "chefName": "Tony ",
            "location": "Noida",
            "reasons": "Reasons to hire me",
            "shortSentence": "Short sentence about the chef.",
            "rate": "₹ 8000 / months"
        }
         
    ]


    return (
        <>
        <section className="container mx-auto sm:p-4 md:p-8 lg:p-12 ">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Top chefs</h2>
            <div className='flex flex-col sm:flex-row flex-wrap'>
            {data?.map((items, index) => (
                <div className=" p-2 " key={index}>
                    <div className=" px-4 mb-6">
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
                            <Image className="w-24 h-24 rounded-full mx-auto" width={30} height={30} src={"/images/page-1-img-1.png"} alt="Chef's Name" />
                            <h3 className="mt-4 text-xl text-center font-semibold text-gray-800">{items.chefName}</h3>
                            <p className="text-center text-gray-600">{items.location}</p>
                            <p className="mt-3 text-center text-gray-600">{items.reasons}</p>
                            <p className="text-center text-gray-600">{items.shortSentence}</p>
                            <div className="mt-4 text-center">
                                <span className="text-gray-900 font-bold">{items.rate}</span>
                            </div>
                            <div className="mt-6 text-center">
                                <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600">View profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </section>
        </>
    );
};

export default TopChef;
