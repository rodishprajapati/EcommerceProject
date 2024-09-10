import { Link } from "react-router-dom";
import { Products } from "../Data/Products";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const LandingPage = () => {
    const [isFavourite,setIsFavourite]=useState(false);
    // const productEntries = Object.entries(Products); // Convert object into an array of key-value pairs
const product=Object.entries(Products);


const handleAddToFavourite = () => {
    setIsFavourite(prev => !prev); // Toggle between true and false
};

    return (
        <>
        
        <div className="bg-zinc-500 min-h-[100vh]">
            {/* item container */}

{/* product item map */}
<div className="bg-zinc-300" >
<ul className="p-5  grid grid-cols sm:grid-cols-3 md:cols-4 lg:grid-cols-5
 justify-evenly
">
                    {product.map(( [key,product], index) => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                        {/* product cart */}
                        <li key={product.id} className="
                        col-span-1 sm:col-span-1 lg:col-span-2 xl:col-span-1 
                         bg-zinc-500 m-2 h-[100%] 
                       
                         w-[15vw] 
                            rounded-lg border-solid border-2">
                            <div className="bg-white h-[80%]">
                            <img 
                                 src={product.image}
                                 alt="Placeholder"
                                 className="object-contain
                                  w-[100%] h-[100%] "
                              />
                               <button 
                                            onClick={handleAddToFavourite}
                                            // className="absolute top-2 right-2 p-2"
                                        >
                                            {isFavourite ? <FaHeart /> : <CiHeart />}
                                        </button>
                                        
                              </div>
                              <div className="grid grid-rows-3">
                              <div className="text-center font-semibold row-span-2">{product.name}</div>
                              <div id="price conatiner" className="text-green-500 text-sm font-bold text-center ">Price:  {"  "} 
                                <span className="text-green-500 ">Rs. {product.discountPrice} {"     "}</span>
                                 
                                 </div>
                                 </div>
                           
                                
                             {/* {JSON.stringify(value)} */}
                        </li>
                     </Link>

                    ))}
                </ul>
                </div>
             </div>
            <div>
            </div> 
        </>
    );
};

export default LandingPage;
