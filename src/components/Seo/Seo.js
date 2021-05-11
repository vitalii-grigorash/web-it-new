import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import mouse from '../../images/svg/mouse.svg';
import check from '../../images/svg/check.svg';
import PriceTableSeo from '../PriceTableSeo/PriceTableSeo';
import { Validation } from '../../utils/Validation';

function Seo (props) {

    const {
        onOpenPopup,
        onSendForm,
        submitButtonText,
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
    };

    return (
        <div className="seo">
            <Helmet
                title='Оказание SEO-услуг в Санкт-Петербурге "Вымпел"'
                meta={[
                    {"name": "description", "content": "SEO оптимизация для эффективного привлечения клиентов! Создание и продвижение сайтов! Современный дизайн! Команда профессионалов!"}
                ]}
                link={[
                    {"rel": "canonical", "href": "https://178spb.com/seo/"}
                ]}
            />
            <section className="seo__image-container">
                <h2 className="seo__heading">seo-услуги под ключ</h2>
                <p className="seo__subheading">Оказание качественных SEO-услуг под ключ в Санкт&#8209;Петербурге</p>
                <button className="seo__button" type="button" onClick={onOpenPopup}>Получить консультацию</button>
                <div className="seo__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="seo__mouse-icon" />
                    <p className="seo__text">Прокрутите вниз</p>
                </div>
            </section>
            <section className="info-seo">
                <div className="info-seo__container">
                    <h3 className="info-seo__heading">качественные seo&#8209;услуги под ключ</h3>
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
            <div className="catalog-page-form">
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
                                        id="seo-name-input"
                                        name="name"
                                        value={name.value}
                                        onChange={name.onChange}
                                        minLength="2"
                                        maxLength="50"
                                        placeholder="Ваше имя"
                                        pattern="[A-Za-zа-яёА-ЯЁ -]{1,}"
                                        required
                                    />
                                    <span id="seo-name-input-error" className="catalog-page-form-form__input_error">{name.errorMessage}</span>
                                </div>
                                <div className="catalog-page-form__input-container">
                                    <input
                                        type="text"
                                        className="catalog-page-form__input"
                                        id="seo-number-input"
                                        name="number"
                                        value={number.value}
                                        onChange={number.onChange}
                                        minLength="3"
                                        maxLength="20"
                                        placeholder="Ваш телефон"
                                        pattern='^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$'
                                        required
                                    />
                                    <span id="seo-number-input-error" className="catalog-page-form-form__input_error">{number.errorMessage}</span>
                                </div>
                            </div>
                        </div>
                        <div className="catalog-page-form__submit-container">
                            <button type="submit" className="catalog-page-form__submit-button">{submitButtonText}</button>
                            <div className="catalog-page-form__under-submit-button-container">
                                <img src={check} alt="Иконка галочки" className="catalog-page-form__under-submit-button-check" />
                                <p className="catalog-page-form__under-submit-button-text">Принимаю пользовательское соглашение</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <PriceTableSeo />
        </div>
    );
}

export default Seo;