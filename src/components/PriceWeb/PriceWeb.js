import React from 'react';
import { Helmet } from 'react-helmet-async';
import mouse from '../../images/svg/mouse.svg';

function PriceWeb (props) {

    const {
        onOpenPopup,
    } = props;

    return (
        <div className="price-web">
            <Helmet
                title='Цены на услуги WEB студии ГК "Вымпел"'
                meta={[
                    {"name": "description", "content": "ГК 'Вымпел' - Создаем и продвигаем сайты в СПб! Современный дизайн! SEO оптимизация для эффективного привлечения клиентов! Команда профессионалов!"}
                ]}
                link={[
                    {"rel": "canonical", "href": "https://178spb.com/price-web/"}
                ]}
            />
            <section className="price-web__image-container">
                <h2 className="price-web__heading">цены на услуги web студии</h2>
                <p className="price-web__subheading">Ознакомьтесь с перечнем наших услуг,  а также их стоимостью</p>
                <button className="price-web__button" type="button" onClick={onOpenPopup}>Получить консультацию</button>
                <div className="price-web__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="price-web__mouse-icon" />
                    <p className="price-web__text">Прокрутите вниз</p>
                </div>
            </section>
        </div>
    );
}

export default PriceWeb;