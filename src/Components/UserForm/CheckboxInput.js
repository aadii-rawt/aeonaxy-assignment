import React from 'react'

function CheckboxInput({checkbox,heading}) {
    let checkboxItem = []
    checkbox == "checkbox1" ? checkboxItem = ['🥕 Myself','👩🏽‍🤝‍👩🏻  10 people','🦄 10-50 people','🦅 50+ people'] : checkboxItem = ['🗻 Strategy','🌞 Product Management','💻 Engineering','🎣 Feedback management','❓ Something else']
  return (
    <div className="mb-5">
    <h1 className="font-semibold text-sm my-2">{heading}</h1>
    {
        checkboxItem.map((item,index) => {
            return <div key={index}>
            <input  type="checkbox" id={checkbox+index} className="my-2"/>
            <label htmlFor={checkbox+index}
            className="mx-3 text-sm"
            >{item}</label>
            </div>
        })
    }
    </div>
  )
}

export default CheckboxInput