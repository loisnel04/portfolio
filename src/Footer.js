import linkedin_logo from './img/LinkedIn_icon.svg.png'
import git_logo from './img/github.png'
import mail from './img/mail.png'
import './Footer.css'
import emailjs from 'emailjs-com'
import {ToggleLanguage} from "./toggleLanguage"
import { useContext } from "react"

export default function Footer() {
    /*const sendMail = () => {
        var message = document.getElementById('mail_content').value
        var name = document.getElementById('user_name').value
        var mail = document.getElementById('from_mail').value
        var email = 'mailto:lois.isnel@gmail.com&subject=From ' + encodeURIComponent(name) + '&body=' + encodeURIComponent(message) + 'Sent by: \n' + encodeURIComponent(mail)
        window.location.href = email;
    }*/
    const {language} = useContext(ToggleLanguage)

    const sendForm = (e) => {
        e.preventDefault()
        const serviceID='service_pwyl5dn'
        const templateID='template_nlf3sfd'
        const userID='Q6VneJowp8a2sNLqB'

        emailjs.sendForm(serviceID, templateID, e.target, userID, document.getElementById)
        .then((result) => {
            alert("Message sent successfully")
            console.log(result)
        })
        .catch((error) => {
            alert("failed to send message, please try again later")
            console.log(error)
        })
    }

    return (
        <div id="footer">
            <br></br>
            <br></br>
            <h1 id="title_footer">{language==='French'?"Me contacter":"Contact me"}</h1>
            <p id="info">{language==='French'?"Pour toutes questions ou informations supplémentaires, n'hésitez pas à me contacter":"Do not hesitate to contact me for any questions or furthers informations"}</p>
            
            <form onSubmit={sendForm}>
                <div id="contact">
                    <div className="input_label">
                        <p>{language==='French'?"Nom":"Name"}</p>
                        <input type="text" placeholder={language==='French'?"Votre nom":"Your name"} id="user_name" required/>
                    </div>

                    <div className="input_label">
                        <p>Email</p>
                        <input type="email" placeholder={language==='French'?"Votre Email":"Your Email"} id="from_mail" name="from_name" required/>
                    </div>
                    
                    <div className="input_label">
                        <p>Message</p>
                        <textarea placeholder={language==='French'?"Votre message":"Your message"} id="mail_content" name="message_content" required/>
                    </div>
                </div>
                <div id="button">
                    <button type="submit">Send</button>
                </div>
            </form>

            <div className="image">
                <a href="https://www.linkedin.com/in/lo%C3%AFs-isnel-b54b4b209/" target="_blank" rel="noreferrer">
                    <div className="oneImg linkedin_logo" >
                        <img src={linkedin_logo} className="App-logo" alt="Linkedin's logo" />
                    </div>
                </a>
                
                <a href="https://github.com/loisnel04" target="_blank" rel="noreferrer">
                    <div className="oneImg github_logo">
                        <img src={git_logo} className="App-logo" alt="Github's logo" />
                    </div>
                </a>

                <a href='mailto:lois.isnel@gmail.com'>
                    <div className="oneImg mail_logo">    
                        <img src={mail} className="App-logo" alt="Mail's contact" />
                    </div>
                </a>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}