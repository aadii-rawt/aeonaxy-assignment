import React from 'react'
import Canledar from './Calendar'

function DatePicker() {
  return (
    <div className="border-l-2 ">
        <h1 className=" mx-5 my-3 font-semibold " >Select a Date & Time</h1>
        <Canledar/>
    </div>
  )
}

export default DatePicker