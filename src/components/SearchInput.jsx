import React from 'react'
import { useDispatch } from 'react-redux';
import { searchByName } from '../Redux/Features/countriesSlice';

const SearchInput = () => {
  //const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();


  const handleChangeevent = (e) => {
    const value = e.target.value.trim()
    dispatch(searchByName(value))
  }

  return (

    <form className="">
      <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-12 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="search" id="default-search" className="sm:w-[150%] md:w-[160%] lg:w-[230%] w-[100%] block p-5 ps-20 text-xs text-gray-900 border border-slate-100 rounded-lg bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required onChange={handleChangeevent} />

      </div>
    </form>

  )
}

export default SearchInput