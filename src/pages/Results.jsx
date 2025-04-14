import React, { useEffect, useState } from 'react'
import AlumnusProfile from '../components/AlumnusProfile'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Results() {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [alumniData, setAlumniData] = useState([])

  const fetchAlumniData = async () => {

    setLoading(true)

      try {
        const params = new URLSearchParams(location.search)
        let endpoint = 'http://localhost:8080/api/alumnus'
        
        if (params.has('name')) {
          endpoint += `?name=${params.get('name')}`
        } else if (params.has('year')) {
          endpoint += `?year=${params.get('year')}`
        } else if (params.has('pastRoles')) {
          endpoint += `?pastRoles=${params.get('pastRoles')}`
        } else if (params.has('industry')) {
          endpoint += `?industry=${params.get('industry')}`
        }
        
        const response = await axios.get(endpoint)
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-30">      
      {alumniData.length === 0 ? (
        <div className="text-center text-gray-600 text-xl">No alumni found matching your search criteria</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumniData.map(alumnus => (
            <AlumnusProfile key={alumnus.alumnusId} alumnus={alumnus} />
          ))}
        </div>
      )}
    </div>
  )
}
