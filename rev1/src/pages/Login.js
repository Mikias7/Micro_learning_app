import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavBar from '../components/NavBar';

import React from 'react'

function login() {
  return (
    <div>
        <NavBar />
        <h2>Login Page</h2>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="Success" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default login


