import React, {useState, useCallback} from 'react';
import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';

function App() {

  const [isDropDownMenuOpen, setDropDownMenuOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isMobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const [isItOpen, setItOpen] = useState(false);
  const [isWebOpen, setWebOpen] = useState(false);

  function handleItDropDownMunu() {
    if (!isItOpen) {
        setItOpen(true);
    } else {
        setItOpen(false);
    }
  }

  function handleWebDropDownMunu() {
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
    setPopupOpen(true);
  }

  function handlePopupClose () {
    setPopupOpen(false);
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
  }

  return (
    <div className="app">

      <MainPage 
        onOpenDropDownMenu={dropDownMenuOpen}
        onCloseDropDownMenu={dropDownMenuClose}
        isOpen={isDropDownMenuOpen}
        onOpenPopup={handlePopupOpen}
        isMobileNavigationOpen={isMobileNavigationOpen}
        onOpenMobileNavigation={handleMobileNavigationOpen}
        onCloseMobileNavigation={handleMobileNavigationClose}
        handleItDropDownMunu={handleItDropDownMunu}
        handleWebDropDownMunu={handleWebDropDownMunu}
        isItOpen={isItOpen}
        isWebOpen={isWebOpen}

      />

      <Footer
        onSendForm={feedbackFormSend}
      />

      <Popup
        isOpen={isPopupOpen}
        onClosePopup={handlePopupClose}
        onSendForm={feedbackFormSend}
      />
      
    </div>
  );

}

export default App;
