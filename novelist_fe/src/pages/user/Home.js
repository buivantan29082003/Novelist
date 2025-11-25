import CardBanner from "../../components/user/CardBanner"
import StoryCard from "../../components/user/story/StoryCard"

const HomePage=()=>{
    return <div className="text-left"> 
        <div className="w-full grid md:grid-cols-3 sm:grid-col-2 grid-col-1   gap-10 mt-5 overflow-auto">
            {[{
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpv03k7kZVAjnk4-myrjTVaOZrPF2Ap5IEAA&s"
            },{
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNBUewVykuoh-ehG1zrHJzVeMYfc8OHDQty4tCRGr&s"
            },{
                image:"https://static.gamehub.vn/img/files/2021/07/21/GamehubVN-manga-khong-co-hoi-ket-12.jpg"
            }].map(v=>{
                return <CardBanner story={v}/>
            })}
        </div>
        <p className="mt-5 mb-5 text-xl font-bold">🔥 Popular of stories</p>
        <div className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid gap-5">
            {[{
                name:"Famous novelist",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpv03k7kZVAjnk4-myrjTVaOZrPF2Ap5IEAA&s",
                title:"Story of musical abut famous novelist...."
            },{
                name:"Famous novelist",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNBUewVykuoh-ehG1zrHJzVeMYfc8OHDQty4tCRGr&s",
                title:"Story of musical abut famous novelist...."
            },{
                name:"Famous novelist",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpv03k7kZVAjnk4-myrjTVaOZrPF2Ap5IEAA&s",
                title:"Story of musical abut famous novelist...."
            },
        {
                name:"Famous novelist",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpv03k7kZVAjnk4-myrjTVaOZrPF2Ap5IEAA&s",
                title:"Story of musical abut famous novelist...."
            },{
                name:"Famous novelist",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNBUewVykuoh-ehG1zrHJzVeMYfc8OHDQty4tCRGr&s",
                title:"Story of musical abut famous novelist...."
            },{
                name:"Famous novelist",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpv03k7kZVAjnk4-myrjTVaOZrPF2Ap5IEAA&s",
                title:"Story of musical abut famous novelist...."
            },{
                name:"Famous novelist",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpv03k7kZVAjnk4-myrjTVaOZrPF2Ap5IEAA&s",
                title:"Story of musical abut famous novelist...."
            },{
                name:"Famous novelist",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNBUewVykuoh-ehG1zrHJzVeMYfc8OHDQty4tCRGr&s",
                title:"Story of musical abut famous novelist...."
            },{
                name:"Famous novelist",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpv03k7kZVAjnk4-myrjTVaOZrPF2Ap5IEAA&s",
                title:"Story of musical abut famous novelist...."
            }].map(v=>{
                return <StoryCard story={v}/>
            })}  
        </div>
        <p className="mt-5 mb-5 text-xl font-bold">🔥 Newest of stories</p>
        <div className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid gap-5">
            {[{
                name:"Famous novelist",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpv03k7kZVAjnk4-myrjTVaOZrPF2Ap5IEAA&s",
                title:"Story of musical abut famous novelist...."
            },{
                name:"Famous novelist",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNBUewVykuoh-ehG1zrHJzVeMYfc8OHDQty4tCRGr&s",
                title:"Story of musical abut famous novelist...."
            },{
                name:"Famous novelist",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpv03k7kZVAjnk4-myrjTVaOZrPF2Ap5IEAA&s",
                title:"Story of musical abut famous novelist...."
            },
        {
                name:"Famous novelist",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpv03k7kZVAjnk4-myrjTVaOZrPF2Ap5IEAA&s",
                title:"Story of musical abut famous novelist...."
            },{
                name:"Famous novelist",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNBUewVykuoh-ehG1zrHJzVeMYfc8OHDQty4tCRGr&s",
                title:"Story of musical abut famous novelist...."
            },{
                name:"Famous novelist",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpv03k7kZVAjnk4-myrjTVaOZrPF2Ap5IEAA&s",
                title:"Story of musical abut famous novelist...."
            },{
                name:"Famous novelist",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpv03k7kZVAjnk4-myrjTVaOZrPF2Ap5IEAA&s",
                title:"Story of musical abut famous novelist...."
            },{
                name:"Famous novelist",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNBUewVykuoh-ehG1zrHJzVeMYfc8OHDQty4tCRGr&s",
                title:"Story of musical abut famous novelist...."
            },{
                name:"Famous novelist",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpv03k7kZVAjnk4-myrjTVaOZrPF2Ap5IEAA&s",
                title:"Story of musical abut famous novelist...."
            }].map(v=>{
                return <StoryCard story={v}/>
            })}  
        </div>
    </div>
}

export default HomePage