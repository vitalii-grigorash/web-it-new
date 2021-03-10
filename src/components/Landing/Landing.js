import React from 'react';
import mouse from '../../images/svg/mouse.svg';

function Landing (props) {

    const {
        onOpenPopup,
    } = props;

    return (
        <section className="landing">
            <div className="landing__image-container">
                <h2 className="landing__heading">СОЗДАНИЕ LANDING PAGE ПОД КЛЮЧ</h2>
                <p className="landing__subheading">Проектирование и разработка landing page в Санкт-Петербурге</p>
                <button className="landing__button" type="button" onClick={onOpenPopup}>Заказать сайт</button>
                <div className="landing__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="landing__mouse-icon" />
                    <p className="landing__text">Прокрутите вниз</p>
                </div>
            </div>
        </section>
    );
}

export default Landing;