import React from 'react';
import mouse from '../../images/svg/mouse.svg';

function Portfolio () {

    return (
        <section className="portfolio">
            <div className="portfolio__image-container">
                <h2 className="portfolio__heading">ПОРТФОЛИО</h2>
                <div className="portfolio__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="portfolio__mouse-icon" />
                    <p className="portfolio__text">Прокрутите вниз</p>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;