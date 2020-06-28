import React from "react"
import { Link } from "gatsby"

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Col,
  Row,
  Container,
} from "react-bootstrap"
import logo from "../images/logo.png"

const Devis = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <h2 className="subtitles text-center" id="Devis-gratuit">
        Demander un devis
      </h2>
      <Container data-aos="fade-up">
        <Form>
          <Row>
            <Col md="6">
              <Form.Control type="text" placeholder="Prénom" />
            </Col>
            <Col md="6">
              <Form.Control type="text" placeholder="Nom" />
            </Col>
          </Row>

          <Form.Group controlId="exampleForm.ControlInput1">
            {/*<Form.Label>Email address</Form.Label>*/}
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Control type="text" placeholder="numéro de téléphone" />

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default Devis
