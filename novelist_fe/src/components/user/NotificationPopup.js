import * as React from 'react';
import Popover from '@mui/material/Popover'; 
import { getNotification } from '../../services/api/user/Notification'; 
import { Link, useNavigate } from 'react-router-dom';
import LoadingRow from '../common/LoadingRow';

export default function PopupNotification({children}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [data,setData]=React.useState({
    currentPage:1,
    totalPage:1,
    data:[]
  })

  const handleClose = () => {
    setAnchorEl(null);
  };
const [isReaded,setIsReaded]=React.useState(1)
  const getAllNotification=()=>{
    setIsLoading(true)
    getNotification(data.currentPage, isReaded).then(v=>{
      setData(v)
    }).catch(e=>{

    }).finally(()=>{
      setIsLoading(false)
    })
  }
  
  const [isLoading,setIsLoading]=React.useState(false)
  const navigate=useNavigate()

  

  React.useEffect(()=>{
    getAllNotification()
  },[isReaded]); 
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='bg-transparent'>
      <div aria-describedby={id}  onClick={handleClick}>
        {children}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        
        }} 
      >
        <div className='bg-transparent p-3 w-[300px]'>
          <div className='flex gap-2'>
            <button className={`py-1 px-3 rounded-full ${isReaded===1?"bg-sky-100 text-sky-500":"bg-gray-100"}`} onClick={()=>{
              data.currentPage=1;
              data.data=[]
              setIsReaded(1)
            }}>Tất cả</button>
            <button className={`py-1 px-3 rounded-full ${isReaded===0?"bg-sky-100 text-sky-500":"bg-gray-100"}`} onClick={()=>{
              data.currentPage=1;
              data.data=[]
              setIsReaded(0)
            }}>Chưa đọc</button>
          </div>
            {isLoading&&<LoadingRow quanityRow={10} color='grey.100'/>}
            {data.data.map(v=>{
              return <div onClick={(e) => {
              e.stopPropagation();      // ⭐ BẮT BUỘC
              // setAnchorEl(null); 
                navigate(v.notification.link)
              }} className='mt-2 cursor-pointer border-b mb-2 pb-2'>
                <p className='text-md font-semibold'>{v.notification.title}   </p>
                <p className='text-sm'>{v.notification.content}</p> 
              </div>
            })}
        </div>
      </Popover>
    </div>
  );
}