import React, { useState } from 'react';
import check from '../../images/svg/check.svg';
import { Validation } from '../../utils/Validation';

function Footer(props) {

  const {
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
  return (
    <div className="footer">
      <div className="footer__contacts-container">
        <div className="footer__links-container">
          <a href="tel:+78123728561" className="footer__phone-link">
            <p className="footer__phone-icon"></p>
            +7 (812)-372-85-61
          </a>
          <a href="mailto:3728561@178Sspb.com" className="footer__email-link">
            <p className="footer__email-icon"></p>
            3728561@178Sspb.com
          </a>
          <a href="https://yandex.ru/maps/2/saint-petersburg/house/prospekt_obukhovskoy_oborony_199/Z0kYcgFhS0IPQFtjfXR3dnVqZA" target="_blank" rel="nofollow noreferrer" className="footer__map-link">
            <p className="footer__map-icon"></p>
            г. Санкт-Петербург, пр. Обуховской Обороны, д.199
          </a>
        </div>
        <div className="footer__icons-container">
          <a href="https://www.instagram.com/vimpel_it_web/" target="_blank" rel="nofollow noreferrer" className="footer__icon footer__icon_inst"></a>
          <a href="https://vk.com/vimpel_it_web/" target="_blank" rel="nofollow noreferrer" className="footer__icon footer__icon_vk"></a>
        </div>
      </div>
      <section className="footer__form-container">
        <form
          className="footer__form"
          onSubmit={submitForm}
        >
          <h2 className="footer__form-heading">Оставьте заявку и получите консультацию специалиста</h2>
          <div className="footer__inputs-container">
            <div className="footer__input-container">
              <input
                type="text"
                className="footer__input"
                id="footer-name-input"
                name="name"
                value={name.value}
                onChange={name.onChange}
                minLength="2"
                maxLength="50"
                placeholder="Имя"
                pattern="[A-Za-zа-яёА-ЯЁ -]{1,}"
                required
              />
              <span id="footer-name-input-error" className="footer-form__input_error">{name.errorMessage}</span>
            </div>
            <div className="footer__input-container">
              <input
                type="text"
                className="footer__input"
                id="footer-number-input"
                name="number"
                value={number.value}
                onChange={number.onChange}
                minLength="3"
                maxLength="20"
                placeholder="Телефон"
                pattern='^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$'
                required
              />
              <span id="footer-number-input-error" className="footer-form__input_error">{number.errorMessage}</span>
            </div>
          </div>
          <h3 className="footer__question">Как удобнее связаться с Вами?</h3>
          <div className="footer__radio-container">
            <div className="footer__radio">
              <input
                id="phoneInput"
                type="radio"
                name="variant"
                value="Телефон"
                onChange={onRadioСhange}
                defaultChecked
              />
              <label htmlFor="phoneInput">Телефон</label>
            </div>
            <div className="footer__radio">
              <input
                id="telegramInput"
                type="radio"
                name="variant"
                value="Telegram"
                onChange={onRadioСhange}
              />
              <label htmlFor="telegramInput">Telegram</label>
            </div>
            <div className="footer__radio">
              <input
                id="whatsAppInput"
                type="radio"
                name="variant"
                value="WhatsApp"
                onChange={onRadioСhange}
              />
              <label htmlFor="whatsAppInput">WhatsApp</label>
            </div>
          </div>
          <div className="footer__submit-container">
            <button type="submit" className="footer__submit-button">Получить консультацию</button>
            <div className="footer__under-submit-button-container">
              <img src={check} alt="Иконка галочки" className="footer__under-submit-button-check" />
              <p className="footer__under-submit-button-text">Принимаю пользовательское соглашение</p>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Footer;