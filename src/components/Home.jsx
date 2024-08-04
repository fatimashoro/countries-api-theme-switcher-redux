import React, { useEffect } from 'react'
import SearchInput from './SearchInput'
import DropDownMenu from './DropDownMenu'
import { CountryCard } from './CountryCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAPIData } from '../Redux/Features/countriesSlice';

export const Home = () => {
    const allCountries = useSelector((state) => state.countries.value)
    const dispatch = useDispatch();

    //result on the basis of searcched country
    // const filterCountryShow = searchText ? allCountries.filter((filterItem)=>(
    //     filterItem.name.toLowerCase().startsWith(searchText.toLowerCase())
    // )) : allCountries

    useEffect(() => {
        dispatch(getAPIData());
    }, [dispatch])


    return (
        <div className='px-4 md:px-20 sm:pt-14 pt-8 bg-backgroundColor dark:bg-darkbgColor'>
            <div className='sm:flex sm:justify-between sm:mb-14 space-y-10 sm:space-y-0 sm:space-x-6'>
                <SearchInput />
                <DropDownMenu />
            </div>
            <div className=' md:grid-cols-4 sm:grid sm:grid-cols-2 grid-cols-1 gap-4 mt-9 '>
                {
                    allCountries && allCountries.slice(0, 8).map((list, index) => (
                        <CountryCard key={index} list={list} id={index} />
                    ))
                }

            </div>

        </div>
    )
}
