import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./App/LandingPage";
import NavBar from "./components/navBar";
// import Footer from "./components/footer";
import SignIn from "./Authorization/sign";
import Register from "./Authorization/register";
import SingleProduct from "./App/productDetail";

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
    ])

    return<>
    <NavBar/>

    < RouterProvider router={router}/>
    {/* <Footer/> */}
    
    {/* <LandingPage/> */}


    </>
}
export default App;