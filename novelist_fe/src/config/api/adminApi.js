import axios from "axios";

const adminApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/admin",  
  timeout: 10000,                        
  headers: {
    "Content-Type": "application/json", 
  },
});

export default adminApi;
