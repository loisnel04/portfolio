import "./Body.css"
import python from "./img/python.png"
import reactjs from "./img/reactjs.webp"
import windev from "./img/windev.png"
import web from "./img/web.webp"
import vscode from "./img/vscode.png"
import linux from "./img/Linux.png"
import github from "./img/github.png"
import jupyter from "./img/Jupyter.png"
import micado from "./img/afmicado_logo.png"
import study from "./img/study.png"
import BNP from "./img/BNP-Paribas-Logo.png"
import Macdo from "./img/Logo_France_Mcdo.png"
import code from "./img/code.png"
import work from "./img/programmation.png"
import projet from "./img/projet.png"

export default function Body() {
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
                </div>
            </div>
            
            <h2><img src={study} alt="Studies"></img>Studies</h2>
            <div className="content">
                <div className="school">
                    <div className="oneStudy">
                        <h3>Sociologic and Economic</h3> 
                        <span>Baccalaureate - 2020</span>
                    </div>
                    <div className="oneStudy">
                        <h3>Mathematic and Informatic apply to Human and Social Sciences</h3>
                        <span> Bachelor's degree - 2023</span>
                    </div>
                    <div className="oneStudy">
                        <h3>Software architect, application developper MSc</h3>
                        <span> Master's degree - 2025</span>
                    </div>
                </div>
            </div>

            <h2><img src={work} alt="work"></img>Work experiency</h2>
            <div className="content">
                <div className="job">
                    <img src={micado} alt="Micado"></img>
                    <div className="oneJob">
                        <h3>Alternetly technician developper</h3>
                    </div>
                </div>

                <div className="job">
                    <img src={BNP} alt="BNP Paribas"></img>
                    <div className="oneJob">
                        <h3>Internship</h3>
                        <p>test</p>
                    </div>
                </div>

                <div className="job">
                    <img src={Macdo} alt="Macdonald's"></img>  
                    <div className="oneJob">
                        <h3>Polyvant Employee</h3>
                    </div>
                </div>
            </div>

            <h2><img src={projet} alt="Projet"></img>My projects</h2>
            <div className="content">

            </div>
        </div>
    )
}