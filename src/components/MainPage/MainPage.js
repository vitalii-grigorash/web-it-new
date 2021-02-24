import React from 'react'
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function MainPage() {
    return (

        <div className="main-page">

            <Header />

            <Navigation />

            <div className="images-container">
                <div className="gif"></div>
                <div className="img"></div>
            </div>

        </div>

    );
}

export default MainPage;