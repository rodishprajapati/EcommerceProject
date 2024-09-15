import { Link } from "react-router-dom";
import { Products } from "../Data/Products";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useContext, useState } from "react";
import { ItemsContext } from "../context/favouriteProduct";
import NavBar from "../components/navBar";

const LandingPage = () => {
  const { items, setItems } = useContext(ItemsContext);
  const [data, setData] = useState(Products);

  const handleAddToFavourite = (event, id) => {
    event.preventDefault();
    event.stopPropagation();

    setData((prevData) => {
      const updateData = prevData.map((favProduct) => {
        if (favProduct.id === id) {
          const savedData = {
            ...favProduct,
            isFavorite: !favProduct.isFavorite, // Toggle favorite status
          };

          let favProductArray = items || []; //accessing through context
          //accessing thorugh local storage
          // let favProductArray = JSON.parse(localStorage.getItem("FavProducts")) || [];

          if (!favProduct?.isFavorite) {
            // Add product to favorites
            favProductArray = [...favProductArray, savedData];
          } else {
            // Remove product from favorites
            favProductArray = favProductArray.filter((el) => el.id !== id);
          }

          // Update the context with the new favorites array
          setItems(favProductArray);

          // Update localStorage with the new favorites array
          localStorage.setItem("FavProducts", JSON.stringify(favProductArray));

          return savedData;
        } else {
          return favProduct;
        }
      });

      return updateData;
    });
  };

  return (
    <>
      <NavBar />
      <div className="bg-zinc-500 min-h-[100vh]">
        {/* item container */}
        <div className="bg-zinc-300 flex items-center">
          <ul
            // className="bg-zinc-300 h-fit
            // grid grid-cols-4 gap-4
            // sm:grid-cols-1"
            className="p-5 h-fit  justify-around
                    gap-4 grid
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 md:gap-3
                    lg:grid-cols-4
                    xl:grid-cols-5 
                    w-full"
          >
            {data.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <li
                  key={product.id}
                  className="bg-zinc-500 m-2  w-[100%] rounded-lg border-solid border-2
                 h-[70vh]
                  sm:h-[40vh]"
                >
                  {/* product card */}
                  <div className="relative bg-white h-[80%]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain w-[100%] h-[100%]"
                    />
                  </div>
                  {/* <div className="grid grid-rows-2"> */}
                  <div
                    className="grid grid-rows-2 h-[20%]
                      bg-zinc-500
                  "
                  >
                    <div
                      className="flex justify-center items-center
                      text-center text-black 
                      font-semibold 
                     text-2xl
                     sm:text-2xl
                     
                                    "
                    >
                      {product.name}
                    </div>

                    <div className="grid grid-cols-3 justify-center items-center">
                      <div
                        className="col-span-2 
                        flex justify-center items-center
                      text-green-500 h-full
                      sm:text-2xl"
                      >
                        Price: Rs. {product.discountPrice}{" "}
                      </div>
                      <div
                        className="
                      h-full w-full
                      flex justify-center"
                      >
                        {" "}
                        <button
                          onClick={(event) =>
                            handleAddToFavourite(event, product?.id)
                          }
                        >
                          {product?.isFavorite ? (
                            <FaHeart
                              className="text-red-500 h-[full] w-[full]
                         "
                            />
                          ) : (
                            <CiHeart
                              className="h-[full] w-[full]
                            "
                            />
                          )}
                        </button>
                      </div>
                    </div>
                    {/* <div className="grid grid-cols-2 items-center"> */}
                    {/* Price Container */}
                    {/* <div
                        className="text-green-500 text-sm font-bold text-center h-auto w-[15vw]
                                      sm:h-full sm:w-full"
                      >
                        Price: Rs. {product.discountPrice}
                      </div> */}

                    {/* Favorite Button */}
                    {/* <div className="flex justify-end h-[5vh] items-center">
                        <button
                          onClick={(event) =>
                            handleAddToFavourite(event, product?.id)
                          }
                        >
                          {product?.isFavorite ? (
                            <FaHeart className="text-red-500" />
                          ) : (
                            <CiHeart />
                          )}
                        </button>
                      </div>
                    </div> */}
                  </div>
                  {/* </div> */}
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

// import { Link } from "react-router-dom";
// import { Products } from "../Data/Products";
// import { CiHeart } from "react-icons/ci";
// import { FaHeart } from "react-icons/fa";
// import { useContext, useState } from "react";
// import { ItemsContext } from "../context/favouriteProduct";
// import NavBar from "../components/navBar";

// const LandingPage = () => {
//   const { items, setItems } = useContext(ItemsContext); // Access addItem function from context
//   const [data, setData] = useState(Products);
//   // const [isFavButtonClicked,setIsFavButtonClicked]=useState(false);
//   // const productEntries = Object.entries(Products); // Convert object into an array of key-value pairs

//   const handleAddToFavourite = (event, id) => {
//     event.preventDefault();
//     event.stopPropagation();
//     setData((prevData) => {
//       const updateData = prevData.map((favProduct) => {
//         if (favProduct.id === id) {
//           const savedData = {
//             ...favProduct,
//             isFavorite: !favProduct.isFavorite,
//           };
//           let favProductArray =
//             JSON.parse(localStorage.getItem("FavProducts")) || [];
//           // conso
//           if (!favProduct?.isFavorite) {
//             favProductArray = [...favProductArray, savedData];
//           } else {
//             favProductArray = favProductArray.filter((el) => el.id !== id);
//           }
//           console.log(favProductArray);
//           // setItems(...favProductArray);

//           return savedData;
//         } else {
//           return favProduct;
//         }
//       });
//       return updateData;
//     });
//   };

//   return (
//     <>
//       <NavBar />
//       <div className="bg-zinc-500 min-h-[100vh]">
//         {/* item container */}
//         <div className="bg-zinc-300">
//           <ul
//             className="p-5 h-fit
//                     gap-4 grid
//                     grid-cols-1
//                     sm:grid-cols-2
//                     md:grid-cols-3 md:gap-3
//                     lg:grid-cols-4
//                     xl:grid-cols-5 w-[80vw]"
//           >
//             {data.map((product) => (
//               <Link key={product.id} to={`/product/${product.id}`}>
//                 <li
//                   key={product.id}
//                   className="bg-zinc-500 m-2 h-[100%] w-[100%] rounded-lg border-solid border-2"
//                 >
//                   {/* product card */}
//                   <div className="relative bg-white h-[80%]">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="object-contain w-[100%] h-[100%]"
//                     />
//                   </div>
//                   <div className="grid grid-rows-2">
//                     <div
//                       className="text-center font-semibold
//                                     row-span-2 sm:text-2xl"
//                     >
//                       {product.name}
//                     </div>

//                     <div className="grid grid-cols-2 items-center">
//                       {/* Price Container */}

//                       <div
//                         id="price-container"
//                         className="text-green-500 text-sm font-bold text-center h-auto w-[15vw]
//         sm:h-full sm:w-full"
//                       >
//                         Price: Rs. {product.discountPrice}
//                       </div>

//                       {/* Favorite Button */}
//                       <div className="flex justify-end h-[5vh] items-center">
//                         <button
//                           onClick={(event) =>
//                             handleAddToFavourite(event, product?.id)
//                           }
//                         >
//                           {product?.isFavorite ? (
//                             <FaHeart className="text-red-500" />
//                           ) : (
//                             <CiHeart />
//                           )}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               </Link>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LandingPage;
