import { Modal } from "antd";
import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ItemsContext } from "../context/favouriteProduct";

const FavouriteProduct = () => {
  const [isFavItemModalOpen, setIsFavItemModalOpen] = useState();
  // let products=JSON.parse(localStorage.getItem("FavProducts"))|| [];
  const { items } = useContext(ItemsContext);
  console.log(items);
  const favouriteItemList = () => {
    setIsFavItemModalOpen(true);
  };
  const handleOk = () => {
    setIsFavItemModalOpen(false);
  };
  const handleCancel = () => {
    setIsFavItemModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Fav Items List"
        open={isFavItemModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="relative top-[7vh] left-[20vw]
        sm:left-[30vw]
    grid grid-cols-2 w-[20vw]"
      >
        <ul className="m-0 p-0">
          {items.map((product) => (
            <li
              key={product.id}
              className="grid grid-cols-2
            border-black border-solid border-2 m-1
            h-[10vh]"
            >
              <div className="bg-zinc-100 flex items-center">
                <img src={product.image} className="object-contain" />
              </div>
              <div className=" grid grid-row-2">
                {" "}
                <div className="font-semibold text-md flex items-center">
                  {product.name}
                </div>
                <div className="text-green-500">
                  Rs. {product.discountPrice}
                </div>
              </div>

              {/* <div className="grid grid-cols-2">
                <div className=" w-[10vw] h-[10vh]">
                  <img src={product.image} className="object-contain" />
                </div>
                <div className=" grid grid-rows-2">
                  <div className="font-semibold"> {product.name}</div>
                  <div>{product.discountPrice}</div>
                </div>
              </div> */}

              {/* <hr /> */}
            </li>
          ))}
        </ul>
        {/* {products.map((product)=>
           {return product.name}
         )} */}
      </Modal>
      <button className="items-end justify-end" onClick={favouriteItemList}>
        <FaShoppingCart />
      </button>
    </>
  );
};
export default FavouriteProduct;
