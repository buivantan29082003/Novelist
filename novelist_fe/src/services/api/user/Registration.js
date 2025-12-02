import userApi from "../../../config/api/userApi"

export const getPaymentMethod=async ()=>{
    return await userApi("/payments").then(v=>{
        return v.data.data
    })
}

export const getPaymentUrl=async (paymentType, planId)=>{
    return await userApi.get(`/registration/register/${paymentType}/${planId}`).then(v=>{
        return v.data.data
    })
}