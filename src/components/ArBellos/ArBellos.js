import React from 'react';
import { Helmet } from 'react-helmet-async';
import arBellosIcon from '../../images/svg/arbellos-icon.svg';
import arBellosAboutImg from '../../images/arbellos-about-img.jpg';
import handsIcon from '../../images/svg/hands-icon-arbellos.svg';
import instagramIcon from '../../images/svg/instagram-icon-arbellos.svg';
import questionIcon from '../../images/svg/question-icon.svg';
import listIcon from '../../images/svg/list-icon.svg';
import whiteLaptop from '../../images/svg/white-laptop.svg';
import arBellosPreviewImg from '../../images/ar-bellos-img-preview.jpg';
import Stages from '../Stages/Stages';

function ArBellos () {
    return (
        <div className="ar-bellos">
            <Helmet
                title='Портфолио: "ARbellos". Cоздание и продвижение сайтов - Вымпел'
                meta={[
                    {"name": "description", "content": "ГК 'Вымпел'. Занимаемся проектированием и созданием сайтов любой сложности под ключ, их продвижением и СЕО оптимизацией!"}
                ]}
                link={[
                    {"rel": "canonical", "href": "https://178spb.com/ar-bellos/"}
                ]}
            />
            <section className="ar-bellos__image">
                <div className="ar-bellos__overlay-container">
                    <img src={arBellosIcon} alt="Иконка Арбеллос" className="ar-bellos__icon" />
                    <h2 className="ar-bellos__heading">ARbellos</h2>
                    <p className="ar-bellos__subheading">Инсталяция светопрозрачных решений</p>
                </div>
            </section>
            <section className="about">
                <h3 className="about__heading">О ПРОЕКТЕ</h3>
                <div className="about__container">
                    <img src={arBellosAboutImg} alt="Фотография" className="about__img about__img_ar-bellos" />
                    <div className="about__text-container about__text-container_ar-bellos">
                        <p className="about__subheading">
                            Компания Arbellos специализируется на инсталляции  интерьерных и 
                            экстерьерных светопрозрачных систем, а так же на комплексном устройстве 
                            оболочек зданий. Продукция компании Arbellos реализуется на всей 
                            территории Российской Федерации и отвечает самым высоким стандартам с 
                            точки зрения дизайна.
                        </p>
                        <p className="about__list-heading">Среди услуг компании:</p>
                        <ul className="about__list">
                            <li className="about__list-item">- лофт конструкции;</li>
                            <li className="about__list-item">- экстерьерное остекление;</li>
                            <li className="about__list-item">- интерьерное остекление;</li>
                            <li className="about__list-item">- фасады.</li>
                        </ul>
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
                                    <div className="colors__square colors__square_black"></div>
                                    <div className="colors__type-container">
                                        <p className="colors__type">#111111</p>
                                    </div>
                                </div>
                                <div className="colors__square-group">
                                    <div className="colors__square colors__square_dark-grey"></div>
                                    <div className="colors__type-container">
                                        <p className="colors__type">#23282D</p>
                                    </div>
                                </div>
                                <div className="colors__square-group">
                                    <div className="colors__square colors__square_grey"></div>
                                    <div className="colors__type-container">
                                        <p className="colors__type">#8A8484</p>
                                    </div>
                                </div>
                            </div>
                            <div className="colors__rectangle-group">
                                <div className="colors__rectangle colors__rectangle_light-grey"></div>
                                <div className="colors__type-container">
                                    <p className="colors__type">#EAEAEA</p>
                                </div>
                            </div>
                        </div>
                        <div className="colors__icon-container">
                            <div className="colors__ferst-container colors__first-container_ar-bellos">
                                <img className="colors__icon colors__icon_hands" src={handsIcon} alt="Иконка рук"/>
                                <img className="colors__icon colors__icon_instagram" src={instagramIcon} alt="Иконка инстаграма"/>
                            </div>
                            <div className="colors__second-container colors__second-container_ar-bellos">
                                <img className="colors__icon colors__icon_question" src={questionIcon} alt="Иконка бумаги с линейкой"/>
                                <img className="colors__icon colors__icon_list" src={listIcon} alt="Иконка награды"/>
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
                        <h5 className="typography__roboto-heading typography__roboto-heading_exo">Exo 2</h5>
                        <p className="typography__roboto-letters typography__roboto-letters_exo">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                        <p className="typography__roboto-letters typography__roboto-letters_exo">Aa Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъ Ы Ь Ээ Юю Яя</p>
                    </div>
                </div>
            </section>
            <section className="ar-bellos-adaptive">
                <div className="ar-bellos-adaptive__info-container">
                    <h3 className="ar-bellos-adaptive__heading">АДАПТИВНЫЙ ДИЗАЙН</h3>
                    <p className="ar-bellos-adaptive__description">
                        Все наши сайты можно просматривать на самых разных устройствах, 
                        таких как смартфон, планшет, ноутбук и т.д., независимо от разрешения экрана. 
                        Все элементы интерфейса одинаково удобны для всех устройств и их пользователей, 
                        например, пользователям мобильных устройств не нужно приближать кнопку на сайте, 
                        чтобы не промахнуться мимо нужной ссылки.
                    </p>
                </div>
                <img className="ar-bellos-adaptive__img" src={whiteLaptop} alt="Картинка ноутбука"/>
            </section>
            <div className="ar-bellos-preview">
                <img className="ar-bellos-preview__img" src={arBellosPreviewImg} alt="Изображение Арбеллос превью"/>
            </div>
        </div>
    );
}

export default ArBellos;