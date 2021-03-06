import './Header.css'
import CTA from './CTA';
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Zhadyra Oralkhanova</h1>
                <h5 className="text-light">Junior Frontend Developer</h5>
                <CTA/>
                <HeaderSocials/>
                <div className="me">
                    <img className='thumbnail' src={ME} alt=''/>
                </div>

                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
}

export default Header