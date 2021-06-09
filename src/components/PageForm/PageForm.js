import React, { useState } from 'react';
import check from '../../images/svg/check.svg';
import { Validation } from '../../utils/Validation';

function PageForm (props) {

    const {
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
    }

    return (
        <section className="page-form">
            <form
                className="page-form__form"
                onSubmit={submitForm}
            >
                <h2 className="page-form__form-heading">Получите бесплатную консультацию от наших специалистов</h2>
                <div className="page-form__form-container">
                    <div className="page-form__inputs-container">
                        <div className="page-form__input-container">
                            <input
                                type="text"
                                className="page-form__input"
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
                            <span id="name-input-error" className="page-form-form__input_error">{name.errorMessage}</span>
                        </div>
                        <div className="page-form__input-container">
                            <input
                                type="text"
                                className="page-form__input"
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
                            <span id="number-input-error" className="page-form-form__input_error">{number.errorMessage}</span>
                        </div>
                    </div>
                    <div className="page-form__radio-container">
                        <h3 className="page-form__question">Как удобнее связаться с Вами?</h3>
                        <div className="page-form__radio-buttons-container">
                            <div className="page-form__radio">
                                <input
                                    id="phoneInputPageForm"
                                    type="radio"
                                    name="variant"
                                    value="Телефон"
                                    onChange={onRadioСhange}
                                    defaultChecked
                                />
                                <label htmlFor="phoneInputPageForm">Телефон</label>
                            </div>
                            <div className="page-form__radio">
                                <input
                                    id="whatsAppInputPageForm"
                                    type="radio"
                                    name="variant"
                                    value="WhatsApp"
                                    onChange={onRadioСhange}
                                />
                                <label htmlFor="whatsAppInputPageForm">WhatsApp</label>
                            </div>
                            <div className="page-form__radio">
                                <input
                                    id="telegramInputPageForm"
                                    type="radio"
                                    name="variant"
                                    value="Telegram"
                                    onChange={onRadioСhange}
                                />
                                <label htmlFor="telegramInputPageForm">Telegram</label>
                            </div>
                        </div>
                    </div>
                    <div className="page-form__submit-container">
                        <button type="submit" className="page-form__submit-button">{submitButtonText}</button>
                        <div className="page-form__under-submit-button-container">
                            <img src={check} alt="Иконка галочки" className="page-form__under-submit-button-check" />
                            <p className="page-form__under-submit-button-text">Принимаю пользовательское соглашение</p>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default PageForm;