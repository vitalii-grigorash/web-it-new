import React from 'react'
import logo from '../../images/svg/logo.svg'

function Navigation() {
    return (

        <div className="navigation">

            <div className="navigation__container">

                <img src={logo} alt="Лого" className="navigation__logo" />

                <div className="navigation__main-links-container">

                    <a href="#" className="navigation__links">IT Сервис</a>
                    <a href="#" className="navigation__links">WEB Студия</a>

                </div>

                <div className="navigation__links-container">

                    <a href="#" className="navigation__links">О Компании</a>
                    <a href="#" className="navigation__links">Услуги</a>
                    <a href="#" className="navigation__links">Портфолио</a>
                    <a href="#" className="navigation__links">Контакты</a>

                </div>

            </div>

        </div>

    );
}

export default Navigation;