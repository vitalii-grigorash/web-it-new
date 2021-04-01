import React from 'react';
import urKonsulIcon from '../../images/svg/ur-consul-icon.svg';
import urKonsulAboutImg from '../../images/ur-konsul-about-img.jpg';
import Stages from '../Stages/Stages';
import shieldIcon from '../../images/svg/shield-icon.svg';
import markIcon from '../../images/svg/mark-icon.svg';
import peopleIcon from '../../images/svg/people-icon.svg';
import likeIcon from '../../images/svg/like-icon.svg';
import previewImg from '../../images/yur-konsul-img-preview.jpg'

function YurKonsul () {

    return (
        <section className="yur-konsul">
            <section className="yur-konsul__image">
                <div className="yur-konsul__overlay-container">
                    <img src={urKonsulIcon} alt="Иконка Строй Снаб" className="yur-konsul__icon" />
                    <h1 className="yur-konsul__heading">ЮрКонсул</h1>
                    <p className="yur-konsul__subheading">Реализация деятельности ТСН(Ж),  ЖСК и УК по управлению недвижимым имуществом</p>
                </div>
            </section>
            <section className="about">
                <h2 className="about__heading">О ПРОЕКТЕ</h2>
                <div className="about__container">
                    <img src={urKonsulAboutImg} alt="Фотография" className="about__img about__img_yur-konsul" />
                    <div className="about__text-container about__text-container_yur-konsul">
                        <p className="about__subheading">ООО «ЮК Юрконсул» создано с целью реализации деятельности ТСН(Ж),  ЖСК и УК по управлению комплексом недвижимого имущества, обеспечению эксплуатации, решению вопросов и проблем, возникающих в процессе управления.</p>
                        <p className="about__list-heading">Услуги компании:</p>
                        <ul className="about__list">
                            <li className="about__list-item">- взыскание задолженности по заявлениям о выдаче судебных приказов и в исковом порядке; </li>
                            <li className="about__list-item">- разработка и проверка договоров, заключаемых клиентом;</li>
                            <li className="about__list-item">- подготовка проектов ответов собственникам помещений в соответствии со стандартом раскрытия информации;</li>
                            <li className="about__list-item">- консультирование по жилищным вопросам, в том числе изменениям в ЖК РФ, трудовым вопросам (проблемы с работниками) и другие.</li>
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
                                    <div className="colors__square colors__square_gold"></div>
                                    <div className="colors__type-container">
                                        <p className="colors__type">#CAAB74</p>
                                    </div>
                                </div>
                                <div className="colors__square-group">
                                    <div className="colors__square colors__square_black"></div>
                                    <div className="colors__type-container">
                                        <p className="colors__type">#030303</p>
                                    </div>
                                </div>
                                <div className="colors__square-group">
                                    <div className="colors__square colors__square_blue"></div>
                                    <div className="colors__type-container">
                                        <p className="colors__type">#6EC1E4</p>
                                    </div>
                                </div>
                            </div>
                            <div className="colors__rectangle-group">
                                <div className="colors__rectangle colors__rectangle_grey"></div>
                                <div className="colors__type-container">
                                    <p className="colors__type">#636363</p>
                                </div>
                            </div>
                        </div>
                        <div className="colors__icon-container">
                            <div className="colors__ferst-container colors__ferst-container_voleks">
                                <img className="colors__icon colors__icon_certificate" src={markIcon} alt="Иконка сертификата"/>
                                <img className="colors__icon colors__icon_paper" src={peopleIcon} alt="Иконка бумаги"/>
                            </div>
                            <div className="colors__second-container colors__second-container_voleks">
                                <img className="colors__icon colors__icon_shield" src={shieldIcon} alt="Иконка бумаги с линейкой"/>
                                <img className="colors__icon colors__icon_award" src={likeIcon} alt="Иконка награды"/>
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
                        <h3 className="typography__roboto-heading typography__roboto-heading_yur-konsul">Alegreya SC</h3>
                        <p className="typography__roboto-letters typography__roboto-letters_yur-konsul">Aa Bb Cc Dd Ee Ff Gg Hh Ii Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy and Zz</p>
                        <p className="typography__roboto-letters typography__roboto-letters_yur-konsul">Aa Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъ Ы Ь Ээ Юю Яя</p>
                    </div>
                </div>
            </section>
            <section className="adaptive-yur-konsul">
                <div className="adaptive-yur-konsul__img"></div>
                <div className="adaptive-yur-konsul__info-container">
                <h2 className="adaptive-yur-konsul__heading">АДАПТИВНЫЙ ДИЗАЙН</h2>
                    <p className="adaptive-yur-konsul__description">
                        Все наши сайты можно просматривать на самых разных устройствах, 
                        таких как смартфон, планшет, ноутбук и т.д., независимо от разрешения экрана. 
                        Все элементы интерфейса одинаково удобны для всех устройств и их пользователей, 
                        например,  пользователям мобильных устройств не нужно приближать кнопку на сайте, 
                        чтобы не промахнуться мимо нужной ссылки.
                    </p>
                </div>
            </section>
            <section className="preview preview__yur-konsul">
                <img className="preview__yur-konsul-img" src={previewImg} alt="Превью"/>
            </section>
        </section>
    );
}

export default YurKonsul;