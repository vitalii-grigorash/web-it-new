import React from 'react';
import { Helmet } from 'react-helmet-async';
import mouse from '../../images/svg/mouse.svg';

function PriceIt (props) {

    const {
        onOpenPopup,
    } = props;

    return (
        <div className="price-it">
            <Helmet
                title='Цены на услуги IT сервиса ГК "Вымпел"'
                meta={[
                    {"name": "description", "content": "ГК 'Вымпел' - занимаемся техническим обслуживанием персональных компьютеров, печатных устройств и т.д.! Команда профессионалов!"}
                ]}
                link={[
                    {"rel": "canonical", "href": "https://178spb.com/price-it/"}
                ]}
            />
            <section className="price-it__image-container">
                <h2 className="price-it__heading">цены на услуги it сервиса</h2>
                <p className="price-it__subheading">Ознакомьтесь с перечнем наших услуг,  а также их стоимостью</p>
                <button className="price-it__button" type="button" onClick={onOpenPopup}>Получить консультацию</button>
                <div className="price-it__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="price-it__mouse-icon" />
                    <p className="price-it__text">Прокрутите вниз</p>
                </div>
            </section>
        </div>
    );
}

export default PriceIt;