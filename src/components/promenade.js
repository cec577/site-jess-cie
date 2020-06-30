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
      <p className="px-md-2 px-lg-4 pb-1" data-aos="fade-up">
        Vous travaillez et n’avez pas le temps de sortir votre animal
        convenablement ? Appelez JESS&CIE, je serais à votre disposition et à
        celle de votre toutou pour de longues ballades et travaillerais les
        exercices demandés (exemples : marche aux pieds, se mettre assis à
        chaque arrêt, rappel aux pieds…etc.).
      </p>
      <Row>
        <div className="col-12 col-md-6 m-auto" data-aos="fade-right">
          <img
            src={promenade}
            alt="me"
            className="image-animal rounded shadow"
          />
        </div>
        <Col className="col-12 col-md-6 m-auto" data-aos="fade-left">
          <p class="mx-md-5 pt-1 pt-md-0">
            Ayant fait de nombreux concours dans différentes disciplines
            (Obéissance, Agility, Ring, etc…), notamment avec mon chien Furax au
            paradis d’Orsy (berger belge malinois) avec qui j’ai été sélectionné
            au championnat de France Mondioring, je saurais montrer les bases
            d’éducation à votre chien pour une vie plus agréable au sein de
            votre famille et en ballade.
          </p>
        </Col>
      </Row>
      <div className="pt-2 promenade-quote">
        Une éducation positive basée sur la confiance et le respect du chien.
      </div>
    </>
  )
}

export default PromenadeEducative
