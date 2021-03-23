import React from 'react';
import mouse from '../../images/svg/mouse.svg';
import PageForm from '../PageForm/PageForm';
import { Link } from 'react-router-dom';

function MainPage (props) {

    const {
        onSendForm,
        isDropDownMenuOpen,
    } = props;

    return (
        <section className="main-page">
            <nav className="main-page__images-container">
                <Link to={isDropDownMenuOpen ? `/` : `/it`} className="main-page__container main-page__container_it">
                    <div className="main-page__container-overlay">
                        <h2 className="main-page__heading main-page__heading_it">IT СЕРВИС</h2>
                        <img src={mouse} alt="Иконка мышки" className="main-page__mouse-icon" />
                    </div>
                </Link>
                <Link to={isDropDownMenuOpen ? `/` : `/web`} className="main-page__container main-page__container_web">
                    <div className="main-page__container-overlay">
                        <h2 className="main-page__heading main-page__heading_web">WEB СТУДИЯ</h2>
                        <p className="main-page__down-text">Прокрутите вниз</p>
                    </div>
                </Link>
            </nav>
            <PageForm
                onSendForm={onSendForm}
            />
        </section>
    );
}

export default MainPage;