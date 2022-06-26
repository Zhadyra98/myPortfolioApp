import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () =>  {
    return (
        <section id='experience'>
            <h5>What skills I Have</h5>
            <h2>My Skills</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon {'/>
                            <div>
                                <h4>HTML</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon {'/>
                            <div>
                                <h4>CSS</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon {'/>
                            <div>
                                <h4>JS</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon {'/>
                            <div>
                                <h4>React</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon {'/>
                            <div>
                                <h4>Redux</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon {'/>
                            <div>
                                <h4>SASS</h4>
                            </div>
                        </article>
                    </div>
                </div>
    

                <div className="experience__qa">
                    <h3>Skills gained from Automation QA experience</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon {'/>
                            <div>
                                <h4>java</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon {'/>
                            <div>
                                <h4>Selenium</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon {'/>
                            <div>
                                <h4>PostgreSQL</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon {'/>
                            <div>
                                <h4>Postman</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon {'/>
                            <div>
                                <h4>TestNG/Junit</h4>
                            </div>
                        </article>
                    </div>
                </div>


                <div className="general__experience">
                    <h3>General Technical Skills</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon {'/>
                            <div>
                                <h4>Git</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon {'/>
                            <div>
                                <h4>Docker</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon {'/>
                            <div>
                                <h4>Agile, Scrum</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon {'/>
                            <div>
                                <h4>API</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon {'/>
                            <div>
                                <h4>Jira</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon {'/>
                            <div>
                                <h4>Swagger UI</h4>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
