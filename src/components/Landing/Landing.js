import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import mouse from '../../images/svg/mouse.svg';

function Landing(props) {

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
        <section className="landing">
            <Helmet
                title='Создание Landing Page под ключ в Санкт-Петербурге "Вымпел"'
                meta={[
                    {"name": "description", "content": "Занимаемся созданием и продвижением качественных сайтов! Современный и продающий дизайн! SEO оптимизация для эффективного привлечения клиентов! Команда профессионалов! ГК 'Вымпел'"}
                ]}
            />
            <section className="landing__image-container">
                <h1 className="landing__heading">создание landing page под ключ</h1>
                <p className="landing__subheading">Проектирование и разработка landing page в Санкт-Петербурге</p>
                <button className="landing__button" type="button" onClick={onOpenPopup}>Заказать сайт</button>
                <div className="landing__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="landing__mouse-icon" />
                    <p className="landing__text">Прокрутите вниз</p>
                </div>
            </section>
            <section className="landing-info">
                <div className="landing-info__container">
                    <h2 className="landing-info__heading">создание одностраничного сайта (лендинга) под ключ</h2>
                    <p className="landing-info__description">
                        Что отличает хороший Landing Page от плохого? Неопытный специалист чаще всего
                        во главу угла поставит красивый броский дизайн и окажется неправ. Безусловно, внешний
                        вид продающей страницы важен, но определяющую роль он не играет.
                    </p>
                    <h3 className="landing-info__subheading">почему наши лендинги работают?</h3>
                    <p className="landing-info__subdescription">
                        Как мы уже заметили выше, красивой обертки мало. Профессиональный
                        Landing Page сочетает в себе сразу несколько важных факторов:
                    </p>
                    <ul className="landing-info__list">
                        <li className="landing-info__list-item">
                            Грамотная подача контента, которая в свою очередь подразумевает
                            визуальное и текстовое выделение нужных заказчику акцентов, учитывает
                            популярные психологические паттерны поведения посетителей;
                        </li>
                        <li className="landing-info__list-item">
                            Высокая скорость загрузки страницы, которая возможна только при
                            правильном подходе к написанию кода сайта. При прочих равных показателях
                            посетитель примет решение о покупке там, где страница загрузится
                            быстрее, даже если разница будет составлять доли секунды;
                        </li>
                        <li className="landing-info__list-item">
                            Правильно настроенные цели, с помощью которых грамотный маркетолог
                            сможет держать руку на пульсе и контролировать расходование бюджета.
                        </li>
                    </ul>
                    <p className="landing-info__subdescription">
                        Наши специалисты годами совершенствовали свои навыки, поэтому
                        все наши лендинги обладают хорошо продуманной структурой, отлично
                        оптимизированы под загрузку через мобильный интернет с мобильных
                        устройств, за счет чего обеспечивают высокую конверсию посетителей на
                        совершение целевого действия – покупку или подачу заявки.
                    </p>
                </div>
            </section>
            <section className="price-table">
                <div className="price-table__container">
                    <div className="price-table__section">
                        <div className={`price-table__heading-container-first ${isFirstActive && 'price-table__heading-container-first_active'}`} onClick={handleFirstSectionActive}>
                            <h4 
                                className={`price-table__heading ${isFirstActive && 'price-table__heading_active'}`}
                            >
                                LANDING PAGE "БАЗОВЫЙ" (14 дней) 
                                <span 
                                    className={`price-table__heading-span ${isFirstActive && 'price-table__heading-span_active'}`}
                                > 45 000 руб.</span>
                            </h4>
                        </div>
                        <ul className={`price-table__list ${isFirstActive && 'price-table__list_active'}`}>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Объём лендинга 5-7 блоков</li>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Анализ ниши</li>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Составление технического задания</li>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Разработка уникального дизайна</li>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>До 3 форм обартной связи</li>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Наполнение сайта контентом</li>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Кроссбраузерная верстка (кроме Safari и IE ниже 11 версии)</li>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Адаптивная (резиновая) верстка под планшеты и мобильные устройства</li>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Почтовый ящик с доменным именем</li>
                            <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Оплата в 2 этапа (предоплата 50%)</li>
                        </ul>
                        <p className={`price-table__under-list-price ${isFirstActive && 'price-table__under-list-price_active'}`}>45 000 руб.</p>
                    </div>
                    <div className="price-table__section">
                        <div className={`price-table__heading-container-second ${isSecondActive && 'price-table__heading-container-second_active'}`} onClick={handleSecondSectionActive}>
                            <h4 
                                className={`price-table__heading ${isSecondActive && 'price-table__heading_active'}`}
                            >
                                LANDING PAGE "РАСШИРЕННЫЙ" <nobr>(17 дней)</nobr> 
                                <span 
                                    className={`price-table__heading-span ${isSecondActive && 'price-table__heading-span_active'}`}
                                > 60 000 руб.</span>
                            </h4>
                        </div>
                        <ul className={`price-table__list ${isSecondActive && 'price-table__list_active'}`}>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Объём лендинга 7-9 блоков</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Анализ ниши</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Составление технического задания</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Разработка уникального дизайна</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>До 5 форм обартной связи</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Наполнение сайта контентом</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Кроссбраузерная верстка (кроме Safari и IE ниже 11 версии)</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Личный руководитель проекта</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Возможность использовать эффекты и анимацию в том числе</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Почтовый ящик с доменным именем</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Адаптивная (резиновая) верстка под планшеты и мобильные устройства</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Разработка логотипа</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Установка Я.Метрики и G.Analytics</li>
                            <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Оплата в 2 этапа (предоплата 50%)</li>
                        </ul>
                        <p className={`price-table__under-list-price ${isSecondActive && 'price-table__under-list-price_active'}`}>60 000 руб.</p>
                    </div>
                    <div className="price-table__section">
                        <div className={`price-table__heading-container-last ${isLastActive && 'price-table__heading-container-last_active'}`} onClick={handleLastSectionActive}>
                            <h4 
                                className={`price-table__heading ${isLastActive && 'price-table__heading_active'}`}
                            >
                                LANDING PAGE "МАКСИМАЛЬНЫЙ" (28 дней) 
                                <span 
                                    className={`price-table__heading-span ${isLastActive && 'price-table__heading-span_active'}`}
                                > 75 000 руб.</span>
                            </h4>
                        </div>
                        <ul className={`price-table__list ${isLastActive && 'price-table__list_active'}`}>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Объём лендинга 9-12 блоков</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Анализ ниши</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Составление технического задания</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Разработка уникального дизайна</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>До 10 форм обартной связи</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Наполнение сайта контентом</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Кроссбраузерная верстка (кроме Safari и IE ниже 11 версии)</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Личный руководитель проекта</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Возможность использовать эффекты и анимацию в том числе</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Почтовый ящик с доменным именем</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Адаптивная (резиновая) верстка под планшеты и мобильные устройства</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Разработка логотипа</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Установка Я.Метрики и G.Analytics</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Установка и настройка SSL-сертификата</li>
                            <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Оплата в 2 этапа (предоплата 50%)</li>
                        </ul>
                        <p className={`price-table__under-list-price ${isLastActive && 'price-table__under-list-price_active'}`}>75 000 руб.</p>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Landing;