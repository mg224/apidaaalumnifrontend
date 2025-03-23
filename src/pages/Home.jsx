import React from 'react'
import logo from "../assets/apidaalogo.png"
import photo from "../assets/apidaagroupphoto.png"
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex p-40 bg-white">
      <div className="flex flex-col gap-4 min-w-xl max-w-2xl">
        <img src={logo} alt="APIDAA Logo" className="w-60" />
        <h1 className="text-4xl/relaxed font-semibold">Welcome to the APIDAA Alumni Networking Platform!</h1>
        <h4 className="text-xl">Directory for connecting with APIDAA’s lovely alumni.</h4>
        <h4 className="text-xl">Search our alumni directory by name, graduation year, past APIDAA roles, or current industry!</h4>
        <div className="bg-[#53bcb8] text-white w-34 h-14 rounded-md drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer hover:bg-[#7acbc8] flex justify-center items-center">
          <Link to="/name">GET STARTED</Link>
        </div>
      </div>
      <div className="min-w-xl max-w-2xl flex justify-end">
        <img src={photo} alt="APIDAA Group Photo" className="w-80 h-120 object-cover border-black border-2" />
      </div>
    </div>
  )
}
