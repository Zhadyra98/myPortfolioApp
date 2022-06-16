import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com"><BsLinkedin /></a>
            <a href="https://www.github.com"><BsGithub /></a>
            <a href="https://www.instagram.com"><BsInstagram /></a>
        </div>
    )
}
export default HeaderSocials