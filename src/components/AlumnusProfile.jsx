import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function AlumnusProfile({ alumnus }) {

  console.log(alumnus)

  const getImageUrl = (headshot) => {
    if (!headshot) {
      return `${import.meta.env.VITE_API_URL}/headshots/fallbackheadshot.png`
    } else {
      return `${import.meta.env.VITE_API_URL}/headshots/${headshot}`
    }
  }

  useEffect(() => {
    getImageUrl(alumnus.headshot)
  })

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="p-4 flex flex-col h-full">
        <div className="flex flex-col items-center">
          <div className="w-50 h-50 mb-4">
            <img 
              src={getImageUrl(alumnus.headshot)}
              alt={alumnus.name}
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                e.target.src = `${import.meta.env.VITE_API_URL}/headshots/fallbackheadshot.png`;
              }}
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">{alumnus.name}</h2>
          <p className="text-sm text-gray-500 mb-1">{alumnus.pronouns}</p>
          <p className="text-md text-gray-700 mb-2">Class of {alumnus.year}</p>
          <p className="text-md text-gray-700 mb-2">{alumnus.email}</p>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col">
          <p className="text-gray-700"><span className="font-medium">Current Pursuits:</span> {alumnus.industry}</p>
          <p className="text-gray-700 mt-2"><span className="font-medium">Past Roles:</span> {alumnus.pastRoles}</p>
        </div>

        <div className="flex-grow"></div>

        <div className="mt-4">
            <a 
              href={`mailto:${alumnus.email}`}
              className="block w-full text-center py-2 px-4 bg-[#53bcb8] text-white rounded-md hover:bg-teal-600 transition duration-300"
            >
              Contact
            </a>
          </div>
      </div>
    </div>
  )
}
