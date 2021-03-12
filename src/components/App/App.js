import React, {useState, useCallback} from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import It from '../It/It';
import Web from '../Web/Web';
import Shop from '../Shop/Shop';
import Multipage from '../Multipage/Multipage';
import Catalog from '../Catalog/Catalog';
import BusinessCard from '../BusinessCard/BusinessCard';
import Landing from '../Landing/Landing';
import Seo from '../Seo/Seo';
import Portfolio from '../Portfolio/Portfolio';
import Contacts from '../Contacts/Contacts';
import StrojSnab from '../StrojSnab/StrojSnab';
import Voleks from '../Voleks/Voleks';
import YurKonsul from '../YurKonsul/YurKonsul';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
import Header from '../Header/Header';

function App () {

  const [isDropDownMenuOpen, setDropDownMenuOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [isMobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const [isItOpen, setItOpen] = useState(false);
  const [isWebOpen, setWebOpen] = useState(false);

  function handleItDropDownMunu () {
    if (!isItOpen) {
      setItOpen(true);
    } else {
      setItOpen(false);
    }
  }

  function handleWebDropDownMunu () {
    if (!isWebOpen) {
      setWebOpen(true);
    } else {
      setWebOpen(false);
    }
  }

  const handleCloseDropDownMenu = (evt) => {
    if (
      (evt.target).classList.contains("navigation__links_services") || 
      (evt.target).classList.contains("navigation__arrow")) 
      {
      dropDownMenuOpen();
    } else {
      if (!
        (
          (evt.target).classList.contains("drop-down-menu__background") ||
          (evt.target).classList.contains("drop-down-menu__container") ||
          (evt.target).classList.contains("drop-down-menu__heading") ||
          (evt.target).classList.contains("drop-down-menu__links")
        )
      ) {
        dropDownMenuClose();
      }
    }
  }

  function handleMobileNavigationOpen () {
    setItOpen(false);
    setWebOpen(false);
    setMobileNavigationOpen(true);
  }

  function handleMobileNavigationClose () {
    setMobileNavigationOpen(false);
  }

  function handlePopupOpen () {
    setMobileNavigationOpen(false);
    setPopupOpen(true);
  }

  function handlePopupClose () {
    setPopupOpen(false);
  }

  function handleSuccessPopupOpen () {
    setSuccessPopupOpen(true);
  }

  function handleSuccessPopupClose () {
    setSuccessPopupOpen(false);
  }

  const memoizedOnClick = useCallback(handleCloseDropDownMenu, []);

  function dropDownMenuOpen () {
    setDropDownMenuOpen(true);
    document.addEventListener('click', memoizedOnClick);
  }

  function dropDownMenuClose () {
    setDropDownMenuOpen(false);
    document.removeEventListener('click', memoizedOnClick);
  }

  function feedbackFormSend (name, number, method) {
    console.log(name, number, method);
    handleSuccessPopupOpen();
  }

  return (
    <div className="app">

      <Header
        onOpenPopup={handlePopupOpen}
        onOpenDropDownMenu={dropDownMenuOpen}
        onCloseDropDownMenu={dropDownMenuClose}
        isOpen={isDropDownMenuOpen}
        isMobileNavigationOpen={isMobileNavigationOpen}
        onOpenMobileNavigation={handleMobileNavigationOpen}
        onCloseMobileNavigation={handleMobileNavigationClose}
        handleItDropDownMunu={handleItDropDownMunu}
        handleWebDropDownMunu={handleWebDropDownMunu}
        isItOpen={isItOpen}
        isWebOpen={isWebOpen}
      />

      <Switch>

        <Route path='/yur-konsul'>
          <YurKonsul />
        </Route>

        <Route path='/voleks'>
          <Voleks />
        </Route>

        <Route path='/stroj-snab'>
          <StrojSnab />
        </Route>

        <Route path='/contacts'>
          <Contacts />
        </Route>

        <Route path='/portfolio'>
          <Portfolio />
        </Route>

        <Route path='/seo'>
          <Seo
            onOpenPopup={handlePopupOpen}
          />
        </Route>

        <Route path='/landing'>
          <Landing
            onOpenPopup={handlePopupOpen}
          />
        </Route>

        <Route path='/business-card'>
          <BusinessCard
            onOpenPopup={handlePopupOpen}
          />
        </Route>

        <Route path='/catalog'>
          <Catalog
            onSendForm={feedbackFormSend}
            onOpenPopup={handlePopupOpen}
          />
        </Route>

        <Route path='/multipage'>
          <Multipage
            onSendForm={feedbackFormSend}
            onOpenPopup={handlePopupOpen}
          />
        </Route>

        <Route path='/shop'>
          <Shop
            onOpenPopup={handlePopupOpen}
          />
        </Route>

        <Route path='/web'>
          <Web 
            onSendForm={feedbackFormSend}
            onOpenPopup={handlePopupOpen}
          />
        </Route>

        <Route path='/it'>
          <It
            onOpenPopup={handlePopupOpen}
          />
        </Route>

        <Route path='/'>
          <MainPage 
            onSendForm={feedbackFormSend}
          />
        </Route>

      </Switch>

      <Footer
        onSendForm={feedbackFormSend}
      />

      <Popup
        isOpen={isPopupOpen}
        onClosePopup={handlePopupClose}
        onSendForm={feedbackFormSend}
      />

      <SuccessPopup
        isOpen={isSuccessPopupOpen}
        onClose={handleSuccessPopupClose}
      />
      
    </div>
  );
}

export default App;
