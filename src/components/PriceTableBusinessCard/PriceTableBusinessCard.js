import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';

function PriceTableBusinessCard () {

    const { pathname } = useLocation();

    const priceTableContainer = `${pathname === '/business-card' ? `price-table__container` : `price-table__container price-table__container_web`}`;

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
                    <div className={`price-table__heading-container-business ${isFirstActive && 'price-table__heading-container-business_active'}`} onClick={handleFirstSectionActive}>
                        <h5 
                            className={`price-table__heading ${isFirstActive && 'price-table__heading_active'}`}
                        >
                            САЙТ ДЛЯ МАЛОГО БИЗНЕСА (21&nbsp;ДЕНЬ)
                            <span 
                                className={`price-table__heading-span ${isFirstActive && 'price-table__heading-span_active'}`}
                            > 50 000 руб.</span>
                        </h5>
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
                        <h5 
                            className={`price-table__heading ${isSecondActive && 'price-table__heading_active'}`}
                        >
                            САЙТ ДЛЯ МАЛОГО БИЗНЕСА (28&nbsp;ДНЕЙ)
                            <span 
                                className={`price-table__heading-span ${isSecondActive && 'price-table__heading-span_active'}`}
                            > 65 000 руб.</span>
                        </h5>
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
                        <h5 
                            className={`price-table__heading ${isLastActive && 'price-table__heading_active'}`}
                        >
                            САЙТ ДЛЯ МАЛОГО БИЗНЕСА (35&nbsp;ДНЕЙ) 
                            <span 
                                className={`price-table__heading-span ${isLastActive && 'price-table__heading-span_active'}`}
                            > 80 000 руб.</span>
                        </h5>
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
    );
}

export default PriceTableBusinessCard;