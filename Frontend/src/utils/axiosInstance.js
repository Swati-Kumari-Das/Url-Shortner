
import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10000 
})


// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // Return successful responses as-is
        return response;
    },
    (error) => {
        let errorMessage = "Something went wrong";
        
        if (error.response) {
            // The server responded with a status code outside of 2xx range
            const { status, data } = error.response;
            
            switch (status) {
                case 400:
                    errorMessage = data.message || "Bad request";
                    break;
                case 401:
                    errorMessage = "Unauthorized access";
                    // You could redirect to login page here
                    break;
                case 404:
                    errorMessage = data.message || "Resource not found";
                    break;
                case 409:
                    errorMessage = data.message || "Conflict occurred";
                    break;
                case 500:
                    errorMessage = "Server error. Please try again later";
                    break;
                default:
                    errorMessage = data.message || `Error ${status}`;
            }
        } else if (error.request) {
            // The request was made but no response was received
            errorMessage = "No response from server. Please check your connection";
        } else {
            // Something happened in setting up the request
            errorMessage = error.message;
        }
        
        // You can also log errors to a monitoring service here
        console.error("API Error:", errorMessage);
        
        // Return a rejected promise with the error message
        return Promise.reject(
            // new Error(errorMessage)
            {
                message: errorMessage,
                status: error.response ? error.response.status : null,
                data: error.response ? error.response.data : null
            }
        );
    }
);

export default axiosInstance;



