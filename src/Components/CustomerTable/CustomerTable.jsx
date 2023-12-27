import { Container } from 'react-bootstrap'





import './CustomerTable.css'

import React from 'react'

export default function CustomerTable({client}) {
  console.log(client)
  return (
    <Container>
      {/* <Table responsive>
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
      <td>1</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
            <td></td>
    </tr>
  </tbody>
</Table> */}
</Container>
  )
}
