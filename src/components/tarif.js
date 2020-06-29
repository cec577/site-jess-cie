import React from "react"
import { Col, Row, Card, Container } from "react-bootstrap"
import { Link } from "react-scroll"

const Tarif = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <h2 className="subtitles text-center" id="Tarifs">
        Tarifs
      </h2>
      <p className="px-md-4 pb-1">
        Vous travaillez et n’avez pas le temps de sortir votre animal
        convenablement ? Appelez JESS&CIE, je serais à votre disposition et à
        celle de votre toutou pour de longues ballades et travaillerais les
        exercices demandés (exemples : marche aux pieds, se mettre assis à
        chaque arrêt, rappel aux pieds…etc.).
      </p>
      <Container>
        <Row>
          <Col
            className="col-12 col-md-4 tarif pb-2"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <Card className="shadow">
              <Card.Title className="product-image pt-1">
                <h3 className="h3-title">CHIEN « minimum 2 sorties / jour »</h3>
                <p className="px-md-1 prestations">
                  {" "}
                  Promenade, Alimentation, câlins, soins, …{" "}
                </p>
              </Card.Title>
              <Card.Text>
                <p className="price">15€ / visite </p>
                <p>Soit 30€ / jour pour 2 visites</p>
              </Card.Text>
              <Link
                to="Devis-gratuit"
                className="link-card text-center"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Demander un devis
              </Link>
              <Link
                to="contact-me"
                className="link-card text-center"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Me contacter
              </Link>
            </Card>
          </Col>

          <Col
            className="col-12 col-md-4 tarif pb-2"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <Card className="shadow">
              <Card.Title className="product-image pt-1">
                <h3 className="h3-title">CHAT « 1 visite par jour »</h3>
                <p className="px-md-1 prestations">
                  {" "}
                  Alimentation, câlins, soins, changement de litières, …{" "}
                </p>
              </Card.Title>
              <Card.Text>
                <p className="price">15€ / visite </p>
              </Card.Text>
              <Link
                to="Devis-gratuit"
                className="link-card text-center"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Demander un devis
              </Link>
              <Link
                to="contact-me"
                className="link-card text-center"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Me contacter
              </Link>
            </Card>
          </Col>

          <Col
            className="col-12 col-md-4 tarif pb-2"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <Card className="shadow">
              <Card.Title className="product-image pt-1">
                <h3 className="h3-title">NAC « 1 visite par jour »</h3>
                <p className="px-md-1 prestations">
                  Alimentation, câlins, soins, nettoyage caisse ou aquarium, …
                </p>
              </Card.Title>
              <Card.Text>
                <p className="price">10€ / jour</p>
              </Card.Text>
              <Link
                to="Devis-gratuit"
                className="link-card text-center"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Demander un devis
              </Link>
              <Link
                to="contact-me"
                className="link-card text-center"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Me contacter
              </Link>
            </Card>
          </Col>
          <Col>
            <p className="text-center pb-2">
              Secteur : 15km autour de Marange-Silvange
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Tarif
