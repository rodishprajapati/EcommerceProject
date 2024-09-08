import { Form, Formik } from "formik";
import { signInValidationSchema } from "./validation";


const SignIn=()=>{
   
return <>
<div className="flex max-h-full ">
<div className="bg-zinc-300 h-[50vh] w-[50vw] m-[auto] mt-[10%]">
   <h1>
   SignIn 
   </h1> 
  <div>
  <Formik
       initialValues={{ email: '', password: '' }}
    validationSchema={signInValidationSchema}
       
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
        //    alert(JSON.stringify(values, null, 2));
           console.log(JSON.stringify(values, null, 2));
           setSubmitting(false);
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
         <Form onSubmit={handleSubmit}>




           <div className="flex flex-col">
            {/* email: */}
            <div>
            <h1>Email</h1>
            <input
           className="bg-blue-500"
             type="email"
             name="email"
             placeholder="Email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           
           {errors.email && touched.email && errors.email}
            </div>
            <div>
            <h1>password</h1>
            <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
            </div>
           
         
           <button type="submit" disabled={isSubmitting}>
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