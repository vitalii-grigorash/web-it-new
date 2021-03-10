import React from 'react';
import dropDownMenuCloseButtonIcon from '../../images/svg/drop-down-menu-close-button.svg';
import { Link } from 'react-router-dom';

function DropDownMenu (props) {

    const { 
        isOpen,
        onCloseDropDownMenu,
    } = props;

    return (

        <section className={`drop-down-menu ${isOpen && 'drop-down-menu_opened'}`}>

            <div className="drop-down-menu__background">

                <img src={dropDownMenuCloseButtonIcon} alt="Иконка закрытия" className="drop-down-menu__close-button"/>

                <nav className="drop-down-menu__container">
                    <Link to={'/web'} className="drop-down-menu__heading drop-down-menu__heading_web" onClick={onCloseDropDownMenu}>WEB Студия</Link>
                    <Link to={'/shop'} className="drop-down-menu__links drop-down-menu__links_web" onClick={onCloseDropDownMenu}>Интернет-магазин</Link>
                    <a href="#" className="drop-down-menu__links drop-down-menu__links_web" onClick={onCloseDropDownMenu}>Landing page</a>
                    <a href="#" className="drop-down-menu__links drop-down-menu__links_web" onClick={onCloseDropDownMenu}>Сайт-визитка</a>
                    <Link to={'/multipage'} className="drop-down-menu__links drop-down-menu__links_web" onClick={onCloseDropDownMenu}>Корпоративный сайт</Link>
                    <Link to={'/catalog'} className="drop-down-menu__links drop-down-menu__links_web" onClick={onCloseDropDownMenu}>Сайт-каталог</Link>
                    <a href="#" className="drop-down-menu__links drop-down-menu__links_web" onClick={onCloseDropDownMenu}>SEO</a>
                </nav>

                <nav className="drop-down-menu__container drop-down-menu__container_it">
                    <Link to={'/it'} className="drop-down-menu__heading drop-down-menu__heading_it" onClick={onCloseDropDownMenu}>IT Сервис</Link>
                    <a href="#" className="drop-down-menu__links drop-down-menu__links_it" onClick={onCloseDropDownMenu}>Абонентское обслуживание</a>
                    <a href="#" className="drop-down-menu__links drop-down-menu__links_it" onClick={onCloseDropDownMenu}>Разовые услуги IT</a>
                </nav>

            </div>        

        </section>

    );
}

export default DropDownMenu;