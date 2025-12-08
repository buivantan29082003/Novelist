import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalGenres from "../user/ModalGenres";
import { getAllAuthors } from "../../services/api/common/Author";
import { getAllStatus } from "../../services/api/common/Status";
import { getAllGenre } from "../../services/api/common/genre";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "linear-gradient(135deg,#1a1a2e,#16213e)",
  boxShadow: 24,
  p: 4,
  maxWidth: 800,
  maxHeight: "80vh",
  overflowY: "auto",
  borderRadius: "8px",
};
export default function AddWorkForm({ visibleElement }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [work,setWork]=React.useState({
    name:"",
    title:"",
    statusId:null,
    authorId:null,
    discription:"",
    genres:new Map()
  })
  const [tempInfo,setTempInfo]=React.useState({
    authors:[],
    statusWorks:[],
    genres:[]
  })

  React.useEffect(() => {
  Promise.all([getAllAuthors(), getAllStatus(),getAllGenre()])
    .then(([authors, statusWorks,genres]) => {
      setTempInfo({
        authors,
        statusWorks,
        genres
      });
    });
}, []);

 

  return (
    <div>
      <div onClick={handleOpen}>{visibleElement}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="rounded-md text-white text-sm text-sm  w-10/12 md:w-5/12
        overflow-auto
        [&::-webkit-scrollbar]:w-1    <!-- Làm scrollbar nhỏ (width 4px, thay đổi số tùy ý) -->
            [&::-webkit-scrollbar-thumb]:bg-gray-500  <!-- Màu thumb (nút kéo) -->
            [&::-webkit-scrollbar-thumb]:rounded-full <!-- Bo tròn thumb -->
            [&::-webkit-scrollbar-track]:bg-gray-200
        "
          sx={style}
        >
          <div>
            <h1 className="text-center font-medium text-xl mb-5">ADD WORK FORM</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
              {/* Budget Range */}
              <div className="flex flex-col">
                <label className="text-sm font-medium  text-sky-500 mb-2">
                  Name of work
                </label>
                <input value={work.name} onChange={e=>{
                    setWork({...work,name:e.target.value})
                }} className="w-full p-1  ountline-none border border-gray-400 rounded-sm bg-transparent"/>
              </div>

              {/* Start Date & Deadline */}
              <div className="flex flex-col">
                <label className="text-sm font-medium  text-sky-500 mb-2">
                  Title
                </label>
                <input value={work.title} onChange={e=>{
                    setWork({...work,title:e.target.value})
                }}  className="w-full p-1  ountline-none border border-gray-400 rounded-sm bg-transparent"/>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Budget Range */}
              <div className="flex flex-col">
                <label className="text-sm font-medium  text-sky-500 mb-2">
                  Status
                </label>
                <select value={work.statusId} onChange={e=>{
                    setWork({...work,statusId:e.target.value})
                }}  className="w-full p-1  ountline-none border border-gray-400 rounded-sm bg-transparent">
                  {tempInfo.statusWorks.map(v=>{
                    return <option>Writing</option>
                  })}
                </select>
              </div>

              {/* Start Date & Deadline */}
              <div className="flex flex-col">
                <label className="text-sm font-medium  text-sky-500 mb-2">
                  Author
                </label>
                <select
                    value={work.authorId}
                    onChange={e => setWork({ ...work, authorId: e.target.value })}
                    className="w-full p-1 outline-none border border-gray-400 rounded-sm bg-transparent custom-select"
                    >
                    {tempInfo.authors.map(v => (
                        <option key={v.id} value={v.id}>
                        {v.authorName}
                        </option>
                    ))}
                    </select> 
              </div>
            </div>
            <div
              className="grid grid-cols-3 gap-3 h-[150px]  overflow-auto
        [&::-webkit-scrollbar]:w-1  [&::-webkit-scrollbar]:h-0.5   <!-- Làm scrollbar nhỏ (width 4px, thay đổi số tùy ý) -->
            [&::-webkit-scrollbar-thumb]:bg-gray-500  <!-- Màu thumb (nút kéo) -->
            [&::-webkit-scrollbar-thumb]:rounded-full <!-- Bo tròn thumb -->
            [&::-webkit-scrollbar-track]:bg-gray-200 items-center mb-5  
                
            "
            ></div>
            {tempInfo.genres.map((v) => {
                            return (
                              <>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      onClick={() => {
                                        if(work.genres.get(v.id)!=null){
                                            work.genres.set(v.id,v.id)
                                        }else{
                                            work.genres.delete(v.id)
                                        }
                                        setWork({...work})
                                      }}
                                      checked={work.genres.get(v.id)!= null}
                                      size="small"
                                    />
                                  }
                                  label={<span className="text-xs">{v.genreName}</span>}
                                />
                              </>
                            );
            })}
            <div/>
            {/* Project Description */}
            <div className="mt-6">
              <label className="text-sm font-medium text-sky-500 mb-2 block">
                Content of work
              </label>

              <textarea value={work.discription} onChange={e=>{
                    setWork({...work,discription:e.target.value})
                }} 
                placeholder="Add Description"
                className="w-full bg-transparent border border-gray-300 rounded-lg px-4 py-3 h-28 resize-none    outline-none"
              ></textarea>
            </div> 
          </div>
        </Box>
      </Modal>
    </div>
  );
}
