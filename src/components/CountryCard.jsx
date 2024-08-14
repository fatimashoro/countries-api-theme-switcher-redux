import React from 'react'
import { useDispatch } from 'react-redux'
import { selctedCountryData } from '../Redux/Features/selectedCountry';
import { NavLink } from 'react-router-dom';

export const CountryCard = ({ list }) => {

  const dispatch = useDispatch();
  
  const handleClick = (payload) => {
    dispatch(selctedCountryData(payload))
  }

  return (
    <>
      <NavLink to="/details" className='flex justify-center mb-8 md:mb-12'>
        <div className=' sm:w-[88%] w-[67%] rounded-lg shadow-lg bg-white cursor-pointer dark:bg-buttonbgColor dark:text-white' onClick={() => handleClick(list)}>
       <div className='w-[100%] h-[50%] object-contain'>
       <img className='rounded-lg w-full h-full' src={list.flags.png} alt='flag image' />
       </div>
         <div className='pl-8 pt-8 pb-8 md:pl-2 lg:pl-8'>
            <h1 className='font-bold text-lg mb-3' >{list.name.common}</h1>
            <div><span className='font-medium text-sm'>Population:</span> <span>{list.population}</span></div>
            <div><span className='font-medium text-sm'>Region:</span> <span>{list.region}</span></div>
            <div><span className='font-medium text-sm'>Capital:</span> <span>{list.capital}</span></div>
          </div>
        </div>
      </NavLink>
    </>

  )
}


