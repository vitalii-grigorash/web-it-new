import React from 'react';
import dropDownMenuCloseButtonIcon from '../../images/svg/drop-down-menu-close-button.svg';
import { Link } from 'react-router-dom';

function DropDownMenu(props) {

    const {
        isOpen,
        setAbonentScrollTrue,
        setPriceScrollTrue,
    } = props;

    return (
        <div className={`drop-down-menu ${isOpen && 'drop-down-menu_opened'}`}>
            <div className="drop-down-menu__background">
                <img src={dropDownMenuCloseButtonIcon} alt="Иконка закрытия" className="drop-down-menu__close-button" />
                <nav className="drop-down-menu__container">
                    <Link to={'/web'} className="drop-down-menu__heading drop-down-menu__heading_web">WEB Студия</Link>
                    <Link to={'/shop'} className="drop-down-menu__links drop-down-menu__links_web">Интернет-магазин</Link>
                    <Link to={'/landing'} className="drop-down-menu__links drop-down-menu__links_web">Landing page</Link>
                    <Link to={'/business-card'} className="drop-down-menu__links drop-down-menu__links_web">Сайт-визитка</Link>
                    <Link to={'/multipage'} className="drop-down-menu__links drop-down-menu__links_web">Корпоративный сайт</Link>
                    <Link to={'/catalog'} className="drop-down-menu__links drop-down-menu__links_web">Сайт-каталог</Link>
                    <Link to={'/seo'} className="drop-down-menu__links drop-down-menu__links_web">SEO</Link>
                </nav>
                <nav className="drop-down-menu__container drop-down-menu__container_it">
                    <Link to={'/it'} className="drop-down-menu__heading drop-down-menu__heading_it">IT Сервис</Link>
                    <Link to={'/it'} className="drop-down-menu__links drop-down-menu__links_it" onClick={setAbonentScrollTrue}>Абонентское обслуживание</Link>
                    <Link to={'/it'} className="drop-down-menu__links drop-down-menu__links_it" onClick={setPriceScrollTrue}>Разовые услуги IT</Link>
                </nav>
            </div>
        </div>
    );
}

export default DropDownMenu;