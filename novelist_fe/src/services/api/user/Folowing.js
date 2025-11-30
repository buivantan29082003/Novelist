import userApi from "../../../config/api/userApi"

export const follow=async (workId)=>{
    return await userApi.post("/following/follow/"+workId);
}

export const unFollow=async(workId)=>{
    return await userApi.post("/following/unfollow/"+workId);
}