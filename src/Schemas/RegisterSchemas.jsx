import * as yup from "yup";

const registerScema = yup.object().shape({
  fullName: yup
    .string()
    .required("Name Is Required")
    .min(5, "Name at least 5 characters"),
    email: yup
    .string()
    .required("Email is Required")
    .email("Email Should be avalied email address"),
    password: yup
    .string()
    .required("Password Is Required")
    .min(8, "Password at least 8 characters")
    .max(20, "Passwors at most 20 characters"),
  confirmpassword: yup
    .string()
    .required("Confirm Password is Required ")
    .oneOf([yup.ref("password")], "password dont't math"),
});

export default registerScema;