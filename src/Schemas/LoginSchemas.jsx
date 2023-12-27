import * as yup from "yup";

const loginShemas = yup.object().shape({
  email: yup
    .string()
    .required("Email Is Required")
    .email("Email Should be a valid email adress"),
  password: yup.string().required("Password Is a Required Faield").min(6).max(30),
});

export default loginShemas;
