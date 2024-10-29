"use client"
import React, { useEffect, useState } from 'react'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CookPrefrence } from '@/api/utills'

interface ProfileInfoProps {
  handleTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}


const Profileinfo: React.FC<ProfileInfoProps> = ({ handleTextChange, handleCheckboxChange, handleSelectChange }) => {
  const [prefrence, SetPrefrence] = useState([])
  const [timePreferences, cuisinePreferences, languagePreferences] = prefrence;
  let FoodType = [{ "id": 1, "name": "vag" }, { "id": 2, "name": "NON vag" }]

  useEffect(() => {
    async function getPrefrence() {
      try {
        const res = await CookPrefrence()
        const data = res.data;
        SetPrefrence(data)
      } catch (error) {
        console.error("Error:", error);
      }
    }
    getPrefrence()
  }, [])

  return (
    <>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-2xl  font-semibold leading-7 text-gray-900 flex justify-center">Profile Details</h2>
        <div className="col-span-full">
          <label htmlFor="Headline" className="block text-sm font-medium leading-6 text-gray-900">
            Headline *
          </label>
          {/* <p className="mt-3 text-sm leading-6 text-gray-600">State who you are & what you offering</p> */}
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>
          <div className="mt-2">
            <textarea
              name="headline"
              onChange={handleTextChange}
              rows={3}
              className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={'Passionate Edmonton Chef Serving Up Delicious and Affordable Daily Menus.'}
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label htmlFor="Bio" className="block text-sm font-medium leading-6 text-gray-900">
              Bio
            </label>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            <div className="mt-2">
              <textarea
                name="bio"
                onChange={handleTextChange}
                rows={3}
                className="block p-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={`My services are affordably priced at 500.0 daily, making it easy to elevate your dining experience without breaking the bank. If youre ready to elevate your next event with delectable dishes and impeccable service, feel free to message me to discuss how we can collaborate to create a truly unforgettable culinary experience. Let bring your culinary vision to life!`}
              />
            </div>
          </div>
        </div>
        <div className="col-span-full mt-4">
          <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
            Introduce your work
          </label>
          <p className="mt-3 text-sm leading-6 text-gray-600">Describe what you do and why you are the best.</p>
          <div className="mt-2">
            <textarea
              name="about"
              rows={10}
              onChange={handleTextChange}
              className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={`Are you in search of a skilled and passionate chef? Look no further! I'm Vinay, a professional chef with a flair for creating exquisite cuisines that tantalize the taste buds. With years of experience in the culinary industry, I have honed my skills to deliver top-notch dishes that cater to a variety of tastes and dietary preferences. As a chef, I prioritize using fresh, locally-sourced ingredients to ensure the highest quality and flavor in every dish. My diverse culinary background allows me to craft menus that feature a wide range of cuisines, from traditional comfort foods to gourmet delights.  Whether you're hosting an intimate gathering or a large event, I have the expertise to curate a memorable dining experience for you and your guests. My services are affordably priced at 500 daily, making it easy to elevate your dining experience without breaking the bank. If you're ready to elevate your next event with delectable dishes and impeccable service, feel free to message me to discuss how we can collaborate to create a truly unforgettable culinary experience. Let's bring your culinary vision to life!`}
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">100 character minimum</p>
        </div>
        <div className="mt-4">
          <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
            Preferred Time Zones
          </label>
          <div className="sm:col-span-2 flex p-2 ">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              Morning :
            </label>
            {timePreferences?.morning?.map((item, index) => {
              return (
                <div key={index} className='flex gap-3'>
                  <div className="mt-1">
                    <input
                      type="checkbox"
                      name="morning"
                      onChange={handleCheckboxChange}
                      id={`morning-${index}`}
                      value={item.time}
                      className="form-checkbox h-4 w-4 text-indigo-600"
                    />
                  </div>
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    {item.time}
                  </label>
                </div>
              )
            })}
          </div>

          <div className="sm:col-span-2 flex p-2 ml-2">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
              After-Noon:
            </label>
            {timePreferences?.afternoon?.map((item, index) => {
              return (
                <div key={index} className="flex gap-1 ml-3">
                  <div className="mt-1">
                    <input
                      type="checkbox"
                      name="afternoon"  // Corrected to "afternoon" to match key in formData
                      onChange={handleCheckboxChange}
                      id={`afternoon-${index}`}
                      value={item.time}
                      className="form-checkbox h-4 w-4 text-indigo-600"
                    />
                  </div>
                  <label htmlFor={`afternoon-${index}`} className="block text-sm font-medium leading-6 text-gray-900">
                    {item.time}
                  </label>
                </div>
              );
            })}
          </div>


          <div className="sm:col-span-2 flex p-2 ml-2">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              Evening :
            </label>
            {timePreferences?.evening?.map((item, index) => {
              return (
                <div key={index} className='flex gap-1 ml-3'>
                  <div className="mt-1">
                    <input
                      type="checkbox"
                      name="evening"
                      onChange={handleCheckboxChange}
                      id={`evening-${index}`}
                      value={item.time}
                      className="form-checkbox h-4 w-4 text-indigo-600"
                    />
                  </div>
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900 ">
                    {item.time}
                  </label>
                </div>
              )
            })}
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
            Preferred Cusion
          </label>
          <div className="sm:col-span-2 flex p-2 ml-2 flex-wrap">

            {cuisinePreferences?.cuisine?.map((item, index) => {
              return (
                <div key={index} className='flex gap-1 ml-3 '>
                  <div className="mt-1">
                    <input
                      type="checkbox"
                      name="cuisine"
                      onChange={handleCheckboxChange}
                      id={`morning-${index}`}
                      value={item.cuisinetype}
                      className="form-checkbox h-4 w-4 text-indigo-600"
                    />
                  </div>
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    {item.cuisinetype}
                  </label>
                </div>
              )
            })}
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
            Preferred Language
          </label>
          <div className="sm:col-span-2 flex p-2 ml-2 flex-wrap">

            {languagePreferences?.language?.map((item, index) => {
              return (
                <div key={index} className='flex gap-1 ml-3'>
                  <div className="mt-1">
                    <input
                      type="checkbox"
                      name="language"
                      onChange={handleCheckboxChange}
                      id={`morning-${index}`}
                      value={item.langtype}
                      className="form-checkbox h-4 w-4 text-indigo-600"
                    />
                  </div>
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    {item.langtype}
                  </label>
                </div>

              )
            })}
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="first-name" className="block text-xl font-medium leading-6 text-gray-900">
            Food Type
          </label>
          <div className="sm:col-span-2 flex p-2 ">

            {FoodType?.map((item, index) => {
              return (
                <div key={index} className='flex gap-1 ml-3'>
                  <div className="mt-1">
                    <input
                      type="checkbox"
                      name="food_Type"
                      onChange={handleCheckboxChange}
                      // id={index+1}}
                      value={item.name}
                      className="form-checkbox h-4 w-4 text-indigo-600"
                    />
                  </div>
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    {item.name}
                  </label>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  onChange={handleSelectChange} // Apply the handler here
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="germany">Germany</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="cuisine" className="block text-sm font-medium leading-6 text-gray-900">
                Religion
              </label>
              <div className="mt-2">
                <select
                  name="religion"
                  onChange={handleSelectChange} // Apply the handler here
                  autoComplete="religion-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Jain">Jain</option>
                  <option value="Sikh">Sikh</option>
                  <option value="Christian">Christian</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="cuisine_type" className="block text-sm font-medium leading-6 text-gray-900">
                Specialities
              </label>
              <div className="mt-2">
                <select
                  id="cuisine_type"  // Added an ID for accessibility and consistency
                  name="cuisine_type"
                  onChange={handleSelectChange} // Apply the handler to store the selected value
                  autoComplete="cuisine_type"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="Indian">Indian</option>
                  <option value="Chinese">Chinese</option> {/* Corrected the spelling */}
                  <option value="Mexican">Mexican</option> {/* Corrected the spelling */}
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">
                Age
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="age"
                  onChange={handleTextChange}
                  id="age"
                  autoComplete="age"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="sm:col-span-2">
              <label htmlFor="fulltimeprice" className="block text-sm font-medium leading-6 text-gray-900">
                fulltimeprice
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fulltimeprice"
                  onChange={handleTextChange}
                  id="fulltimeprice"
                  autoComplete="fulltimeprice"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="parttimeprice" className="block text-sm font-medium leading-6 text-gray-900">
                parttimeprice
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="parttimeprice"
                  onChange={handleTextChange}
                  id="parttimeprice"
                  autoComplete="parttimeprice"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2 sm:col-start-1 ">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                no_of_visit
              </label>
              <div className="mt-2">
                <select
                  id="no_of_visit"
                  name="no_of_visit"
                  onChange={handleSelectChange}
                  autoComplete="no_of_visit"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={"Morning"} >Morning </option>
                  <option value={"Morning and After Noon"} > Morning and After Noon </option>
                  <option value={"Morning and after Noon Evening"} >Morning and after Noon Evening</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="from" className="block text-sm font-medium leading-6 text-gray-900">
                from
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="from"
                  onChange={handleTextChange}
                  id="from"
                  autoComplete="from"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="experience" className="block text-sm font-medium leading-6 text-gray-900">
                Experince
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="experience"
                  onChange={handleTextChange}
                  id="experience"
                  autoComplete="experience"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profileinfo