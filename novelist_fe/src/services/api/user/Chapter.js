import userApi from "../../../config/api/userApi"

export const getChapterByWork=async(id, query, currentPage)=>{
    return await userApi.get(`/chapter/${id}?currentPage=${currentPage}&${query!=null?"query="+query:""}`).then(v=>{
        return v.data.data
    })
}

export const getChapterById=async (id)=>{
    return await userApi.get("chapter/detail/"+id).then(v=>{
        return v.data.data
    })
}