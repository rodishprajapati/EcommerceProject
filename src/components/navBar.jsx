import { Image } from "antd";
import { useState } from "react";
import FavouriteProduct from "./favouriteProduct";

const NavBar=()=>{
    const [user,setUser]=useState("User");
    return <>
    <div className="bg-green-500 h-[10vh] flex flex-rows justify-between">
        <div className="m-10px">
           <Image width={50} height={50} alt=" logo"src="../src/images/logo1.png"
           className="mt-[10px] ml-[10px] rounded-full"/>
        </div>
        <div className="grid grid-cols-2">
            
        <FavouriteProduct/>
        <div>Welcome {user}</div>
        </div>
    </div>
    </>
}
export default NavBar;