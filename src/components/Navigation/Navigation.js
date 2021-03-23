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
                    <Link to={'/'} className="navigation__links">О Компании</Link>
                    <p className="navigation__links navigation__links_services" onClick={handleDropDownMunu}>
                        Услуги
                        <img src={arrow} alt="Стрелка" className="navigation__arrow"/>
                    </p>
                    <Link to={'/portfolio'} className="navigation__links">Портфолио</Link>
                    <Link to={'/contacts'} className="navigation__links">Контакты</Link>
                    <DropDownMenu
                        isOpen={isOpen}
                    />
                </nav>
            </nav>
        </section>
    );
}

export default Navigation;