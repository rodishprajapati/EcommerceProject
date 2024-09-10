import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./App/LandingPage";
import NavBar from "./components/navBar";
// import Footer from "./components/footer";
import SignIn from "./Authorization/sign";
import Register from "./Authorization/register";
import SingleProduct from "./App/productDetail";
import ProductTable from "./App/productTable";

const App=()=>{
    const router= createBrowserRouter([
        {
            path:"/",
            element:<LandingPage/>
        },
        {
            path:"/product/:id",
            element: <SingleProduct/> 
        },
        {
            path:"/signin",
            element: <SignIn/> 
        },
        {
            path:"/register",
            element: <Register/> 
        },
        {
            path:"/table",
            element: <ProductTable/> 
        },
    ])

    return<>
    <NavBar/>

    < RouterProvider router={router}/>
    {/* <Footer/> */}
    
    {/* <LandingPage/> */}


    </>
}
export default App;