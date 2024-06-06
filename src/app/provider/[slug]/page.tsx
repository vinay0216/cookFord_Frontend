'use client'
import { getUsersProfile } from "@/api/user";
import { setProfiles } from "@/app/lib/features/profileSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import SearchFilter from "@/app/ui/SearchFilter";
import ProgresiveLoder from "@/app/ui/loder";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";



export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const dispatch = useAppDispatch()


    const { isLoading, data } = useAppSelector(state => state.prfile);

    useEffect(() => {
        async function getUsers({ }) {
            const data = await getUsersProfile()
            dispatch(setProfiles(data.data));
        }
        getUsers(slug)
    }, [slug])


    return (
        <>
            <div className="flex">
                {/* left section */}
                <SearchFilter />
                {/* right section */}
                <div className="container mx-auto">
                    <p>my category {params.slug}</p>
                    <section className=" " >
                        <div className="size-full bg-slate-50 m-6 ">
                            <Image src={"/images/banner1.png"} width={1423} height={300} alt="banner..." />
                        </div>

                        {isLoading ?
                        <ProgresiveLoder/>
                            : 
                            data.map((item, index) => (
                                <>
                                {console.log("here is console item ",item )}
                                    <div key={index} className="p-2 max-w-2xl mx-auto bg-white rounded-xl shadow-md   mt-4">
                                        <div className="flex gap-2">
                                            <div>
                                                <div className="mx-auto grid justify-items-center m-4">
                                                    <Image className="h-20 w-20" src="/images/new-image/defaultchef.png" width={50} height={50} alt="Company Logo" />
                                                </div>
                                                <Link href={`/profile/${item._id}`}>
                                                    <button
                                                        type="button"
                                                        className="px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:ring focus:border-blue-300"
                                                    //   onClick={}
                                                    >
                                                        View Profile
                                                    </button>
                                                </Link>
                                            </div>
                                            <div>
                                                <div className="text-xl font-normal text-black">
                                                    <p>
                                                        {item.username}
                                                    </p>
                                                    {/* <p>{item?.profile.total_rating}</p> */}
                                                </div>
                                                <div className="text-black font-normal ">
                                                    <p className="bg-orange-400">
                                                        {item.profile?.cuisine}
                                                    </p>
                                                </div>
                                                <div className="text-gray-500 font-normal ">
                                                    <p>
                                                        Experience: {item.profile?.experience}
                                                    </p>
                                                </div>
                                                <p className="text-gray-500"> From:{item.profie?.from}</p>
                                                <p className="text-gray-500"> Full Time Price : Rs.{item.profile?.fulltimeprice} / Month</p>

                                            </div>
                                        </div>

                                    </div>
                                </>
                            ))}
                    </section>
                </div>
            </div>
        </>
    )

}