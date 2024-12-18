import linkedin_logo from './img/LinkedIn_icon.svg.png'
import git_logo from './img/github.png'
import mail from './img/mail.png'
import './Footer.css'

export default function Footer() {
    const sendMail = () => {
        var message = document.getElementById('mail_content').value
        var email = 'mailto:lois.isnel@gmail.com&body=' + encodeURIComponent(message)
        window.location.href = email;
    }
    return (
        <div id="footer">
            <h1 id="title_footer">Contact me</h1>
            <p id="info">Do not hesitate to contact me for any questions or furthers informations</p>
            
            <div id="contact">
                <div className="input_label">
                    <p>Nom</p>
                    <input type="text" placeholder="Your name"/>
                </div>

                <div className="input_label">
                    <p>Email</p>
                    <input type="text" placeholder="Your email"/>
                </div>
                
                <div className="input_label">
                    <p>Message</p>
                    <textarea type="text" placeholder="Your message" id="mail_content" />
                </div>
            </div>
            <div id="button">
                <button onClick={sendMail}>Send</button>
            </div>
            <div className="image">
                <a href="https://www.linkedin.com/in/lo%C3%AFs-isnel-b54b4b209/" target="_blank" rel="noreferrer"><img src={linkedin_logo} className="App-logo" alt="Linkedin's logo" /></a>
                <a href="https://github.com/loisnel04" target="_blank" rel="noreferrer"><img src={git_logo} className="App-logo" alt="Github's logo" /></a>
                <a href="mailto:lois.isnel@gmail.com" ><img src={mail} className="App-logo" alt="Mail's contact" /></a>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}