import React from 'react';
import logo from '../../images/svg/logo.svg';
import burgerMenuButton from '../../images/svg/burger-menu-button.svg';
import MobileNavigationCloseButton from '../../images/svg/mobile-navigation-close-button.svg';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

function MobileHeader (props) {

  const { 
    isMobileNavigationOpen,
    onOpenMobileNavigation,
    onCloseMobileNavigation,
    onOpenPopup,
} = props;

  return (
    <div className="mobile-header">

      <img src={logo} alt="Лого" className="mobile-header__logo" />

      <img 
        src={isMobileNavigationOpen ? MobileNavigationCloseButton : burgerMenuButton}
        alt="Лого" 
        className={`mobile-header__menu-button ${isMobileNavigationOpen && 'mobile-header__menu-button_close'}`}
        onClick={isMobileNavigationOpen ? onCloseMobileNavigation : onOpenMobileNavigation}
      />

      <MobileNavigation
        isMobileNavigationOpen={isMobileNavigationOpen}
        onOpenPopup={onOpenPopup}
      />

    </div>
  );
}

export default MobileHeader;