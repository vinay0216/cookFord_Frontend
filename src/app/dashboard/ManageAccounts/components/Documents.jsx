import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from 'next/image';


const Documents = ({ handleFileChange ,formData }) => {
  return (
  
    <div className="border-b border-gray-900/10 pb-12">
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      {/* Profile Photo Upload */}
      <div className="col-span-full">
        <label htmlFor="profile-upload" className="block text-sm font-medium leading-6 text-gray-900">
          Add your profile photo
        </label>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          Photos help people feel they are connecting with a real person. Add a photo to increase your chance of finding a match.
        </p>
        <div className="mt-2 flex items-center gap-x-3">
          {!formData.profilephoto ? (
            <AccountCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
          ) : (
            <div className="relative rounded bg-transparent">
              <Image
                src={URL.createObjectURL(formData.profilephoto)}
                width={100}
                height={100}
                alt="Profile"
                className="rounded"
              />
            </div>
          )}
          <label
            htmlFor="profile-upload"
            className="cursor-pointer rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            {formData.profilephoto ? 'Change' : 'Upload'}
            <input
              id="profile-upload"
              name="profilephoto"
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <p className="mt-1 text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
      </div>

      {/* Cover Photo Upload */}
      <div className="col-span-full">
        <label htmlFor="cover-file-upload" className="block text-sm font-medium leading-6 text-gray-900">
          Cover photo
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          {!formData.coverphoto ? (
            <div className="text-center">
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="cover-file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="cover-file-upload"
                    name="coverphoto"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="mt-2 text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          ) : (
            <div className="relative">
              <Image
                src={URL.createObjectURL(formData.coverphoto)}
                width={100}
                height={100}
                alt="Cover Photo"
                className="rounded"
              />
            </div>
          )}
        </div>
      </div>

      {/* Top Cuisine Upload */}
      <div className="col-span-full">
        <label htmlFor="file-upload" className="block text-sm font-medium leading-6 text-gray-900">
          Top Cuisines
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          {!formData.topCuisineUrls ? (
            <div className="text-center">
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="topCuisineUrls"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="mt-2 text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          ) : (
            <div className="relative">
              <Image
                src={URL.createObjectURL(formData.topCuisineUrls)}
                width={100}
                height={100}
                alt="Top Cuisine"
                className="rounded"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  </div>

  )
}

export default Documents