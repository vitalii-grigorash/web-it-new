import React from 'react';
import arrowOpen from '../../images/svg/arrow.svg';
import arrowClose from '../../images/svg/arrow-close.svg';
import { Link } from 'react-router-dom';

function MobileNavigation (props) {

  const { 
        isMobileNavigationOpen,
        onCloseMobileNavigation,
        onOpenPopup,
        handleItDropDownMunu,
        handleWebDropDownMunu,
        isItOpen,
        isWebOpen,
    } = props;

  return (
    <section className={`mobile-navigation ${isMobileNavigationOpen && 'mobile-navigation_opened'}`}>
        <nav className="mobile-navigation__nav-container">
            <p className="mobile-navigation__links mobile-navigation__links_menu" onClick={handleItDropDownMunu}>
                IT сервис
                <img src={isItOpen ? arrowClose : arrowOpen} alt="Стрелка" className="mobile-navigation__arrow"/>
            </p>
            {isItOpen && 
                ( 
                    <>
                        <a href="#" className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onCloseMobileNavigation}>Абонентское обслуживание</a>
                        <a href="#" className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onCloseMobileNavigation}>Разовые услуги IT</a>
                    </>
                )
            }
            <p className="mobile-navigation__links mobile-navigation__links_menu" onClick={handleWebDropDownMunu}>
                Web студия
                <img src={isWebOpen ? arrowClose : arrowOpen} alt="Стрелка" className="mobile-navigation__arrow"/>
            </p>
            {isWebOpen && 
                ( 
                    <>
                        <Link to={'/shop'} className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onCloseMobileNavigation}>Интернет-магазин</Link>
                        <Link to={'/multipage'} className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onCloseMobileNavigation}>Многостраничный сайт</Link>
                        <a href="#" className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onCloseMobileNavigation}>Landing page</a>
                        <a href="#" className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onCloseMobileNavigation}>Сайт-визитка</a>
                        <a href="#" className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onCloseMobileNavigation}>Корпоративный сайт</a>
                        <Link to={'/catalog'} className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onCloseMobileNavigation}>Сайт-каталог</Link>
                    </>
                )
            }
            <a href="#" className="mobile-navigation__links">О Компании</a>
            <a href="#" className="mobile-navigation__links">Портфолио</a>
            <a href="#" className="mobile-navigation__links">Контакты</a>
        </nav>
        <nav className="mobile-navigation__info-container">
            <p className="mobile-navigation__info-heading">Позвоните нам</p>
            <a href="tel:+78123728561" className="mobile-navigation__phone-number">
                +7 (812)-372-85-61
            </a>
            <a href="https://yandex.ru/maps/2/saint-petersburg/house/prospekt_obukhovskoy_oborony_199/Z0kYcgFhS0IPQFtjfXR3dnVqZA" target="_blank" rel="nofollow noreferrer" className="mobile-navigation__location">
                г. Санкт-Петербург, пр. Обуховской Обороны, д.199
            </a>
            <div className="mobile-navigation__icon-container">
                <a href="https://www.instagram.com/vimpel_it_web/" target="_blank" rel="nofollow noreferrer" className="mobile-navigation__icon mobile-navigation__icon_inst"></a>
                <a href="https://vk.com/vimpel_it_web/" target="_blank" rel="nofollow noreferrer" className="mobile-navigation__icon mobile-navigation__icon_vk"></a>
            </div>
            <button className="mobile-navigation__button" type="button" onClick={onOpenPopup}>
                Получить консультацию
            </button>
        </nav>
    </section>
  );
}

export default MobileNavigation;