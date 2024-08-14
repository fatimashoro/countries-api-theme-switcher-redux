import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
//import { searchByRegion } from '../Redux/Features/countriesSlice'
import { fetchCountriesAPIbyRegion } from '../Redux/Features/regionSlice'



const DropDownMenu = () => {
  const dispatch = useDispatch();
  const [region, setRegion] = useState('');

  
  const handleDropDownSelection = (e) => {
    const value = e.target.value
    setRegion(value)
    dispatch(fetchCountriesAPIbyRegion(value))
  }

  return (
    <>
      <div>
        <select className='border md:px-12 px-11 sm:px-4 md:px-3 py-4 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white' onChange={handleDropDownSelection} value={region}>
          <option value="fruit">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

    </>
  )
}

export default DropDownMenu
