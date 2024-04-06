import {Outlet} from 'react-router-dom'
import React from 'react'

function Layout() {
  return (
    <div className="w-full md:h-screen bg-slate-500 flex justify-center items-center">
      <div className="w-full md:w-[800px] bg-white rounded overflow-hidden">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout