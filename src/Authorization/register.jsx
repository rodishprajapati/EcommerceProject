

import { Form, Formik } from "formik";
import { registrationValidationSchema } from "./validation";

const Register=()=>{
    return <>
    {/* main box */}
   <div className="h-screen bg-zinc-500
   grid justify-center items-center"> 
   {/* login box */}
   <div className=" bg-zinc-400 
   h-[80vh] w-[70vw]
   grid grid-rows-5 justify-stretch 
    ">


{/* login Form Box */}
<div className=" flex justify-center h-full align-middle">
Register New Account
</div>
<div className="bg-white  h-[100%] w-[70%] ml-[15%] 
row-span-3 align-middle items-center
flex ">
{/* formik details */}

<Formik



   
   initialValues={{ fullName:'',age:'', email: '', password: '' }}
   validationSchema={registrationValidationSchema}
       
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
        //    alert(JSON.stringify(values, null, 2));
           alert("New User Created"+JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
        //  console.log()
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

            {/* Name */}
            <div>
            <h1 className="text-left">Full Name</h1>
            <input
            className="border-2 border-black rounded
            bg-zinc-50 w-full  placeholder-gray-500 placeholder:text-xs"
             type="text"
            //  style={

            //  }
             name="fullName"
             placeholder="FullName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.fullName}
           />
       
           {errors.name && touched.name && (<div className="text-red-500 text-xs text-right">{errors.name}</div>)}
            </div>



            <div>
            <h1 className="text-left">Age</h1>
            <input
            className="border-2 border-black rounded
            bg-zinc-50 w-full  placeholder-gray-500 placeholder:text-xs"
             type="number"
            //  style={

            //  }
             name="age"
             placeholder="Age"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.age}
           />
       
           {errors.age && touched.age && (<div className="text-red-500 text-xs text-right">{errors.age}</div>)}
            </div>



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
export default Register;