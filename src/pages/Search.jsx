import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AlumnusProfile from '../components/AlumnusProfile'

export default function Search() {

  const [searchQuery, setSearchQuery] = useState("")
  const [searchCategory, setSearchCategory] = useState("name")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [alumniData, setAlumniData] = useState([])

  const fetchAlumniData = async () => {

    setLoading(true)

      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/alumnus`)
        // console.log(response.data)
        setAlumniData(response.data)

      } catch (err) {
        console.error('Error fetching alumni data:', err)
        setError('Failed to load alumni data. Please try again later.')
      } finally {
        setLoading(false)
      }
  }

  useEffect(() => {
    fetchAlumniData()
  }, [])

  const filteredAlums = alumniData.filter(alum => {
    let matchSearch;

    if (searchCategory === "") {
      return true
    }
    else if (searchCategory === "name") {
      matchSearch = alum.name.toLowerCase().includes(searchQuery.toLowerCase())
    }
    else if (searchCategory === "gradyear") {
      if (searchQuery === "") {
        return true
      }
      matchSearch = alum.year == searchQuery
    }
    else if (searchCategory === "pastroles") {
      matchSearch = alum.pastRoles.toLowerCase().includes(searchQuery.toLowerCase())
    }
    else if (searchCategory === "currpursuits") {
      matchSearch = alum.industry.toLowerCase().includes(searchQuery.toLowerCase())
    }

    return matchSearch
  })

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    )
  }

  return (
      <div className="mt-36 bg-gray-50">
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Search Alumni</h1>
          <p className="text-sm text-gray-900 text-center mb-6">Search our alumni directory! Please allow a minute for the back end to spin up after periods of inactivity.</p>
          <div className="flex gap-4">
            <input 
              type="text"
              placeholder="Search alumni..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-md max-w-xl px-4 py-3 pr-12 text-gray-700 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition duration-300 ease-in-out"
            />
            <div className="relative max-w-80">
              <select 
                value={searchCategory} 
                onChange={(e) => setSearchCategory(e.target.value)}
                className="w-full pl-4 pr-10 py-4 text-gray-700 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 appearance-none"
              >
                <option value="name">Name</option>
                <option value="gradyear">Grad Year</option>
                <option value="pastroles">Past Roles</option>
                <option value="currpursuits">Current Pursuits</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                <svg className="h-4 w-4 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
    
        <div className="min-h-screen p-6">      
          {filteredAlums.length === 0 ? (
            <div className="text-center text-gray-600 text-xl">No alumni found matching your search criteria</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAlums.map(alumnus => (
                <AlumnusProfile key={alumnus.alumnusId} alumnus={alumnus} />
              ))}
            </div>
          )}
        </div>
      </div>
    )
}
