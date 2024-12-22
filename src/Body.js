import "./Body.css"
import python from "./img/python.png"
import reactjs from "./img/reactjs.webp"
import windev from "./img/windev.png"
import web from "./img/web.webp"
import vscode from "./img/vscode.png"
import linux from "./img/Linux.png"
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
import { useContext } from "react"

export default function Body() {
    const {language} = useContext(ToggleLanguage)
    return(
        <div id="body">
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
            
            <h2><img src={study} alt="Studies"></img>Studies</h2>
            <div className="content">
                <div className="school">
                    <div className="oneStudy">
                        <img src={lycee} alt="Lycée Paul Arène"></img>
                        <h3>Sociologic and Economic</h3> 
                        <span>Baccalaureate at Sisteron Paul Arène School City - 2020</span>
                    </div>
                </div>

                <div className="school">
                    <div className="oneStudy">
                        <img src={feg} alt="FEG"></img>
                        <h3>Mathematic and Informatic apply to Human and Social Sciences</h3>
                        <span> Bachelor's degree at Aix-en-Provence Faculty of Economic and Managing (FEG) - 2023</span>
                    </div>
                </div>

                <div className="school">
                    <div className="oneStudy">
                        <img src={epitech} alt="Epitech"></img>
                        <h3>Software architect, application developper MSc</h3>
                        <span> Master's degree at Marseille Epitech - 2025</span>
                    </div>
                </div>
            </div>

            <h2><img src={work} alt="work"></img>Work experiency</h2>
            <div className="content">
                <div className="job">
                    <img src={micado} alt="Micado"></img>
                    <div className="oneJob">
                        <h3>Alternetly technician developper</h3>
                        <p>Since 2024 February to now</p>
                        <p>Work : Development, deployment and monitoring of applications, creation of specifications loads Big Data, model design, creation and management of databases, web site development, Big Data</p>
                        <p>Technologies: Windev, Python, Linux, VScode</p>
                    </div>
                </div>

                <div className="job">
                    <img src={BNP} alt="BNP Paribas"></img>
                    <div className="oneJob">
                        <h3>{language==='French' ? "Stage" : "Internship"}</h3>
                        <p>{language==='French' ? "Avril - Mai 2023" : "2023 April - May"}</p>
                        <p>Classification and archiving of data/documents, computer processing,
                        document digitization, in charge of reception missions, reminders and follow-up
                        files, digitalization</p>
                    </div>
                </div>

                <div className="job">
                    <img src={Macdo} alt="Macdonald's"></img>  
                    <div className="oneJob">
                        <h3>Polyvant Employee</h3>
                        <p>2023 December - 2024 January / 2023 July / 2023 March - August</p>
                        <p>Preparing and serving orders to customers on time, cleaning and
                        storage of utensils, machines and place, closure of the restaurant</p>
                    </div>
                </div>
            </div>

            <h2><img src={projet} alt="Projet"></img>My projects</h2>
            <div className="content">
                <div className="project">
                    <img src={zoidberg} alt="IA project, Zoidberg 2.0"></img>
                    <div className="oneProject">
                        <h3>Zoidberg 2.0</h3>
                        <p>IA's development to classify x-ray pictures as sickness or healthy lungs.</p>
                        <p>Technologies: Python, Jupyter</p>
                    </div>
                </div>

                <div className="project">
                    <img src={cryptech} alt="Big Data project, Cryptech"></img>
                    <div className="oneProject">
                        <h3>Cryptech</h3>
                        <p>Big Data managing, scrapping of crypto-coins add charts display.</p>
                        <p>Technologies: React.js, Express.js, Docker</p>
                    </div>
                </div>

                <div className="project">
                    <img src={epicroadtrip} alt="Web project, EpicRoadTrip"></img>
                    <div className="oneProject">
                        <h3>EpicRoadTrip</h3>
                        <p>Journey planifier using an API tools. We also create test to recover 80% of the Back-end.</p>
                        <p>Technologies: Angular.ts, Jest</p>
                    </div>
                </div>
            </div>
        </div>
    )
}