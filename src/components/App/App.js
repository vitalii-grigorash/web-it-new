import React, {useState, useCallback} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
import ArBellos from '../ArBellos/ArBellos';
import LaMiaBorsa from '../LaMiaBorsa/LaMiaBorsa';
import OstMedConsult from '../OstMedConsult/OstMedConsult';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import * as FeedbackForm from '../../utils/FeedbackForm';

function App () {

  const [isDropDownMenuOpen, setDropDownMenuOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [isMobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const [isItOpen, setItOpen] = useState(false);
  const [isWebOpen, setWebOpen] = useState(false);
  const [isAbonent, setAbonent] = useState(false);
  const [isPrice, setPrice] = useState(false);
  const [submitButtonText, setSubmitButtonText] = useState('Получить консультацию');

  function handlePriceScroll () {
    if (!isPrice) {
      setPrice(true);
    } else {
      setPrice(false);
    }
  }

  function handleAbonentScroll () {
    if (!isAbonent) {
      setAbonent(true);
    } else {
      setAbonent(false);
    }
  }

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

  function dropDownMenuOpen () {
    setDropDownMenuOpen(true);
    document.addEventListener('click', memoizedOnClickDropDown);
  }

  function dropDownMenuClose () {
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

  function handleMobileNavigationOpen () {
    setItOpen(false);
    setWebOpen(false);
    setMobileNavigationOpen(true);
    document.addEventListener('click', memoizedOnCloseMobileNavigatin);
  }

  function handleMobileNavigationClose () {
    setMobileNavigationOpen(false);
    document.removeEventListener('click', memoizedOnCloseMobileNavigatin);
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

  function feedbackFormSend (name, number, method) {
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

  function feedbackFormSendCatalog (name, number, method) {
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

      <Helmet
        title='Создание сайтов в Санкт-Петербурге – "Вымпел"'
        meta={[
          {"name": "description", "content": "Создание и продвижение сайтов! Современный дизайн! SEO оптимизация для эффективного привлечения клиентов! Техническое обслуживание персональных компьютеров, печатных устройств и т.д.! Команда профессионалов!"}
        ]}
      />

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
        handlePriceScroll={handlePriceScroll}
        handleAbonentScroll={handleAbonentScroll}
      />

      <Switch>

        <Route path='/' exact>
          <MainPage 
            isDropDownMenuOpen={isDropDownMenuOpen}
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

        <Route path='/portfolio'>
          <Portfolio />
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
