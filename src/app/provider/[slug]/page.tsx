import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <>
            <div>
                my category {params.slug}
            </div>
            <div className="container mx-auto">
                <section className=" m-6 p-6" >
                    <div className="size-full bg-slate-50 ">
                        <Image src={"/images/banner.png"}  width={1423} height={300} alt="banner..." />
                    </div>
                    <div className="flex">
                        <div className=" w-56 border-gray-950 bg-slate-50 p-6 mt-6 mr-6 ">
                            <div className="flex justify-center m-4 ">
                                <div className="bg-gray-400 rounded-full w-20  h-20">
                                    <Image src={"/images/"} height={50} width={50} alt="profile...." />
                                </div>
                            </div>
                            <div className="">
                                <p className="mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, rerum. Libero, nesciunt quam?</p>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    see info
                                </button>
                            </div>
                        </div>
                        <div className=" w-56 border-gray-950 bg-slate-50 p-6 mt-6 mr-6">
                            <div className="flex justify-center m-4 ">
                                <div className="bg-gray-400 rounded-full w-20  h-20">
                                    <Image src={"/images/"} height={50} width={50} alt="profile...." />
                                </div>
                            </div>
                            <div className="">
                                <p className="mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, rerum. Libero, nesciunt quam?</p>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    see info
                                </button>
                            </div>
                        </div>
                        <div className=" w-56 border-gray-950 bg-slate-50 p-6 mt-6 mr-6 ">
                            <div className="flex justify-center m-4 ">
                                <div className="bg-gray-400 rounded-full w-20  h-20">
                                    <Image src={"/images/"} height={50} width={50} alt="profile...." />
                                </div>
                            </div>
                            <div className="">
                                <p className="mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, rerum. Libero, nesciunt quam?</p>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    see info
                                </button>
                            </div>
                        </div>
                        <div className=" w-56 border-gray-950 bg-slate-50 p-6 mt-6 mr-6 ">
                            <div className="flex justify-center m-4 ">
                                <div className="bg-gray-400 rounded-full w-20  h-20">
                                    <Image src={"/images/"} height={50} width={50} alt="profile...." />
                                </div>
                            </div>
                            <div className="">
                                <p className="mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, rerum. Libero, nesciunt quam?</p>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    see info
                                </button>
                            </div>
                        </div>
                        <div className=" w-56 border-gray-950 bg-slate-50 p-6 mt-6 mr-6 ">
                            <div className="flex justify-center m-4 ">
                                <div className="bg-gray-400 rounded-full w-20  h-20">
                                    <Image src={"/images/"} height={50} width={50} alt="profile...." />
                                </div>
                            </div>
                            <div className="">
                                <p className="mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, rerum. Libero, nesciunt quam?</p>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    see info
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )

}