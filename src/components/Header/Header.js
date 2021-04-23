import React from 'react';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import Navigation from '../Navigation/Navigation';
import MobileHeader from '../MobileHeader/MobileHeader';

function Header (props) {

  const {
    onOpenDropDownMenu,
    onCloseDropDownMenu,
    isOpen,
    isMobileNavigationOpen,
    onOpenMobileNavigation,
    onCloseMobileNavigation,
    handleItDropDownMunu,
    handleWebDropDownMunu,
    isItOpen,
    isWebOpen,
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
        isItOpen={isItOpen}
        isWebOpen={isWebOpen}
        handleAbonentScroll={handleAbonentScroll}
        handlePriceScroll={handlePriceScroll}
      />
    </div>
  );
}

export default Header;