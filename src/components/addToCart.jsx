import { Button, Modal } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseItem, increaseItem } from "../redux/Actions/cartAction";
import { useParams } from "react-router-dom";
import { Products } from "../Data/Products";

const AddToCart=()=>{

const {id}=useParams();
const product=Products.find((productFind=>productFind.id===parseInt(id)));


//items Quantity
const state = useSelector((state) => state);
  console.log(state, "state");
  const dispatch = useDispatch();
// console.log(state.cartItems, "dfvdfdf" )


const [cartModal,IsCartModal]=useState(false);
const showCartModal=()=>{
    IsCartModal(true);
};
const handleOk = () => {
    IsCartModal(false);
  };

  const handleCancel = () => {
    IsCartModal(false);
  };


return<>

<Button type="primary" 
className="w-[20vw] m-2"
onClick={showCartModal}
>
    Add To Cart</Button>
    <Modal open={cartModal} onOk={handleOk} onCancel={handleCancel}>
        <cart  className="grid grid-cols-2">
        {/* <Image width={200} height={200} src="../src/images/camera.jpg"/> */}
        <img src={product.image}/>
        
        <rightcomponent className="bg-red-500">

          <div className="text-black">{product.name}</div>

        

        </rightcomponent>
        {/* <detail className="text-2xl grid grid-row-4 ">
          <div className=" grid grid-row-2 ">


          <div className="font-bold text-center">
          {product.name}
          </div>
          <div className="text-sm  pt-[5vh] text-wrap ">{product.description}</div>
          <div className="flex  justify-between">Price: {product.discountPrice}</div>

          </div>
         
        <quantity className="
        flex align-end  ml-[3vw] mt-[15vh]">
        <div>
        <Button
          disabled={state.cartItems <= 0}
          type="primary"
          className="mr-[2vw] ml-[2vw]"
          onClick={() => {
            dispatch(decreaseItem());
          }}
        >
          -
        </Button>
        {state.cartItems}
        <Button
          disabled={state.cartItems >= 5}

          type="primary"
          className="mr-[2vw] ml-[2vw]"
          onClick={() => {
            dispatch(increaseItem());
          }}
        >
          +
        </Button>
      </div>
        </quantity>
        </detail> */}



        </cart>
    </Modal>

</>
}
export default AddToCart;