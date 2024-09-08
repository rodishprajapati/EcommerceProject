import * as Yup from "yup";

export const registrationValidationSchema=Yup.object({
    fullName:Yup.string().defined().default('User'),

    // sex:Yup.mixed().oneOf(['male','female','other'],"please select a valid gender"),
   
    age:Yup.number("enter valid age")
    .positive("enter valid age")
    .max(90,"enter a valid age")
    .min(18,"you must be atleast 18 years old")
    // .test('len', 'Age must be between 1 and 3 digits', (val) => {
    //   return val && val.toString().length >= 1 && val.toString().length <= 3;
    // })
    ,

    email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),

    // confirmPassword:Yup.string()
    // .min(6, 'Password must be at least 6 characters long')
    // .required('Password is required')
    

});



export const signInValidationSchema=Yup.object({
   
    email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()

    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
});