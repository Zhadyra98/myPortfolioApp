import {AiFillCheckCircle} from 'react-icons/ai';
import {FaUserGraduate} from 'react-icons/fa';
import {AiFillBug} from 'react-icons/ai';
import {FaReact} from 'react-icons/fa';
import CERTIFICATE1 from '../../assets/certificate.pdf';
import CERTIFICATE2 from '../../assets/certificate_udemy.pdf';
import './Services.css';

const Services = () => {
    return (
        <section id="services">
            <h5>What I have done</h5>
            <h2>Experience</h2>
            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>May 2022 - Present</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <div className='header_icon_container'>
                                <FaReact className='service__list-icon'/>
                                <p>Front end Developer intern</p>
                            </div>
                            <h3>Studying and practicing</h3>
                            <p>Currently in the way of practicing tools for frontend development, learning framework REACT and improve knowledge of core JS. Creating Pet project, which are shown in portfolio section</p>
                            <a href={CERTIFICATE2} download >Certificate</a>
                        </li>  
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>May 2021 - May 2022</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <div className='header_icon_container'>
                                <AiFillBug className='service__list-icon'/>
                                <p>Test Automation engineer</p>
                            </div>
                            <h3>Epam Systems</h3>
                            <p>A QA Automation Engineer in web application testing, creating test scenarios and test cases in support of software
                            development lifecycles.</p>
                        </li>   
                        <li>
                            <div className='header_icon_container'>
                                <AiFillBug className='service__list-icon'/>
                                <p>Test Automation engineer intern</p>
                            </div>
                            <h3>Epam Systems</h3>
                            <p>Automate the testing of a web application using Selenium WebDriver; Creating test cases</p>
                            <a href={CERTIFICATE1} download >Certificate</a>
                        </li> 

                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>2016 - 2020 </h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <div className='header_icon_container'>
                                <FaUserGraduate className='service__list-icon'/>
                                <p>Student</p>
                            </div>
                            <h3>Kazakh British Technical University</h3>
                            <p>Faculty of computer systems and software</p>
                        </li>                       
                    </ul>
                </article>

            </div>
        </section>
    );
}

export default Services;