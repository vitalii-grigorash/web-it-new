import React from 'react';
import mouse from '../../images/svg/mouse.svg';

function It() {

    return (
        <div className="it">
            <div className="it__image-container">
                <h1 className="it__heading">IT СЕРВИС</h1>
                <div className="it__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="it__mouse-icon" />
                    <p className="it__text">Прокрутите вниз</p>
                </div>
            </div>
        </div>
    );
}

export default It;