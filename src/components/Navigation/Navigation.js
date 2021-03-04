import React from 'react';
import logo from '../../images/svg/logo.svg';
import arrow from '../../images/svg/arrow.svg';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { Link } from 'react-router-dom';

function Navigation(props) {

    const { 
        onOpenDropDownMenu,
        onCloseDropDownMenu,
        isOpen,
    } = props;

    function handleDropDownMunu() {
        if (!isOpen) {
            onOpenDropDownMenu();
        } else {
            onCloseDropDownMenu();
        }
    }

    return (
        <div className="navigation">
            <div className="navigation__container">
                <img src={logo} alt="Лого" className="navigation__logo" />
                <div className="navigation__main-links-container">
                    <Link to={'/it'} className="navigation__links navigation__links_it">IT Сервис</Link>
                    <a href="#" className="navigation__links navigation__links_web">WEB Студия</a>
                </div>
                <div className="navigation__links-container">
                    <a href="#" className="navigation__links">О Компании</a>
                    <a href="#" className="navigation__links navigation__links_services" onClick={handleDropDownMunu}>
                        Услуги
                        <img src={arrow} alt="Стрелка" className="navigation__arrow"/>
                    </a>
                    <a href="#" className="navigation__links">Портфолио</a>
                    <a href="#" className="navigation__links">Контакты</a>
                    <DropDownMenu
                        isOpen={isOpen}
                    />
                </div>
            </div>
        </div>
    );
}

export default Navigation;