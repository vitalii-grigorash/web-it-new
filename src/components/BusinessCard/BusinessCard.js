import React from 'react';
import { Helmet } from 'react-helmet-async';
import mouse from '../../images/svg/mouse.svg';
import PriceTableBusinessCard from '../PriceTableBusinessCard/PriceTableBusinessCard';

function BusinessCard (props) {

    const {
        onOpenPopup,
    } = props;
    
    return (
        <div className="business-card">
            <Helmet
                title='Создание Сайта-визитки под ключ в Санкт-Петербурге "Вымпел"'
                meta={[
                    {"name": "description", "content": "Проектирование и разработка сайта-визитки в Санкт-Петербурге! Создание и продвижение веб-сайтов! Современный дизайн! SEO оптимизация для эффективного привлечения клиентов! Команда профессионалов!"}
                ]}
                link={[
                    {"rel": "canonical", "href": "https://178spb.com/business-card/"}
                ]}
            />
            <section className="business-card__image-container">
                <h2 className="business-card__heading">создание сайта&#8209;визитки под ключ</h2>
                <p className="business-card__subheading">Проектирование и разработка сайта-визитки в Санкт-Петербурге</p>
                <button className="business-card__button" type="button" onClick={onOpenPopup}>Заказать сайт</button>
                <div className="business-card__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="business-card__mouse-icon" />
                    <p className="business-card__text">Прокрутите вниз</p>
                </div>
            </section>
            <section className="info-business-card">
                <div className="info-business-card__container">
                    <h3 className="info-business-card__heading">создание сайта&#8209;визитки под ключ</h3>
                    <p className="info-business-card__description">
                        Небольшой сайт-визитка – это отличная альтернатива полноценному 
                        порталу, которую мы можем посоветовать для начинающих 
                        предпринимателей и представителей малого бизнеса. Разработка 
                        такого сайта занимает гораздо меньше времени, обходится клиенту 
                        дешевле, при этом качественно выполненный сайт-визитка не менее 
                        эффективно справляется с поставленными перед ним задачами – дает 
                        клиенту больше представления о вас и помогает наладить взаимовыгодное сотрудничество.
                    </p>
                    <h4 className="info-business-card__subheading">как понять, что можно обойтись сайтом-визиткой</h4>
                    <p className="info-business-card__description">
                        Составьте примерный план того, какая информация должна быть отражена 
                        на вашем сайте. Обычно сайт-визитка занимает от 5 до 10 страниц: на сайте 
                        есть главная страница, информация о компании, примеры работ, отзывы, прайс&#8209;лист и контактная информация.
                    </p>
                </div>
            </section>
            <PriceTableBusinessCard />
        </div>
    );
}

export default BusinessCard;