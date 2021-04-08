import React, { useState } from 'react';
import check from '../../images/svg/check.svg';
import { Validation } from '../../utils/Validation';

function CatalogPageForm (props) {

    const {
        onSendForm,
        submitButtonText,
    } = props;

    const name = Validation();
    const number = Validation();
    const [method, setMethod] = useState('Администрирование сайта');

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
        <section className="catalog-page-form">
            <section className="catalog-page-form__price">
                <p className="catalog-page-form__price-heading">Что входит в разработку</p>
                <ul className="catalog-page-form__price-list-container">
                    <li className="catalog-page-form__price-list">CMS WordPress</li>
                    <li className="catalog-page-form__price-list">Дизайн</li>
                    <li className="catalog-page-form__price-list">Адаптивная верстка</li>
                    <li className="catalog-page-form__price-list">Базовое SEO</li>
                    <li className="catalog-page-form__price-list">Наполнение до 10 страниц</li>
                    <li className="catalog-page-form__price-list">Наполнение до 20 позиций</li>
                </ul>
                <p className="catalog-page-form__price-cost">От 45 000 руб.</p>
            </section>
            <form
                className="catalog-page-form__form"
                onSubmit={submitForm}
            >
                <div className="catalog-page-form__form-container">
                    <div className="catalog-page-form__radio-container">
                        <p className="catalog-page-form__question">Дополнительные услуги</p>
                        <div className="catalog-page-form__radio-buttons-container">
                            <div className="catalog-page-form__radio">
                                <input
                                    id="admin"
                                    type="radio"
                                    name="variant"
                                    value="Администрирование сайта"
                                    onChange={onRadioСhange}
                                    defaultChecked
                                />
                                <label htmlFor="admin">Администрирование сайта</label>
                            </div>
                            <div className="catalog-page-form__radio">
                                <input
                                    id="copywriting"
                                    type="radio"
                                    name="variant"
                                    value="Копирайтинг"
                                    onChange={onRadioСhange}
                                />
                                <label htmlFor="copywriting">Копирайтинг</label>
                            </div>
                            <div className="catalog-page-form__radio">
                                <input
                                    id="logoDev"
                                    type="radio"
                                    name="variant"
                                    value="Разработка логотипа"
                                    onChange={onRadioСhange}
                                />
                                <label htmlFor="logoDev">Разработка логотипа</label>
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
                                    id="catalog-name-input"
                                    name="name"
                                    value={name.value}
                                    onChange={name.onChange}
                                    minLength="2"
                                    maxLength="50"
                                    placeholder="Ваше имя"
                                    pattern="[A-Za-zа-яёА-ЯЁ -]{1,}"
                                    required
                                />
                                <span id="catalog-name-input-error" className="catalog-page-form-form__input_error">{name.errorMessage}</span>
                            </div>
                            <div className="catalog-page-form__input-container">
                                <input
                                    type="text"
                                    className="catalog-page-form__input"
                                    id="catalog-number-input"
                                    name="number"
                                    value={number.value}
                                    onChange={number.onChange}
                                    minLength="3"
                                    maxLength="20"
                                    placeholder="Ваш телефон"
                                    pattern='^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$'
                                    required
                                />
                                <span id="catalog-number-input-error" className="catalog-page-form-form__input_error">{number.errorMessage}</span>
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
    );
}

export default CatalogPageForm;