import './Header.css'
import computer from "./img/logo_header.avif"
import france_flag from "./img/drapeau-france.png"
import english_flag from "./img/drapeau-anglais.png"
import download from './img/download.webp'
import React, {useState} from 'react'

export default function Header() {
    const [language, setLanguage] = useState('English')
    const handleLangue = (lang) => {
        setLanguage(lang);
    }
    return(
        <header>
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
                <p>{language==='English' ? "My name is Loïs Isnel, i am a young developper, studying at" : "Je m'appelle Loïs, je suis un jeune développeur étudiant à "} <a href="https://www.epitech.eu/ecole-informatique-marseille/" target="_blank" rel="noreferrer">Marseille Epitech</a> {language==='French' ? 'et alternant dans l\'entreprise' : 'and alternating at'} <a href="https://afmicado.com/" target="_blank" rel="noreferrer">Micado {language==="English" ? "company" : ""}</a>.</p>
                <p>I learn AI, web/Application development, and Data engineering to become a IT engineer in one of this domain.</p>
                <p>I really love computer science, and science in general. My goal is to learn more of it and working to create software which help people.</p>
            </div>
            <div id="download_button">
                <a href="./Loïs Isnel.pdf" download="Loïs Isnel CV.pdf" tabIndex="-1">
                    <button source={download}>My CV<img src={download} alt="Download" download="./Loïs Isnel.pdf"></img></button>
                </a>
            </div>
            <br></br>
            <br></br>

        </header>
    )
}