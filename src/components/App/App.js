import React, { useState, useCallback } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import It from '../It/It';
import Web from '../Web/Web';
import Shop from '../Shop/Shop';
import Multipage from '../Multipage/Multipage';
import Catalog from '../Catalog/Catalog';
import BusinessCard from '../BusinessCard/BusinessCard';
import Landing from '../Landing/Landing';
import Seo from '../Seo/Seo';
import PortfolioWeb from '../PortfolioWeb/PortfolioWeb';
import PortfolioIt from '../PortfolioIt/PortfolioIt';
import Contacts from '../Contacts/Contacts';
import StrojSnab from '../StrojSnab/StrojSnab';
import Voleks from '../Voleks/Voleks';
import YurKonsul from '../YurKonsul/YurKonsul';
import ArBellos from '../ArBellos/ArBellos';
import LaMiaBorsa from '../LaMiaBorsa/LaMiaBorsa';
import OstMedConsult from '../OstMedConsult/OstMedConsult';
import PriceIt from '../PriceIt/PriceIt';
import PriceWeb from '../PriceWeb/PriceWeb';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Popup from '../Popup/Popup';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
import Footer from '../Footer/Footer';
import * as FeedbackForm from '../../utils/FeedbackForm';

function App() {

  const [isDropDownMenuOpen, setDropDownMenuOpen] = useState(false);
  const [isDropDownMenuPortfolioOpen, setDropDownMenuPortfolioOpen] = useState(false);
  const [isDropDownMenuPriceOpen, setDropDownMenuPriceOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [isMobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const [isItOpen, setItOpen] = useState(false);
  const [isWebOpen, setWebOpen] = useState(false);
  const [isPortfolioOpen, setPortfolioOpen] = useState(false);
  const [isPriceOpen, setPriceOpen] = useState(false);
  const [isAbonent, setAbonent] = useState(false);
  const [isPrice, setPrice] = useState(false);
  const [submitButtonText, setSubmitButtonText] = useState('Получить консультацию');

  function handlePriceScroll() {
    if (!isPrice) {
      setPrice(true);
    } else {
      setPrice(false);
    }
  }

  function handleAbonentScroll() {
    if (!isAbonent) {
      setAbonent(true);
    } else {
      setAbonent(false);
    }
  }

  function handleItDropDownMunu() {
    if (!isItOpen) {
      setItOpen(true);
    } else {
      setItOpen(false);
    }
  }

  function handlePriceDropDownMunu() {
    if (!isPriceOpen) {
      setPriceOpen(true);
    } else {
      setPriceOpen(false);
    }
  }

  function handlePortfolioDropDownMunu() {
    if (!isPortfolioOpen) {
      setPortfolioOpen(true);
    } else {
      setPortfolioOpen(false);
    }
  }

  function handleWebDropDownMunu() {
    if (!isWebOpen) {
      setWebOpen(true);
    } else {
      setWebOpen(false);
    }
  }

  const handlePriceDropDownMenu = (evt) => {
    if (!
      (
        (evt.target).classList.contains("drop-down-menu-price__background") ||
        (evt.target).classList.contains("drop-down-menu-price__container") ||
        (evt.target).classList.contains("navigation__links_price") ||
        (evt.target).classList.contains("navigation__price-arrow")
      )
    ) {
      dropDownPriceMenuClose();
    }
  }

  const memoizedOnClickPriceDropDown = useCallback(handlePriceDropDownMenu, []);

  function dropDownPriceMenuOpen() {
    setDropDownMenuPriceOpen(true);
    document.addEventListener('click', memoizedOnClickPriceDropDown);
  }

  function dropDownPriceMenuClose() {
    setDropDownMenuPriceOpen(false);
    document.removeEventListener('click', memoizedOnClickPriceDropDown);
  }

  const handlePortfolioDropDownMenu = (evt) => {
    if (!
      (
        (evt.target).classList.contains("drop-down-menu-portfolio__background") ||
        (evt.target).classList.contains("drop-down-menu-portfolio__container") ||
        (evt.target).classList.contains("navigation__links_portfolio") ||
        (evt.target).classList.contains("navigation__portfolio-arrow")
      )
    ) {
      dropDownPortfolioMenuClose();
    }
  }

  const memoizedOnClickPortfolioDropDown = useCallback(handlePortfolioDropDownMenu, []);

  function dropDownPortfolioMenuOpen() {
    setDropDownMenuPortfolioOpen(true);
    document.addEventListener('click', memoizedOnClickPortfolioDropDown);
  }

  function dropDownPortfolioMenuClose() {
    setDropDownMenuPortfolioOpen(false);
    document.removeEventListener('click', memoizedOnClickPortfolioDropDown);
  }

  const handleDropDownMenu = (evt) => {
    if (!
      (
        (evt.target).classList.contains("drop-down-menu__background") ||
        (evt.target).classList.contains("drop-down-menu__container") ||
        (evt.target).classList.contains("navigation__links_services") ||
        (evt.target).classList.contains("navigation__arrow")
      )
    ) {
      dropDownMenuClose();
    }
  }

  const memoizedOnClickDropDown = useCallback(handleDropDownMenu, []);

  function dropDownMenuOpen() {
    setDropDownMenuOpen(true);
    document.addEventListener('click', memoizedOnClickDropDown);
  }

  function dropDownMenuClose() {
    setDropDownMenuOpen(false);
    document.removeEventListener('click', memoizedOnClickDropDown);
  }

  const handleMobileNavigatinClose = (evt) => {
    if (!
      (
        (evt.target).classList.contains("mobile-header") ||
        (evt.target).classList.contains("mobile-header__menu-button") ||
        (evt.target).classList.contains("mobile-navigation") ||
        (evt.target).classList.contains("mobile-navigation__nav-container") ||
        (evt.target).classList.contains("mobile-navigation__links") ||
        (evt.target).classList.contains("mobile-navigation__arrow") ||
        (evt.target).classList.contains("mobile-navigation__info-container") ||
        (evt.target).classList.contains("mobile-navigation__info-heading") ||
        (evt.target).classList.contains("mobile-navigation__icon-container")
      )
    ) {
      handleMobileNavigationClose();
    }
  }

  const memoizedOnCloseMobileNavigatin = useCallback(handleMobileNavigatinClose, []);

  function handleMobileNavigationOpen() {
    setItOpen(false);
    setWebOpen(false);
    setPortfolioOpen(false);
    setPriceOpen(false);
    setMobileNavigationOpen(true);
    document.addEventListener('click', memoizedOnCloseMobileNavigatin);
  }

  function handleMobileNavigationClose() {
    setMobileNavigationOpen(false);
    document.removeEventListener('click', memoizedOnCloseMobileNavigatin);
  }

  function handlePopupOpen() {
    setMobileNavigationOpen(false);
    setPopupOpen(true);
  }

  function handlePopupClose() {
    setPopupOpen(false);
  }

  function handleSuccessPopupOpen() {
    setSuccessPopupOpen(true);
  }

  function handleSuccessPopupClose() {
    setSuccessPopupOpen(false);
  }

  function feedbackFormSend(name, number, method) {
    setSubmitButtonText('Отправка...')
    FeedbackForm.sendForm(name, number, method)
      .then(() => {
        handlePopupClose();
        handleSuccessPopupOpen();
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setSubmitButtonText('Получить консультацию');
      });
  }

  function feedbackFormSendCatalog(name, number, method) {
    setSubmitButtonText('Отправка...')
    FeedbackForm.sendFormCatalog(name, number, method)
      .then(() => {
        handleSuccessPopupOpen();
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setSubmitButtonText('Получить консультацию');
      });
  }

  return (

    <div className="app">

      <Header
        onOpenPopup={handlePopupOpen}
        onOpenDropDownMenu={dropDownMenuOpen}
        onCloseDropDownMenu={dropDownMenuClose}
        onOpenPortfolioDropDownMenu={dropDownPortfolioMenuOpen}
        onClosePortfolioDropDownMenu={dropDownPortfolioMenuClose}
        onOpenPriceDropDownMenu={dropDownPriceMenuOpen}
        onClosePriceDropDownMenu={dropDownPriceMenuClose}
        isOpen={isDropDownMenuOpen}
        isOpenPortfolio={isDropDownMenuPortfolioOpen}
        isOpenPrice={isDropDownMenuPriceOpen}
        isMobileNavigationOpen={isMobileNavigationOpen}
        onOpenMobileNavigation={handleMobileNavigationOpen}
        onCloseMobileNavigation={handleMobileNavigationClose}
        handleItDropDownMunu={handleItDropDownMunu}
        handleWebDropDownMunu={handleWebDropDownMunu}
        handlePortfolioDropDownMunu={handlePortfolioDropDownMunu}
        handlePriceDropDownMunu={handlePriceDropDownMunu}
        isPriceOpen={isPriceOpen}
        isPortfolioOpen={isPortfolioOpen}
        isItOpen={isItOpen}
        isWebOpen={isWebOpen}
        handlePriceScroll={handlePriceScroll}
        handleAbonentScroll={handleAbonentScroll}
      />

      <Switch>

        <Route path='/' exact>
          <MainPage
            isDropDownMenuOpen={isDropDownMenuOpen}
            isDropDownMenuPortfolioOpen={isDropDownMenuPortfolioOpen}
            isDropDownMenuPriceOpen={isDropDownMenuPriceOpen}
            onSendForm={feedbackFormSend}
            submitButtonText={submitButtonText}
          />
        </Route>

        <Route path='/it'>
          <It
            isAbonent={isAbonent}
            isPrice={isPrice}
            handleAbonentScroll={handleAbonentScroll}
            handlePriceScroll={handlePriceScroll}
            onSendForm={feedbackFormSend}
            onOpenPopup={handlePopupOpen}
            submitButtonText={submitButtonText}
          />
        </Route>

        <Route path='/web'>
          <Web
            onSendForm={feedbackFormSend}
            onOpenPopup={handlePopupOpen}
            submitButtonText={submitButtonText}
          />
        </Route>

        <Route path='/portfolio-web'>
          <PortfolioWeb />
        </Route>

        <Route path='/portfolio-it'>
          <PortfolioIt />
        </Route>

        <Route path='/price-it'>
          <PriceIt
            onOpenPopup={handlePopupOpen}
          />
        </Route>

        <Route path='/price-web'>
          <PriceWeb
            onOpenPopup={handlePopupOpen}
          />
        </Route>

        <Route path='/contacts'>
          <Contacts />
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
            onSendForm={feedbackFormSendCatalog}
            onOpenPopup={handlePopupOpen}
            submitButtonText={submitButtonText}
          />
        </Route>

        <Route path='/multipage'>
          <Multipage
            onSendForm={feedbackFormSend}
            onOpenPopup={handlePopupOpen}
            submitButtonText={submitButtonText}
          />
        </Route>

        <Route path='/shop'>
          <Shop
            onOpenPopup={handlePopupOpen}
          />
        </Route>

        <Route path='/seo'>
          <Seo
            onSendForm={feedbackFormSend}
            onOpenPopup={handlePopupOpen}
            submitButtonText={submitButtonText}
          />
        </Route>

        <Route path='/ost-med-consult'>
          <OstMedConsult />
        </Route>

        <Route path='/la-mia-borsa'>
          <LaMiaBorsa />
        </Route>

        <Route path='/ar-bellos'>
          <ArBellos />
        </Route>

        <Route path='/yur-konsul'>
          <YurKonsul />
        </Route>

        <Route path='/voleks'>
          <Voleks />
        </Route>

        <Route path='/stroj-snab'>
          <StrojSnab />
        </Route>

        <Switch>
          <Route exact path="/404" component={NotFound} />
          <Redirect from='*' to='/404' />
        </Switch>

      </Switch>

      <Footer
        onSendForm={feedbackFormSend}
        submitButtonText={submitButtonText}
      />

      <Popup
        isOpen={isPopupOpen}
        onClosePopup={handlePopupClose}
        onSendForm={feedbackFormSend}
        submitButtonText={submitButtonText}
      />

      <SuccessPopup
        isOpen={isSuccessPopupOpen}
        onClose={handleSuccessPopupClose}
      />

    </div>
  );
}

export default App;
