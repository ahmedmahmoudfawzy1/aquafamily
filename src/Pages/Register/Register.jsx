import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import registerScema from '../../Schemas/RegisterSchemas';
import './Register.css'
import axios from 'axios';
import NavBar from '../../Components/Navbar/Navbar';

export default function Register() {

  function handelRegisterAccount (data) {
    axios.post("http://localhost:3004/users", data , {
      headers : {
        'content-type': 'application/json'
      }
    })
  }
  return (
    <>
    <NavBar />
    <Formik
    initialValues={{
      email:"",
      password: "",
      fullName:"",
      confirmpassword:"",
    }}
    validationSchema={registerScema}

    onSubmit={(values)=> {
      handelRegisterAccount(values);
    }}

    >

      <Form className='user__form  my-5'>
        <div className='d-flex flex-column gap-2 nb-3'> 
          <label htmlFor="FullName">Full Name</label>
        <Field placeholder="Full Name" type="text" name="fullName" className="input"/> 
        <span className='text-danger'><ErrorMessage name="fullName" /></span>
        </div>
        <div className='d-flex flex-column gap-2 nb-3'> 
          <label htmlFor="email">Email</label>
        <Field placeholder="email" type="email" name="email"  className="input"/> 
        <span className='text-danger'><ErrorMessage name="email" /></span>

        </div>
        <div className='d-flex flex-column gap-2 nb-3'> 
        <label htmlFor="password">Password</label>
        <Field placeholder="password" type="password" name="password" id="password" className="input"/>
        <span className='text-danger'><ErrorMessage name='password' /></span>
        </div>
        <div className='d-flex flex-column gap-2 nb-3'> 
        <label htmlFor="confirmpassword">Confirm Password</label>
        <Field placeholder="Confirm Passowrd" type="password" name="confirmpassword" id="confirmpassword" className="input"/>
        <span className='text-danger'> <ErrorMessage name='confirmpassword' /></span>

        </div>
        <div >Already have an account? <Link to="/login">Login</Link></div>
        <div className='d-flex justify-content-end mt-3'>
        <Button variant='primary'  type='submit'>Register</Button>
        </div>
      </Form>
    </Formik>
    </>
  )
}
