import CardBanner from "../../components/user/CardBanner"

const HomePage=()=>{
    return <> 
        <div className="w-full flex gap-10 mt-5 overflow-auto">
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
    </>
}

export default HomePage