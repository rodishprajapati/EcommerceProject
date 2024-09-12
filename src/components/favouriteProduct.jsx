import { Modal } from "antd";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const FavouriteProduct=()=>{
    const[isFavItemModalOpen,setIsFavItemModalOpen]=useState();
    const[favItemsData,setFavItemsData]=useState("No Fav Items ");

    const favouriteItemList = () => {
        setIsFavItemModalOpen(true);
        const favItemList=localStorage.getItem("FavProducts");
        
        console.log(favItemList,'favItemList');
        if(favItemList){
            setFavItemsData(JSON.parse(favItemList));
        }
      };
      const handleOk = () => {
        setIsFavItemModalOpen(false);
      };
      const handleCancel = () => {
        setIsFavItemModalOpen(false);
      };
    // const favouriteItemList=()=>{
        
    // }
    return <>
    
    <Modal title="Fav Items List" open={isFavItemModalOpen} onOk={handleOk} onCancel={handleCancel} className="relative top-1 left-10
    grid grid-cols-2 w-[20vw]">
           <img src={favItemsData.image} className=" h-[15vh]"/> 
        <div className="grid grid-rows-2">
            <div className="text-black font-semibold"> {favItemsData?.name}</div>
            <div className="text-green-500"> Price: {favItemsData?.discountPrice}</div>
        </div>
      </Modal>
    <button className="items-end justify-end"
            onClick={favouriteItemList}>
            <FaShoppingCart />
            </button>
    </>
}
export default FavouriteProduct;