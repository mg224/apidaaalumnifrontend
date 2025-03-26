import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Name() {

  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {

  }

  return (
    <div className="min-h-screen bg-gray-50 px-30 py-40 flex justify-center">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Search Alumni by Name</h1>

        {/* <form onSubmit={handleSearch} className="flex flex-col gap-6 justify-center items-center">
          <div className="flex">
            <input 
              type="text"
              placeholder="Enter alumni name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-70 px-4 py-3 text-gray-700 border border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition duration-300 ease-in-out"
            />
            <button 
              type="submit"
              className="px-5 py-3 rounded-4xl bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300 ease-in-out flex items-center justify-center relative right-14"
            >
              <FontAwesomeIcon 
                icon={faSearch} 
                color="white" 
              />
            </button>
          </div>
        </form> */}

        <form onSubmit={handleSearch} className="w-full">
          <div className="relative w-full">
            <input 
              type="text"
              placeholder="Enter alumni name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pr-12 text-gray-700 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition duration-300 ease-in-out"
            />
            <button 
              type="submit"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 px-4 py-3 rounded-full bg-[#53bcb8] text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300 ease-in-out flex items-center justify-center"
            >
              <FontAwesomeIcon 
                icon={faSearch} 
                color="white" 
              />
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}
