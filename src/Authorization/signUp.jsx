import { Field, Form, Formik } from "formik";
import { signUpValidationSchema } from "./validation"; 
const SignUp=()=>{
    
return <>

<div>
     <h1>SignUp in your app!</h1>
    
     <div className="bg-blue-500 h-[20vh] w-[20vw]">

     <Formik
       initialValues={{ fullName:'',age:'', email: '', password: '' }}
       validationSchema={signUpValidationSchema}
       enableReinitialize={true}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
        //esdv    alert(JSON.stringify(values, null, 2));
           console.log(JSON.stringify(values, null, 2));
           alert("new user Created")
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
            {/* fullName: */}
           {/* <h1>
           full Name:{" "}

            </h1>  */}
            <label className="text-xl">
              Full Name
            </label>
            <inputfield>
            <Field
          //  className="bg-green-500"
             type="text"
             name="fullName"
             placeholder="Full Name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.fullName}
           />
           
           </inputfield><br/>
             {errors.fullName && touched.fullName && errors.fullName} 

            <h1>email:{" "}</h1>
            

           <Field
           className="border-solid border-5"
             type="email"
             name="email"
             placeholder="Email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           /><br/>
           {errors.email && touched.email && errors.email}
           {/* {console.log(errors)} */}



<h1>
password {" "}
  
</h1>
           <Field
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           
           
           <br/>
           <h1>
           Age {" "}

           </h1>
           <Field
             type="number"
             name="age"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.age}
           /><br/>
           <button type="submit" disabled={isSubmitting} className="bg-geen-500">

             Submit
           </button>
         </Form>
       )}
     </Formik>
     </div>

   </div>
   </>
}
export default SignUp;