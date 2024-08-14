import React, { useEffect, useState } from 'react'
import SearchInput from './SearchInput'
import DropDownMenu from './DropDownMenu'
import { CountryCard } from './CountryCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountriesAPI } from '../Redux/Features/countriesSlice';

export const Home = () => {
    const { value, isLoadding, Error } = useSelector((state) => state.countries)
    const { filteredCountries } = useSelector((state) => state.region)
    const { searchedCountry } = useSelector((state) => state.searchCountrybyName);
    const dispatch = useDispatch();

    // Combine filtered and searched countries
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const CountriesDisplayonPage = () => {
        if (searchedCountry && searchedCountry.length > 0) {
            return searchedCountry;
        } else if (filteredCountries && filteredCountries.length > 0) {
            return filteredCountries;
        }
        else if(searchedCountry.length <= 0) {
            return value;
        }
};


    //logic for making pagination 
    const combinedItems = CountriesDisplayonPage();
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = combinedItems.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(value.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };
  const handlePreviousPage = () => {
      if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    //api call on load
    useEffect(() => {
        dispatch(fetchCountriesAPI());
    }, [dispatch])

    if (Error) {
        return <h1 className='font-extrabold text-2xl'>{Error}</h1>
    }
    if (isLoadding) {
        return <h1 className='font-extrabold text-2xl'>LOADdingggg...............</h1>
    }

 return (
        <div className='px-4 md:px-20 sm:pt-14 pt-8 bg-backgroundColor dark:bg-darkbgColor'>
            <div className='sm:flex sm:justify-between sm:mb-14 space-y-10 sm:space-y-0 sm:space-x-6'>
                <SearchInput />
                <DropDownMenu />
            </div>
            <div className='xl:grid-cols-4 md:grid-cols-2 sm:grid sm:grid-cols-2 grid-cols-1 gap-4 mt-9 '>
   
                {Array.isArray(currentItems) && currentItems.map((list, index) => (
                    <CountryCard key={index} list={list} id={index} />
                ))}
            </div>
            <div className="flex justify-between mt-4">
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white' onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span className='text-sm dark:text-white'>Page {currentPage} of {totalPages}</span>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white' onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>



    )
}



