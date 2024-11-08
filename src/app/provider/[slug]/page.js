"use client"
import dynamic from "next/dynamic"
import { getUsersProfile } from "@/api/user"
import { setProfiles } from "@/app/lib/features/profileSlice"
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks"
import { useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Pagination } from "@mui/material"

// Lazy loaded components
const SearchFilter = dynamic(() => import("@/app/ui/SearchFilter"))
const ProgresiveLoder = dynamic(() => import("@/app/ui/loder"))

export default function Page({ params }) {
  const { slug } = params
  const dispatch = useAppDispatch()
  const { isLoading, data } = useAppSelector(state => state.prfile)

  const getUsers = useCallback(async () => {
    const data = await getUsersProfile()
    dispatch(setProfiles(data.data))
  }, [dispatch])

  useEffect(() => {
    getUsers()
  }, [slug, getUsers])

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <SearchFilter />

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid gap-4 mb-4">
            <div className="flex">
              <div className="container mx-auto">
                <p>my category {params.slug}</p>
                <section className=" ">
                  <div className="size-full bg-slate-50  ">
                    <Image
                      src={"/images/banner1.png"}
                      width={1423}
                      height={300}
                      alt="banner..."
                      loading="lazy"
                    />
                  </div>

                  {isLoading ? (
                    <ProgresiveLoder />
                  ) : (
                    data.map((item, index) => (
                      <div
                        key={index}
                        className="p-2 max-w-2xl mx-auto bg-white rounded-xl shadow-md   mt-4"
                      >
                        <div className="flex gap-2">
                          <div>
                            <div className="mx-auto grid justify-items-center m-4">
                              <Image
                                className="h-20 w-20"
                                src="/images/new-image/defaultchef.png"
                                width={50}
                                height={50}
                                alt="Company Logo"
                              />
                            </div>
                            <Link href={`/profile/${item._id}`}>
                              <button
                                type="button"
                                className="px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:ring focus:border-blue-300"
                              >
                                View Profile
                              </button>
                            </Link>
                          </div>
                          <div>
                            <div className="text-xl font-normal text-black">
                              <p>{item.username}</p>
                            </div>
                            <div className="text-black font-normal ">
                              <p className="bg-orange-400">
                                {item.profile?.cuisine}
                              </p>
                            </div>
                            <div className="text-gray-500 font-normal ">
                              <p>Experience: {item.profile?.experience}</p>
                            </div>
                            <p className="text-gray-500">
                              {" "}
                              From:{item.profie?.from}
                            </p>
                            <p className="text-gray-500">
                              {" "}
                              Full Time Price : Rs.{
                                item.profile?.fulltimeprice
                              }{" "}
                              / Month
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </section>
                <div className="flex justify-center mt-9">
                  <Pagination count={10} color="primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
