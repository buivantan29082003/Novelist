import commonApi from "../../../config/api/CommonApi"

const getAllAuthors=async()=>{
    return await commonApi.get("/authors").then(v=>{
        return v.data.data
    })
}

module.exports={ getAllAuthors  }