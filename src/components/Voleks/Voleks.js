import React from 'react';
import voleksIcon from '../../images/svg/voleks-icon.svg';
import voleksAboutImg from '../../images/voleks-about-img.jpg';
import voleksPreviewImg from '../../images/voleks-img-preview.jpg';
import certificateIcon from '../../images/svg/certificate-icon.svg';
import paperIcon from '../../images/svg/paper-icon.svg';
import paperNumbersIcon from '../../images/svg/paper-numbers-icon.svg';
import awardIcon from '../../images/svg/award-icon.svg';
import Stages from '../Stages/Stages';

function Voleks () {

    return (
        <section className="voleks">
            <section className="voleks__image">
                <div className="voleks__overlay-container">
                    <img src={voleksIcon} alt="Иконка Строй Снаб" className="voleks__icon" />
                    <h1 className="voleks__heading">Волекс абразив</h1>
                    <p className="voleks__subheading">Продажа инстремуента и аббразинвных материалов</p>
                </div>
            </section>

            <section className="about">
                <h2 className="about__heading">О ПРОЕКТЕ</h2>
                <div className="about__container">
                    <img src={voleksAboutImg} alt="Фотография" className="about__img about__img_voleks" />
                    <div className="about__text-container">
                        <p className="about__subheading">Компания Волекс абразив занимается продажей промышленного инструмента Dynabrade и абразивных материалов 3M.</p>
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
            <Stages />
            <section className="colors">
                <div className="colors__main-container">
                    <h2 className="colors__heading">ЦВЕТА И ИКОНКИ</h2>
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
                <h2 className="typography__header">ТИПОГРАФИКА</h2>
                <div className="typography__container">
                    <p className="typography__letter-main">Aa</p>
                    <div className="typography__roboto-container">
                        <h3 className="typography__roboto-heading">Roboto</h3>
                        <p className="typography__roboto-letters">Aa Bb Cc Dd Ee Ff Gg Hh Ii Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy and Zz</p>
                        <p className="typography__roboto-letters">Aa Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъ Ы Ь Ээ Юю Яя</p>
                    </div>
                </div>
            </section>
            <section className="adaptive adaptive__voleks">
                <div className="adaptive__laptop-img"></div>
                <div className="adaptive__info-container adaptive__info-container_voleks">
                    <h2 className="adaptive__heading adaptive__heading_voleks">АДАПТИВНЫЙ ДИЗАЙН</h2>
                    <p className="adaptive__description adaptive__description_voleks">
                        Все наши сайты можно просматривать на самых разных устройствах, 
                        таких как смартфон, планшет, ноутбук и т.д., независимо от разрешения экрана. 
                        Все элементы интерфейса одинаково удобны для всех устройств и их пользователей, 
                        например, пользователям мобильных устройств не нужно приближать кнопку на сайте, 
                        чтобы не промахнуться мимо нужной ссылки.
                    </p>
                </div>
            </section>
            <section className="preview preview__voleks">
                <img className="preview__voleks-img" src={voleksPreviewImg} alt="Изображение Волекс Сайт"/>
            </section>
        </section>
    );
}

export default Voleks;