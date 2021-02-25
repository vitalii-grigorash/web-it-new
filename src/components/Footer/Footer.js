import React from 'react';
import phoneIcon from '../../images/svg/phone-icon.svg';
import emailIcon from '../../images/svg/email-icon.svg';
import mapIcon from '../../images/svg/map-icon.svg';

function Footer() {
  return (

    <div className="footer">

      <div className="footer__contacts-container">

        <div className="footer__phone-container">
          <img src={phoneIcon} alt="Иконка телефона" className="footer__phone-icon" />
          <a href="tel:+78123728561" className="footer__phone-link">
            +7 (812)-372-85-61
          </a>
          <a href="https://www.instagram.com/vimpel_it_web/" target="_blank" rel="nofollow noreferrer" className="footer__icon footer__icon_inst"></a>
          <a href="https://vk.com/vimpel_it_web/" target="_blank" rel="nofollow noreferrer" className="footer__icon footer__icon_vk"></a>
        </div>

        <div className="footer__email-container">
          <img src={emailIcon} alt="Иконка почты" className="footer__email-icon" />
          <a href="mailto:3728561@178Sspb.com" className="footer__email-link">
            3728561@178Sspb.com
          </a>
        </div>

        <div className="footer__map-container">
          <img src={mapIcon} alt="Иконка карты" className="footer__map-icon" />
          <a href="https://yandex.ru/maps/2/saint-petersburg/house/prospekt_obukhovskoy_oborony_199/Z0kYcgFhS0IPQFtjfXR3dnVqZA" target="_blank" rel="nofollow noreferrer" className="footer__map-link">
            г. Санкт-Петербург, пр. Обуховской Обороны, д.199
          </a>
        </div>

      </div>

      <div className="footer__form-container">

        <form className="footer__form">

          <p className="footer__form-heading">Оставьте заявку и получите консультацию специалиста</p>

          <div className="footer__inputs-container">
            <input type="text" placeholder="Имя" className="footer__input"/>
            <input type="text" placeholder="Телефон" className="footer__input"/>
          </div>

          <p className="footer__question">Как удобнее связаться с Вами?</p>

        </form>

      </div>

    </div>

  );
}

export default Footer;