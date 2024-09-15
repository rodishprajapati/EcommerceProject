import { Image } from "antd";
import { useState } from "react";
import FavouriteProduct from "./favouriteProduct";

const NavBar = () => {
  const [user, setUser] = useState("User");
  return (
    <>
      <div
        className="bg-zinc-500 h-[10vh] 
      grid grid-cols-3"
      >
        <Image
          width={50}
          height={50}
          alt=" logo"
          src="../src/images/logo1.png"
          className="mt-[10px] ml-[10px] rounded-full"
        />
        <ul className="flex flex-row justify-evenly items-center ">
          <li>Home</li>
          <li>About Us</li>
          <li>All Products</li>
          <li>Contact Us</li>

          <li></li>
        </ul>
        <div className="flex flex-row items-center justify-evenly ">
          {/* <div className="h-10vh flex justify-end"> */}
          <FavouriteProduct />
          {/* </div> */}
          <div>Welcome {user}</div>
        </div>
      </div>
      {/* <div className="bg-green-500 h-[10vh] flex flex-rows justify-between">
        <div className="m-10px"></div>
        <div className="grid grid-cols-2">
          <div>Welcome {user}</div>
        </div>
      </div> */}
    </>
  );
};
export default NavBar;
