import React from 'react';
import burgerMenuButton from '../../images/svg/burger-menu-button.svg';
import MobileNavigationCloseButton from '../../images/svg/mobile-navigation-close-button.svg';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import { Link } from 'react-router-dom';

function MobileHeader (props) {

  const { 
    isMobileNavigationOpen,
    onOpenMobileNavigation,
    onCloseMobileNavigation,
    onOpenPopup,
    handleItDropDownMunu,
    handleWebDropDownMunu,
    handlePortfolioDropDownMunu,
    handlePriceDropDownMunu,
    isPriceOpen,
    isItOpen,
    isWebOpen,
    isPortfolioOpen,
    handleAbonentScroll,
    handlePriceScroll,
  } = props;

  return (
    <div className="mobile-header">
      <Link to={'/'} className="mobile-header__logo"></Link>
      <img 
        src={isMobileNavigationOpen ? MobileNavigationCloseButton : burgerMenuButton}
        alt="Лого" 
        className={`mobile-header__menu-button ${isMobileNavigationOpen && 'mobile-header__menu-button_close'}`}
        onClick={isMobileNavigationOpen ? onCloseMobileNavigation : onOpenMobileNavigation}
      />
      <MobileNavigation
        isMobileNavigationOpen={isMobileNavigationOpen}
        onOpenPopup={onOpenPopup}
        handleItDropDownMunu={handleItDropDownMunu}
        handleWebDropDownMunu={handleWebDropDownMunu}
        handlePortfolioDropDownMunu={handlePortfolioDropDownMunu}
        handlePriceDropDownMunu={handlePriceDropDownMunu}
        isPriceOpen={isPriceOpen}
        isItOpen={isItOpen}
        isWebOpen={isWebOpen}
        isPortfolioOpen={isPortfolioOpen}
        onCloseMobileNavigation={onCloseMobileNavigation}
        handleAbonentScroll={handleAbonentScroll}
        handlePriceScroll={handlePriceScroll}
      />
    </div>
  );
}

export default MobileHeader;