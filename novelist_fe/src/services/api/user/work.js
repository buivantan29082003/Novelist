import userApi from "../../../config/api/userApi"

const getAllWork=async(filters)=>{
    return await userApi.get("/works").then(v=>{
        return v.data.data.data;
    })
}

module.exports={
    getAllWork
}