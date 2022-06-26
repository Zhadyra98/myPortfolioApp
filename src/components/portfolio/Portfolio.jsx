import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.PNG';
import IMG2 from '../../assets/portfolio2.PNG';
import IMG3 from '../../assets/portfolio3.PNG';
import IMG4 from '../../assets/portfolio4.PNG';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.PNG';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Cozy House',
        github: 'https://github.com/Zhadyra98/shelter'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Discover amazing places in Japan',
        github: 'https://github.com/Zhadyra98/landing-practice'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Меню "Фитнес"',
        github: 'https://github.com/Zhadyra98/food_js_practice'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Accounting of company employees',
        github: 'https://github.com/Zhadyra98/reactApp'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Marvel Information portal',
        github: 'https://github.com/Zhadyra98/marvelProject'
    },
    {
        id: 6,
        image: IMG6,
        title: 'ToDo list',
        github: 'https://github.com/Zhadyra98/ToDoTask'
    }
]
const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2> 

            <div className="container portfolio__container">
            {
                data.map(({id, image, title, github, demo}) => {
                    return(
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title}/>
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">  
                                <a href={github} className="btn" target='_blank'>Github</a>
                            </div>
                        </article>
                    )
                })
            }          
            </div>
        </section>
    );
}

export default Portfolio;