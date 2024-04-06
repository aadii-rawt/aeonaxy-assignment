import React from 'react'
import Card from '../Components/Card'
import DatePicker from '../Components/Calendar/DatePicker'

function Home() {
  return (
    <div className='flex flex-col items-center md:flex-row md:items-start '>
      <Card />
      <DatePicker />
    </div>
  )
}

export default Home