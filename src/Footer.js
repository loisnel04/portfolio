import linkedin_logo from './img/LinkedIn_icon.svg.png'
import git_logo from './img/github.png'
import mail from './img/mail.png'
import './Footer.css'
import emailjs from 'emailjs-com'

export default function Footer() {
    /*const sendMail = () => {
        var message = document.getElementById('mail_content').value
        var name = document.getElementById('user_name').value
        var mail = document.getElementById('from_mail').value
        var email = 'mailto:lois.isnel@gmail.com&subject=From ' + encodeURIComponent(name) + '&body=' + encodeURIComponent(message) + 'Sent by: \n' + encodeURIComponent(mail)
        window.location.href = email;
    }*/

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
            <h1 id="title_footer">Contact me</h1>
            <p id="info">Do not hesitate to contact me for any questions or furthers informations</p>
            
            <form onSubmit={sendForm}>
                <div id="contact">
                    <div className="input_label">
                        <p>Nom</p>
                        <input type="text" placeholder="Your name" id="user_name" required/>
                    </div>

                    <div className="input_label">
                        <p>Email</p>
                        <input type="email" placeholder="Your email" id="from_mail" name="from_name" required/>
                    </div>
                    
                    <div className="input_label">
                        <p>Message</p>
                        <textarea placeholder="Your message" id="mail_content" name="message_content" required/>
                    </div>
                </div>
                <div id="button">
                    <button type="submit">Send</button>
                </div>
            </form>

            <div className="image">
                <div className="oneImg">
                    <a href="https://www.linkedin.com/in/lo%C3%AFs-isnel-b54b4b209/" target="_blank" rel="noreferrer"><img src={linkedin_logo} className="App-logo" alt="Linkedin's logo" /></a>
                </div>
                <div className="oneImg">
                    <a href="https://github.com/loisnel04" target="_blank" rel="noreferrer"><img src={git_logo} className="App-logo" alt="Github's logo" /></a>
                </div>
                <div className="oneImg">    
                    <a href='mailto:lois.isnel@gmail.com'><img src={mail} className="App-logo" alt="Mail's contact" /></a>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}