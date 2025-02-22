import React from "react"
import "./Navbar.css"
//import { Link } from "react-router-dom"

import study from "./img/study.png"
import code from "./img/code.png"
import work from "./img/programmation.png"
import projet from "./img/projet.png"
import contact from './img/contact.png'

import {ToggleLanguage} from "./toggleLanguage"
import { useContext } from "react"

export default function Navbar() {
    const {language} = useContext(ToggleLanguage)
    return (
        <div id="all_navbar">
            <a href="#header" id="Presentation">LI</a>
            <div id="little_navbar">
                <a href="#Technologies">
                    <img src={code} alt="Technologies"></img>
                    <span>Technologies</span>
                </a>
                <a href="#Studies">
                    <img src={study} alt="Studies"></img>
                    <span>{language==='French'?"Études":"Studies"}</span>
                </a>
                <a href="#Work">
                    <img src={work} alt="Work"></img>                    
                    <span>{language==='French'?"Travail":"Job"}</span>
                </a>
                <a href="#Project">
                    <img src={projet} alt="Project"></img>
                    <span>{language==='French'?"Projet":"Project"}</span>
                </a>
                <a href="#nav_to_footer">
                    <img src={contact} alt="Contact me"></img>
                    <span>Contact</span>
                </a>
            </div>
        </div>
    )
}