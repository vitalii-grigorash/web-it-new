import React, { useState } from 'react';
import mouse from '../../images/svg/mouse.svg';
import check from '../../images/svg/check.svg';
import { Validation } from '../../utils/Validation';

function Seo(props) {

    const {
        onOpenPopup,
        onSendForm,
    } = props;

    const name = Validation();
    const number = Validation();
    const [method, setMethod] = useState('Телефон');

    function onRadioСhange(evt) {
        setMethod(evt.target.value);
    };

    function submitForm(evt) {
        evt.preventDefault();
        onSendForm(name.value, number.value, method);
        name.setValue('');
        number.setValue('');
    }

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
        <section className="seo">
            <section className="seo__image-container">
                <h1 className="seo__heading">seo-услуги под ключ</h1>
                <p className="seo__subheading">Оказание качественных SEO-услуг под ключ в <nobr>Санкт-Петербурге</nobr></p>
                <button className="seo__button" type="button" onClick={onOpenPopup}>Получить консультацию</button>
                <div className="seo__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="seo__mouse-icon" />
                    <p className="seo__text">Прокрутите вниз</p>
                </div>
            </section>
            <section className="info-seo">
                <div className="info-seo__container">
                    <h2 className="info-seo__heading">качественные <nobr>seo-услуги</nobr> под ключ</h2>
                    <p className="info-seo__description">
                        Следующий важный этап после разработки каждого сайта – это, конечно
                        же, продвижение страниц в результатах поиска по необходимым ключевым
                        запросам. Чем выше конкуренция среди сайтов вашей тематики, тем фатальнее
                        цена ошибки при обращении к специалистам недостаточно высокого
                        уровня. Нередко неумелые действия приводят к необходимости полностью отказаться
                        от имеющегося доменного имени сайта и начинать всю оптимизацию с нуля на новом адресе.
                    </p>
                    <p className="info-seo__description">
                        Благодаря огромному опыту нашей команды, мы смело беремся за самые конкурентные
                        ниши и работаем как с новыми сайтами, так и со старыми проектами, владельцы
                        которых решили улучшить свои показатели.
                    </p>
                    <p className="info-seo__description">Что вы получите, обратившись к нам:</p>
                    <ul className="info-seo__list">
                        <li className="info-seo__list-item">полноценный профессиональный аудит, включающий определение факторов, которые потенциально снижают вашу конверсию и увеличивают отказы;</li>
                        <li className="info-seo__list-item">разработка семантического ядра для вашего сайта;</li>
                        <li className="info-seo__list-item">только «белые» методы продвижения, за которые сайт не получит бан в поисковиках;</li>
                        <li className="info-seo__list-item">быстрый результат – гарантируем положительную динамику ранжирования в поисковой выдаче уже в течение 2-3 месяцев (не верьте тем, кто обещает более быстрый результат);</li>
                        <li className="info-seo__list-item">гибкая система цен в зависимости от ваших задач, персональный подход к каждому клиенту;</li>
                        <li className="info-seo__list-item">подробный отчет о проделанной работе и бесплатные консультации специалистов на всех этапах.</li>
                    </ul>
                </div>
            </section>
            <section className="catalog-page-form">
                <div className="seo-form__price">
                    <p className="seo-page-form__price-heading">СЕО аудит сайта</p>
                    <p className="seo-page-form__price-cost">От 15 000 руб./мес.</p>
                </div>
                <form
                    className="catalog-page-form__form"
                    onSubmit={submitForm}
                >
                    <div className="catalog-page-form__form-container">
                        <div className="catalog-page-form__radio-container">
                            <p className="catalog-page-form__question">Как удобнее связаться с Вами?</p>
                            <div className="catalog-page-form__radio-buttons-container">
                                <div className="catalog-page-form__radio">
                                    <input
                                        id="phoneInputSeoForm"
                                        type="radio"
                                        name="variant"
                                        value="Телефон"
                                        onChange={onRadioСhange}
                                        defaultChecked
                                    />
                                    <label htmlFor="phoneInputSeoForm">Телефон</label>
                                </div>
                                <div className="catalog-page-form__radio">
                                    <input
                                        id="whatsAppInputSeoForm"
                                        type="radio"
                                        name="variant"
                                        value="WhatsApp"
                                        onChange={onRadioСhange}
                                    />
                                    <label htmlFor="whatsAppInputSeoForm">WhatsApp</label>
                                </div>
                                <div className="catalog-page-form__radio">
                                    <input
                                        id="telegramInputSeoForm"
                                        type="radio"
                                        name="variant"
                                        value="Telegram"
                                        onChange={onRadioСhange}
                                    />
                                    <label htmlFor="telegramInputSeoForm">Telegram</label>
                                </div>
                            </div>
                        </div>
                        <div className="catalog-page-form__inputs-container">
                            <p className="catalog-page-form__inputs-heading">Оставьте заявку и получите консультацию специалиста</p>
                            <div className="catalog-page-form__inputs-main-container">
                                <div className="catalog-page-form__input-container">
                                    <input
                                        type="text"
                                        className="catalog-page-form__input"
                                        id="name-input"
                                        name="name"
                                        value={name.value}
                                        onChange={name.onChange}
                                        minLength="2"
                                        maxLength="50"
                                        placeholder="Ваше имя"
                                        pattern="[A-Za-zа-яёА-ЯЁ -]{1,}"
                                        required
                                    />
                                    <span id="name-input" className="catalog-page-form-form__input_error">{name.errorMessage}</span>
                                </div>
                                <div className="catalog-page-form__input-container">
                                    <input
                                        type="text"
                                        className="catalog-page-form__input"
                                        id="number-input"
                                        name="number"
                                        value={number.value}
                                        onChange={number.onChange}
                                        minLength="3"
                                        maxLength="20"
                                        placeholder="Ваш телефон"
                                        pattern='^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$'
                                        required
                                    />
                                    <span id="number-input" className="catalog-page-form-form__input_error">{number.errorMessage}</span>
                                </div>
                            </div>
                        </div>
                        <div className="catalog-page-form__submit-container">
                            <button type="submit" className="catalog-page-form__submit-button">Получить консультацию</button>
                            <div className="catalog-page-form__under-submit-button-container">
                                <img src={check} alt="Иконка галочки" className="catalog-page-form__under-submit-button-check" />
                                <p className="catalog-page-form__under-submit-button-text">Принимаю пользовательское соглашение</p>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <section className="price-table">
                <div className="price-table__container">
                    <div className="price-table__section">
                        <div className={`price-table__heading-container-first ${isFirstActive && 'price-table__heading-container-first_active'}`} onClick={handleFirstSectionActive}>
                            <h4 
                                className={`price-table__heading ${isFirstActive && 'price-table__heading_active'}`}
                            >
                                ТАРИФ “БАЗОВЫЙ” 
                                <span 
                                    className={`price-table__heading-span ${isFirstActive && 'price-table__heading-span_active'}`}
                                > <nobr>от 25 000 руб./мес.</nobr></span>
                            </h4>
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
                            <h4 
                                className={`price-table__heading ${isSecondActive && 'price-table__heading_active'}`}
                            >
                                ТАРИФ “ОПТИМАЛЬНЫЙ”
                                <span 
                                    className={`price-table__heading-span ${isSecondActive && 'price-table__heading-span_active'}`}
                                > <nobr>от 35 000 руб./мес.</nobr></span>
                            </h4>
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
                            <h4 
                                className={`price-table__heading ${isLastActive && 'price-table__heading_active'}`}
                            >
                                ТАРИФ “МАКСИМАЛЬНЫЙ”
                                <span 
                                    className={`price-table__heading-span ${isLastActive && 'price-table__heading-span_active'}`}
                                > <nobr>от 70 000 руб./мес.</nobr></span>
                            </h4>
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
        </section>
    );
}

export default Seo;