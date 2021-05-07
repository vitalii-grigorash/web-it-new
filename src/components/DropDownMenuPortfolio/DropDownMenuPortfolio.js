import React from 'react';
import dropDownMenuCloseButtonIcon from '../../images/svg/drop-down-menu-close-button.svg';
import { Link } from 'react-router-dom';

function DropDownMenuPortfolio (props) {

    const {
        isOpenPortfolio
    } = props;

    return (
        <div className={`drop-down-menu-portfolio ${isOpenPortfolio && 'drop-down-menu-portfolio_opened'}`}>
            <div className="drop-down-menu-portfolio__background">
                <img src={dropDownMenuCloseButtonIcon} alt="Иконка закрытия" className="drop-down-menu-portfolio__close-button" />
                <nav className="drop-down-menu-portfolio__container">
                    <Link to={'/portfolio-web'} className="drop-down-menu-portfolio__links drop-down-menu-portfolio__links_web">WEB Студия</Link>
                </nav>
                <nav className="drop-down-menu-portfolio__container drop-down-menu-portfolio__container_it">
                    <Link to={'/portfolio-it'} className="drop-down-menu-portfolio__links drop-down-menu-portfolio__links_it">IT Сервис</Link>
                </nav>
            </div>
        </div>
    );
}

export default DropDownMenuPortfolio;