import React from 'react';
import mouse from '../../images/svg/mouse.svg';

function BusinessCard (props) {

    const {
        onOpenPopup,
    } = props;

    return (
        <section className="business-card">
            <div className="business-card__image-container">
                <h2 className="business-card__heading">СОЗДАНИЕ <nobr>САЙТА-ВИЗИТКИ</nobr> ПОД КЛЮЧ</h2>
                <p className="business-card__subheading">Проектирование и разработка сайта-визитки в Санкт-Петербурге</p>
                <button className="business-card__button" type="button" onClick={onOpenPopup}>Заказать сайт</button>
                <div className="business-card__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="business-card__mouse-icon" />
                    <p className="business-card__text">Прокрутите вниз</p>
                </div>
            </div>
        </section>
    );
}

export default BusinessCard;