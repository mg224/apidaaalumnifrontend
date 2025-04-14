import React from 'react'
import logo from "../assets/apidaalogo.png"
import photo from "../assets/apidaagroupphoto.png"
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-30 bg-white mt-4">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
        <div className="flex flex-col items-center md:items-start space-y-6 w-full md:w-1/2 text-center md:text-left ">
          <img 
            src={logo} 
            alt="APIDAA Logo" 
            className="w-48 md:w-60 lg:w-72 mb-4" 
          />

          <div className="space-y-4 max-w-xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">Welcome to the APIDAA Alumni Networking Platform!</h1>

            <div className="space-y-2 text-base md:text-lg text-gray-700">
              <p>Directory for connecting with APIDAA’s lovely alumni.</p>
              <p>Search our alumni directory by graduation year, past APIDAA roles, current industry, or name!</p>
            </div>

            <div className="pt-4">
              <Link 
                to="/search"
                className="inline-block px-6 py-3 bg-[#53bcb8] text-white rounded-md shadow-md hover:bg-[#7acbc8] transition duration-300 transform hover:scale-105 text-center"
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img 
            src={photo} 
            alt="APIDAA Group Photo" 
            className="min-w-80 md:w-90 h-120 object-cover border-black border-2"
          />
        </div>

      </div>
    </div>
  )
}
