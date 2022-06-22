import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {RiComputerLine} from 'react-icons/ri'
import {BsTelephoneMinusFill} from 'react-icons/bs'
import {MdOutlineContactMail} from 'react-icons/md'
import { useState } from 'react'
const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><BiUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''} ><RiComputerLine /></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav==='#services' ? 'active' : ''} ><BsTelephoneMinusFill /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><MdOutlineContactMail /></a>
        </nav>
    );
}

export default Nav;