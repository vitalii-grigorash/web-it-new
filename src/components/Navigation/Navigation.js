import React from 'react';
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
        <section className="navigation">
            <nav className="navigation__container">
                <Link to={'/'} className="navigation__logo"></Link>
                <nav className="navigation__main-links-container">
                    <Link to={'/it'} className="navigation__links navigation__links_it">IT Сервис</Link>
                    <Link to={'/web'} className="navigation__links navigation__links_web">WEB Студия</Link>
                </nav>
                <nav className="navigation__links-container">
                    <a href="#" className="navigation__links">О Компании</a>
                    <p className="navigation__links navigation__links_services" onClick={handleDropDownMunu}>
                        Услуги
                        <img src={arrow} alt="Стрелка" className="navigation__arrow"/>
                    </p>
                    <a href="#" className="navigation__links">Портфолио</a>
                    <a href="#" className="navigation__links">Контакты</a>
                    <DropDownMenu
                        isOpen={isOpen}
                        onCloseDropDownMenu={onCloseDropDownMenu}
                    />
                </nav>
            </nav>
        </section>
    );
}

export default Navigation;