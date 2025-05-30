import { generateNanoId } from "../utils/helper.js";
import { createShortUrlWithoutUser} from "../services/short_url.service.js";
import { getShortUrl } from "../dao/short_url.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl =wrapAsync(async(req,res,next) =>{
  
    const {url}=req.body
    // console.log(url);
   const shortUrl= await createShortUrlWithoutUser(url)
   res.send(process.env.APP_URL + shortUrl)
  
})

export const redirectFromShortUrl=wrapAsync(async(req,res,next) =>{
 
        const{id}=req.params
        const url=await getShortUrl(id)
        if(!url)throw new Error("Short URL not Found")
        res.redirect(url.full_url)
   
})