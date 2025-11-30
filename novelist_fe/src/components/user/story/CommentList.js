import { useEffect, useState } from "react"
import Comment from "./Conment"
import { getCommentByWorkId } from "../../../services/api/user/Comment"

const CommentList=({workId})=>{
    
    const [comments,setComments]=useState([])

    const [currentPage,setCurrentPage]=useState(1)

    const getComments=()=>{
        getCommentByWorkId(workId,currentPage).then(v=>{
            setComments(prev => [...prev, ...v.data]);  
        })
    }

    useEffect(getComments,[currentPage])

    return <>
        
        {comments.map(v=>{
            return <Comment workId={workId} comment={v}/>
        })}
        <button className="bg-gray-800 text-center font-semibold w-full p-2 text-sky-500 mb-5">Tải thêm bình luận</button>
    </>
}

export default CommentList