import React from "react"
import { Link } from "gatsby"
import { FaPaw } from "react-icons/fa"

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import logo from "../images/logo.png"

const Avantages = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <h2 className="subtitles" id="avantages">
        Garde d’animaux à domicile
      </h2>

      <div class="advantages mt-md-2" data-aos="fade-up">
        <div className="d-flex justify-content-center">
          <p>
            <FaPaw />
            Votre animal reste dans un environnement familier
          </p>
        </div>

        <div className="d-flex justify-content-center">
          <p>
            <FaPaw />
            Il s'agit d'une prestation personnalisée, puisque vous pouvez
            indiquer tous ses besoins (médicaments, alimentation, etc.).
          </p>
        </div>

        <div className="d-flex justify-content-center">
          <p>
            <FaPaw />
            Il est encadré et bénéficie de soins et de promenades journalières.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <p>
            <FaPaw />
            Cette expérience lui permet de ne pas être stressé par le voyage ou
            par la présence d'autres animaux.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <p>
            <FaPaw />
            Une présence au sein de votre logement tous les jours.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <p>
            <FaPaw />
            Si vous avez un jardin ou des plantes, je m’en occuperai également.
          </p>
        </div>
      </div>
    </>
  )
}

export default Avantages
