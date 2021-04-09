import React, { useState } from 'react';
import PriceTableIt from '../PriceTableIt/PriceTableIt';
import AnimationTableIt from '../AnimationTableIt/AnimationTableIt';
import mouse from '../../images/svg/mouse.svg';
import illustrationIt from '../../images/illustration-it.jpg';
import illustrationService from '../../images/svg/illustration-service-it.svg';
import check from '../../images/svg/check.svg';
import { Validation } from '../../utils/Validation';

function It (props) {

    const {
        onOpenPopup,
        onSendForm,
        isAbonent,
        isPrice,
        setAbonentFalse,
        setPriceFalse,
        submitButtonText,
    } = props;
    
    React.useEffect (() => {
        if (isAbonent) {
            const elem = document.getElementById("#service".slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
            setAbonentFalse();
        } 
    }, [isAbonent])

    React.useEffect (() => {
        if (isPrice) {
            const elem = document.getElementById("#price".slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
            setPriceFalse();
        } 
    }, [isPrice])

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

    return (
        <section className="it">
            <section className="it__image-container">
                <h1 className="it__heading">IT СЕРВИС</h1>
                <button className="it__button" type="button" onClick={onOpenPopup}>
                    Получить консультацию
                </button>
                <div className="it__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="it__mouse-icon" />
                    <p className="it__text">Прокрутите вниз</p>
                </div>
            </section>
            <section className="about-it">
                <img className="about-it__img" src={illustrationIt} alt="Иллюстрация об айти" />
                <div className="about-it__container">
                    <h2 className="about-it__heading">про it-сервис</h2>
                    <p className="about-it__description">
                        Группа компании Vimpel оказывает услуги IT-аутсорсинга, это
                        комплексное обслуживание и управление IT-инфраструктуры
                        компании. Нашим ключевым направлением является – абонентское обслуживание
                        компьютерной техники и информационных сервисов Вашего бизнеса.
                    </p>
                    <p className="about-it__description">
                        Предоставляя помимо разработки и продвижения сайтов комплексные услуги по
                        обслуживанию компьютеров, мы значительно увеличили число наших клиентов и сформировали
                        базу постоянных заказчиков, с которыми мы сотрудничаем уже не первый год. Будем
                        рады новым долгосрочным взаимовыгодным партнерствам!
                    </p>
                </div>
            </section>
            <section id="service" className="service-it">
                <h2 className="service-it__heading">абонентское обслуживание</h2>
                <div className="service-it__container">
                    <div className="service-it__description-container">
                        <p className="service-it__description">
                            Мы помогаем Вам спроектировать и реализовать IT-инфраструктуру с нуля и
                            полностью берём на себя поддержку. Данное обслуживание включает следующие IT-услуги:
                        </p>
                        <ul className="service-it__list">
                            <li className="service-it__list-item">Обслуживание серверов (Windows\*nix систем)</li>
                            <li className="service-it__list-item">Обслуживание автоматизированных рабочих мест пользователя (АРМ)</li>
                            <li className="service-it__list-item">Поддержка сетевого оборудования</li>
                            <li className="service-it__list-item">Обслуживание АТС и IP-телефонии</li>
                            <li className="service-it__list-item">Плановые и экстренные выезды для диагностики или устранения неисправностей</li>
                            <li className="service-it__list-item">Удаленная техническая поддержка</li>
                        </ul>
                    </div>
                    <img className="service-it__img" src={illustrationService} alt="Иллюстрация абонентского обслуживания" />
                </div>
            </section>
            <AnimationTableIt />
            <section id="price" className="catalog-page-form">
                <div className="it-form__price">
                    <p className="catalog-page-form__price-heading">Разовые IT-услуги</p>
                    <ul className="catalog-page-form__price-list-container">
                        <li className="catalog-page-form__price-list">Внедрение систем хранения данных</li>
                        <li className="catalog-page-form__price-list">Организация серверов удаленного рабочего стола</li>
                        <li className="catalog-page-form__price-list">Установка гипервизора</li>
                        <li className="catalog-page-form__price-list">Развертывание одной роли на сервере</li>
                        <li className="catalog-page-form__price-list">и другие услуги</li>
                    </ul>
                    <p className="catalog-page-form__price-cost">От 1 000 руб.</p>
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
                                        id="phoneInputItForm"
                                        type="radio"
                                        name="variant"
                                        value="Телефон"
                                        onChange={onRadioСhange}
                                        defaultChecked
                                    />
                                    <label htmlFor="phoneInputItForm">Телефон</label>
                                </div>
                                <div className="catalog-page-form__radio">
                                    <input
                                        id="whatsAppInputItForm"
                                        type="radio"
                                        name="variant"
                                        value="WhatsApp"
                                        onChange={onRadioСhange}
                                    />
                                    <label htmlFor="whatsAppInputItForm">WhatsApp</label>
                                </div>
                                <div className="catalog-page-form__radio">
                                    <input
                                        id="telegramInputItForm"
                                        type="radio"
                                        name="variant"
                                        value="Telegram"
                                        onChange={onRadioСhange}
                                    />
                                    <label htmlFor="telegramInputItForm">Telegram</label>
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
                                        id="it-name-input"
                                        name="name"
                                        value={name.value}
                                        onChange={name.onChange}
                                        minLength="2"
                                        maxLength="50"
                                        placeholder="Ваше имя"
                                        pattern="[A-Za-zа-яёА-ЯЁ -]{1,}"
                                        required
                                    />
                                    <span id="it-name-input-error" className="catalog-page-form-form__input_error">{name.errorMessage}</span>
                                </div>
                                <div className="catalog-page-form__input-container">
                                    <input
                                        type="text"
                                        className="catalog-page-form__input"
                                        id="it-number-input"
                                        name="number"
                                        value={number.value}
                                        onChange={number.onChange}
                                        minLength="3"
                                        maxLength="20"
                                        placeholder="Ваш телефон"
                                        pattern='^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$'
                                        required
                                    />
                                    <span id="it-number-input-error" className="catalog-page-form-form__input_error">{number.errorMessage}</span>
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
            </section>
            <PriceTableIt />
        </section>
    );
}

export default It;