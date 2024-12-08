import React from 'react'
import DoctorCard from './DoctorCard'
import useFecthData from '../../hooks/useFecthData'
import Loading from '../Loader/Loading'
import Error from '../Error/Error'
import { BASE_URL } from '../../config'

const DoctorList = () => {
  const { data: doctors, loading, error } = useFecthData(`${BASE_URL}/doctors`,
    {
      headers:
        { 'Cache-Control': 'no-cache' }
    });
  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <div className='w-full flex flex-row flex-wrap justify-start space-x-10'>
          {doctors.map(doctor => (
            <DoctorCard
              key={doctor._id}
              doctor={doctor}
            />
          ))}
        </div>
      )}

    </>
  )
}

export default DoctorList