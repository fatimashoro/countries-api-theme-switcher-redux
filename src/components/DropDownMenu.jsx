import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchByRegion } from '../Redux/Features/countriesSlice'



const DropDownMenu = () => {
  const dispatch = useDispatch();
  const [region, setRegion] = useState('');

  const countries = useSelector((state) => state.countries.value);

  //result on the basis of searcched country
  // const filteredRegion = countries.filter((country) =>
  //   country.region.toLowerCase().includes(region.toLocaleLowerCase())
  // );
  const handleDropDownSelection = (e) => {
    const value = e.target.value
    setRegion(value)
    dispatch(searchByRegion(value))
  }


  return (
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
  )
}

export default DropDownMenu

