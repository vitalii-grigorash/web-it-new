import React from 'react';
import mouse from '../../images/svg/mouse.svg';
import stroiSnab from '../../images/stroi-snab-img.jpg';
import voleks from '../../images/voleks-img.jpg';
import voleksHover from '../../images/voleks-img-hover.jpg';
import arbellos from '../../images/arbellos-img.jpg';
import urKonsul from '../../images/ur-konsul-img.jpg';
import ostMebConsalt from '../../images/ost-meb-consalt-img.jpg';
import telecomService from '../../images/telecom-service-img.jpg';
import telecomServiceHover from '../../images/telecom-service-img-hover.jpg';
import laMiaBorsa from '../../images/la-mia-borsa-img.jpg';
import stroiSnabIcon from '../../images/svg/stroi-snab-icon.svg';
import voleksIcon from '../../images/svg/voleks-icon.svg';
import arbellosIcon from '../../images/svg/arbellos-icon.svg';
import urKonsulIcon from '../../images/svg/ur-consul-icon.svg';
import ostMebConsaltIcon from '../../images/svg/ost-med-consalt-icon.svg';
import telecomServiceIcon from '../../images/svg/telecom-service-icon.svg';
import laMiaBorsaIcon from '../../images/svg/la-mia-borsa-icon.svg';
import { Link } from 'react-router-dom';

function Portfolio () {

    return (
        <section className="portfolio">
            <div className="portfolio__image-container">
                <h2 className="portfolio__heading">ПОРТФОЛИО</h2>
                <div className="portfolio__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="portfolio__mouse-icon" />
                    <p className="portfolio__text">Прокрутите вниз</p>
                </div>
            </div>

            <section className="grid-container">

                <Link to={'/stroj-snab'} className="grid-container__group">
                    <img src={stroiSnab} alt="Фото Строй Снаб" className="grid-container__img"/>
                    <div className="overlay">
                       <img src={stroiSnabIcon} alt="Иконка Строй Снаб" className="overlay__icon overlay__icon_stroi-snab"/>
                       <h3 className="overlay__heading">СтройСнаб</h3>
                       <p className="overlay__subheading">Компания осуществляет строительные работы</p>
                    </div>
                </Link>

                <a href="#" className="grid-container__group">
                    <img src={voleks} alt="Фото Волекс" className="grid-container__img grid-container__img_voleks"/>
                    <img src={voleksHover} alt="Фото Волекс" className="grid-container__img grid-container__img_voleks-hover"/>
                    <div className="overlay">
                       <img src={voleksIcon} alt="Иконка Строй Снаб" className="overlay__icon overlay__icon_voleks"/>
                       <h3 className="overlay__heading">Волекс</h3>
                       <p className="overlay__subheading overlay__subheading_voleks">Продажа промышленного инструмента абразивных материалов</p>
                    </div>
                </a>

                <a href="#" className="grid-container__group">
                    <img src={arbellos} alt="Фото Арбеллос" className="grid-container__img"/>
                    <div className="overlay">
                       <img src={arbellosIcon} alt="Иконка Строй Снаб" className="overlay__icon overlay__icon_arbellos"/>
                       <h3 className="overlay__heading">ARbellos</h3>
                       <p className="overlay__subheading">Инсталяция светопрозрачных решений</p>
                    </div>
                </a>

                <a href="#" className="grid-container__group">
                    <img src={urKonsul} alt="Фото Юр Консул" className="grid-container__img"/>
                    <div className="overlay">
                       <img src={urKonsulIcon} alt="Иконка Строй Снаб" className="overlay__icon overlay__icon_ur-konsul"/>
                       <h3 className="overlay__heading">ЮрКонсул</h3>
                       <p className="overlay__subheading overlay__subheading_ur-konsul">Реализация деятельности ТСН(Ж), ЖСК и УК по управлению недвижимым имуществом</p>
                    </div>
                </a>

                <a href="#" className="grid-container__group">
                    <img src={ostMebConsalt} alt="Фото Ост Мед Консалт" className="grid-container__img"/>
                    <div className="overlay">
                       <img src={ostMebConsaltIcon} alt="Иконка Строй Снаб" className="overlay__icon overlay__icon_ost-meb-consalt"/>
                       <h3 className="overlay__heading">Остмедконсалт</h3>
                       <p className="overlay__subheading">Многопрофильная клиника: эстетическая медецины и пластическая хирургия</p>
                    </div>
                </a>

                <a href="#" className="grid-container__group">
                    <img src={telecomService} alt="Фото Телеком Сервис" className="grid-container__img grid-container__img_telecom-service"/>
                    <img src={telecomServiceHover} alt="Фото Телеком Сервис" className="grid-container__img grid-container__img_telecom-service-hover"/>
                    <div className="overlay">
                       <img src={telecomServiceIcon} alt="Иконка Строй Снаб" className="overlay__icon overlay__icon_telecom-service"/>
                       <h3 className="overlay__heading">ТелекомСервис</h3>
                       <p className="overlay__subheading overlay__subheading_telecom-service">Телекоммуникации, благоустройство и асфалтировании</p>
                    </div>
                </a>

                <a href="#" className="grid-container__group">
                    <img src={laMiaBorsa} alt="Фото Ля Миа Борса" className="grid-container__img"/>
                    <div className="overlay">
                       <img src={laMiaBorsaIcon} alt="Иконка Строй Снаб" className="overlay__icon overlay__icon_la-mia-borsa"/>
                       <h3 className="overlay__heading">La mia Borsa</h3>
                       <p className="overlay__subheading">Итальянские сумки в <nobr>Санкт-Петербурге</nobr></p>
                    </div>
                </a>

            </section>

        </section>
    );
}

export default Portfolio;