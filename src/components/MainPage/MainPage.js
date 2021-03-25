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
                        <h1 className="main-page__heading main-page__heading_it">IT СЕРВИС</h1>
                        <img src={mouse} alt="Иконка мышки" className="main-page__mouse-icon" />
                    </div>
                </Link>
                <Link to={isDropDownMenuOpen ? `/` : `/web`} className="main-page__container main-page__container_web">
                    <div className="main-page__container-overlay">
                        <h1 className="main-page__heading main-page__heading_web">WEB СТУДИЯ</h1>
                        <p className="main-page__down-text">Прокрутите вниз</p>
                    </div>
                </Link>
            </nav>
            <PageForm
                onSendForm={onSendForm}
            />
            <section className="schedule">
                <h4 className="schedule__heading">МЫ В ЦИФРАХ</h4>
                <div className="schedule__container">
                    <div className="schedule__info-container">
                        <p className="schedule__number">97%</p>
                        <p className="schedule__info">довольных клиентов</p>
                    </div>
                    <div className="schedule__info-container">
                        <p className="schedule__number">23</p>
                        <p className="schedule__info">сотрудника</p>
                    </div>
                    <div className="schedule__info-container">
                        <p className="schedule__number">106</p>
                        <p className="schedule__info">компьютеров обслужено</p>
                    </div>
                    <div className="schedule__info-container">
                        <p className="schedule__number">59</p>
                        <p className="schedule__info">макетов уже сделано</p>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default MainPage;