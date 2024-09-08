import * as Yup from "yup";

export const signUpValidationSchema=Yup.object({
    firstName:Yup.string().defined().default('User'),

    sex:Yup.mixed().oneOf(['male','female','other'],"please select a valid gender"),
   
    age:Yup.number().positive(),

    email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()

    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
});



export const signInValidationSchema=Yup.object({
   
    email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()

    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
});