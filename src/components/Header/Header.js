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
    setAbonentScrollTrue,
    setPriceScrollTrue,
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
        setAbonentScrollTrue={setAbonentScrollTrue}
        setPriceScrollTrue={setPriceScrollTrue}
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
        setAbonentScrollTrue={setAbonentScrollTrue}
        setPriceScrollTrue={setPriceScrollTrue}
      />
    </div>
  );
}

export default Header;