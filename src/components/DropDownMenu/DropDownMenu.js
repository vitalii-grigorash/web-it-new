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
                    <Link to={'/landing'} className="drop-down-menu__links drop-down-menu__links_web" onClick={onCloseDropDownMenu}>Landing page</Link>
                    <Link to={'/business-card'} className="drop-down-menu__links drop-down-menu__links_web" onClick={onCloseDropDownMenu}>Сайт-визитка</Link>
                    <Link to={'/multipage'} className="drop-down-menu__links drop-down-menu__links_web" onClick={onCloseDropDownMenu}>Корпоративный сайт</Link>
                    <Link to={'/catalog'} className="drop-down-menu__links drop-down-menu__links_web" onClick={onCloseDropDownMenu}>Сайт-каталог</Link>
                    <Link to={'/seo'} className="drop-down-menu__links drop-down-menu__links_web" onClick={onCloseDropDownMenu}>SEO</Link>
                </nav>

                <nav className="drop-down-menu__container drop-down-menu__container_it">
                    <Link to={'/it'} className="drop-down-menu__heading drop-down-menu__heading_it" onClick={onCloseDropDownMenu}>IT Сервис</Link>
                    <Link to={'/it'} className="drop-down-menu__links drop-down-menu__links_it" onClick={onCloseDropDownMenu}>Абонентское обслуживание</Link>
                    <Link to={'/it'} className="drop-down-menu__links drop-down-menu__links_it" onClick={onCloseDropDownMenu}>Разовые услуги IT</Link>
                </nav>

            </div>        

        </section>

    );
}

export default DropDownMenu;