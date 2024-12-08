import React, { useEffect, useState } from 'react'
import { doctors } from '../../assets/data/doctors'
import DoctorCard from '../../components/Doctors/DoctorCard'
import Testimonials from '../../components/Testimonials/Testimonials'
import useFecthData from '../../hooks/useFecthData'
import { BASE_URL } from '../../config'
import Loading from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'


const Doctors = () => {
  const [query, setQuery] = useState('');
  const [debounceQuery, setDebounceQuery] = useState('');
  const handleSearch = () => {
    setQuery(query.trim());
    console.log('handle search')
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query)}
      , 700)
    return () => clearTimeout(timeout)
  },[query])
  const { data: doctors, loading, error } = useFecthData(`${BASE_URL}/doctors?query=${debounceQuery}`,
  {
    headers:
      { 'Cache-Control': 'no-cache' }
  });

  return (
    <>
      <section className=' h-auto py-10'>
        <div className='container text-center'>
          <h2 className="heading">
            Find a Doctor
          </h2>
          <div className="max-w-[570px] mt-[30px] mx-auto
          bg-[#0066ff2c] rounded-md flex items-center
          justify-between">
            <input
              type="search"
              className='py-4 pl-4 pr-2 bg-transparent w-full
              focus:outline-none cursor-pointer placeholder:text-textColor'
              placeholder='Search by name or spesicifation'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              />
              <button className='btn mt-0 rounded-[0px] rounded-r-md'
              onClick={handleSearch}>
                Search
              </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
        {loading && <Loading />}
      {error && <Error />}
          {!loading && !error && (
            <div className='grid grid-cols-1 md:grid-cols-3
              lg:grid-cols-4 gap-5 lg:gap-[10px] mt-[30px]
              lg:mt-[40px] mb-10'>
                  {doctors.map(doctor => (
                  <DoctorCard
                      key={doctor.id}
                      doctor={doctor}
                  />
                ))}
            </div>)}
        </div>
      </section>

       {/* testimonial */}
       <section>
          <div className="container">
          <div className="xl:w-[470px] mx-auto">
                  <h2 className='heading text-center'>
                    What our patients says
                  </h2>
                  <p className="text__para text-center">
                  At OurHealth Clinic, our patients' feedback matters. We take pride in delivering excellent care and ensuring our patients' satisfaction. <br /> Here are some testimonials from individuals who have experienced our services firsthand
                  </p>
                </div>
                <Testimonials />
          </div>
        </section>
    </>
  )
}

export default Doctors