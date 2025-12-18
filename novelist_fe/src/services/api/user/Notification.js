import userApi from "../../../config/api/userApi"

export const getNotificationIsNotReaded=async()=>{
    return await userApi.get("/notification/count").then(v=>{
        return v.data.data
    })
}

export const getNotification=(currentPage, isReaded)=>{ 
    return userApi.get("notifications?currentPage?="+currentPage+`&${isReaded===0?"isReaded="+0:""}`).then(v=>{
        return v.data.data
    })
}