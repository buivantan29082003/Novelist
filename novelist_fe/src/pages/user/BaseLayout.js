import { Outlet } from "react-router-dom"
import Menu from "./Menu"
import Header from "./Header"

const UserBaseLayout=()=>{
    return <>
        <div className="flex h-screen w-full text-white bg-[#170f23]">
            <div className="md:w-2/12    w-2/12 h-screen bg-[#231b2e] text-md font-medium  ">
                <Menu/>
            </div>
            <div className="md:w-10/12   w-10/12 h-screen ">
                <Header/>
                <Outlet/>
            </div>
        </div>
        
    </>
}






export default UserBaseLayout