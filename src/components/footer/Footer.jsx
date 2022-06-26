import React, { Component } from 'react';
import {BsInstagram} from 'react-icons/bs';
import {BsTelegram} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <a href="#" className='footer__logo'>Zhadyra's portfolio</a>
                <ul className='permalinks'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="footer__socials">
                    <a href="https://www.instagram.com/"><BsInstagram /></a>
                    <a href="https://telegram.org/"><BsTelegram /></a>
                    <a href="https://www.whatsapp.com/"><BsWhatsapp /></a>
                </div>
            </footer>
        );
    }
}

export default Footer;