import axiosInstance from "../utils/axiosInstance"


export const createShortUrl=async (url,slug)=>{

    const requestData = slug ? { url, slug } : { url };
    // const {data}= await axiosInstance.post("/api/create",{url})
    const { data } = await axiosInstance.post("/api/create", requestData);
     return data.shortUrl;
}