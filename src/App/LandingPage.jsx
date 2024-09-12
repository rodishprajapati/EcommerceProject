import { Link } from "react-router-dom";
import { Products } from "../Data/Products";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const LandingPage = () => {
    const [data,setData]=useState(Products)
    // const [isFavButtonClicked,setIsFavButtonClicked]=useState(false);
    // const productEntries = Object.entries(Products); // Convert object into an array of key-value pairs


const handleAddToFavourite = (event,id) => {
    event.preventDefault()
    event.stopPropagation();
        setData(prevData =>{
           const updateData= prevData.map(favProduct =>
               {
                
                if(favProduct.id === id){
                    // console.log(favProduct);
                    
                    // console.log("productid"+favProduct.id);
                    // console.log("id"+id);
                    const savedData={ ...favProduct, isFavorite: !favProduct.isFavorite } ;
                    let favProductArray = JSON.parse(localStorage.getItem("FavProducts")) || [];

                    // console.log(favProductArray);
                    if(!favProduct?.isFavorite){
                        favProductArray = [...favProductArray, savedData];

                    }
                    else{
                        favProductArray = favProductArray.filter(el => el.id !== id);

                    }
                  
                localStorage.setItem("FavProducts", JSON.stringify(favProductArray));
                  
                    // console.log(savedData);
                    return savedData;
                }
                else{
                    return favProduct;
                }


               }

            )
   
            return updateData;
});

};


 

    return (
        <>
        
        
        <div className="bg-zinc-500 min-h-[100vh]">
                {/* item container */}
                <div className="bg-zinc-300">
                    <ul className="p-5 h-fit
                    gap-4 grid 
                    grid-cols-1 
                    sm:grid-cols-2  
                    md:grid-cols-3 md:gap-3
                    lg:grid-cols-4 
                    xl:grid-cols-5 w-[80vw]
                    
                     ">
                        {data.map((product) => (
                                <Link key={product.id} to={`/product/${product.id}`}>

                            <li key={product.id} className="bg-zinc-500 m-2 h-[100%] w-[100%] rounded-lg border-solid border-2">
                                {/* product card */}
                                <div className="relative bg-white h-[80%]">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-contain w-[100%] h-[100%]"
                                    />
                                 
                                </div>
                                <div className="grid grid-rows-2">
                                    <div className="text-center font-semibold row-span-2
                                    sm:text-2xl">{product.name}</div>
                                    <div  className="grid  grid-cols-2">
                                    <div id="price-container" className="text-green-500 text-sm font-bold text-center w-[10vw]">
                                        Price: Rs. {product.discountPrice}
                                    </div>
                                    

                                    <button
                                            onClick={(event)=>handleAddToFavourite(event,product?.id)}
                                            className="
                                            flex justify-end"

                                        >
                                            {product?.isFavorite ? <FaHeart className="text-red-500" /> : <CiHeart />}
                                        </button>

                                    
                                        </div>
                                </div>
                            </li>
                            </Link>

                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
