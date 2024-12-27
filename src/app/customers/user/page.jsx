"use client"

import { currentUserProfile } from "@/api/user"
import { useEffect, useState } from "react"

const UserProfile=({data})=>{

  console.log("userData==>",data)
    const [user,setUser]=useState()
    console.log("user",user);
    

    useEffect(() => {
        const token = localStorage.getItem("accessToken")
        console.log("vinay1",token);
        
        const getProfile = async () => {
          try {
            const res = await currentUserProfile(token);
            console.log(res)
            setUser(res?.data)
            console.log("Current user =>", res);
          } catch (error) {
            console.error("Error fetching profile:", error);
          }
        };
    
        getProfile();
      }, []); 
    

      return (
        <>
          <div className="container mx-auto my-8 px-4">
            <h1 className="text-3xl font-semibold mb-6 text-center">Welcome to User Profile</h1>
      
            {/* Profile Section */}
            <div className="flex flex-wrap lg:flex-nowrap justify-between gap-6">
              {/* Details Card */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex-1 lg:mr-6">
                <div className="flex items-center mb-6">
                  {/* Profile Photo */}
                  <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-500 mr-4">
                    {/* Placeholder for Profile Image */}
                    {user?.username?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{user?.username}</h2>
                    <p className="text-gray-600">{user?.email}</p>
                  </div>
                </div>
                <hr className="my-4" />
                {/* User Details */}
                <div>
                  <p className="text-gray-700">
                    <strong>User ID:</strong> {user?.id}
                  </p>
                  <p className="text-gray-700">
                    <strong>Role:</strong> {user?.userType}
                  </p>
                </div>
              </div>
      
              {/* Actions Card */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex-none w-full lg:w-1/3 lg:ml-6">
                <h2 className="text-xl font-semibold mb-4 text-center lg:text-left">User Actions</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li className="hover:text-blue-600 cursor-pointer">Order History</li>
                  <li className="hover:text-blue-600 cursor-pointer">Payment History</li>
                  <li className="hover:text-blue-600 cursor-pointer">Available in Wallet</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      );
      
      
}

export default UserProfile