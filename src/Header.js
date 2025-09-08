import './Header.css'
import computer from "./img/logo_header.avif"
import france_flag from "./img/drapeau-france.png"
import english_flag from "./img/drapeau-anglais.png"
import download from './img/download.webp'
import React, {useContext, useState} from 'react'
import {ToggleLanguage} from './toggleLanguage'
import CV from "./Loïs Isnel CV.pdf"

export default function Header() {
    const {language, setLanguage} = useContext(ToggleLanguage)
    const [fade, setFade] = useState(false)
    const handleLangue = (lang) => {
        if (language !== lang) {
            setFade(true)
            setTimeout(() => {
                setLanguage(lang);
                setFade(false);
            }, 500);
        }
    }

    return(
        <header className={`${fade ? 'fade-out' : 'fade-in'}`}  >
            <div id="first_bar">
                <h2>Isnel Loïs</h2>
                <h1>Portfolioïs</h1>
                <div id="img">
                    <img src={france_flag} alt="france flag" onClick={() => handleLangue('French')}></img>
                    <img src={english_flag} alt="english flag" onClick={() => handleLangue('English')}></img>
                </div>
            </div>
            
            <div id="myself">
                <h3>{language==='French' ? "Bienvenue" : "Welcome"}.</h3>
                <img src={computer} alt="computer"></img>
                <div id="text">
                    <p>{language==='English' ? "My name is Loïs Isnel, i am a junior developper, recently graduated with a Master’s degree in Software Architecture and Application Development from" : "Je m'appelle Loïs, je suis un développeur junior, récemment diplomé du Master Architecte Logicielle, Développeur d'Application de l'école d'informatique "} <a href="https://www.epitech.eu/ecole-informatique-marseille/" target="_blank" rel="noreferrer">Marseille Epitech</a> {language==='French' ? 'et anciennement alternant au sein de l\'entreprise' : 'and formerly an apprentice at'} <a href="https://afmicado.com/" target="_blank" rel="noreferrer">Micado {language==="English" ? "company" : ""}</a>.</p>
                    <p>{language==='English' ? "I learn AI, web/Application development, and Big Data to become a Software Engineer in one of this domain." : "J'apprends le développement d'IA, de site web et d'application et le Big Data pour devenir un Ingénieur Logiciel dans l'un de ces domaines."}</p>
                    <p>{language==='English' ? "I have a deep passion for computer science and science in general. My goal is to apply my knowledge and skills in computer science to the field of medicine. I love helping people and aspire to contribute to their well-being by using technology to improve healthcare." : "Je suis passioné par l'informatique, et les sciences en général. Mon objectif est d'utiliser mes connaissances et mes compétences en informatique pour la médecine. J'aime aider les gens et j’aspire à contribuer à leur bien-être en utilisant la technologie pour améliorer les soins de santé."}</p>
                </div>
            </div>
            <div id="download_button">
            <a href={CV} download="lois_isnel.pdf" tabIndex="-1">
                <button>{language === 'English' ? "My CV" : "Mon CV"} <img src={download} alt="Download" /></button>
            </a>
            </div>
            <br></br>

        </header>
    )
}