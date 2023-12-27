import { useEffect } from "react";
import "./Customers.css";
import axios from "axios";
import { useState } from "react";
import { Container, Table } from "react-bootstrap";

export default function Customers() {
  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    axios("http://localhost:3004/contact").then((data) =>
      setCustomer(data.data)
    );
  }, []);

  return (
    <Container>
      <Table responsive>
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
        {customer.map((client, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.phone}</td>
                <td>{client.email}</td>
                <td>{client.address}</td>
                <td>{client.message}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </Container>
  );
}

/** 
 * <Table responsive >
 *            <thead>
              <tr>
                <th>#</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Adress</th>
                      <th>Message</th>
              </tr>
            </thead>
 * {customer.map((client , index)=> {
 * return (
 *            <tbody>
              <tr>
                <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.phone}</td>
              <td>{client.email}</td>
              <td>{client.address}</td>
              <td>{client.message}</td>
              </tr>
            </tbody>
 * )
 * })}
 * </Table>
*/
