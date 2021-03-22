import React from 'react';
import laMiaBorsaIcon from '../../images/svg/la-mia-borsa-icon.svg';

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

        </section>
    );
}

export default LaMiaBorsa;