import React from "react"
import { Row, Col, Container } from "react-bootstrap"
//import Dog from '../images/patte-dog.svg';

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import PromenadeEducative from "../components/promenade"
import Tarif from "../components/tarif"
import Devis from "../components/devis"
import AOS from "aos"
import "aos/dist/aos.css"

import Avantages from "../components/avantages"

class IndexPage extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
      disable: "mobile",
    })
  }

  render() {
    return (
      <Layout pageInfo={{ pageName: "index" }}>
        <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
        <Container fluid className="text-center">
          <Row>
            <Col className="pb-2">
              {" "}
              <Avantages />
            </Col>
          </Row>
        </Container>
        <Container fluid className="text-center text-light bg-secondary pb-2">
          <About />
        </Container>
        <Container fluid className="text-center bg-primary text-light pb-2">
          <PromenadeEducative />
        </Container>
        <Container fluid className="text-center bg-light text-primary">
          <Tarif />
        </Container>
        <Container
          fluid
          className="text-center text-light bg-danger text-primary p-1"
        >
          <Devis />
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
