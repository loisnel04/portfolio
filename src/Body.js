import "./Body.css"
import python from "./img/Python.webp"
import reactjs from "./img/React.png"
import windev from "./img/pcsoft.png"
import web from "./img/web.webp"
import vscode from "./img/VS_codepng.png"
import linux from "./img/Tux.png"
import github from "./img/github.png"
import jupyter from "./img/Jupyter.png"
import angular from "./img/angular.png"
import micado from "./img/afmicado_logo.png"
import study from "./img/study.png"
import BNP from "./img/BNP-Paribas-Logo.png"
import Macdo from "./img/Logo_France_Mcdo.png"
import code from "./img/code.png"
import work from "./img/programmation.png"
import projet from "./img/projet.png"

import epitech from "./img/Epitech.png" 
import lycee from "./img/sisteron.png"
import feg from "./img/feg.png"

import epicroadtrip from "./img/EpicRoadTrip.png"
import zoidberg from "./img/zoidberg.png"
import cryptech from "./img/crypto.webp"

import {ToggleLanguage} from "./toggleLanguage"
import { useContext, useEffect, useState, useRef } from "react"

export default function Body() {
    const {language} = useContext(ToggleLanguage)
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            {threshold: 0.1}
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, []);

    return(
        <div id="body">

            <div id="Technologies"></div>
            <br></br>

            <h2><img src={code} alt="code"></img>Technologies</h2>
            <div id="scroll-container">
                <div id="language">
                    <img src={python} alt="python"></img>
                    <img src={reactjs} alt="react js"></img>
                    <img src={windev} alt="windev"></img>
                    <img src={web} alt="web"></img>
                    <img src={vscode} alt="VScode"></img>
                    <img src={linux} alt="Linux"></img>
                    <img src={github} alt="Github"></img>
                    <img src={jupyter} alt="Jupyter"></img>
                    <img src={angular} alt="Angular"></img>
                </div>
            </div>
            
            <div id="Studies"></div>
            <br></br>

            <h2><img src={study} alt="Studies"></img>{language==='French' ? "Études" : "Studies"}</h2>
            <div ref={sectionRef} className={`content fade-in-section ${isVisible ? "visible":""}`}>
                <div className="school">
                    <div className="oneStudy">
                        <img src={lycee} alt="Lycée Paul Arène"></img>
                        <h3>{language==='French' ? 'Baccalauréat' : 'Baccalaureate'} (2020)</h3> 
                        <span>{language==='French' ? 'Économie et social - Lycée ':'Sociologic and Economic - Highschool '}Paul Arène, Sisteron</span>
                    </div>
                </div>

                <div className="school">
                    <div className="oneStudy">
                        <img src={feg} alt="FEG"></img>
                        <h3>{language==='French' ?'Licence':"Bachelor's Degree"} (2023)</h3>
                        <span>{language==='French'?"Mathématique et Informatique Appliquées aux Sciences Humaines et Sociales - Facculté d'Économie et de Gestion":'Mathematic and Informatic apply to Human and Social Sciences - Faculty of Economic and Managing'}, Aix-en-Provence</span>
                    </div>
                </div>

                <div className="school">
                    <div className="oneStudy">
                        <img src={epitech} alt="Epitech"></img>
                        <h3>{language==='French'?'Master MSc':"Master's Degree MSc"} (2025)</h3>
                        <span>{language==='French'?"Architecte logiciel, développeur d'application - ":'Software architect, application developper - '}Epitech Marseille</span>
                    </div>
                </div>
            </div>

            <div id="Work"></div>
            <br></br>

            <h2><img src={work} alt="work"></img>{language==='French'?'Expérience professionnelle':'Work experiency'}</h2>
            <div className={`content fade-in-section ${isVisible ? "visible":""}`}>
                <div className="job">
                    <img src={micado} alt="Micado"></img>
                    <div className="oneJob">
                        <h3>{language==='French'?'Alternant technicien informatique':'Alternently IT technician'}</h3>
                        <p>{language==='French'?'Depuis Février 2024 à maintenant':'Since 2024 February to now'}</p>
                        <p>{language==='French'?"Travaille: Développement, déploiement et maintenance d'application, création et gestion de base de données, développement de site web, travaille sur l'IA, Linux et des logiciels de CAO":"Work : Development, deployment and monitoring of applications, creation and management of databases, web site development, work on AI, Linux and CAO software"}</p>
                        <p>Technologies: Windev, Python, Linux, VScode, {language==='French'?"outils de CAO":"CAO tools"}</p>
                    </div>
                </div>

                <div className="job">
                    <img src={BNP} alt="BNP Paribas"></img>
                    <div className="oneJob">
                        <h3>{language==='French' ? "Stage, Agent d'accueil saisonnier" : "Internship, Seasonnal Bank assistant"}</h3>
                        <p>{language==='French' ? "Décembre, Avril - Mai, Août 2023" : "December, April - May, August 2023"}</p>
                        <p>{language==='French'?"Classification et archivage de données et documents, traitement informatique, digitalisation de document, en charges des missions de réception, rappel et suivi de documents":"Classification and archiving of data/documents, computer processing, document digitization, in charge of reception missions, reminders and follow-up files"}</p>
                    </div>
                </div>

                <div className="job">
                    <img src={Macdo} alt="Macdonald's"></img>  
                    <div className="oneJob">
                        <h3>{language==='French'?"Employé polyvalent":"Polyvant Employee"}</h3>
                        <p>{language==='French'?"Décembre 2023 - Janvier 2024, Juillet, Mars - Août 2023":"2023 December - 2024 January / 2023 July / 2023 March - August"}</p>
                        <p>{language==='French'?"Préparation et service des commandes des clients dans les temps, nettoyage et rangements des ustensiles et du lieu de travail, fermeture et ouverture du restaurant":"Preparing and serving orders to customers on time, Cleaning and maintaining kitchen equipment and workspace, opening and closing the restaurant"}</p>
                    </div>
                </div>
            </div>

            <div id="Project"></div>
            <br></br>

            <h2><img src={projet} alt="Projet"></img>{language==='French'?"Mes projets":"My projects"}</h2>
            <div className={`content fade-in-section ${isVisible ? "visible":""}`}>
                <div className="project">
                    <img src={zoidberg} alt="IA project, Zoidberg 2.0"></img>
                    <div className="oneProject">
                        <h3>Zoidberg 2.0</h3>
                        <p>{language==='French'?"Développement d'une IA classifiant des images de radiographie de poumons malades ou sains.":"AI's development to classify x-ray pictures as sickness or healthy lungs."}</p>
                        <p>Technologies: Python, Jupyter</p>
                    </div>
                </div>

                <div className="project">
                    <img src={cryptech} alt="Big Data project, Cryptech"></img>
                    <div className="oneProject">
                        <h3>Cryptech</h3>
                        <p>{language==='French'?"Big Data, scrapping de crypto-monnaies et affichages des flux en temps réel sous forme de graphiques":"Big Data managing, scrapping of crypto-coins and charts displaying data flow in real time."}</p>
                        <p>Technologies: React.js, Express.js, Docker</p>
                    </div>
                </div>

                <div className="project">
                    <img src={epicroadtrip} alt="Web project, EpicRoadTrip"></img>
                    <div className="oneProject">
                        <h3>EpicRoadTrip</h3>
                        <p>{language==='French'?"Planificateur de voyage utilisant une API. Test recouvrant 80% du Back-end":"Journey planifier using an API tools. We also create test to recover 80% of the Back-end."}</p>
                        <p>Technologies: Angular.ts, Jest</p>
                    </div>
                </div>
            </div>
            <div id="nav_to_footer"></div>
        </div>
    )
}