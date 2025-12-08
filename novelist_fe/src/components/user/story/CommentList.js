import { useEffect, useState } from "react"
import Comment from "./Conment"
import { getCommentByWorkId } from "../../../services/api/user/Comment"
import InputReply from "../../common/InputReply"
import LoadingRow from "../../common/LoadingRow"

const CommentList=({workId})=>{
    
    const [comments,setComments]=useState([]) 
    const [currentPage,setCurrentPage]=useState({
        currentPage:1,
        totalPage:1
    })
    const [isLoading,setIsLoading]=useState(false);
    const getComments=()=>{
        setIsLoading(true)
        getCommentByWorkId(workId,currentPage.currentPage).then(v=>{
            currentPage.totalPage=v.totalPage
            // console.log(v)
            setComments(prev => [...prev, ...v.data]);  
        }).finally(()=>{
            setIsLoading(false)
        })
    } 
    useEffect(getComments,[currentPage]) 
    const pushComment = (commentSave) => { 
        setComments((prev) => [commentSave, ...prev]);

    }; 
    return <>
        <InputReply
            pushItem={pushComment}
            workId={workId}
            setOpenReply={()=>{}}
            parentId={null}
          />
        {comments.map(v=>{
            return <Comment workId={workId} comment={v}/>
        })}
        {isLoading&&<LoadingRow quanityRow={3}/>}
        {currentPage.currentPage<currentPage.totalPage&&<button onClick={setCurrentPage.bind(null,{...currentPage,currentPage:currentPage.currentPage+1})} className="bg-gray-800 text-center font-semibold w-full p-2 text-sky-500 mb-5">Tải thêm bình luận</button>}
    </>
}

export default CommentList