import React from 'react'
import { useNavigate } from "react-router-dom";
import Card from '../Components/Card'
import TextInput from '../Components/UserForm/TextInput'
import CheckboxInput from '../Components/UserForm/CheckboxInput'

function Form() {
  const navigate = useNavigate();
  function HandleSubmit(e) {
    e.preventDefault();
    navigate("/schedule");
  }
  return (
    <div className='md:flex'>
      <Card />
      <div className="p-7 w-full md:max-h-[450px] md:h-[500px] md:overflow-y-scroll">
          <h1 className="font-semibold">Enter Details</h1>
          <form onSubmit={(e) => HandleSubmit(e)}>
            <TextInput label="Name *" type="text" id="username" />
            <TextInput label="Email *" type="email" id="email" />
            <br />
            <button className="text-blue-500 text-sm font-light border-[1px] px-3 py-2 rounded-3xl border-blue-500">
              Add Guests
            </button>
            <CheckboxInput
              checkbox="checkbox1"
              heading="I want Fibery to work for: *"
            />
            <CheckboxInput
              checkbox="checkbox2"
              heading="Pleasse, choose up to three options, You are more intrested in: *"
            />
            <TextInput
              label="Please, share anything that will help prepare for our meeting."
              type="text"
              id="feedback"
            />
            <TextInput
              label="Please, share with us the name of your Fibery workspace (if any)"
              type="text"
              id="feedback2"
            />
            <p className="text-xs text-wrap my-6">
              By proceeding, you confirm that you have read and agree to
              Calendly's Terms of Use and Privacy Notice.
            </p>
            <button
              type="submit"
              className="bg-blue-600 p-3 text-sm  rounded-3xl text-white font-bold"
            >
              Schedule Event
            </button>
          </form>
        </div>
    </div>
  )
}

export default Form