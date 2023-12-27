import "./Contact.css";
import React from "react";
import { Field, Form, Formik } from "formik";
import Navbar from '../../Components/Navbar/Navbar'
import axios from "axios";
import { Button } from "react-bootstrap";
import MyDropzone from "../../Components/Inserphoto/InsertPhoto";
export default function Contact() {

  function sendMessage (data) {
    console.log(data);
    axios.post('http://localhost:3004/contact' , data , {
      headers: {
        "Content-Type" : "application/json"
      }
    })
  }
  return (
    <div>
      <Navbar />
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        }}
        onSubmit={(values)=>{
          sendMessage(values);
        }}
      >
        <Form className="contactForm" >
          <Field name="name" type="text" placeholder="Enter Your Name" className="inPut"/>

          <Field
            name="phone"
            type="phone"
            placeholder="Enter Your Phone Number"
            className="inPut"
          />

          <Field name="email" type="email" placeholder="Enter Your Email" className="inPut"/>

          <Field name="address" type="text" placeholder="Enter Your Address" className="inPut"/>

          <Field name="message" type="textErea" placeholder="Enter Your Message" className="inPut"/>
          <Button type="submit" variant='primary'>Send Message</Button>
        </Form>
      </Formik>
      <MyDropzone />
    </div>
  );
}

/**
 *        {customer.map((client , index)=>{
          return (
            <Table responsive key={index}>
            <thead>
              <tr>
                <th>#</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Adress</th>
                      <th>Message</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.phone}</td>
              <td>{client.email}</td>
              <td>{client.address}</td>
              <td>{client.message}</td>
              </tr>
            </tbody>
          </Table>
          )
        })}
 */
