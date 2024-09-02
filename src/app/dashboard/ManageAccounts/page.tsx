// "use client"
// import { createProfile } from '@/api/user'
// import { useAppSelector } from '@/app/lib/hooks'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Image from 'next/image';
// import React, { ChangeEvent, useState } from 'react'


// type FormDataType = {
//     headline?: string;
//     about?: string;
//     bio?: string;
//     profilephoto?: File;
//     [key: string]: any;
// };

// const Page: React.FC = () => {

//     const [FormData, setFormData] = useState<FormDataType>({})
//     console.log("form data==>", FormData)
//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setFormData({ ...FormData, [e.target.name]: e.target.value })
//     }
//     const handleChangetext = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         setFormData({ ...FormData, [e.target.name]: e.target.value })
//     }


//     const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//         const fileList = event.target.files;
//         if (fileList && fileList.length > 0) {
//             const file = fileList[0]; // Get the first selected file
//             setFormData({ ...FormData, [event.target.name]: file });
//             console.log(file);
//         }
//     };

//     // console.log("form data=>",FormData)
//     const token = useAppSelector((state) => state.auth.accessToken);

//     const hendelSubmit = async () => {
//         try {
//             const res = await createProfile(FormData, token);
//             console.log("res=>", res);
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     }

//     return (

//         <>
//             <div className='flex justify-center p-10 '>
//                 <form >
//                     <div className="space-y-12 space-x-12">
//                         <div className="border-b border-gray-900/10 pb-12">
//                             <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
//                             <p className="mt-1 text-sm leading-6 text-gray-600">
//                                 This information will be displayed publicly so be careful what you share.
//                             </p>
//                             <div className="col-span-full">
//                                 <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
//                                     Headline *
//                                 </label>
//                                 <p className="mt-3 text-sm leading-6 text-gray-600">State who you are & what you offering</p>
//                                 <div className="mt-2">
//                                     <textarea

//                                         name="headline"
//                                         onChange={handleChangetext}
//                                         rows={3}
//                                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                         defaultValue={'Passionate Edmonton Chef Serving Up Delicious and Affordable Daily Menus.'}
//                                     />
//                                 </div>

//                             </div>
//                             <div className="col-span-full">
//                                 <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
//                                     Introduce your work
//                                 </label>
//                                 <p className="mt-3 text-sm leading-6 text-gray-600">Describe what you do and why you are the best.</p>
//                                 <div className="mt-2">
//                                     <textarea
//                                         name="about"
//                                         rows={10}
//                                         onChange={handleChangetext}
//                                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                         defaultValue={`Are you in search of a skilled and passionate chef? Look no further! I'm Vinay, a professional chef with a flair for creating exquisite cuisines that tantalize the taste buds. With years of experience in the culinary industry, I have honed my skills to deliver top-notch dishes that cater to a variety of tastes and dietary preferences. As a chef, I prioritize using fresh, locally-sourced ingredients to ensure the highest quality and flavor in every dish. My diverse culinary background allows me to craft menus that feature a wide range of cuisines, from traditional comfort foods to gourmet delights.  Whether you're hosting an intimate gathering or a large event, I have the expertise to curate a memorable dining experience for you and your guests. My services are affordably priced at 500 daily, making it easy to elevate your dining experience without breaking the bank. If you're ready to elevate your next event with delectable dishes and impeccable service, feel free to message me to discuss how we can collaborate to create a truly unforgettable culinary experience. Let's bring your culinary vision to life!`}
//                                     />
//                                 </div>
//                                 <p className="mt-3 text-sm leading-6 text-gray-600">100 character minimum</p>
//                             </div>

//                             <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


//                                 <div className="col-span-full">
//                                     <label htmlFor="Bio" className="block text-sm font-medium leading-6 text-gray-900">
//                                         Bio
//                                     </label>
//                                     <div className="mt-2">
//                                         <textarea

//                                             name="bio"
//                                             onChange={handleChangetext}
//                                             rows={3}
//                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                             defaultValue={`My services are affordably priced at 500.0 daily, making it easy to elevate your dining experience without breaking the bank. If youre ready to elevate your next event with delectable dishes and impeccable service, feel free to message me to discuss how we can collaborate to create a truly unforgettable culinary experience. Let bring your culinary vision to life!`}
//                                         />
//                                     </div>
//                                     <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
//                                 </div>

//                                 <div className="col-span-full">
//                                     <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
//                                         Add your profile photo
//                                     </label>
//                                     <p className="mt-3 text-sm leading-6 text-gray-600">Photos help people feel they are connecting with a real person. Add a photo to increase your chance of finding a match.
//                                     </p>
//                                     <div className="mt-2 gap-y-3 items-center gap-x-3">
//                                     {!FormData.profilephoto ? (
//                                             <AccountCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
//                                         ) : (
//                                             <div className='rounded bg-transparent'>
//                                                 <Image src={URL.createObjectURL(FormData.profilephoto)} width={100} height={100} alt="profile" className='bg-transparent' />
//                                             </div>
//                                         )}

//                                         <label htmlFor="profile-upload" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer">
//                                             Change
//                                         </label>
//                                         <input
//                                             id="profile-upload"
//                                             name="profilephoto"
//                                             type="file"
//                                             className="sr-only"
//                                             onChange={handleFileChange} // Call handleFileChange function on file selection
//                                         />
//                                         <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
//                                     </div>
//                                 </div>


//                                 <div className="col-span-full">
//                                     <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
//                                         Cover photo
//                                     </label>
//                                     <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
//                                         {!FormData.top_cuisine ?
//                                         <div className="text-center">
//                                             {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
//                                             <div className="mt-4 flex text-sm leading-6 text-gray-600">
//                                                 <label
//                                                     htmlFor="file-upload"
//                                                     className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//                                                 >
//                                                     <span>Upload a file</span>
//                                                     <input id="file-upload" onChange={handleFileChange} name="top_cuisine" type="file" className="sr-only" />
//                                                 </label>
//                                                 <p className="pl-1">or drag and drop</p>
//                                             </div>
//                                             <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
//                                         </div>
//                                         :
//                                         <div className=''>
//                                                 <Image src={URL.createObjectURL(FormData.top_cuisine)} width={100} height={100} alt="coverphoto"  />
//                                             </div>
//                                         }
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div>
//                         <div className="col-span-full">
//                                     <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
//                                         Top cusion
//                                     </label>
//                                     <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
//                                         {!FormData.coverphoto ?
//                                         <div className="text-center">
//                                             {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
//                                             <div className="mt-4 flex text-sm leading-6 text-gray-600">
//                                                 <label
//                                                     htmlFor="file-upload"
//                                                     className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//                                                 >
//                                                     <span>Upload a file</span>
//                                                     <input id="file-upload" onChange={handleFileChange} name="coverphoto" type="file" className="sr-only" />
//                                                 </label>
//                                                 <p className="pl-1">or drag and drop</p>
//                                             </div>
//                                             <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
//                                         </div>
//                                         :
//                                         <div className=''>
//                                                 <Image src={URL.createObjectURL(FormData.coverphoto)} width={100} height={100} alt="coverphoto"  />
//                                             </div>
//                                         }
//                                     </div>
//                                 </div>
//                         </div>


//                         <div className="border-b border-gray-900/10 pb-12">
//                             <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
//                             <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

//                             <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//                                 <div className="sm:col-span-3">
//                                     <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
//                                         First name
//                                     </label>
//                                     <div className="mt-2">
//                                         <input
//                                             type="text"
//                                             name="first-name"
//                                             onChange={handleChange}
//                                             id="first-name"
//                                             autoComplete="given-name"
//                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="sm:col-span-3">
//                                     <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
//                                         Last name
//                                     </label>
//                                     <div className="mt-2">
//                                         <input
//                                             type="text"
//                                             name="last-name"
//                                             onChange={handleChange}
//                                             id="last-name"
//                                             autoComplete="family-name"
//                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                         />
//                                     </div>
//                                 </div>


//                                 <div className="sm:col-span-2">
//                                     <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
//                                         Country
//                                     </label>
//                                     <div className="mt-2">
//                                         <select
//                                             id="country"
//                                             name="country"

//                                             autoComplete="country-name"
//                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                                         >
//                                             <option value={"india"} >India</option>

//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div className="sm:col-span-2">
//                                     <label htmlFor="cuisine" className="block text-sm font-medium leading-6 text-gray-900">
//                                         cuisine
//                                     </label>
//                                     <div className="mt-2">
//                                         <select

//                                             name="cuisine"
//                                             autoComplete="cuisine-name"
//                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                                         >
//                                             <option>Indian</option>
//                                             <option>Chines</option>
//                                             <option>Mexicon</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div className="sm:col-span-2">
//                                     <label htmlFor="cuisine" className="block text-sm font-medium leading-6 text-gray-900">
//                                         language
//                                     </label>
//                                     <div className="mt-2">
//                                         <select
//                                             name="language"
//                                             autoComplete="language-name"
//                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                                         >
//                                             <option>Hindi</option>
//                                             <option>English</option>

//                                         </select>
//                                     </div>
//                                 </div>
//                                 <div className="col-span-full">
//                                     <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
//                                         Street address
//                                     </label>
//                                     <div className="mt-2">
//                                         <input
//                                             type="text"
//                                             name="street-address"
//                                             onChange={handleChange}
//                                             id="street-address"
//                                             autoComplete="street-address"
//                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="sm:col-span-2 sm:col-start-1">
//                                     <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//                                         City
//                                     </label>
//                                     <div className="mt-2">
//                                         <input
//                                             type="text"
//                                             name="city"
//                                             onChange={handleChange}
//                                             id="city"
//                                             autoComplete="address-level2"
//                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="sm:col-span-2">
//                                     <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
//                                         State / Province
//                                     </label>
//                                     <div className="mt-2">
//                                         <input
//                                             type="text"
//                                             name="region"
//                                             onChange={handleChange}
//                                             id="region"
//                                             autoComplete="address-level1"
//                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="sm:col-span-2">
//                                     <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
//                                         ZIP / Postal code
//                                     </label>
//                                     <div className="mt-2">
//                                         <input
//                                             type="text"
//                                             name="postal-code"
//                                             onChange={handleChange}
//                                             id="postal-code"
//                                             autoComplete="postal-code"
//                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="sm:col-span-2">
//                                     <label htmlFor="experince" className="block text-sm font-medium leading-6 text-gray-900">
//                                         Experince
//                                     </label>
//                                     <div className="mt-2">
//                                         <input
//                                             type="text"
//                                             name="experince"
//                                             onChange={handleChange}
//                                             autoComplete="postal-code"
//                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="sm:col-span-2">
//                                     <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
//                                         price
//                                     </label>
//                                     <div className="mt-2">
//                                         <input
//                                             type="text"
//                                             name="price"
//                                             onChange={handleChange}
//                                             autoComplete="postal-code"
//                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="border-b border-gray-900/10 pb-12">
//                             <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
//                             <p className="mt-1 text-sm leading-6 text-gray-600">
//                                 always let you know about important changes, but you pick what else you want to hear about.
//                             </p>

//                             <div className="mt-10 space-y-10">
//                                 <fieldset>
//                                     <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
//                                     <div className="mt-6 space-y-6">
//                                         <div className="relative flex gap-x-3">
//                                             <div className="flex h-6 items-center">
//                                                 <input
//                                                     id="comments"
//                                                     name="comments"
//                                                     type="checkbox"
//                                                     className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                                                 />
//                                             </div>
//                                             <div className="text-sm leading-6">
//                                                 <label htmlFor="comments" className="font-medium text-gray-900">
//                                                     Comments
//                                                 </label>
//                                                 <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
//                                             </div>
//                                         </div>
//                                         <div className="relative flex gap-x-3">
//                                             <div className="flex h-6 items-center">
//                                                 <input
//                                                     id="candidates"
//                                                     name="candidates"
//                                                     type="checkbox"
//                                                     className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                                                 />
//                                             </div>
//                                             <div className="text-sm leading-6">
//                                                 <label htmlFor="candidates" className="font-medium text-gray-900">
//                                                     Candidates
//                                                 </label>
//                                                 <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
//                                             </div>
//                                         </div>
//                                         <div className="relative flex gap-x-3">
//                                             <div className="flex h-6 items-center">
//                                                 <input
//                                                     id="offers"
//                                                     name="offers"
//                                                     type="checkbox"
//                                                     className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                                                 />
//                                             </div>
//                                             <div className="text-sm leading-6">
//                                                 <label htmlFor="offers" className="font-medium text-gray-900">
//                                                     Offers
//                                                 </label>
//                                                 <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </fieldset>
//                                 <fieldset>
//                                     <legend className="text-sm  font-semibold leading-6 text-gray-900">Push Notifications</legend>
//                                     <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
//                                     <div className="mt-6 space-y-6">
//                                         <div className="flex items-center gap-x-3">
//                                             <input
//                                                 id="push-everything"
//                                                 name="push-notifications"
//                                                 type="radio"
//                                                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                                             />
//                                             <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
//                                                 Everything
//                                             </label>
//                                         </div>
//                                         <div className="flex items-center gap-x-3">
//                                             <input
//                                                 id="push-email"
//                                                 name="push-notifications"
//                                                 type="radio"
//                                                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                                             />
//                                             <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
//                                                 Same as email
//                                             </label>
//                                         </div>
//                                         <div className="flex items-center gap-x-3">
//                                             <input
//                                                 id="push-nothing"
//                                                 name="push-notifications"
//                                                 type="radio"
//                                                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                                             />
//                                             <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
//                                                 No push notifications
//                                             </label>
//                                         </div>
//                                     </div>
//                                 </fieldset>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mt-6 flex items-center justify-end gap-x-6">
//                         <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
//                             Cancel
//                         </button>
//                         <button
//                             type="button"
//                             onClick={hendelSubmit}
//                             className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                         >
//                             Save
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default Page

"use client"

// import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Documents from './components/Documents'
import Profileinfo from './components/Profileinfo'
import Personalinfo from './components/Personalinfo'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { createProfile } from '@/api/user'
import { useAppSelector } from '@/app/lib/hooks'


const steps = ['Stap-1', 'Stap-2', 'Stap-3'];

type FormDataType = {
  headline?: string;
  about?: string;
  bio?: string;
  profilephoto?: File;
  [key: string]: any;
};

type FormDataType = {
  [key: string]: any;
};


const Page: React.FC = () => {


  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [formData, setFormData] = useState<FormDataType>({});

// Handle checkbox changes
const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    setFormData(prevFormData => {
        const selectedValues = prevFormData[name] || []; // Get the current array of selected values or an empty array
        if (checked) {
            // Add the new value if the checkbox is checked
            return { ...prevFormData, [name]: [...selectedValues, value] };
        } else {
            // Remove the value if the checkbox is unchecked
            return { ...prevFormData, [name]: selectedValues.filter((item: string) => item !== value) };
        }
    });
};

// Handle text area changes
const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

// Handle file changes
const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
        const file = fileList[0];
        setFormData({ ...formData, [event.target.name]: file });
    }
};

// Handle select changes
const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

  
  // Example usage in the form components
  
  /* 
  <form>
    <input type="checkbox" name="morning" value="8:00 AM" onChange={handleChange} />
    <input type="text" name="firstName" onChange={handleChangetext} />
    <input type="file" name="profilePicture" onChange={handleFileChange} />
  </form>
  */
  
  console.log("FormData:", formData);
  

  
  const token = useAppSelector((state) => state.auth.accessToken);


  const hendelSubmit = async () => {
    try {
      const res = await createProfile(FormData, token);
      console.log("form data res=>", res);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }} className="px-8">
      <Stepper activeStep={activeStep} className="p-8">
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography> */}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>  Step {activeStep + 1} </Typography> */}
          <Box sx={{ mt: 2, mb: 1 }}>
            <>
              <div className=' py-4 '>
                <form >
                  <div className="space-y-12 space-x-12">
                    {(() => {
                      switch (activeStep) {
                        case 0:
                          return <Profileinfo   handleTextChange={handleTextChange}  handleCheckboxChange={handleCheckboxChange} handleSelectChange={handleSelectChange} />;
                        case 1:
                          return <Documents  handleChangetext={handleChangetext} handleFileChange={handleFileChange} />;
                        case 2:
                          return <Personalinfo handleChange={handleChange} handleChangetext={handleChangetext} handleFileChange={handleFileChange} />;
                        default:
                          return null;
                      }
                    })()}
                  </div>
                </form>
              </div>
            </>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button 
             onClick={async () => {
              if (activeStep === steps.length - 1) {
                // If on the last step, submit the form
                await hendelSubmit();
              } else {
                // Otherwise, move to the next step
                handleNext();
              }
            }}
            >
              {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default Page
