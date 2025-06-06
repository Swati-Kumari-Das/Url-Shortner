
import axiosInstance from "../utils/axiosInstance"
export const registerUser=async(name,email,password)=>{
    const {data}= await axiosInstance.post("/api/auth/register",{name,email,password})
    return data;
}

export const loginUser=async(email,password)=>{
    const {data}= await axiosInstance.post("/api/auth/login",{email,password})
    return data;
}

export const logoutUser=async()=>{
   const {data} =await axiosInstance.get("/api/auth/logout")
   return data
}

export const getCurrentUser=async()=>{
    const {data} =await axiosInstance.get("/api/auth/me")
    return data;
}

export const getAllUserUrls = async () => {
    try {
      const { data } = await axiosInstance.post("/api/auth/urls")
      return data
    } catch (error) {
      console.error("Error fetching URLs:", error)
      throw error
    }
  }