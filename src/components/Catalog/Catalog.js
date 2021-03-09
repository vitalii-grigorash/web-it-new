import React from 'react';
import mouse from '../../images/svg/mouse.svg';
import CatalogPageForm from '../CatalogPageForm/CatalogPageForm';

function Catalog (props) {

    const {
        onSendForm,
        onOpenPopup,
    } = props;

    return (
        <section className="catalog">
            <div className="catalog__image-container">
                <h2 className="catalog__heading">СОЗДАНИЕ <nobr>САЙТА-КАТАЛОГА</nobr> ПОД КЛЮЧ</h2>
                <p className="catalog__subheading">Проектирование и разработка сайта-каталога в Санкт-Петербурге</p>
                <button className="catalog__button" type="button" onClick={onOpenPopup}>Заказать сайт</button>
                <div className="catalog__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="catalog__mouse-icon" />
                    <p className="catalog__text">Прокрутите вниз</p>
                </div>
            </div>
            <CatalogPageForm
                onSendForm={onSendForm}
            />
        </section>
    );
}

export default Catalog;