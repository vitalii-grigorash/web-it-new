import React, {useState} from 'react';
import popupCloseButton from '../../images/svg/popup-close-button.svg';
import { Validation } from '../../utils/Validation';
import check from '../../images/svg/check.svg';

function Popup(props) {

    const {
        onClosePopup,
        isOpen,
        onSendForm,
    } = props;

    const name = Validation();
    const number = Validation();
    const [method, setMethod] = useState('Телефон');

    function onRadioСhange (evt) {
        setMethod(evt.target.value);
    };

    function clearAllAndClose() {
        onClosePopup();
        name.setValue('');
        number.setValue('');
        name.setErrorMessage('');
        number.setErrorMessage('');
    }

    function submitForm(evt) {
        evt.preventDefault();
        onSendForm(name.value, number.value, method);
        clearAllAndClose();
    }

    const handleOverlayClose = (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            clearAllAndClose();
        }
    }

    return (
        <section className={`popup ${isOpen && 'popup_opened'}`} onMouseDown={handleOverlayClose}>
            <div className="popup__form-background">
                <img src={popupCloseButton} alt="Кнопка закрытия попапа" className="popup__close-button" onClick={clearAllAndClose}/>
                <p className="popup__heading">Получите бесплатную консультацию от наших специалистов</p>
                <form className="popup__form" onSubmit={submitForm} >
                    <div className="popup__inputs-container">
                        <div className="popup__input-container">
                            <input
                                type="text"
                                className="popup__input"
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
                            <span id="name-input" className="popup-form__input_error">{name.errorMessage}</span>
                        </div>
                        <div className="popup__input-container">
                            <input
                                type="text"
                                className="popup__input"
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
                            <span id="number-input" className="popup-form__input_error">{number.errorMessage}</span>
                        </div>
                    </div>
                    <p className="popup__question">Как удобнее связаться с Вами?</p>
                    <div className="popup__radio-container">
                        <div className="popup__radio">
                            <input
                                id="phone"
                                type="radio"
                                name="variant"
                                value="Телефон"
                                onChange={onRadioСhange}
                                defaultChecked
                            />
                            <label htmlFor="phone">Телефон</label>
                        </div>
                        <div className="popup__radio">
                            <input
                                id="whatsApp"
                                type="radio"
                                name="variant"
                                value="WhatsApp"
                                onChange={onRadioСhange}
                            />
                            <label htmlFor="whatsApp">WhatsApp</label>
                        </div>
                        <div className="popup__radio">
                            <input
                                id="telegram"
                                type="radio"
                                name="variant"
                                value="Telegram"
                                onChange={onRadioСhange}
                            />
                            <label htmlFor="telegram">Telegram</label>
                        </div>
                    </div>
                    <div className="popup__submit-container">
                        <button type="submit" className="popup__submit-button">Получить консультацию</button>
                        <div className="popup__under-submit-button-container">
                            <img src={check} alt="Иконка галочки" className="popup__under-submit-button-check" />
                            <p className="popup__under-submit-button-text">Принимаю пользовательское соглашение</p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Popup;