import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./App/LandingPage";
import SingleProduct from "./App/SingleProduct";
import NavBar from "./components/navBar";
// import Footer from "./components/footer";
import SignIn from "./Authorization/signIn";
import SignUp from "./Authorization/signUp";

const App=()=>{
    const router= createBrowserRouter([
        {
            path:"/",
            element:<LandingPage/>
        },
        {
            path:"/singleProduct",
            element: <SingleProduct/> 
        },
        {
            path:"/signin",
            element: <SignIn/> 
        },
        {
            path:"/signup",
            element: <SignUp/> 
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