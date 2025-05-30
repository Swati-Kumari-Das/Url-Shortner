import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../models/short_url.model.js"
import { saveShortUrl } from "../dao/short_url.js";
 
export const createShortUrlWithoutUser=async (url)=>{
 
    const shortUrl= await generateNanoId(7);
    if(!shortUrl) throw new Error("Short URL not generated")
     await saveShortUrl(shortUrl,url)
    // await saveShortUrl("UQaOhcp",url)

    return shortUrl

   
}
export const createShortUrlWithUser=async (url,userId)=>{
    const shortUrl= await generateNanoId(7);
   await saveShortUrl(shortUrl,url,userId)
    return shortUrl
   
}
