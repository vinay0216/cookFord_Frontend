"use client"

import React, { useEffect, useCallback, useState } from "react"
import { useParams } from "next/navigation"
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks"
import { getUsersProfilbyid } from "@/api/user"
import { setProfilesdata } from "@/app/lib/features/profileDetailSlice"
import ProgresiveLoder from "@/app/ui/loder"
import dynamic from "next/dynamic"
import UserProfile from "@/app/customers/user/page"
import ProviderProfile from "@/app/customers/profile/page"

const FullScreenDialog = dynamic(() => import("@/app/ui/bookmodel"))

const Page = () => {
  const [open, setOpen] = useState(false)
  const { id } = useParams()
 
  const dispatch = useAppDispatch()
  const { isLoading, data } = useAppSelector(state => state.profileDetails)

  console.log("profile data=>",data)

  const handleClickOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  useEffect(() => {
    const getData = async () => {
     let  userType =  localStorage.getItem("userType")
     let obj = {
        'userId':id,
        'userType':userType
     }
      try {
        const res = await getUsersProfilbyid(obj)

        dispatch(setProfilesdata(res.data))
      } catch (error) {
        console.error("Error fetching profile data:", error)
      }
    }
    if (id) {
      console.log("useparams id==>",id)
      getData()
    }
  }, [id, dispatch])

  return (
    <div>
        {data?.userType === 'user'?(
          <>
          {isLoading ? <ProgresiveLoder />:<UserProfile data={data}/>}
          </>
        ):(
          <>
          {isLoading? <ProgresiveLoder />:<ProviderProfile data={data}/>}
          </>
        )}
      <FullScreenDialog open={open} setOpen={setOpen} />
    </div>
  )
}

export default Page
