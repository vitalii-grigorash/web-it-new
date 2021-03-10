import React from 'react';
import mouse from '../../images/svg/mouse.svg';

function Seo (props) {

    const {
        onOpenPopup,
    } = props;

    return (
        <section className="seo">
            <div className="seo__image-container">
                <h2 className="seo__heading">SEO</h2>
                <p className="seo__subheading">SEO оптимизация Вашего сайта в Санкт-Петербурге</p>
                <button className="seo__button" type="button" onClick={onOpenPopup}>Получить консультацию</button>
                <div className="seo__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="seo__mouse-icon" />
                    <p className="seo__text">Прокрутите вниз</p>
                </div>
            </div>
        </section>
    );
}

export default Seo;