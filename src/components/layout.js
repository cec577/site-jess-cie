/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"

import { Container, Row, Col } from "react-bootstrap"

//import Header from "./header"
import NavBar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main">
          <Row noGutters className="justify-content-center">
            <Col>
              {/*<Header siteTitle={data.site.siteMetadata.title} /> */}
            </Col>
          </Row>
          <Row noGutters>
            <Col className="">
              <NavBar pageInfo={pageInfo} />

              <header class="background-image position-relative">
                <div class=" text-center">
                  <h1 className="position-absolute site-title text-light">
                    Jess&cie
                  </h1>
                  <div className="subtitle-main position-absolute">
                    {" "}
                    Vous ne voulez pas changer les habitudes de vos animaux en
                    votre absence ? Appelez <a className="">JESS&CIE</a> pour
                    une garde à votre domicile en toute sécurité !
                  </div>
                </div>
              </header>
              <main>{children}</main>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <div class="text-center">
                  <h2
                    className="subtitles-footer text-center"
                    id="Devis-gratuit"
                  >
                    Me contacter
                  </h2>

                  <p class="text-uppercase">Jess&cie</p>
                  <p>06.02.71.92.01</p>
                  <p>Jessica.cogliati2@gmail.com</p>
                  <div class="social-link-footer">
                    <FaFacebookSquare />
                    <FaInstagram />
                  </div>
                </div>
                <p className="text-center pt-2 signature">
                  © {new Date().getFullYear()}, Made with <FaHeart />
                  {` `}
                  <a href="https://www.gatsbyjs.org">by Cec_DM</a>
                </p>
              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
