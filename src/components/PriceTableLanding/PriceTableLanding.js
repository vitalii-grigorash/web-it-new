import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function PriceTableLanding () {

    const { pathname } = useLocation();

    const priceTableContainer = `${pathname === '/landing' ? `price-table__container` : `price-table__container price-table__container_web`}`;

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
        <section className="price-table">
            <div className={priceTableContainer}>
                <div className="price-table__section">
                    <div className={`price-table__heading-container-first ${isFirstActive && 'price-table__heading-container-first_active'}`} onClick={handleFirstSectionActive}>
                        <h5 
                            className={`price-table__heading ${isFirstActive && 'price-table__heading_active'}`}
                        >
                            LANDING PAGE "БАЗОВЫЙ" (14 дней) 
                            <span 
                                className={`price-table__heading-span ${isFirstActive && 'price-table__heading-span_active'}`}
                            > 45 000 руб.</span>
                        </h5>
                    </div>
                    <ul className={`price-table__list ${isFirstActive && 'price-table__list_active'}`}>
                        <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Объём лендинга 5-7 блоков</li>
                        <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Анализ ниши</li>
                        <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Составление технического задания</li>
                        <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Разработка уникального дизайна</li>
                        <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>До 3 форм обратной связи</li>
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
                        <h5 
                            className={`price-table__heading ${isSecondActive && 'price-table__heading_active'}`}
                        >
                            LANDING PAGE "РАСШИРЕННЫЙ" (17&nbsp;дней)
                            <span 
                                className={`price-table__heading-span ${isSecondActive && 'price-table__heading-span_active'}`}
                            > 60 000 руб.</span>
                        </h5>
                    </div>
                    <ul className={`price-table__list ${isSecondActive && 'price-table__list_active'}`}>
                        <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Объём лендинга 7-9 блоков</li>
                        <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Анализ ниши</li>
                        <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Составление технического задания</li>
                        <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Разработка уникального дизайна</li>
                        <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>До 5 форм обратной связи</li>
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
                        <h5 
                            className={`price-table__heading ${isLastActive && 'price-table__heading_active'}`}
                        >
                            LANDING PAGE "МАКСИМАЛЬНЫЙ" (28 дней) 
                            <span 
                                className={`price-table__heading-span ${isLastActive && 'price-table__heading-span_active'}`}
                            > 75 000 руб.</span>
                        </h5>
                    </div>
                    <ul className={`price-table__list ${isLastActive && 'price-table__list_active'}`}>
                        <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Объём лендинга 9-12 блоков</li>
                        <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Анализ ниши</li>
                        <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Составление технического задания</li>
                        <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Разработка уникального дизайна</li>
                        <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>До 10 форм обратной связи</li>
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
    );
}

export default PriceTableLanding;