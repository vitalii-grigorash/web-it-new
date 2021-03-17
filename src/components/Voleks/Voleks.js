import React from 'react';
import voleksIcon from '../../images/svg/voleks-icon.svg';
import voleksAboutImg from '../../images/voleks-about-img.jpg';
import miniEllipse from '../../images/svg/mini-ellipse.svg';
import iconOne from '../../images/svg/stages-1.svg';
import iconTwo from '../../images/svg/stages-2.svg';
import iconThree from '../../images/svg/stages-3.svg';
import iconFour from '../../images/svg/stages-4.svg';
import certificateIcon from '../../images/svg/certificate-icon.svg';
import paperIcon from '../../images/svg/paper-icon.svg';
import paperNumbersIcon from '../../images/svg/paper-numbers-icon.svg';
import awardIcon from '../../images/svg/award-icon.svg';
import laptopImgMobile from '../../images/svg/laptop-img-mobile.svg';

function Voleks () {

    return (
        <section className="voleks">
            <div className="voleks__image">
                <div className="voleks__overlay-container">
                    <img src={voleksIcon} alt="Иконка Строй Снаб" className="voleks__icon" />
                    <h3 className="voleks__heading">Волекс аббразив</h3>
                    <p className="voleks__subheading">Продажа инстремуента и аббразинвных материалов</p>
                </div>
            </div>

            <section className="about">
                <h3 className="about__heading">О ПРОЕКТЕ</h3>
                <div className="about__container">
                    <img src={voleksAboutImg} alt="Фотография" className="about__img about__img_voleks" />
                    <div className="about__text-container">
                        <p className="about__subheading">Компания Волекс аббразив занимается продажей промышленного инструмента Dynabrade и абразивных материалов 3M.</p>
                        <p className="about__list-heading">Среди ассортимента компании:</p>
                        <ul className="about__list">
                            <li className="about__list-item">- электроинструмент;</li>
                            <li className="about__list-item">- станки и оборудование;</li>
                            <li className="about__list-item">- средства индивидуальной защиты;</li>
                            <li className="about__list-item">- борфрезы;</li>
                            <li className="about__list-item">- пневмоинструмент;</li>
                            <li className="about__list-item">- электроинструмент;</li>
                            <li className="about__list-item">- ленто-шлифовальные станки;</li>
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
                                    <div className="colors__square colors__square_blue"></div>
                                    <div className="colors__type-container">
                                        <p className="colors__type">#229DE0</p>
                                    </div>
                                </div>
                                <div className="colors__square-group">
                                    <div className="colors__square colors__square_red"></div>
                                    <div className="colors__type-container">
                                        <p className="colors__type">#FF2938</p>
                                    </div>
                                </div>
                                <div className="colors__square-group">
                                    <div className="colors__square colors__square_black"></div>
                                    <div className="colors__type-container">
                                        <p className="colors__type">#030303</p>
                                    </div>
                                </div>
                            </div>
                            <div className="colors__rectangle-group">
                                <div className="colors__rectangle colors__rectangle_pink"></div>
                                <div className="colors__type-container">
                                    <p className="colors__type">#EC555F</p>
                                </div>
                            </div>
                        </div>
                        <div className="colors__icon-container">
                            <div className="colors__ferst-container colors__ferst-container_voleks">
                                <img className="colors__icon colors__icon_certificate" src={certificateIcon} alt="Иконка сертификата"/>
                                <img className="colors__icon colors__icon_paper" src={paperIcon} alt="Иконка бумаги"/>
                            </div>
                            <div className="colors__second-container colors__second-container_voleks">
                                <img className="colors__icon colors__icon_paper-numbers" src={paperNumbersIcon} alt="Иконка бумаги с линейкой"/>
                                <img className="colors__icon colors__icon_award" src={awardIcon} alt="Иконка награды"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="typography">
                <h3 className="typography__header">ТИПОГРАФИКА</h3>
                <div className="typography__container">
                    <p className="typography__letter-main">Aa</p>
                    <div className="typography__roboto-container">
                        <h4 className="typography__roboto-heading">Roboto</h4>
                        <p className="typography__roboto-letters">Aa Bb Cc Dd Ee Ff Gg Hh Ii Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy and Zz</p>
                        <p className="typography__roboto-letters">Aa Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъ Ы Ь Ээ Юю Яя</p>
                    </div>
                </div>
            </section>

            <section className="adaptive adaptive__voleks">
                <div className="adaptive__info-container adaptive__info-container_voleks">
                    <h4 className="adaptive__heading adaptive__heading_voleks">АДАПТИНЫЙ ДИЗАЙН</h4>
                    <p className="adaptive__description adaptive__description_voleks">
                        Все наши сайты можно просматривать на самых разных устройствах, 
                        таких как смартфон, планшет, ноутбук и т.д., независимо от разрешения экрана. 
                        Все элементы интерфейса одинаково удобны для всех устройств и их пользователей, 
                        например,  пользователям мобильных устройств не нужно приближать кнопку на сайте, 
                        чтобы не промахнуться мимо нужной ссылки.
                    </p>
                </div>
                <img className="adaptive__laptop-img" src={laptopImgMobile} alt="Картинка Ноутбука"/>
            </section>

        </section>
    );
}

export default Voleks;