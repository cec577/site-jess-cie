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
      <p className="font-weight-bold text-secondary px-lg-4">
        Première visite{" "}
        <span className="text-danger text-uppercase">gratuite</span>, pour
        établir un premier contact avec l'animal et prendre note de tous ses
        besoins au quotidien.
      </p>
      <p className="text-center text-secondary">
        Les prix varient selon le nombre d'animaux:
      </p>

      <Container>
        <Row>
          <Col
            className="col-12 col-md-6 col-lg-4 tarif pb-2"
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
            className="col-12 col-md-6 col-lg-4 tarif pb-2"
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
            className="col-12 col-md-6 col-lg-4 tarif pb-2"
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
          <Col md="12">
            <p className="text-center">
              Secteur : 15km autour de Marange-Silvange
            </p>
            <p className="text-center pb-2 px-lg-4 text-secondary">
              Je travaille aussi avec une thérapeute energétique qui peut
              intervenir en cas d'urgence en attendant d'aller chez le
              vétérinaire si votre animal se blesse .
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Tarif
