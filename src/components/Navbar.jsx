import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme, systemBasedThemeChange } from '../Redux/Features/themeSwitcher';



export const Navbar = () => {
  const dispatch = useDispatch();
  const isDarkThemeDark = useSelector((state) => state.toggleTheme.dark)

  //system theme detector
  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    const mqListener = (e) => {
      dispatch(systemBasedThemeChange(e.matches));
    };

    darkThemeMq.addEventListener('change', mqListener);

    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, [dispatch]);



  const darkModeHandler = () => {
    dispatch(switchTheme())
  }

  //toggle theme on the basis of i s dark true
  useEffect(() => {
    if (isDarkThemeDark) {
      document.body.classList.add('dark');
    }
    else {
      document.body.classList.remove('dark');
    }
  }, [isDarkThemeDark])

  //const getTheme = localStorage.theme 

  return (
    <div className=' dark:bg-gray-700 dark:border-gray-600 shadow-sm flex justify-between sm:px-20 px-4 py-6 '>
      <h1 className='font-bold md:text-2xl dark:text-white'>Where in the world?</h1>
      <div className='flex space-x-4 items-center'>
        <img src='/assets/icon-moon.svg' alt='mood image' style={{ height: 17, width: 17 }} />
        <p className='font-medium dark:text-white' onClick={() => darkModeHandler()}>{isDarkThemeDark ? 'Light Theme' : 'Dark Mode'}</p>
      </div>
    </div>
  )
}
