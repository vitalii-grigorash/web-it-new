import React, {useState} from 'react';
import Helmet from "react-helmet";
import mouse from '../../images/svg/mouse.svg';

function BusinessCard (props) {

    const {
        onOpenPopup,
    } = props;

    const [isFirstActive, setFirstActive] = useState(true);

    function handleFirstSectionActive () {
        setFirstActive(true);
        setSecondActive(false);
        setLastActive(false);
    }

    const [isSecondActive, setSecondActive] = useState(false);

    function handleSecondSectionActive () {
        setFirstActive(false);
        setLastActive(false);
        setSecondActive(true);
    }

    const [isLastActive, setLastActive] = useState(false);

    function handleLastSectionActive () {
        setFirstActive(false);
        setSecondActive(false);
        setLastActive(true);
    }
    
    return (
        <section className="business-card">
            <Helmet
                title='Создание Сайта-визитки под ключ в Санкт-Петербурге "Вымпел"'
                meta={[
                    {"name": "description", "content": "Проектирование и разработка сайта-визитки в Санкт-Петербурге! Создание и продвижение веб-сайтов! Современный дизайн! SEO оптимизация для эффективного привлечения клиентов! Команда профессионалов!"}
                ]}
            />
            <section className="business-card__image-container">
                <h1 className="business-card__heading">создание <nobr>сайта-визитки</nobr> под ключ</h1>
                <p className="business-card__subheading">Проектирование и разработка сайта-визитки в Санкт-Петербурге</p>
                <button className="business-card__button" type="button" onClick={onOpenPopup}>Заказать сайт</button>
                <div className="business-card__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="business-card__mouse-icon" />
                    <p className="business-card__text">Прокрутите вниз</p>
                </div>
            </section>
            <section className="info-business-card">
                <div className="info-business-card__container">
                    <h2 className="info-business-card__heading">создание <nobr>сайта-визитки</nobr> под ключ</h2>
                    <p className="info-business-card__description">
                        Небольшой сайт-визитка – это отличная альтернатива полноценному 
                        порталу, которую мы можем посоветовать для начинающих 
                        предпринимателей и представителей малого бизнеса. Разработка 
                        такого сайта занимает гораздо меньше времени, обходится клиенту 
                        дешевле, при этом качественно выполненный сайт-визитка не менее 
                        эффективно справляется с поставленными перед ним задачами – дает 
                        клиенту больше представления о вас и помогает наладить взаимовыгодное сотрудничество.
                    </p>
                    <h3 className="info-business-card__subheading">как понять, что можно обойтись сайтом-визиткой</h3>
                    <p className="info-business-card__description">
                        Составьте примерный план того, какая информация должна быть отражена 
                        на вашем сайте. Обычно сайт-визитка занимает от 5 до 10 страниц: на сайте 
                        есть главная страница, информация о компании, примеры работ, отзывы, <nobr>прайс-лист</nobr> и контактная информация.
                    </p>
                </div>
            </section>
            <section className="price-table">
                <div className="price-table__container">
                    <div className="price-table__section">
                        <div className={`price-table__heading-container-business ${isFirstActive && 'price-table__heading-container-business_active'}`} onClick={handleFirstSectionActive}>
                            <h4 
                                className={`price-table__heading ${isFirstActive && 'price-table__heading_active'}`}
                            >
                                САЙТ ДЛЯ МАЛОГО БИЗНЕСА <nobr>(21 ДЕНЬ)</nobr>
                                <span 
                                    className={`price-table__heading-span ${isFirstActive && 'price-table__heading-span_active'}`}
                                > 50 000 руб.</span>
                            </h4>
                        </div>
                        <ul className={`price-table__list ${isFirstActive && 'price-table__list_active'}`}>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Уникальный дизайн "Главной страницы" и упрощенный для внутренних страниц (до 6 страниц)</li>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Слайдер с УТП (спец предложение)</li>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Форма обратной связи</li>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Кроссбраузерная верстка (кроме Safari и IE ниже 11 версии)</li>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Адаптивная (резиновая) верстка под планшеты и мобильные устройства</li>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Медиагалерея (фото и видео)</li>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Карта проезда</li>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Наполнение сайта контентом</li>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Почтовый ящик с доменным именем</li>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Оплата в 2 этапа (предоплата 50%)</li>
                        </ul>
                        <p className={`price-table__under-list-price ${isFirstActive && 'price-table__under-list-price_active'}`}>50 000 руб.</p>
                    </div>
                    <div className="price-table__section">
                        <div className={`price-table__heading-container-second ${isSecondActive && 'price-table__heading-container-second_active'}`} onClick={handleSecondSectionActive}>
                            <h4 
                                className={`price-table__heading ${isSecondActive && 'price-table__heading_active'}`}
                            >
                                САЙТ ДЛЯ МАЛОГО БИЗНЕСА <nobr>(28 ДНЕЙ)</nobr> 
                                <span 
                                    className={`price-table__heading-span ${isSecondActive && 'price-table__heading-span_active'}`}
                                > 65 000 руб.</span>
                            </h4>
                        </div>
                        <ul className={`price-table__list ${isSecondActive && 'price-table__list_active'}`}>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Уникальный дизайн всех страниц (до 6 страниц)</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Слайдер с УТП (спец предложение)</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Уникальная форма обратной связи</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Кроссбраузерная верстка (кроме Safari и IE ниже 11 версии)</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Адаптивная (резиновая) верстка под планшеты и мобильные устройства</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Карта проезда</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Наполнение сайта контентом</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Почтовый ящик с доменным именем</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Разработка рекламного баннера</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Интеграция с соцсетями</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Он-лайн консультант (JivoSite)</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Оплата в 2 этапа (предоплата 50%)</li>
                        </ul>
                        <p className={`price-table__under-list-price ${isSecondActive && 'price-table__under-list-price_active'}`}>65 000 руб.</p>
                    </div>
                    <div className="price-table__section">
                        <div className={`price-table__heading-container-last ${isLastActive && 'price-table__heading-container-last_active'}`} onClick={handleLastSectionActive}>
                            <h4 
                                className={`price-table__heading ${isLastActive && 'price-table__heading_active'}`}
                            >
                                САЙТ ДЛЯ МАЛОГО БИЗНЕСА <nobr>(35 ДНЕЙ)</nobr> 
                                <span 
                                    className={`price-table__heading-span ${isLastActive && 'price-table__heading-span_active'}`}
                                > 80 000 руб.</span>
                            </h4>
                        </div>
                        <ul className={`price-table__list ${isLastActive && 'price-table__list_active'}`}>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Уникальный дизайн всех страниц (до 6 страниц) по 2-3 эскиза</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Составление семантического ядра по одному направлению</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Слайдер с УТП (спец предложение)</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Уникальная форма обратной связи</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Кроссбраузерная верстка (кроме Safari и IE ниже 11 версии)</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Адаптивная (резиновая) верстка под планшеты и мобильные устройства</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Медиагалерея (фото и видео)</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Карта проезда</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Наполнение сайта контентом</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Почтовый ящик с доменным именем</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Разработка рекламного баннера</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Интеграция с соцсетями</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Он-лайн консультант (JivoSite)</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Дополнительная форма “Обратный звонок”</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Оплата в 2 этапа (предоплата 50%)</li>
                        </ul>
                        <p className={`price-table__under-list-price ${isLastActive && 'price-table__under-list-price_active'}`}>80 000 руб.</p>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default BusinessCard;