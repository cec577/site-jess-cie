import React from "react"

import { Col, Row } from "react-bootstrap"
import promenade from "../images/furax.jpg"

const PromenadeEducative = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <h2 className="subtitles text-center" id="Promenage-educative">
        La promenade éducative
      </h2>
      <Row>
        <div className="col-12 col-md-6 m-auto" data-aos="fade-right">
          <img
            src={promenade}
            alt="me"
            className="image-animal rounded shadow"
          />
        </div>
        <Col className="col-12 col-md-6 m-auto" data-aos="fade-left">
          <p class="mx-md-5">
            Ayant fait de nombreux concours d’agility, d’obéissance, de RING et
            de MONDIORING, notamment avec mon chien Furax au paradis d’Orsy
            (berger belge malinois) avec qui j’ai été sélectionné au championnat
            de France MONDIORING, je saurais montrer les bases d’éducation à
            votre chien pour une vie plus agréable au sein de votre famille et
            en ballade.
          </p>
        </Col>
      </Row>
      <div className="pt-2">
        Une éducation positive basée sur la confiance et le respect du chien.
      </div>
    </>
  )
}

export default PromenadeEducative
