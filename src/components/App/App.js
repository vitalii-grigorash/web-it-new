import React, {useState, useCallback} from 'react';
import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';

function App() {

  const [isDropDownMenuOpen, setDropDownMenuOpen] = useState(false);

  const handleCloseDropDownMenu = (evt) => {
    if ((evt.target).classList.contains("navigation__links_services") || (evt.target).classList.contains("navigation__arrow")) {
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
      />

      <Footer
        onSendForm={feedbackFormSend}
      />
      
    </div>
  );

}

export default App;
