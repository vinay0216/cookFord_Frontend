import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Documents = ({ handleChangetext, handleFileChange }) => {
  return (
    <>
      <div className="border-b border-gray-900/10 pb-12">
        {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you share.
        </p> */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
              Add your profile photo
            </label>
            <p className="mt-3 text-sm leading-6 text-gray-600">Photos help people feel they are connecting with a real person. Add a photo to increase your chance of finding a match.
            </p>
            <div className="mt-2 gap-y-3 items-center gap-x-3">
              {!FormData.profilephoto ? (
                <AccountCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
              ) : (
                <div className='rounded bg-transparent'>
                  <Image src={URL.createObjectURL(FormData.profilephoto)} width={100} height={100} alt="profile" className='bg-transparent' />
                </div>
              )}
              <label htmlFor="profile-upload" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer">
                Change
              </label>
              <input
                id="profile-upload"
                name="profilephoto"
                type="file"
                className="sr-only"
                onChange={handleFileChange} // Call handleFileChange function on file selection
              />
              <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
          <div className="col-span-full">
            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
              Cover photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              {!FormData.top_cuisine ?
                <div className="text-center">
                  {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" onChange={handleFileChange} name="top_cuisine" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
                :
                <div className=''>
                  <Image src={URL.createObjectURL(FormData.top_cuisine)} width={100} height={100} alt="coverphoto" />
                </div>
              }
            </div>
          </div>
          <div className="col-span-full">
            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
            Top Cuisines
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              {!FormData.top_cuisine ?
                <div className="text-center">
                  {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" onChange={handleFileChange} name="top_cuisine" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
                :
                <div className=''>
                  <Image src={URL.createObjectURL(FormData.top_cuisine)} width={100} height={100} alt="coverphoto" />
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Documents