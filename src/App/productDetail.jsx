import { useParams } from "react-router-dom";
import { Products } from "../Data/Products";
import AddToCart from "../components/addToCart";
import NavBar from "../components/navBar";

const SingleProduct = () => {
  const { id } = useParams();
  const product = Products.find(
    (productFind) => productFind.id === parseInt(id)
  );
  // console.log(product);

  return (
    <>
      <NavBar />
      <div
        id="product page"
        className="bg-zinc-500 h-[100vh]
    "
      >
        <div
          id="product container"
          className="bg-zinc-300 h-[60vh] grid grid-cols-2"
        >
          <leftcontainer className="flex items-middle justify-center ">
            <img
              src={product.image}
              alt="Placeholder"
              className="object-contain h-[50vh] m-auto
             "
            />
          </leftcontainer>

          {/* hello world<br/>this is hello */}
          <rightcontainer className=" p-2  ">
            <div id="container" className="mr-10 ml-10">
              <h1 className="font-bold text-xl mt-[10vh] text-center">
                {product.name}
              </h1>

              <div className="text-wrap m-4 h-[35vh] grid grid-rows-2">
                <div id="description " className="flex  flex-col">
                  <div>{product.description}</div>
                  <div
                    id="additional details"
                    className="grid grid-row-3 pt-10 "
                  >
                    <div>
                      {" "}
                      <tag className="text-">Catergory: </tag>
                      <span className="text-zinc-800">{product.category}</span>
                    </div>
                    <div>
                      <tag>Brand: </tag>
                      <span className="text-zinc-800">{product.brand}</span>
                    </div>
                    <div>
                      <tag>Rating: </tag>
                      <span className="text-zinc-800">{product.rating}⭐</span>
                    </div>
                  </div>
                </div>

                <div
                  id="price conatiner"
                  className="text-green-700 text-xl font-bold 

flex items-end "
                >
                  Price: {"  "}
                  <span className="text-green-500 ">
                    Rs. {product.discountPrice} {"     "}
                  </span>
                  <span className="line-through text-red-500 text-xs">
                    {"  "} Rs. {product.price}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-end">
              <AddToCart />
            </div>
          </rightcontainer>
        </div>

        <div id="product detail"></div>
        <div id="product review"></div>
      </div>
    </>
  );
};
export default SingleProduct;
