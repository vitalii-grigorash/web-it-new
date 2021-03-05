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
  } = props;

  return (
    <section className="header">
      <HeaderInfo
        onOpenPopup={onOpenPopup}
      />
      <Navigation
        onOpenDropDownMenu={onOpenDropDownMenu}
        onCloseDropDownMenu={onCloseDropDownMenu}
        isOpen={isOpen}
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
      />
    </section>
  );
}

export default Header;