import React from 'react';
import { Helmet } from 'react-helmet-async';
import laMiaBorsaIcon from '../../images/svg/la-mia-borsa-icon.svg';
import callCenterIcon from '../../images/call-center-icon.jpg';
import firstBagIcon from '../../images/first-bag-icon.jpg';
import bestIcon from '../../images/best-icon.jpg';
import secondBagIcon from '../../images/second-bag-icon.jpg';
import iPhone from '../../images/svg/iphones.svg';
import previewImg from '../../images/la-mia-borsa-img-preview.jpg';
import Stages from '../Stages/Stages';

function LaMiaBorsa () {

    return (
        <div className="la-mia-borsa">
            <Helmet
                title='Портфолио: "La mia Borsa". Cоздание и продвижение сайтов в СПб - Вымпел'
                meta={[
                    {"name": "description", "content": "ГК 'Вымпел'. Занимаемся проектированием и разработкой сайтов любой сложности под ключ, их продвижением и СЕО оптимизацией!"}
                ]}
                link={[
                    {"rel": "canonical", "href": "https://178spb.com/la-mia-borsa/"}
                ]}
            />
            <section className="la-mia-borsa__image">
                <div className="la-mia-borsa__overlay-container">
                    <img src={laMiaBorsaIcon} alt="Иконка Арбеллос" className="la-mia-borsa__icon" />
                    <h2 className="la-mia-borsa__heading">La mia Borsa</h2>
                    <p className="la-mia-borsa__subheading">Итальянские сумки в Санкт-Петербурге</p>
                </div>
            </section>
            <section className="about-la-mia-borsa">
                <h3 className="about-la-mia-borsa__heading">О ПРОЕКТЕ</h3>
                <div className="about-la-mia-borsa__container">
                    <div className="about-la-mia-borsa__img"></div>
                    <div className="about-la-mia-borsa__text-container">
                        <p className="about-la-mia-borsa__text">
                            La mia BORSA - розничный магазин сумок и аксессуаров из натуральной кожи, 
                            а также интернет-магазин с возможностью доставки товара покупателю. В магазине 
                            можно приобрести по&#8209;настоящему необычную сумку, а продавцы-консультанты 
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
                        <h5 className="typography__roboto-heading">Roboto</h5>
                        <p className="typography__roboto-letters">Aa Bb Cc Dd Ee Ff Gg Hh Ii Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy and Zz</p>
                        <p className="typography__roboto-letters">Aa Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъ Ы Ь Ээ Юю Яя</p>
                    </div>
                </div>
            </section>
            <section className="adaptive-la-mia-borsa">
                <img className="adaptive-la-mia-borsa__phones-img" src={iPhone} alt="Картинка телефонов"/>
                <div className="adaptive-la-mia-borsa__info-container">
                    <h3 className="adaptive-la-mia-borsa__heading">АДАПТИВНЫЙ ДИЗАЙН</h3>
                    <p className="adaptive-la-mia-borsa__description">
                        Все наши сайты можно просматривать на самых разных устройствах, 
                        таких как смартфон, планшет, ноутбук и т.д., независимо от разрешения экрана. 
                        Все элементы интерфейса одинаково удобны для всех устройств и их пользователей, 
                        например, пользователям мобильных устройств не нужно приближать кнопку на сайте, 
                        чтобы не промахнуться мимо нужной ссылки.
                    </p>
                </div>
            </section>
            <div className="preview-la-mia-borsa">
                <img className="preview-la-mia-borsa__img" src={previewImg} alt="Превью Ля Миа Борса"/>
            </div>
        </div>
    );
}

export default LaMiaBorsa;