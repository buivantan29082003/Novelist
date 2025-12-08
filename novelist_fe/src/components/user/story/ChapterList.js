import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { getChapterByWork } from "../../../services/api/user/Chapter";
import { formatDate } from "../../../services/api/common/FormatDate";
import ChipPackage from "../../common/ChipPackage";
import { useNavigate } from "react-router-dom";
import LoadingRow from "../../common/LoadingRow";

const ChapterList = ({workId}) => {
  const [chapters, setChapters] = useState({
    data:[],
    totalPage:1,
    currentPage:1
  });
  const [isLoading,setIsLoading]=useState(false)
  const navogate=useNavigate()

  const getChapter=()=>{
    setIsLoading(true)
    getChapterByWork(workId,filters.query.trim().length===0?null:filters.query,filters.currentPage).then(v=>{
        setChapters(v);
    }).finally(()=>{
      setIsLoading(false)
    })
  }
  

  const [filters,setFilters]=useState({
    currentPage:1,
    query:""
  });

  useEffect(()=>{
    getChapter()
  },[])

  return (
    <>
      <div className="flex flex-wrap items-center mt-5 gap-3">
        <Pagination
          onChange={(evennt, value) => {
            filters.currentPage=value;
            getChapter()
          }}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white", // màu chữ
            },
            "& .Mui-selected": {
              backgroundColor: "skyblue", // màu nền khi active
              color: "white", // màu chữ active
            },
          }}
          count={chapters.totalPage}
          variant="outlined"
          color="primary"
        />
        <input value={filters.query} onChange={e=>setFilters({...filters,query:e.target.value})} placeholder="enter your keywork" className="border border-gray-800 outline-none py-1 px-2 rounded-sm bg-transparent"/>
    <button onClick={getChapter}  className="py-1 px-3 rounded-sm bg-violet-500 text-white font-semibold hover:bg-violet-700">Search</button>
    
        
      </div>
      {isLoading&&<LoadingRow quanityRow={8}/>}
      {chapters.data.map((v) => {
        return (
          <>
            <div onClick={()=>navogate("/user/chapter/"+v.id)} className="my-3 cursor-pointer flex items-start justify-between py-3 border-b border-gray-700">
              <div className="text-sm">
                <p className="text-sky-500 text-left">
                  Chương {v.chapterIndex} &nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  <span className="text-gray-500">
                    {formatDate(v.updatedDate)}
                  </span>{" "}
                </p>
                <p className="text-left mt-2">{v.chapterName}</p>
              </div>
              <div>
                <p>
                  <ChipPackage packageId={v.plan != null ? v.plan.id : 0} />
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ChapterList;


// {/* <div className="flex items-center gap-3 flex-1 max-w-md">
//           <div className="relative w-full">
//             <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-70">
//               {/* Search Icon */}
//               <SearchIcon className="w-5 h-5 text-white/70 cursor-pointer " />
//             </span>

//             <input
//               type="text"
//               value={filters.query}
//               onChange={(e) => {
//                 setFilters({ ...filters, query: e.target.value });
//               }}
//               placeholder="Tìm kiếm truyện, tác giả..."
//               className="w-full bg-white/5   text-white placeholder-white text-md pl-11 pr-1 py-2 rounded-full outline-none border border-white/10 focus:border-white/20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
//             />
//           </div>
//         </div> */}