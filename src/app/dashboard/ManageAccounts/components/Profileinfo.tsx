import Image from 'next/image'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Profileinfo = ({ handleChangetext, handleFileChange }) => {
  return (
    <>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you share. 
        </p>
        <div className="col-span-full">
          <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
            Headline *
          </label>
          <p className="mt-3 text-sm leading-6 text-gray-600">State who you are & what you offering</p>
          <div className="mt-2">
            <textarea
              name="headline"
              onChange={handleChangetext}
              rows={3}
              className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={'Passionate Edmonton Chef Serving Up Delicious and Affordable Daily Menus.'}
            />
          </div>

        </div>
        <div className="col-span-full">
          <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
            Introduce your work
          </label>
          <p className="mt-3 text-sm leading-6 text-gray-600">Describe what you do and why you are the best.</p>
          <div className="mt-2">
            <textarea
              name="about"
              rows={10}

              onChange={handleChangetext}
              className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={`Are you in search of a skilled and passionate chef? Look no further! I'm Vinay, a professional chef with a flair for creating exquisite cuisines that tantalize the taste buds. With years of experience in the culinary industry, I have honed my skills to deliver top-notch dishes that cater to a variety of tastes and dietary preferences. As a chef, I prioritize using fresh, locally-sourced ingredients to ensure the highest quality and flavor in every dish. My diverse culinary background allows me to craft menus that feature a wide range of cuisines, from traditional comfort foods to gourmet delights.  Whether you're hosting an intimate gathering or a large event, I have the expertise to curate a memorable dining experience for you and your guests. My services are affordably priced at 500 daily, making it easy to elevate your dining experience without breaking the bank. If you're ready to elevate your next event with delectable dishes and impeccable service, feel free to message me to discuss how we can collaborate to create a truly unforgettable culinary experience. Let's bring your culinary vision to life!`}
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">100 character minimum</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


          <div className="col-span-full">
            <label htmlFor="Bio" className="block text-sm font-medium leading-6 text-gray-900">
              Bio
            </label>
            <div className="mt-2">
              <textarea

                name="bio"
                onChange={handleChangetext}
                rows={3}
                className="block p-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={`My services are affordably priced at 500.0 daily, making it easy to elevate your dining experience without breaking the bank. If youre ready to elevate your next event with delectable dishes and impeccable service, feel free to message me to discuss how we can collaborate to create a truly unforgettable culinary experience. Let bring your culinary vision to life!`}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profileinfo