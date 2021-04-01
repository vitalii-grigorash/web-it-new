import React from 'react';
import ostMedConsultIcon from '../../images/svg/ost-med-consalt-icon.svg';
import ostMediaConsultAbout from '../../images/ost-med-consult-about-img.jpg';
import terminalIcon from '../../images/svg/terminal-icon.svg';
import cresIcon from '../../images/svg/cres-icon.svg';
import doctorIcon from '../../images/svg/doctor-icon.svg';
import certIcon from '../../images/svg/cert-icon.svg';
import girlAdaptiveImg from '../../images/girl-adaptive-img.jpg';
import previewImg from '../../images/ost-med-consult-img-preview.jpg';
import Stages from '../Stages/Stages';

function OstMedConsult () {

    return (
        <section className="ost-med-consult">

            <section className="ost-med-consult__image">
                <div className="ost-med-consult__overlay-container">
                    <img src={ostMedConsultIcon} alt="Иконка Арбеллос" className="ost-med-consult__icon" />
                    <h1 className="ost-med-consult__heading">Остмедконсалт</h1>
                    <p className="ost-med-consult__subheading">Многопрофильная клиника: эстетическая медицина и пластическая хирургия</p>
                </div>
            </section>
            <section className="about-ost-med-consult">
                <h2 className="about-ost-med-consult__heading">О ПРОЕКТЕ</h2>
                <div className="about-ost-med-consult__container">
                    <img src={ostMediaConsultAbout} alt="Изображение Ост Медиа Консалт" className="about-ost-med-consult__img" />
                    <div className="about-ost-med-consult__text-container">
                        <p className="about-ost-med-consult__text">
                            Многопрофильная клиника ОстМедКонсалт работает в области эстетической 
                            медицины с 1998 года. И первой в <nobr>Санкт-Петербурге</nobr> предложила революционную 
                            методику золотого армирования, технику которой наши врачи осваивали в Испании.
                        </p>
                        <p className="about-ost-med-consult__text">
                            Успех, достигнутый в этой области, послужил толчком к дальнейшему 
                            развитию. С 2011 года «ОстМедКонсалт» включена в перечень медицинских 
                            организаций, участвующих в реализации Территориальной программы ОМС <nobr>Санкт-Петербурга</nobr>. 13 
                            тысяч детей за эти годы получили медицинскую помощь 
                            высочайшего уровня благодаря технологиям лазерной и близкофокусной рентген 
                            терапии, которые в нашем регионе выполняются только в «ОстМедКонсалт».
                        </p>
                    </div>
                </div>
            </section>
            <Stages />
            <section className="colors">
                <div className="colors__main-container">
                    <h2 className="colors__heading">ЦВЕТА И ИКОНКИ</h2>
                    <div className="colors__content-container">
                        <div className="colors__container">
                            <div className="colors__square-container">
                                <div className="colors__square-group">
                                    <div className="colors__square colors__square_grey"></div>
                                    <div className="colors__type-container">
                                        <p className="colors__type">#54595F</p>
                                    </div>
                                </div>
                                <div className="colors__square-group">
                                    <div className="colors__square colors__square_green"></div>
                                    <div className="colors__type-container">
                                        <p className="colors__type">#00BA6F</p>
                                    </div>
                                </div>
                                <div className="colors__square-group">
                                    <div className="colors__square colors__square_yellow"></div>
                                    <div className="colors__type-container">
                                        <p className="colors__type">#F2E972</p>
                                    </div>
                                </div>
                            </div>
                            <div className="colors__rectangle-group">
                                <div className="colors__rectangle colors__rectangle_light-grey"></div>
                                <div className="colors__type-container">
                                    <p className="colors__type">#E6E9E7</p>
                                </div>
                            </div>
                        </div>
                        <div className="colors__icon-container">
                            <div className="colors__ferst-container colors__first-container_la-mia-borsa">
                                <img className="colors__icon colors__icon_call-center" src={terminalIcon} alt="Иконка терминала"/>
                                <img className="colors__icon colors__icon_first-bag" src={cresIcon} alt="Иконка креста"/>
                            </div>
                            <div className="colors__second-container colors__second-container_la-mia-borsa">
                                <img className="colors__icon colors__icon_best" src={doctorIcon} alt="Иконка доктора"/>
                                <img className="colors__icon colors__icon_second-bag" src={certIcon} alt="Иконка сертификата"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="typography">
                <h2 className="typography__header">ТИПОГРАФИКА</h2>
                <div className="typography__container">
                    <p className="typography__letter-main">Aa</p>
                    <div className="typography__roboto-container">
                        <h4 className="typography__roboto-heading typography__roboto-heading_open-sans">Open Sans</h4>
                        <p className="typography__roboto-letters typography__roboto-letters_open-sans">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        <p className="typography__roboto-letters typography__roboto-letters_open-sans">Aa Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъ Ы Ь Ээ Юю Яя</p>
                    </div>
                </div>
            </section>
            <section className="adaptive-ost-med-consult">
                <img className="adaptive-ost-med-consult__img" src={girlAdaptiveImg} alt="Изображение устройств"/>
                <div className="adaptive-ost-med-consult__info-container">
                    <h2 className="adaptive-ost-med-consult__heading">АДАПТИВНЫЙ ДИЗАЙН</h2>
                    <p className="adaptive-ost-med-consult__description">
                        Все наши сайты можно просматривать на самых разных устройствах, 
                        таких как смартфон, планшет, ноутбук и т.д., независимо от разрешения экрана. 
                        Все элементы интерфейса одинаково удобны для всех устройств и их пользователей, 
                        например, пользователям мобильных устройств не нужно приближать кнопку на сайте, 
                        чтобы не промахнуться мимо нужной ссылки.
                    </p>
                </div>
            </section>
            <section className="preview-ost-med-consult">
                <img className="preview-ost-med-consult__img" src={previewImg} alt="Изображение превью Ост мед консалт"/>
            </section>
        </section>
    );
}

export default OstMedConsult;