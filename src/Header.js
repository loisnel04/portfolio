import './Header.css'
import computer from "./img/logo_header.avif"
import france_flag from "./img/drapeau-france.png"
import english_flag from "./img/drapeau-anglais.png"
import download from './img/download.webp'
import React, {useContext, useState} from 'react'
import {ToggleLanguage} from './toggleLanguage'
import CV from "./lois_isnel.pdf"
import CV_EN from "./Lois_Isnel_CV_EN.pdf"

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
                    <p>{language==='English' ? "My name is Loïs Isnel, i am a young developper, studying at" : "Je m'appelle Loïs, je suis un jeune développeur étudiant à "} <a href="https://www.epitech.eu/ecole-informatique-marseille/" target="_blank" rel="noreferrer">Marseille Epitech</a> {language==='French' ? 'et alternant dans l\'entreprise' : 'and alternating at'} <a href="https://afmicado.com/" target="_blank" rel="noreferrer">Micado {language==="English" ? "company" : ""}</a>.</p>
                    <p>{language==='English' ? "I learn AI, web/Application development, and Big Data to become a IT engineer in one of this domain." : "J'apprends le développement d'IA, de site web et d'application et le Big Data pour devenir un ingénieur informatique dans l'un de ces domaines."}</p>
                    <p>{language==='English' ? "I have a deep passion for computer science and science in general. My goal is to apply my knowledge and skills in computer science to the field of medicine. I love helping people and aspire to contribute to their well-being by using technology to improve healthcare." : "J'aime énormément l'informatique, et les sciences en général. Mon objectif est d'utiliser mes connaissances et mes compétences en informatique pour la médecine. Parceque j'aime aider les personnes, et je veux aider dans ce but, aider les personnes à se sentir mieux."}</p>
                </div>
            </div>
            <div id="download_button">
            <a href={language==='French'?CV:CV_EN} download="lois_isnel.pdf" tabIndex="-1">
                <button>{language === 'English' ? "My CV" : "Mon CV"} <img src={download} alt="Download" /></button>
            </a>
            </div>
            <br></br>

        </header>
    )
}