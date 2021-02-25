import React from 'react'
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function MainPage(props) {

    const { 
        onOpenDropDownMenu,
        onCloseDropDownMenu,
        isOpen,
    } = props;

    return (

        <div className="main-page">

            <Header />

            <Navigation 
                onOpenDropDownMenu={onOpenDropDownMenu}
                onCloseDropDownMenu={onCloseDropDownMenu}
                isOpen={isOpen}
            />

            <div className="images-container">
                <div className="gif"></div>
                <div className="img"></div>
            </div>

        </div>

    );
}

export default MainPage;