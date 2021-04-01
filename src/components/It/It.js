import React from 'react';
import mouse from '../../images/svg/mouse.svg';

function It (props) {

    const {
        onOpenPopup,
    } = props;

    return (
        <section className="it">
            <section className="it__image-container">
                <h1 className="it__heading">IT СЕРВИС</h1>
                <button className="it__button" type="button" onClick={onOpenPopup}>
                    Получить консультацию
                </button>
                <div className="it__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="it__mouse-icon" />
                    <p className="it__text">Прокрутите вниз</p>
                </div>
            </section>
        </section>
    );
}

export default It;