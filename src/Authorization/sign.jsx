
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { signInValidationSchema } from "./validation";

const SignIn=()=>{
  const navigate=useNavigate();
    return <>
    {/* main box */}
   <div className="h-screen bg-zinc-500
   grid justify-center items-center"> 
   {/* login box */}
   <div className=" bg-zinc-400 
   h-[50vh] w-[50vw]
   grid grid-rows-5 justify-stretch 
    ">


{/* login Form Box */}
<div className=" flex justify-center h-full align-middle">
Sign In
</div>
<div className="bg-white  w-[70%] ml-[15%] 
row-span-3 align-middle items-center
flex ">
{/* formik details */}





<Formik
       initialValues={{ email: '', password: '' }}
    validationSchema={signInValidationSchema}
       
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
        //    alert(JSON.stringify(values, null, 2));
           console.log(JSON.stringify(values, null, 2));
           setSubmitting(false);
           navigate("/");
         }, 400);
       }}
       
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <Form onSubmit={handleSubmit} className=" ml-auto mr-auto flex align-middle items-center text-center">




           <div className="">
            {/* email: */}
            <div>
            <h1 className="text-left">Email</h1>
            <input
            className="border-2 border-black rounded
            bg-zinc-50 w-full  placeholder-gray-500 placeholder:text-xs"
             type="email"
            //  style={

            //  }
             name="email"
             placeholder="Email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
       
           {errors.email && touched.email && (<div className="text-red-500 text-xs text-right">{errors.email}</div>)}
            </div>
            <div>
            <h1 className=" text-left text-sm">Password</h1>
            <div className="border-dotted border-black">
            <input
              className="border-2 border-black rounded
            bg-zinc-50 w-full  placeholder-gray-500 placeholder:text-xs"
             type="password"
             name="password"
             placeholder="Password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
            </div>
          
           {errors.password && touched.password && (<div className="text-red-500 text-xs text-right">{errors.password}</div>)}

            </div>
           
         
           <button type="submit" disabled={isSubmitting}
           className="bg-zinc-600 w-[20vw] rounded hover:bg-zinc-500 mt-[1vh]">
             Submit
           </button>

           </div>
          
         </Form>
       )}
     </Formik>











</div>

   </div>
   </div>
     </>
}
export default SignIn;