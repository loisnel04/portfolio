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
import postgresql from "./img/postgresql.png"
import mongodb from "./img/mongodb.png"

import epitech from "./img/Epitech.png" 
import lycee from "./img/sisteron.png"
import feg from "./img/feg.png"

import taxidriver from "./img/taxidriver.png"
import soundtools from "./img/soundtools.png"
import homepedia from "./img/homepedia.png"

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
                    <img src={postgresql} alt="PostgreSQL"></img>
                    <img src={mongodb} alt="MongoDB"></img>
                </div>
            </div>
            
            <div id="Studies"></div>
            <br></br>

            <h2><img src={study} alt="Studies"></img>{language==='French' ? "Études" : "Studies"}</h2>
            <div ref={sectionRef} className={`content fade-in-section ${isVisible ? "visible":""}`}>
                <div className="school">
                    <div className="oneStudy">
                        <img src={epitech} alt="Epitech"></img>
                        <h3>{language==='French'?'Master MSc':"Master's Degree MSc"} (2025)</h3>
                        <span>{language==='French'?"Architecte logiciel, développeur d'application, spécialité Big Data et IA - ":'Software architect, application developper, Big Data and AI speciality - '}Epitech Marseille</span>
                        <p style={{ whiteSpace: "pre-line" }}>
                        {language === 'French'
                            ? `
                        Le programme était fortement axé sur l'apprentissage autodirigé.
                        Cette approche m'a permis de développer de solides compétences en auto-apprentissage.
                        J'ai acquis de l'expérience en développement d'IA, en création d'applications traitant des ensembles de données à grande échelle, ainsi qu'en analyse et traitement de données.
                        `
                            : `
                        The program was strongly focused on self-directed learning.
                        This approach enabled me to develop strong self-learning skills.
                        I gained experience in AI development, in building applications that handle large-scale datasets, as well as in data analysis and processing.
                        `
                        }
                        </p>

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
                        <img src={lycee} alt="Lycée Paul Arène"></img>
                        <h3>{language==='French' ? 'Baccalauréat' : 'Baccalaureate'} (2020)</h3> 
                        <span>{language==='French' ? 'Économie et social - Lycée ':'Sociologic and Economic - Highschool '}Paul Arène, Sisteron</span>
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
                        <p>{language==='French'?'Depuis Février 2024 à Juillet 2025':'Since 2024 February to 2025 July'}</p>
                        <ul>
                            {language === 'French'
                                ? [
                                    "Développement, refonte, déploiement et maintenance d'application interne et externe",
                                    "Création et gestion de base de données",
                                    "Développement de site web",
                                    "Travail sur l'IA",
                                    "Linux et logiciels de CAO"
                                ].map((item, i) => <li key={i}>{item}</li>)
                                : [
                                    "Development, redesign, deployment, maintenance of internal and external applications",
                                    "Design, creation, and management of application databases",
                                    "Optimized numerical engineering workflows by leveraging Sparse AI and Python modules, reducing computation time from several hours to just a few seconds",
                                    "Integration of AI and Sparse AI methods into the company’s competency framework",
                                    "Automation of software installation, download, and launch processes",
                                    "Numerical Engineering (CFD, CAD)"
                                ].map((item, i) => <li key={i}>{item}</li>)
                            }
                        </ul>
                        <p>Technologies: Windev, Python, Javascript, Linux, VScode, NeurEco, {language==='French'?"outils de CAO et CFD":"CAD and CFD tools"}</p>
                    </div>
                </div>

                <div className="job">
                    <img src={BNP} alt="BNP Paribas"></img>
                    <div className="oneJob">
                        <h3>{language==='French' ? "Stage, Agent d'accueil saisonnier" : "Internship, Seasonnal Bank assistant"}</h3>
                        <p>{language==='French' ? "Décembre, Avril - Mai, Août 2023" : "December, April - May, August 2023"}</p>
                        <ul>
                            {language==='French'
                                ? [
                                    "Classification et archivage de données et documents",
                                    "Traitement informatique, digitalisation de document",
                                    "Missions de réception",
                                    "Rappel et suivi de documents"
                                ].map((item, i) => <li key={i}>{item}</li>)
                                : [
                                    "Classification and archiving of data/documents",
                                    "Computer processing",
                                    "Document digitization",
                                    "Reception missions",
                                    "Reminders and follow-up files"
                                ].map((item,i) => <li key={i}>{item}</li>)
                            }
                        </ul>
                    </div>
                </div>

                <div className="job">
                    <img src={Macdo} alt="Macdonald's"></img>  
                    <div className="oneJob">
                        <h3>{language==='French'?"Employé polyvalent":"Polyvant Employee"}</h3>
                        <p>{language==='French'?"Décembre 2023 - Janvier 2024, Juillet, Mars - Août 2023":"2023 December - 2024 January / 2023 July / 2023 March - August"}</p>
                        <ul>
                            {language==='French'
                                ? [
                                    "Préparation et service des commandes des clients dans les temps",
                                    "Nettoyage et rangements des ustensiles et du lieu de travail", 
                                    "Fermeture et ouverture du restaurant"
                                ].map((item,i) => <li key={i}>{item}</li>)
                                : [
                                    "Preparing and serving orders to customers on time", 
                                    "Cleaning and maintaining kitchen equipment and workspace", 
                                    "Opening and closing the restaurant"
                                ].map((item,i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>

            <div id="Project"></div>
            <br></br>

            <h2><img src={projet} alt="Projet"></img>{language==='French'?"Mes projets":"My projects"}</h2>
            <div className={`content fade-in-section ${isVisible ? "visible":""}`}>
                <div className="project">
                    <img src={soundtools} alt="End Of Study Project - SoundTools GPT"></img>
                    <div className="oneProject">
                        <h3>SoundTools GPT</h3>
                        <p>
                            {language==='French'
                            ?
                            `Développement d'une application web de génération d'échantillons musicaux et de presets personnalisés à l'aide de l'IA,
                            gestion des requêtes utilisateurs en temps réel. Contribution au sein de l'équipe IA,
                            axée sur la programmation IA, l'intégration de chat et la connexion des modèles d'IA au front-end
                            dans un environnement d'équipe Scrum.`
                            :
                            `Developed a web application for generating custom music samples and presets using AI, 
                            managing real-time user requests. Contributed as part of the AI team, 
                            focusing on AI programming, chat integration, and connecting AI models to the front-end 
                            within a Scrum team environment.`
                            }
                            </p>
                        <p>Technologies: Python, Flask, TensorFlow, Bert, Java Springboot, Angular.js</p>
                    </div>
                </div>

                <div className="project">
                    <img src={taxidriver} alt="AI Agent project, Taxi Driver"></img>
                    <div className="oneProject">
                        <h3>Taxi Driver</h3>
                        <p>
                            {language==='French'
                            ?
                            `Implémentation d'algorithmes d'apprentissage par renforcement (Q-Learning, Sarsa, Deep Q-Learning) sur l'environnement 
                            Taxi-v3 d'OpenAI Gymnasium, optimisant un agent pour naviguer efficacement dans une grille, 
                            prendre des passagers et les déposer à destination.
                            J'ai aussi créé un GUI avec PyGame pour ajouter des bombes que le taxi doit éviter.`
                            :
                            `Implemented reinforcement learning algorithms (Q-Learning, Sarsa, Deep Q-Learning) on the OpenAI Gymnasium 
                            Taxi-v3 environment, optimizing an agent to efficiently navigate a grid world, 
                            pick up passengers, and drop them at target destinations.
                            I also created a GUI with PyGame to add bomb that the taxi must avoid.`}
                        </p>
                        <p>Technologies: Python, OpenAI Gym, PyGame, NumPy</p>
                    </div>
                </div>

                <div className="project">
                    <img src={homepedia} alt="Web and Big Data project, Home Pedia"></img>
                    <div className="oneProject">
                        <h3>Home Pedia</h3>
                        <p>
                            {language==='French'
                                ?
                                    `Homepedia est une application web conçue pour cartographier les logements disponibles en France,
                                    offrant des visualisations interactives au niveau des villes, départements, régions et national.`
                                :
                                    `Homepedia is a web application designed to map available housing across France, 
                                    offering interactive visualizations at city, department, regional, and national levels.`
                            }
                            </p>
                        <p>Technologies: Angular.js, Python, MongoDB, Node.js</p>
                    </div>
                </div>
            </div>
            <div id="nav_to_footer"></div>
        </div>
    )
}