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
import { ExternalLink } from "react-external-link"

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
                    JESS&Cie
                  </h1>
                  <div className="subtitle-main position-absolute">
                    {" "}
                    Vous ne voulez pas changer les habitudes de vos animaux en
                    votre absence ? Appelez <a className="">JESS&Cie</a> pour
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
                  <h2 className="subtitles-footer text-center" id="contact-me">
                    Me contacter
                  </h2>

                  <p className="text-uppercase display-2 font-weight-bold">
                    Jess&cie
                  </p>
                  <p className="display-1">Ouvert 7j/7 et jours fériés</p>
                  <p className="display-1">06.02.71.92.01</p>
                  <p className="display-1">jessica.cogliati2@gmail.com</p>
                  <div class="social-link-footer">
                    <ExternalLink
                      as="d-block"
                      eventKey="Devis gratuit"
                      href="https://www.facebook.com/pg/JESSCie-104757841295099/services/?ref=page_internal"
                      target="_blank"
                      className="svg-space"
                    >
                      <FaFacebookSquare />
                    </ExternalLink>
                    <ExternalLink
                      as="d-block"
                      eventKey="Devis gratuit"
                      href="https://www.instagram.com/jesscie2/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </ExternalLink>
                  </div>
                </div>
                <p className="text-center pt-2 signature">
                  © {new Date().getFullYear()}, Made with{" "}
                  <span class="color-heart">
                    <FaHeart />
                  </span>{" "}
                  by
                  {` `}
                  <ExternalLink
                    href="https://www.instagram.com/cec_dm"
                    target="_blank"
                    className="signature-insta"
                  >
                    Cec_DM
                  </ExternalLink>
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
