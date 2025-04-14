import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function Industry() {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/data?industry=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 px-30 py-40 flex justify-center">
      <div className="w-full max-w-xl space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Search Alumni by Industry</h1>

        <form onSubmit={handleSearch} className="w-full">
          <div className="relative w-full">
            <input 
              type="text"
              placeholder="Enter an industry"
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
