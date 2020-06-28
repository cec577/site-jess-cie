import React, { useState, useEffect } from "react"
//import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { Link } from "react-scroll"
import { FaHome } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

import { Navbar, Nav } from "react-bootstrap"

function Header2() {
  const [header, setHeader] = useState("header")

  const listenScrollEvent = event => {
    if (window.scrollY < 73) {
      return setHeader("header")
    } else if (window.scrollY > 70) {
      return setHeader("header2")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)

    return () => window.removeEventListener("scroll", listenScrollEvent)
  }, [])

  return (
    <>
      <Navbar className={header} expand="lg" id="site-navbar">
        {/* <Container> */}
        <AnchorLink to="/" className="pr-lg-1 ">
          <FaHome />
          {/*<img src={logo} alt="site-logo" className="site-logo"/> */}
        </AnchorLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}> */}
          {/*<Link to="/page-2" className="link-no-style">*/}

          {/* </Link> */}
          {/*</Nav>*/}
          <Link
            className="pr-lg-1  nav-link-header"
            activeClass="active"
            to="avantages"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            eventKey="avantages"
          >
            Garde d'animaux
          </Link>

          <Link
            className="pr-lg-1  nav-link-header"
            activeClass="active"
            to="Qui-suis-je"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            eventKey="Qui-suis-je"
          >
            Qui-suis-je
          </Link>

          <Link
            className="pr-lg-1  nav-link-header"
            activeClass="active"
            to="Promenage-educative"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            eventKey="Promenage éducative"
          >
            Promenage éducative
          </Link>

          <Link
            className="pr-lg-1 nav-link-header"
            activeClass="active"
            to="Tarifs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            eventKey="Tarifs"
          >
            Tarifs
          </Link>
          <Link
            className="pr-lg-1  nav-link-header"
            activeClass="active"
            to="Devis-gratuit"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            eventKey="Devis gratuit"
          >
            Devis gratuit
          </Link>
          <Nav className="ml-auto">
            <Nav.Link as="span" eventKey="Devis gratuit">
              <FaFacebookSquare />
            </Nav.Link>
            <Nav.Link as="span" eventKey="Devis gratuit">
              <FaInstagram />
            </Nav.Link>
            {/*<Form inline onSubmit={e => e.preventDefault()}>
                <Form.Group>
                  <FormControl
                    type="text"
                    placeholder="Fake Search"
                    className="mr-2"
                  />
                </Form.Group>
                <Button>Fake Button</Button>
              </Form> */}
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default Header2
