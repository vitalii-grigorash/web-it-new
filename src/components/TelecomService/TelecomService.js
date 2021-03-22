import React from 'react';
import telecomServiceIcon from '../../images/svg/telecom-service-icon.svg';
import aboutImg from '../../images/telecom-service-about-img.jpg';
import Stages from '../Stages/Stages';
import callIcon from '../../images/svg/call-icon.svg';
import vectorIcon from '../../images/svg/vector-icon.svg';
import mailIcon from '../../images/svg/mail-icon.svg';
import iPad from '../../images/svg/ipad.svg';
import previewImg from '../../images/telecom-service-img-preview.jpg';

function TelecomService() {

    return (
        <section className="telecom-service">

            <section className="telecom-service__image">
                <div className="telecom-service__overlay-container">
                    <img src={telecomServiceIcon} alt="Иконка Строй Снаб" className="telecom-service__icon" />
                    <h3 className="telecom-service__heading">ТелекомСервис</h3>
                    <p className="telecom-service__subheading">Телекоммуникации, благоустройство и асфалтировании</p>
                </div>
            </section>

            <section className="about-telecom-service">
                <h3 className="about-telecom-service__heading">О ПРОЕКТЕ</h3>
                <div className="about-telecom-service__container">
                    <img className="about-telecom-service__img" src={aboutImg} alt="Изображение улицы" />
                    <div className="about-telecom-service__text-container">
                        <p className="about-telecom-service__text">
                            Компания “ТелекомСервис” - надежный партнер в сфере телекоммуникаций,
                            благоустройства и асфальтирования. Компания проектирует дороги с учетом
                            необходимого класса назначения, и, после проведенных геодезических испытаний.
                        </p>
                        <p className="about-telecom-service__text">
                            Что же касается данной организации, компания не производит работы «дёшево» и
                            быстро, компания работает качественно и быстро за реальную стоимость.
                        </p>
                        <p className="about-telecom-service__text">
                            Благоустройство – достаточно объемное определение, включающее в себя: настил
                            покрытий, озеленение, возведение площадочного оборудования, установку
                            памятников и МАФ (малые архитектурные формы), что также качественно выполняет “ТелекомСервис.”
                        </p>
                    </div>
                </div>
            </section>

            <Stages />

            <section className="colors-telecom-service">
                <div className="colors-telecom-service__main-container">
                    <div className="colors-telecom-service__colors-container">
                        <h4 className="colors-telecom-service__heading">ЦВЕТА И ИКОНКИ</h4>
                        <div className="colors-telecom-service__first-container">
                            <div className="colors-telecom-service__colors">
                                <div className="colors-telecom-service__color colors-telecom-service__color_black"></div>
                                <p className="colors-telecom-service__color-value">#180000</p>
                            </div>
                            <div className="colors-telecom-service__colors">
                                <div className="colors-telecom-service__color colors-telecom-service__color_blue"></div>
                                <p className="colors-telecom-service__color-value">#009EE2</p>
                            </div>
                            <div className="colors-telecom-service__colors">
                                <div className="colors-telecom-service__color colors-telecom-service__color_grey"></div>
                                <p className="colors-telecom-service__color-value">#A9A9A9</p>
                            </div>
                            <div className="colors-telecom-service__colors">
                                <div className="colors-telecom-service__color colors-telecom-service__color_silver"></div>
                                <p className="colors-telecom-service__color-value">#EAEAEA</p>
                            </div>
                        </div>
                        <div className="colors-telecom-service__second-container">
                            <div className="colors-telecom-service__colors">
                                <div className="colors-telecom-service__color colors-telecom-service__color_rectangle"></div>
                                <p className="colors-telecom-service__color-value">#61CE70</p>
                            </div>
                            <div className="colors-telecom-service__colors">
                                <div className="colors-telecom-service__color colors-telecom-service__color_yellow"></div>
                                <p className="colors-telecom-service__color-value">#EFEAD7</p>
                            </div>
                        </div>
                    </div>
                    <div className="colors-telecom-service__icons-container">
                        <img className="colors-telecom-service__icon" src={callIcon} alt="Иконка" />
                        <img className="colors-telecom-service__icon" src={vectorIcon} alt="Иконка" />
                        <img className="colors-telecom-service__icon" src={mailIcon} alt="Иконка" />
                    </div>
                </div>
            </section>

            <section className="typography">
                <h3 className="typography__header">ТИПОГРАФИКА</h3>
                <div className="typography__container">
                    <p className="typography__letter-main">Aa</p>
                    <div className="typography__roboto-container">
                        <h4 className="typography__roboto-heading typography__roboto-heading_telecom-service">Amatic SC</h4>
                        <p className="typography__roboto-letters typography__roboto-letters_telecom-service">Aa Bb Cc Dd Ee Ff Gg Hh Ii Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy and Zz</p>
                        <p className="typography__roboto-letters typography__roboto-letters_telecom-service">Aa Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъ Ы Ь Ээ Юю Яя</p>
                    </div>
                </div>
            </section>

            <section className="adaptive-telecom-service">
                <div className="adaptive-telecom-service__info-container">
                    <h4 className="adaptive-telecom-service__info-heding">АДАПТИВНЫЙ ДИЗАЙН</h4>
                    <p className="adaptive-telecom-service__info-description">
                        Все наши сайты можно просматривать на самых разных 
                        устройствах, таких как смартфон, планшет, ноутбук и т.д., независимо от 
                        разрешения экрана. Все элементы интерфейса одинаково удобны для всех устройств и их 
                        пользователей, например, пользователям мобильных устройств не нужно приближать кнопку 
                        на сайте, чтобы не промахнуться мимо нужной ссылки.
                    </p>
                </div>
                <img className="adaptive-telecom-service__ipad" src={iPad} alt="Изображение Айпада"/>
            </section>

            <section className="preview-telecom-service">
                <img className="preview-telecom-service__img" src={previewImg} alt="Изображение сайта"/>
            </section>

        </section>
    );
}

export default TelecomService;