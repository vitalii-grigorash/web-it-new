import React from 'react';
import laMiaBorsaIcon from '../../images/svg/la-mia-borsa-icon.svg';
import callCenterIcon from '../../images/call-center-icon.jpg';
import firstBagIcon from '../../images/first-bag-icon.jpg';
import bestIcon from '../../images/best-icon.jpg';
import secondBagIcon from '../../images/second-bag-icon.jpg';
import Stages from '../Stages/Stages';

function LaMiaBorsa () {

    return (
        <section className="la-mia-borsa">

            <div className="la-mia-borsa__image">
                <div className="la-mia-borsa__overlay-container">
                    <img src={laMiaBorsaIcon} alt="Иконка Арбеллос" className="la-mia-borsa__icon" />
                    <h3 className="la-mia-borsa__heading">La mia Borsa</h3>
                    <p className="la-mia-borsa__subheading">Итальянские сумки в Санкт-Петербурге</p>
                </div>
            </div>

            <section className="about-la-mia-borsa">
                <h3 className="about-la-mia-borsa__heading">О ПРОЕКТЕ</h3>
                <div className="about-la-mia-borsa__container">
                    <div className="about-la-mia-borsa__img"></div>
                    <div className="about-la-mia-borsa__text-container">
                        <p className="about-la-mia-borsa__text">
                            La mia BORSA - розничный магазин сумок и аксессуаров из натуральной кожи, 
                            а также интернет-магазин с возможностью доставки товара покупателю. В магазине 
                            можно приобрести <nobr>по-настоящему</nobr> необычную сумку, а продавцы-консультанты 
                            помогут Вам разобраться в ассортименте.
                        </p>
                        <p className="about-la-mia-borsa__text">
                            Цель компании – получение покупателем удовольствия от приобретения оригинальной 
                            сумки из итальянской натуральной кожи. Компания гордимся тем, что клиенты возвращаются 
                            к ним за новой покупкой, а также рекомендуют своим близким, друзьям и знакомым. Ведь это 
                            лучшая оценка труда. При обновлении ассортимента, специалисты магазина изучают сумки, 
                            тестируют их на предмет удобства переноски на плече, в руках, ощущения от прикосновения 
                            к коже, а если это рюкзак, то насколько он удобен и функционален.
                        </p>
                    </div>
                </div>
            </section>

            <Stages />

            <section className="colors">
                <div className="colors__main-container">
                    <h3 className="colors__heading">ЦВЕТА И ИКОНКИ</h3>
                    <div className="colors__content-container">
                        <div className="colors__container">
                            <div className="colors__square-container">
                                <div className="colors__square-group">
                                    <div className="colors__square colors__square_dark-grey"></div>
                                    <div className="colors__type-container">
                                        <p className="colors__type">#242424</p>
                                    </div>
                                </div>
                                <div className="colors__square-group">
                                    <div className="colors__square colors__square_violet"></div>
                                    <div className="colors__type-container">
                                        <p className="colors__type">#4F275B</p>
                                    </div>
                                </div>
                                <div className="colors__square-group">
                                    <div className="colors__square colors__square_blue"></div>
                                    <div className="colors__type-container">
                                        <p className="colors__type">#00ACEE</p>
                                    </div>
                                </div>
                            </div>
                            <div className="colors__rectangle-group">
                                <div className="colors__rectangle colors__rectangle_dirty-red"></div>
                                <div className="colors__type-container">
                                    <p className="colors__type">#831A35</p>
                                </div>
                            </div>
                        </div>
                        <div className="colors__icon-container">
                            <div className="colors__ferst-container colors__first-container_la-mia-borsa">
                                <img className="colors__icon colors__icon_call-center" src={callCenterIcon} alt="Иконка Колл Цента"/>
                                <img className="colors__icon colors__icon_first-bag" src={firstBagIcon} alt="Иконка сумки"/>
                            </div>
                            <div className="colors__second-container colors__second-container_la-mia-borsa">
                                <img className="colors__icon colors__icon_best" src={bestIcon} alt="Иконка награды"/>
                                <img className="colors__icon colors__icon_second-bag" src={secondBagIcon} alt="Иконка сумки"/>
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

        </section>
    );
}

export default LaMiaBorsa;