import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'
const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="me image"/>
                    </div>
                </div>
                <div className="about__content">
                    <p>Accurate front end developer with a passion for responsive website design and a firm believer in the mobile-first approach. Used framework for front end development such as React. Furthermore, QA Automation Engineer in the past with a year of automated testing experience. Currently, I am looking for new opportunities in front-end development. </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;