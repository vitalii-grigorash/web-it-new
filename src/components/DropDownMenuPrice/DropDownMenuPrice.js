import React from 'react';
import dropDownMenuCloseButtonIcon from '../../images/svg/drop-down-menu-close-button.svg';
import { Link } from 'react-router-dom';

function DropDownMenuPrice (props) {

    const {
        isOpenPrice
    } = props;

    return (
        <div className={`drop-down-menu-price ${isOpenPrice && 'drop-down-menu-price_opened'}`}>
            <div className="drop-down-menu-price__background">
                <img src={dropDownMenuCloseButtonIcon} alt="Иконка закрытия" className="drop-down-menu-price__close-button" />
                <nav className="drop-down-menu-price__container">
                    <Link to={'/portfolio-web'} className="drop-down-menu-price__links drop-down-menu-price__links_web">WEB Студия</Link>
                </nav>
                <nav className="drop-down-menu-price__container drop-down-menu-price__container_it">
                    <Link to={'/it'} className="drop-down-menu-price__links drop-down-menu-price__links_it">IT Сервис</Link>
                </nav>
            </div>
        </div>
    );
}

export default DropDownMenuPrice;