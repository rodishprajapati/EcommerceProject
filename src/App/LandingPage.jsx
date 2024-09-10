import { Link } from "react-router-dom";
import { Products } from "../Data/Products";

const LandingPage = () => {
    // const productEntries = Object.entries(Products); // Convert object into an array of key-value pairs
const product=Object.entries(Products);
    return (
        <>
        
            <div>
                <ul className="grid grid-cols-5">
                    {product.map(( [key,product], index) => (



                    <Link key={product.id} to={`/product/${product.id}`}>

                        <li key={product.id}>
                            <div className="bg-zinc-500 m-2 h-[50vh] w-[15vw] 
                            rounded-lg border-solid border-2">
                            <div className="h-[80%] bg-white">  
                                <img 
                                 src={product.image}
                                 alt="Placeholder"
                                 className="object-contain
                                  w-[100%] h-[100%] "
                              />
                             </div>
          
          
          
          <div className=" h-[20%] grid grid-row-2 ">

            
                            <div className="text-md text-center font-semibold h-[10%]">
                            { product.name}
                                </div>
                                <div className="text-green-400  h-[10%] flex justify-around align-middle">Price: Rs. {product.price}</div>

                                </div>
                            </div>
                           
                    
                             {/* {JSON.stringify(value)} */}
                        </li>
                    </Link>

                    ))};
                </ul>
            </div>
        </>
    );
};

export default LandingPage;
