import React from 'react'
import '../../../Styles/contact/Contacts.css'
import watsappIcon from '../../../images/whatsapp-icon.png'
import fbIcon from '../../../images/fb-icon.png'
import github from '../../../images/github-icon.png'

export default function Contact() {
    return (
        <div className="contact">
            <div className="icons-box">
                <a href="https://wa.me/995555304419" target="_blank" className="our-icon">  <img className="icon1" src={watsappIcon} alt="whatsapp" /></a>
                <a href="https://www.facebook.com/gigola2" target="_blank" className="our-icon"> <img className="icon" src={fbIcon} alt="fb" /></a>
                <a href="https://github.com/datka-datucha22" target="_blank" className="our-icon"> <img className="icon2" src={github} alt="github" /></a>
            </div>


        </div>
    )
}
