import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

const DetailofSelectCountry = () => {
  const details = useSelector((state) => state.selectedCountry.value)
  const navigate = useNavigate();

  return (
    <div className='sm:py-16 sm:px-14 pl-14  py-10 dark:bg-darkbgColor'>
      <button className='border text-black dark:text-white py-2 text-xl font-light dark:bg-gray-700 dark:border-gray-600 px-12 rounded items-center' onClick={() => navigate('/')}> Back</button>
      <div className='outer md:flex pt-16 '>
        <img className='sm:w-[70%] md:w-[35%] w-[90%]  pb-10 rounded-lg ' src={details.flag} alt='image of flag' />
        <div className='inner md:pl-16 lg:pl-40 pl-0 flex flex-col justify-center'>
          <h1 className='font-bold md:text-2xl text-xl pb-6 dark:text-white'>{details.name}</h1>
          <div className='md:flex dark:text-white'>
            <div className='firstDiv space-y-2 mb-10 '>
              <div>
                <span className='font-semibold'>Native Name:</span> <span>{details.nativeName}</span>
              </div>
              <div>
                <span className='font-semibold'>Population:</span> <span>{details.population}</span>
              </div>
              <div>
                <span className='font-semibold'>Region:</span> <span>{details.region}</span>
              </div>
              <div>
                <span className='font-semibold'>Sub Region:</span> <span>{details.subregion}</span>
              </div>
              <div>
                <span className='font-semibold'>Capital:</span> <span>{details.capital}</span>
              </div>
            </div>

            <div className='seconddiv space-y-2 md:pl-14 lg:pl-36 ml-0'>
              <div>
                <span className='font-semibold'>Top Level Domain:</span> <span>{details.topLevelDomain}</span>
              </div>
              <div>
                <span className='font-semibold'>Currencies:</span> <span>{details.currencies && details.currencies[0].code}</span>
              </div>
              <div>
                <span className='font-semibold'>Languages:</span> <span>{details.languages && details.languages.map((lang, index) => {
                  return <>
                    <span key={index} className='mr-2'>{lang.name}{index < details.languages.length - 1 && ','}</span>
                  </>
                })}</span>
              </div>
            </div>
          </div>
          {/* <div className='3rdDiv'>
            <h1>Border Countries</h1>
            <div>
              <p>Franch</p>
              <p>Franch</p>
              <p>Franch</p>
            </div>
          </div> */}

        </div>
      </div>

    </div>
  )
}

export default DetailofSelectCountry