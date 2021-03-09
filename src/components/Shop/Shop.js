import React from 'react';
import mouse from '../../images/svg/mouse.svg';

function Shop (props) {

    const {
        onOpenPopup,
    } = props;

    return (
        <section className="shop">
            <div className="shop__image-container">
                <h2 className="shop__heading">СОЗДАНИЕ ИНТЕРНЕТ-МАГАЗИНА ПОД КЛЮЧ</h2>
                <p className="shop__subheading">Проектирование и разработка интернет-магазина в Санкт-Петербурге</p>
                <button className="shop__button" type="button" onClick={onOpenPopup}>Заказать сайт</button>
                <div className="shop__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="shop__mouse-icon" />
                    <p className="shop__text">Прокрутите вниз</p>
                </div>
            </div>
        </section>
    );
}

export default Shop;