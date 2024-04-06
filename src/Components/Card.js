import React from 'react'
import { useContext } from 'react'
import Logo from '../Assets/logo.png'
import { DataContext } from '../Context/DataContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

function Card() {
  const {isTimeActive,selectedDate} = useContext(DataContext)
  return (
    <div className='w-full lg:w-[50%]'>
        <img src={Logo} alt="Logo" className="w-10 md:w-28 flex mx-auto py-4" />
        <hr />
        <div className="description p-7">
            <h1 className="font-bold text-2xl">Fibery Demo</h1>
            <p className="text-wrap my-2 flex gap-1 items-center"><FontAwesomeIcon icon={faClock} />45 min</p>
            {
              selectedDate && 
              <p className="text-sm py-2">{selectedDate}</p>
            }
            <p className="text-wrap text-sm">Book a meeting with a product expert. We've helped hundreds of companies overcome product management challenges.</p>
        </div>
    </div>
  )
}

export default Card