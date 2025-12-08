import adminApi from "../../../config/api/adminApi";

export const getAllWork=async(filters)=>{
    return await adminApi.get("/works").then(v=>{
        return v.data.data;
    })
}
 
export const getWorkById=async(id)=>{
    return await adminApi.get("/work/"+id).then(v=>{
        return v.data.data.data;
    })
}