import { Form, Formik } from "formik";
import { signInValidationSchema } from "./validation";


const SignIn=()=>{
   
return <>

hello world from sign in page



<br/><hr/>
<div>
     <h1>Anywhere in your app!</h1>
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
            {/* email: */}
           <input
           className="bg-blue-500"
             type="email"
             name="email"
             placeholder="Email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           /><br/>
           {errors.email && touched.email && errors.email}
           password
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <br/><button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div></>
}
export default SignIn;