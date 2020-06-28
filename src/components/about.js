import React from "react"
import { StaticQuery, graphql } from "gatsby"

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Col,
  Row,
} from "react-bootstrap"
import logo from "../images/logo.png"
import moi from "../images/jessica-podium.jpg"

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            author
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <h2 className="subtitles text-center" id="Qui-suis-je">
          Qui suis-je ?
        </h2>
        <Row>
          <Col className="col-12 col-md-6 m-auto" data-aos="fade-up">
            <p class="mx-md-5">
              {data.site.siteMetadata.author}
              {data.site.siteMetadata.description}
            </p>
          </Col>
          <Col className="col-12 col-md-6" data-aos="fade-up">
            <img src={moi} alt="me" className="image-podium shadow rounded" />
          </Col>
        </Row>
      </>
    )}
  />
)

export default About
