import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react'
import { createShortUrl } from '../api/shortUrl.api'

import { useQueryClient } from '@tanstack/react-query';
function UrlForm() {
  
  const queryClient = useQueryClient();
  const [url, setUrl] = useState("http://www.google.com")
  const [shortUrl,setShortUrl]=useState("")
  const [copied,setCopied]=useState(false)
  const [error,setError]=useState("")
  const [customSlug,setCustomSlug]=useState()
  const {isAuthenticated} = useSelector((state)=>state.auth);
 

  const handleSubmit = async()=>{
        
       try{
        const shortUrl=await createShortUrl(url,customSlug);
        setShortUrl(shortUrl);
        // console.log(data);
        // QueryClient.invalidateQueries({queryKey:['userUrls']})
        queryClient.invalidateQueries({queryKey:['userUrls']})
        setError(null)
       }catch(err){
        
        setError(err.message);
       }
       
  }

 
  const handleCopy=()=>{
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    //reset the copied state after 2 seconds 
    setTimeout(()=>{
        setCopied(false);
    },2000);
  }
  return (
    <div className="space-y-4">
    <div>
      <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
        Enter your long URL
      </label>
      <input
        type="url"
        id="url"
        value={url} //two way binding 
        onInput={(event)=>setUrl(event.target.value)}
       
        placeholder="https://example.com/very/long/url"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    
    <button  onClick={ handleSubmit}
      type="submit"
     
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
    >
    Shorten URL
    </button>
      {/* {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )} */}
        {isAuthenticated &&(
           <div className='mt-4'>
            <label htmlFor="customSlug" className='block text-sm font-medium text-gray-700 mb-1'>
             Custom URL (optional)
            </label>
            <input 
            type="text"
            id="customSlug"
            value={customSlug}
            onChange={(event)=>setCustomSlug(event.target.value)}
            placeholder="Enter custom slug"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
           </div>
        )} 

        {shortUrl && (
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Your shortened URL:</h2>
            <div className="flex items-center">
              <input
                type="text"
                readOnly
                value={shortUrl}
                className="flex-1 p-2 border border-gray-300 rounded-l-md bg-gray-50"
              />
              <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-r-md transition-colors duration-200 ${
                copied 
                  ? "bg-green-500 text-white hover:bg-green-600" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            </div>
          </div>
        )}
  </div>
  )
}

export default UrlForm
