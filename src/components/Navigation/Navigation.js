import React from 'react';
import arrow from '../../images/svg/arrow.svg';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import DropDownMenuPortfolio from '../DropDownMenuPortfolio/DropDownMenuPortfolio';
import DropDownMenuPrice from '../DropDownMenuPrice/DropDownMenuPrice';
import { Link } from 'react-router-dom';

function Navigation (props) {

    const { 
        onOpenDropDownMenu,
        onCloseDropDownMenu,
        isOpen,
        onOpenPortfolioDropDownMenu,
        onClosePortfolioDropDownMenu,
        isOpenPortfolio,
        onOpenPriceDropDownMenu,
        onClosePriceDropDownMenu,
        isOpenPrice,
        handleAbonentScroll,
        handlePriceScroll,
    } = props;

    function handleDropDownMunu() {
        if (!isOpen) {
            onOpenDropDownMenu();
        } else {
            onCloseDropDownMenu();
        }
    }

    function handleDropDownMunuPortfolio() {
        if (!isOpenPortfolio) {
            onOpenPortfolioDropDownMenu();
        } else {
            onClosePortfolioDropDownMenu();
        }
    }

    function handleDropDownMunuPrice() {
        if (!isOpenPrice) {
            onOpenPriceDropDownMenu();
        } else {
            onClosePriceDropDownMenu();
        }
    }

    return (
        <div className="navigation">
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
                    <p className="navigation__links navigation__links_portfolio" onClick={handleDropDownMunuPortfolio}>
                        Портфолио
                        <img src={arrow} alt="Стрелка" className="navigation__portfolio-arrow"/>
                    </p>
                    <p className="navigation__links navigation__links_price" onClick={handleDropDownMunuPrice}>
                        Цены на услуги
                        <img src={arrow} alt="Стрелка" className="navigation__price-arrow"/>
                    </p>
                    <Link to={'/contacts'} className="navigation__links">Контакты</Link>
                    <DropDownMenu
                        handleAbonentScroll={handleAbonentScroll}
                        handlePriceScroll={handlePriceScroll}
                        isOpen={isOpen}
                    />
                    <DropDownMenuPortfolio
                        isOpenPortfolio={isOpenPortfolio}
                    />
                    <DropDownMenuPrice
                        isOpenPrice={isOpenPrice} 
                    />
                </nav>
            </nav>
        </div>
    );
}

export default Navigation;