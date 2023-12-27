import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import './Login.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authData } from '../../States/Atoms/auth';
import NavBar from '../../Components/Navbar/Navbar';
import loginShemas from '../../Schemas/LoginSchemas';
export default function Login() {

  const [auth , setAuth] = useRecoilState(authData);
  console.log(auth)
   function hndelLoginAccount (data) {
   axios (`http://localhost:3004/users?email=${data.email}&password=${data.password}`).then((data) => {
    if (data.data.length > 0){
      localStorage.setItem("loogedinUser" , JSON.stringify(data.data[0]))
      setAuth({
        isAuth: true,
        userId: data.data[0].id
      })
    }else {
      console.log("Emaill or password wrong")
    }
    console.log(data.data);
   })
  }
  return (
    <>
    <NavBar />
        <Formik
        initialValues={{
          email:"",
          password: "",
        }}
        onSubmit={(values)=> {
          hndelLoginAccount(values);
        }}
        validationSchema={loginShemas}
        >

          <Form className='user__form  my-5'>
            <div className='d-flex flex-column gap-2 nb-3'> 
              <label htmlFor="email">Email</label>
            <Field placeholder="email" type="email" name="email" className="mb-3" /> 
            <span className='text-danger mb-3'><ErrorMessage name="email"  /></span>
            </div>
            <div className='d-flex flex-column gap-2 nb-3'> 
            <label htmlFor="password">Password</label>
            <Field placeholder="password" type="password" name="password" id="password" />
            <span className='text-danger mb-3'><ErrorMessage name="password"/></span>
            </div>
            <div className='mt-3'>Dont't Have and Account? <Link to="/register">Create a New Account</Link></div>
            <div className='d-flex justify-content-end mt-3'>
            <Button variant='primary'  type='submit'>Login</Button>
            </div>
          </Form>
        </Formik>
        </>

  )
}
