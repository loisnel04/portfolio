import './Header.css'
import computer from "./img/logo_header.avif"
import france_flag from "./img/drapeau-france.png"
import english_flag from "./img/drapeau-anglais.png"

export default function Header() {
    const handleLangue = () => {

    }
    return(
        <header>
            <div id="first_bar">
                <h2>Isnel Loïs</h2>
                <h1>Portfolioïs</h1>
                <div id="img">
                    <img src={france_flag} alt="france flag" onClick={handleLangue}></img>
                    <img src={english_flag} alt="english flag" onClick={handleLangue}></img>
                </div>
            </div>
            
            <div id="myself">
                <h3>Welcome.</h3>
                <img src={computer} alt="computer"></img>
                <p>My name is Loïs Isnel, i am a young developper, studying at <a href="https://www.epitech.eu/ecole-informatique-marseille/" target="_blank" rel="noreferrer">Marseille Epitech</a> and alternating at <a href="https://afmicado.com/" target="_blank" rel="noreferrer">Micado company</a>.</p>
                <p>I learn AI, web/Application development, and Data engineering to become a IT engineer in one of this domain.</p>
                <p>I really love computer science, and science in general. My goal is to learn more of it and working to create software which help people.</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </header>
    )
}