import React from 'react';
import stroiSnabIcon from '../../images/svg/stroi-snab-icon.svg';
import iconOne from '../../images/svg/stages-1.svg';
import iconTwo from '../../images/svg/stages-2.svg';
import iconThree from '../../images/svg/stages-3.svg';
import iconFour from '../../images/svg/stages-4.svg';
import moneyIcon from '../../images/svg/money-icon.svg';
import sunIcon from '../../images/svg/sun-icon.svg';
import calendarIcon from '../../images/svg/calendar-icon.svg';
import handsIcon from '../../images/svg/hands-icon.svg';
import miniEllipse from '../../images/svg/mini-ellipse.svg';
import stroiSnabAboutImg from '../../images/stroi-snab-about-img.jpg';

function StrojSnab() {

    return (
        <section className="stroj-snab">

            <div className="stroj-snab__image">
                <div className="stroj-snab__overlay-container">
                    <img src={stroiSnabIcon} alt="Иконка Строй Снаб" className="stroj-snab__icon" />
                    <h3 className="stroj-snab__heading">СтройСнаб</h3>
                    <p className="stroj-snab__subheading">Компания осуществляет строительные работы</p>
                </div>
            </div>

            <section className="about">
                <h3 className="about__heading">О ПРОЕКТЕ</h3>
                <div className="about__container">
                    <img src={stroiSnabAboutImg} alt="Фотография" className="about__img" />
                    <div className="about__text-container">
                        <p className="about__subheading">Компания «СтройСнаб» работает с 2010 года, и, судя по отзывам Заказчиков, уже заработала себе имя и положительную репутацию.</p>
                        <p className="about__list-heading">Основными видами деятельности компании являются:</p>
                        <ul className="about__list">
                            <li className="about__list-item">- кровельные работы;</li>
                            <li className="about__list-item">- фасадные работы;</li>
                            <li className="about__list-item">- очистка кровель от снега и наледи;</li>
                            <li className="about__list-item">- ремонт крылец;</li>
                            <li className="about__list-item">- устройство и ремонт отмосток;</li>
                            <li className="about__list-item">- внутренний ремонт помещений и парадных;</li>
                            <li className="about__list-item">- сантехнические работы;</li>
                            <li className="about__list-item">- асфальтирование;</li>
                            <li className="about__list-item">- благоустройство территорий.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="stages">
                <h3 className="stages__heading">ЭТАПЫ РАБОТЫ</h3>
                <div className="stages__container">
                    <div className="stages__item-container">
                        <div className="stages__icon-container">
                            <img className="stages__icon" src={iconOne} alt="Иконка" />
                            <img className="stages__mini-ellipse" src={miniEllipse} alt="Кружок" />
                            <img className="stages__mini-ellipse" src={miniEllipse} alt="Кружок" />
                        </div>
                        <p className="stages__item-heading">Техническое задание</p>
                        <p className="stages__item-subheding">Получите бесплатную консультацию от наших специалистов.</p>
                    </div>
                    <div className="stages__item-container">
                        <div className="stages__icon-container">
                            <img className="stages__mini-ellipse" src={miniEllipse} alt="Кружок" />
                            <img className="stages__mini-ellipse" src={miniEllipse} alt="Кружок" />
                            <img className="stages__icon" src={iconTwo} alt="Иконка" />
                            <img className="stages__mini-ellipse" src={miniEllipse} alt="Кружок" />
                            <img className="stages__mini-ellipse" src={miniEllipse} alt="Кружок" />
                        </div>
                        <p className="stages__item-heading">Прототип дизайна</p>
                        <p className="stages__item-subheding">Получите бесплатную консультацию от наших специалистов.</p>
                    </div>
                    <div className="stages__item-container">
                        <div className="stages__icon-container">
                            <img className="stages__mini-ellipse" src={miniEllipse} alt="Кружок" />
                            <img className="stages__mini-ellipse" src={miniEllipse} alt="Кружок" />
                            <img className="stages__icon" src={iconThree} alt="Иконка" />
                            <img className="stages__mini-ellipse" src={miniEllipse} alt="Кружок" />
                            <img className="stages__mini-ellipse" src={miniEllipse} alt="Кружок" />
                        </div>
                        <p className="stages__item-heading">Програмирование</p>
                        <p className="stages__item-subheding">Получите бесплатную консультацию от наших специалистов.</p>
                    </div>
                    <div className="stages__item-container">
                        <div className="stages__icon-container">
                            <img className="stages__mini-ellipse" src={miniEllipse} alt="Кружок" />
                            <img className="stages__mini-ellipse" src={miniEllipse} alt="Кружок" />
                            <img className="stages__icon" src={iconFour} alt="Иконка" />
                        </div>
                        <p className="stages__item-heading">Сдача проекта</p>
                        <p className="stages__item-subheding">Получите бесплатную консультацию от наших специалистов.</p>
                    </div>
                </div>
            </section>

            <section className="colors">

                <div className="colors__main-container">

                    <h3 className="colors__heading">ЦВЕТА И ИКОНКИ</h3>

                    <div className="colors__content-container">

                        <div className="colors__container">

                            <div className="colors__square-container">

                                <div className="colors__square-group">
                                    <div className="colors__square colors__square_gradient"></div>
                                    <div className="colors__type-container">
                                        <p className="colors__type">#FFC300</p>
                                        <p className="colors__type">#FF7304</p>
                                    </div>
                                </div>

                                <div className="colors__square-group">
                                    <div className="colors__square colors__square_black"></div>
                                    <div className="colors__type-container">
                                        <p className="colors__type">#030303</p>
                                    </div>
                                </div>

                                <div className="colors__square-group">
                                    <div className="colors__square colors__square_yellow"></div>
                                    <div className="colors__type-container">
                                        <p className="colors__type">#FFC300</p>
                                    </div>
                                </div>

                            </div>

                            <div className="colors__rectangle-group">
                                <div className="colors__rectangle"></div>
                                <div className="colors__type-container">
                                    <p className="colors__type">#FA903C</p>
                                </div>
                            </div>
                            
                        </div>

                        <div className="colors__icon-container">
                            <div className="colors__ferst-container">
                                <img className="colors__icon" src={moneyIcon} alt="Иконка денег"/>
                                <img className="colors__icon colors__icon_sun" src={sunIcon} alt="Иконка солнца"/>
                            </div>
                            <div className="colors__second-container">
                                <img className="colors__icon" src={calendarIcon} alt="Иконка календаря"/>
                                <img className="colors__icon" src={handsIcon} alt="Иконка рук"/>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

        </section>
    );
}

export default StrojSnab;