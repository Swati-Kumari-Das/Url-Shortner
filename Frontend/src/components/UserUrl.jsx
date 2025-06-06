import React, { useState,useMemo } from 'react'

import { useQuery } from '@tanstack/react-query'
import { getAllUserUrls } from '../api/user.api'


const UserUrl = () => {
  const { data: urls, isLoading, isError, error } = useQuery({
    queryKey: ['userUrls'],
    queryFn: getAllUserUrls,
    refetchInterval: 30000, // Refetch every 30 seconds to update click counts
    staleTime: 5000, // Consider data stale immediately so it refetches when invalidated
    refetchOnWindowFocus: false, // Prevent refetching when window gets focus 
})

  const [copiedId, setCopiedId] = useState(null)
 

  // Create a stable copy of the reversed URLs
  const reversedUrls = useMemo(() => {
    return urls?.urls ? [...urls.urls].reverse() : []
  }, [urls])

  const handleCopy = (url, id) => {
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopiedId(null)
    }, 2000)
  }

  if (isLoading) {
    return (
      <div className="text-center p-4">
        <p className="text-gray-600">Loading your URLs...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
        <p className="text-red-600">{error?.message || "Failed to load URLs"}</p>
      </div>
    )
  }

  if (!urls?.urls || urls.urls.length === 0) {
    return (
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <p className="text-gray-600">You haven't created any shortened URLs yet.</p>
        </div>
      )
  }

  return (
    <div className="mt-6 overflow-x-auto h-56">
      <div className="grid grid-cols-4 gap-4 px-4 py-2 bg-gray-50 rounded-t-md text-xs font-medium text-gray-500 uppercase">
        <div>Original URL</div>
        <div>Short URL</div>
        <div>Clicks</div>
        <div>Actions</div>
      </div>
      
      {reversedUrls.map((url) => (
        <div 
          key={url._id} 
          className="grid grid-cols-4 gap-4 px-4 py-3 border-t border-gray-100 items-center"
        >
          <div className="text-sm text-gray-700 truncate">
            {url.full_url}
          </div>
          <div className="text-sm text-blue-600">
            <a 
              href={`http://localhost:3000/${url.short_url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              localhost:3000/{url.short_url}
            </a>
          </div>
          <div className="text-sm text-gray-700">
            {url.clicks} {url.clicks === 1 ? 'click' : 'clicks'}
          </div>
          <div>
         
          <button
  onClick={() => handleCopy(`http://localhost:3000/${url.short_url}`, url._id)}
  className={`inline-flex items-center px-3 py-1 cursor-pointer ${
    copiedId === url._id 
      ? "bg-green-500 hover:bg-green-600" 
      : "bg-blue-600 hover:bg-blue-700"
  } text-white text-xs font-medium rounded-md`}
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
  {copiedId === url._id ? 'Copied!' : 'Copy URL'}
</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserUrl