const CardBanner=({story})=>{
    return <>
        <div className="w-4/12 flex items-start gap-4 p-4 rounded-[7px] filter bg-white">
            <div className="w-5/12">
                <img src={story.image} className="w-[150px] h-[120px] object-cover" alt="ANH"/>
            </div>
            <div className="w-6/12 text-white text-left">
                <button className="italic text-[10px] font-semibold py-1 px-2 filter rounded-full" >CÓ THỂ BẠN THÍCH</button>
                <p className="text-md my-3 font-bold">Mục Thần Ký</p>
                <p className="break-normal text-sm text-gray-500">Trạch trư - Ngô Lỗi</p>
            </div>
        </div>
    </>
}

export default CardBanner