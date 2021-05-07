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
        handlePortfolioDropDownMunu,
        handlePriceDropDownMunu,
        isPriceOpen,
        isPortfolioOpen,
        isItOpen,
        isWebOpen,
        handleAbonentScroll,
        handlePriceScroll,
    } = props;

    function onAbonentClick () {
        handleAbonentScroll();
        onCloseMobileNavigation();
    }

    function onPriceClick () {
        handlePriceScroll();
        onCloseMobileNavigation();
    }

  return (
    <div className={`mobile-navigation ${isMobileNavigationOpen && 'mobile-navigation_opened'}`}>
        <nav className="mobile-navigation__nav-container">
            <h3 className="mobile-navigation__links mobile-navigation__links_menu" onClick={handleItDropDownMunu}>
                IT сервис
                <img src={isItOpen ? arrowClose : arrowOpen} alt="Стрелка" className="mobile-navigation__arrow"/>
            </h3>
            {isItOpen && 
                ( 
                    <>
                        <Link to={'/it'} className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onAbonentClick}>Абонентское обслуживание</Link>
                        <Link to={'/it'} className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onPriceClick}>Разовые услуги IT</Link>
                    </>
                )
            }
            <h3 className="mobile-navigation__links mobile-navigation__links_menu" onClick={handleWebDropDownMunu}>
                Web студия
                <img src={isWebOpen ? arrowClose : arrowOpen} alt="Стрелка" className="mobile-navigation__arrow"/>
            </h3>
            {isWebOpen && 
                ( 
                    <>
                        <Link to={'/shop'} className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onCloseMobileNavigation}>Интернет-магазин</Link>
                        <Link to={'/landing'} className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onCloseMobileNavigation}>Landing page</Link>
                        <Link to={'/business-card'} className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onCloseMobileNavigation}>Сайт-визитка</Link>
                        <Link to={'/multipage'} className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onCloseMobileNavigation}>Корпоративный сайт</Link>
                        <Link to={'/catalog'} className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onCloseMobileNavigation}>Сайт-каталог</Link>
                        <Link to={'/seo'} className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onCloseMobileNavigation}>SEO</Link>
                    </>
                )
            }
            <Link to={'/'} className="mobile-navigation__links" onClick={onCloseMobileNavigation}>О Компании</Link>
            <h3 className="mobile-navigation__links mobile-navigation__links_menu" onClick={handlePortfolioDropDownMunu}>
                Портфолио
                <img src={isPortfolioOpen ? arrowClose : arrowOpen} alt="Стрелка" className="mobile-navigation__arrow"/>
            </h3>
            {isPortfolioOpen && 
                ( 
                    <>
                        <Link to={'/portfolio-web'} className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onCloseMobileNavigation}>Web студия</Link>
                        <Link to={'/portfolio-it'} className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onCloseMobileNavigation}>IT сервис</Link>
                    </>
                )
            }
            <h3 className="mobile-navigation__links mobile-navigation__links_menu" onClick={handlePriceDropDownMunu}>
                Цены на услуги
                <img src={isPriceOpen ? arrowClose : arrowOpen} alt="Стрелка" className="mobile-navigation__arrow"/>
            </h3>
            {isPriceOpen && 
                ( 
                    <>
                        <Link to={'/price-web'} className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onCloseMobileNavigation}>Web студия</Link>
                        <Link to={'/price-it'} className="mobile-navigation__links mobile-navigation__links_drop-down" onClick={onCloseMobileNavigation}>IT сервис</Link>
                    </>
                )
            }
            <Link to={'/contacts'} className="mobile-navigation__links" onClick={onCloseMobileNavigation}>Контакты</Link>
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
    </div>
  );
}

export default MobileNavigation;