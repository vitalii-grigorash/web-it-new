import React from 'react';
import { Helmet } from 'react-helmet-async';
import mouse from '../../images/svg/mouse.svg';
import stroiSnab from '../../images/stroi-snab-img.jpg';
import voleks from '../../images/voleks-img.jpg';
import voleksHover from '../../images/voleks-img-hover.jpg';
import arbellos from '../../images/arbellos-img.jpg';
import urKonsul from '../../images/ur-konsul-img.jpg';
import ostMebConsalt from '../../images/ost-meb-consalt-img.jpg';
import laMiaBorsa from '../../images/la-mia-borsa-img.jpg';
import stroiSnabIcon from '../../images/svg/stroi-snab-icon.svg';
import voleksIcon from '../../images/svg/voleks-icon.svg';
import arbellosIcon from '../../images/svg/arbellos-icon.svg';
import urKonsulIcon from '../../images/svg/ur-consul-icon.svg';
import ostMebConsaltIcon from '../../images/svg/ost-med-consalt-icon.svg';
import laMiaBorsaIcon from '../../images/svg/la-mia-borsa-icon.svg';
import { Link } from 'react-router-dom';

function PortfolioWeb () {

    return (
        <div className="portfolio-web">
            <Helmet
                title='Портфолио WEB ГК "Вымпел"'
                meta={[
                    {"name": "description", "content": "Создание и продвижение веб-сайтов в СПб! Современный дизайн! SEO оптимизация для эффективного привлечения клиентов! Команда профессионалов!"}
                ]}
                link={[
                    {"rel": "canonical", "href": "https://178spb.com/portfolio-web/"}
                ]}
            />
            <section className="portfolio-web__image-container">
                <h2 className="portfolio-web__heading">портфолио web студии</h2>
                <div className="portfolio-web__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="portfolio-web__mouse-icon" />
                    <p className="portfolio-web__text">Прокрутите вниз</p>
                </div>
            </section>
            <section className="grid-container">
                <Link to={'/stroj-snab'} className="grid-container__group">
                    <img src={stroiSnab} alt="Фото Строй Снаб" className="grid-container__img"/>
                    <div className="overlay">
                       <img src={stroiSnabIcon} alt="Иконка Строй Снаб" className="overlay__icon overlay__icon_stroi-snab"/>
                       <h4 className="overlay__heading">СтройСнаб</h4>
                       <p className="overlay__subheading">Компания осуществляет строительные работы</p>
                    </div>
                </Link>
                <Link to={'/voleks'} className="grid-container__group">
                    <img src={voleks} alt="Фото Волекс" className="grid-container__img grid-container__img_voleks"/>
                    <img src={voleksHover} alt="Фото Волекс" className="grid-container__img grid-container__img_voleks-hover"/>
                    <div className="overlay">
                       <img src={voleksIcon} alt="Иконка Волекс" className="overlay__icon overlay__icon_voleks"/>
                       <h4 className="overlay__heading">Волекс</h4>
                       <p className="overlay__subheading overlay__subheading_voleks">Продажа промышленного инструмента абразивных материалов</p>
                    </div>
                </Link>
                <Link to={'/ar-bellos'} className="grid-container__group">
                    <img src={arbellos} alt="Фото Арбеллос" className="grid-container__img"/>
                    <div className="overlay">
                       <img src={arbellosIcon} alt="Иконка Арбеллос" className="overlay__icon overlay__icon_arbellos"/>
                       <h4 className="overlay__heading">ARbellos</h4>
                       <p className="overlay__subheading">Инсталяция светопрозрачных решений</p>
                    </div>
                </Link>
                <Link to={'/yur-konsul'} className="grid-container__group">
                    <img src={urKonsul} alt="Фото Юр Консул" className="grid-container__img"/>
                    <div className="overlay">
                       <img src={urKonsulIcon} alt="Иконка Юр Консул" className="overlay__icon overlay__icon_ur-konsul"/>
                       <h4 className="overlay__heading">ЮрКонсул</h4>
                       <p className="overlay__subheading overlay__subheading_ur-konsul">Реализация деятельности ТСН(Ж), ЖСК и УК по управлению недвижимым имуществом</p>
                    </div>
                </Link>
                <Link to={'/ost-med-consult'} className="grid-container__group">
                    <img src={ostMebConsalt} alt="Фото Ост Мед Консалт" className="grid-container__img"/>
                    <div className="overlay">
                       <img src={ostMebConsaltIcon} alt="Иконка Ост Мед Консалт" className="overlay__icon overlay__icon_ost-meb-consalt"/>
                       <h4 className="overlay__heading">Остмедконсалт</h4>
                       <p className="overlay__subheading">Многопрофильная клиника: эстетическая медецины и пластическая хирургия</p>
                    </div>
                </Link>
                <Link to={'/la-mia-borsa'} className="grid-container__group">
                    <img src={laMiaBorsa} alt="Фото Ля Миа Борса" className="grid-container__img"/>
                    <div className="overlay">
                       <img src={laMiaBorsaIcon} alt="Иконка Ля Миа Борса" className="overlay__icon overlay__icon_la-mia-borsa"/>
                       <h4 className="overlay__heading">La mia Borsa</h4>
                       <p className="overlay__subheading">Итальянские сумки в <br/> Санкт-Петербурге</p>
                    </div>
                </Link>
            </section>
        </div>
    );
}

export default PortfolioWeb;