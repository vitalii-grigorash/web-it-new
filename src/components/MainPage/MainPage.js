import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import mouse from '../../images/svg/mouse.svg';
import MobileHeader from '../MobileHeader/MobileHeader';
import PageForm from '../PageForm/PageForm';

function MainPage(props) {

    const {
        onOpenDropDownMenu,
        onCloseDropDownMenu,
        isOpen,
        onOpenPopup,
        isMobileNavigationOpen,
        onOpenMobileNavigation,
        onCloseMobileNavigation,
        handleItDropDownMunu,
        handleWebDropDownMunu,
        isItOpen,
        isWebOpen,
        onSendForm,
    } = props;

    return (

        <div className="main-page">

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

            <Header
                onOpenPopup={onOpenPopup}
            />

            <Navigation
                onOpenDropDownMenu={onOpenDropDownMenu}
                onCloseDropDownMenu={onCloseDropDownMenu}
                isOpen={isOpen}
            />

            <div className="main-page__images-container">

                <div className="main-page__container main-page__container_it">

                    <div className="main-page__container-overlay">
                        <h1 className="main-page__heading main-page__heading_it">IT СЕРВИС</h1>
                        <img src={mouse} alt="Иконка мышки" className="main-page__mouse-icon" />
                    </div>

                </div>

                <div className="main-page__container main-page__container_web">

                    <div className="main-page__container-overlay">
                        <h1 className="main-page__heading main-page__heading_web">WEB СТУДИЯ</h1>
                        <p className="main-page__down-text">Прокрутите вниз</p>
                    </div>

                </div>

            </div>

            <PageForm
                onSendForm={onSendForm}
            />

        </div>

    );
}

export default MainPage;