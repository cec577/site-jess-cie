import React from "react"

import { Form, Button, Col, Row, Container } from "react-bootstrap"

const Devis = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <h2 className="subtitles text-center" id="Devis-gratuit">
        Demander un devis
      </h2>
      <Container data-aos="fade-up">
        <Form
          name="devis"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <Row>
            <Col md="6">
              <Form.Control type="text" name="prenom" placeholder="Prénom" />
            </Col>
            <Col md="6">
              <Form.Control type="text" name="nom" placeholder="Nom" />
            </Col>
          </Row>

          <Form.Group controlId="exampleForm.ControlInput1">
            {/*<Form.Label>Email address</Form.Label>*/}
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Control
            type="text"
            name="tel"
            placeholder="numéro de téléphone"
          />

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows="3" name="demande" />
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
