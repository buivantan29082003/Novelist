import { Skeleton } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getChapterById } from "../../services/api/user/Chapter"

const Chapter=()=>{
    const {chapterId}=useParams()
    const [chapter,setChapter]=useState(null)

    useEffect(()=>{ 
        getChapterById(chapterId).then(v=>{
            setChapter(v)
        }).catch((error)=>{ 
        })
    },[])

    return <>
        <div className="w-full  text-left" >
            {chapter===null?<>
                <div className="md:col-span-2 gap-5 flex items-start space-x-4 bg-black/10 backdrop-blur-xl p-5 mt-4 md:mt-0">
              <div className="md:w-3/12">
                <Skeleton variant="rectangular" height={230} sx={{ bgcolor: "grey.900" }} />
                <Skeleton variant="rectangular" height={40} className="mt-2" sx={{ bgcolor: "grey.900" }} />
              </div>

              {/* RIGHT */}
              <div className="md:w-9/12 space-y-3">
                <Skeleton  variant="text" width="40%" height={24} sx={{ bgcolor: "grey.900" }}  />
                <Skeleton  variant="text" width="100%" height={24} sx={{ bgcolor: "grey.900" }}  />
                <Skeleton  variant="text" width="40%" height={24} sx={{ bgcolor: "grey.900" }}  />
                <Skeleton  variant="text" width="100%" height={24} sx={{ bgcolor: "grey.900" }}  />
                <Skeleton  variant="text" width="40%" height={24} sx={{ bgcolor: "grey.900" }}  />
                <Skeleton  variant="text" width="100%" height={24} sx={{ bgcolor: "grey.900" }}  />
                <Skeleton  variant="text" width="40%" height={24} sx={{ bgcolor: "grey.900" }}  />
                <Skeleton  variant="text" width="100%" height={24} sx={{ bgcolor: "grey.900" }}  />
              </div>
            </div>
            </>:
            // khác null 
            <>
            <div className="w-full bg-black/10 backdrop-blur-xl" style={{
          backgroundImage:  `url(${chapter!=null?chapter.work.image:""})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} >
                            <div  className="w-full gap-5 bg-black/10 backdrop-blur-xl flex items-start space-x-4 bg-black/60 backdrop-blur-xl p-5   md:mt-0">
              {/* LEFT */}
              <div className="md:w-3/12">
                <div className="rounded-md overflow-hidden">
                  <img
                    alt=""
                    src={chapter.work.image}
                    className=" h-[250px] w-[200px]"
                    style={{ objectFit: "cover" }}
                  />
                  {/* <button className="w-full flex items-center justify-center gap-3 py-2 px-6 bg-sky-500 ">
                    <span className="text-3xl font-bold">+</span>
                    <span>{chapter.work.isLike?"Hủy yêu thích":"Yêu thích"}</span>
                  </button> */}
                </div>
              </div>

              {/* RIGHT */}
              <div className="md:w-9/12">
                <p className="text-sm text-left">
                  Trang chủ / <span className="text-gray-200">{chapter.work.name}</span>
                </p>
                <h1 className="text-xl text-left font-semibold my-5">
                  {chapter.work.title}
                </h1>

                {/* <div className="flex gap-4 mb-4 text-sm md:text-md">
                  <button onClick={follows} className="bg-sky-600 hover:bg-sky-500 transition px-5 py-2 rounded-md flex items-center gap-2 ">
                    <BellRing size={18} /> {story.isFollow?"Bỏ follow":"Follow"}
                  </button>

                  <button onClick={likes} className="bg-sky-600 hover:bg-sky-500 transition px-5 py-2 rounded-md flex items-center gap-2 font-medium">
                    <Heart size={18} /> <span>{story.isLike?"Hủy yêu thích":"Thích"}</span>
                  </button>
                </div> */}

                <p className="text-sm text-left">{chapter.work.content}</p>
                <div className="mt-5 flex gap-3 border-b border-white/10 pb-2 text-sm">
                    <span className="font-medium">Tác giả:</span>
                    <span>{chapter.work.author.authorName}</span>
                </div>
              </div>
            </div>
            </div>
            <p className="text-center text-3xl font-medium mt-5">Chương {chapter.chapterIndex}: {chapter.chapterName}</p>
            <p className="mt-5 w-10/12 mx-auto tracking-wide leading-[2rem]">{chapter.content}</p>
            </>}
        </div>
    </>
}

export default Chapter