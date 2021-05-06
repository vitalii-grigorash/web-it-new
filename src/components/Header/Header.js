import React from 'react';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import Navigation from '../Navigation/Navigation';
import MobileHeader from '../MobileHeader/MobileHeader';

function Header (props) {

  const {
    onOpenDropDownMenu,
    onCloseDropDownMenu,
    isOpen,
    onOpenPortfolioDropDownMenu,
    onClosePortfolioDropDownMenu,
    isOpenPortfolio,
    onClosePriceDropDownMenu,
    onOpenPriceDropDownMenu,
    isOpenPrice,
    isMobileNavigationOpen,
    onOpenMobileNavigation,
    onCloseMobileNavigation,
    handleItDropDownMunu,
    handleWebDropDownMunu,
    handlePortfolioDropDownMunu,
    handlePriceDropDownMunu,
    isPriceOpen,
    isItOpen,
    isWebOpen,
    isPortfolioOpen,
    onOpenPopup,
    handleAbonentScroll,
    handlePriceScroll,
  } = props;

  return (
    <div className="header">
      <HeaderInfo
        onOpenPopup={onOpenPopup}
      />
      <Navigation
        onOpenDropDownMenu={onOpenDropDownMenu}
        onCloseDropDownMenu={onCloseDropDownMenu}
        isOpen={isOpen}
        onOpenPortfolioDropDownMenu={onOpenPortfolioDropDownMenu}
        onClosePortfolioDropDownMenu={onClosePortfolioDropDownMenu}
        isOpenPortfolio={isOpenPortfolio}
        onClosePriceDropDownMenu={onClosePriceDropDownMenu}
        onOpenPriceDropDownMenu={onOpenPriceDropDownMenu}
        isOpenPrice={isOpenPrice}
        handleAbonentScroll={handleAbonentScroll}
        handlePriceScroll={handlePriceScroll}
      />
      <MobileHeader
        isMobileNavigationOpen={isMobileNavigationOpen}
        onOpenMobileNavigation={onOpenMobileNavigation}
        onCloseMobileNavigation={onCloseMobileNavigation}
        onOpenPopup={onOpenPopup}
        handleItDropDownMunu={handleItDropDownMunu}
        handleWebDropDownMunu={handleWebDropDownMunu}
        handlePortfolioDropDownMunu={handlePortfolioDropDownMunu}
        handlePriceDropDownMunu={handlePriceDropDownMunu}
        isPriceOpen={isPriceOpen}
        isItOpen={isItOpen}
        isWebOpen={isWebOpen}
        isPortfolioOpen={isPortfolioOpen}
        handleAbonentScroll={handleAbonentScroll}
        handlePriceScroll={handlePriceScroll}
      />
    </div>
  );
}

export default Header;