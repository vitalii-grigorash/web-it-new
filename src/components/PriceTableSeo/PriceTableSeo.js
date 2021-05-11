import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function PriceTableSeo () {

    const { pathname } = useLocation();

    const priceTableContainer = `${pathname === '/seo' ? `price-table__container` : `price-table__container price-table__container_web`}`;

    const [isFirstActive, setFirstActive] = useState(true);
    function handleFirstSectionActive () {
        setFirstActive(true);
        setSecondActive(false);
        setLastActive(false);
    };

    const [isSecondActive, setSecondActive] = useState(false);
    function handleSecondSectionActive () {
        setFirstActive(false);
        setLastActive(false);
        setSecondActive(true);
    };

    const [isLastActive, setLastActive] = useState(false);
    function handleLastSectionActive () {
        setFirstActive(false);
        setSecondActive(false);
        setLastActive(true);
    };

    return (
        <section className="price-table">
            <div className={priceTableContainer}>
                <div className="price-table__section">
                    <div className={`price-table__heading-container-first ${isFirstActive && 'price-table__heading-container-first_active'}`} onClick={handleFirstSectionActive}>
                        <h5 
                            className={`price-table__heading ${isFirstActive && 'price-table__heading_active'}`}
                        >
                            ТАРИФ “БАЗОВЫЙ” 
                            <span 
                                className={`price-table__heading-span ${isFirstActive && 'price-table__heading-span_active'}`}
                            > от&nbsp;25&nbsp;000&nbsp;руб./мес.</span>
                        </h5>
                    </div>
                    <ul className={`price-table__list ${isFirstActive && 'price-table__list_active'}`}>
                        <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Техническая оптимизация</li>
                        <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Мониторинг сайта</li>
                        <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Оптимизация текстов</li>
                        <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Внутренняя оптимизация</li>
                        <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Веб аналитика (Яндекс Вебмастер, Google Search Console)</li>
                        <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Анализ юзабилити</li>
                        <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Анализ поведенческих факторов</li>
                        <li className={`price-table__list-item ${isFirstActive && 'price-table__list-item_active'}`}>Отчетность - 1 раз в 3 месяца</li>
                    </ul>
                    <p className={`price-table__under-list-price ${isFirstActive && 'price-table__under-list-price_active'}`}>45 000 руб.</p>
                </div>
                <div className="price-table__section">
                    <div className={`price-table__heading-container-second ${isSecondActive && 'price-table__heading-container-second_active'}`} onClick={handleSecondSectionActive}>
                        <h5 
                            className={`price-table__heading ${isSecondActive && 'price-table__heading_active'}`}
                        >
                            ТАРИФ “ОПТИМАЛЬНЫЙ”
                            <span 
                                className={`price-table__heading-span ${isSecondActive && 'price-table__heading-span_active'}`}
                            > от&nbsp;35&nbsp;000&nbsp;руб./мес.</span>
                        </h5>
                    </div>
                    <ul className={`price-table__list ${isSecondActive && 'price-table__list_active'}`}>
                        <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Техническая оптимизация</li>
                        <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Мониторинг сайта</li>
                        <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Оптимизация текстов</li>
                        <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Внутренняя оптимизация</li>
                        <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Анализ юзабилити</li>
                        <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Анализ поведенческих факторов</li>
                        <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Составление семантического ядра</li>
                        <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Создание дополнительных страниц</li>
                        <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Веб аналитика (Яндекс Метрика, Google Analytics, Яндекс Вебмастер, Google Search Console)</li>
                        <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Настройка рекламы в Яндекс Директ или Google Adwords</li>
                        <li className={`price-table__list-item ${isSecondActive && 'price-table__list-item_active'}`}>Отчетность - 1 раз в 2 месяца</li>
                    </ul>
                    <p className={`price-table__under-list-price ${isSecondActive && 'price-table__under-list-price_active'}`}>60 000 руб.</p>
                </div>
                <div className="price-table__section">
                    <div className={`price-table__heading-container-last ${isLastActive && 'price-table__heading-container-last_active'}`} onClick={handleLastSectionActive}>
                        <h5 
                            className={`price-table__heading ${isLastActive && 'price-table__heading_active'}`}
                        >
                            ТАРИФ “МАКСИМАЛЬНЫЙ”
                            <span 
                                className={`price-table__heading-span ${isLastActive && 'price-table__heading-span_active'}`}
                            > от&nbsp;70&nbsp;000&nbsp;руб./мес.</span>
                        </h5>
                    </div>
                    <ul className={`price-table__list ${isLastActive && 'price-table__list_active'}`}>
                        <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Техническая оптимизация</li>
                        <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Мониторинг сайта</li>
                        <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Оптимизация текстов</li>
                        <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Внутренняя оптимизация</li>
                        <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Анализ юзабилити</li>
                        <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Анализ поведенческих факторов</li>
                        <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Составление семантического ядра</li>
                        <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Создание дополнительных страниц</li>
                        <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Веб аналитика (Яндекс Метрика, Google Analytics, Яндекс Вебмастер, Google Search Console)</li>
                        <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Внешняя оптимизация</li>
                        <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Персональный SEO-специалист, контент-менеджер, программист</li>
                        <li className={`price-table__list-item ${isLastActive && 'price-table__list-item_active'}`}>Отчетность - 1 раз в месяц</li>
                    </ul>
                    <p className={`price-table__under-list-price ${isLastActive && 'price-table__under-list-price_active'}`}>75 000 руб.</p>
                </div>
            </div>
        </section>
    );
}

export default PriceTableSeo;