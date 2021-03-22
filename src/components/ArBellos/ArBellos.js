import React from 'react';
import arBellosIcon from '../../images/svg/arbellos-icon.svg';
import arBellosAboutImg from '../../images/arbellos-about-img.jpg';
import handsIcon from '../../images/svg/hands-icon-arbellos.svg';
import instagramIcon from '../../images/svg/instagram-icon-arbellos.svg';
import questionIcon from '../../images/svg/question-icon.svg';
import listIcon from '../../images/svg/list-icon.svg';
import Stages from '../Stages/Stages';

function ArBellos () {

    return (
        <section className="ar-bellos">
            <div className="ar-bellos__image">
                <div className="ar-bellos__overlay-container">
                    <img src={arBellosIcon} alt="Иконка Арбеллос" className="ar-bellos__icon" />
                    <h3 className="ar-bellos__heading">ARbellos</h3>
                    <p className="ar-bellos__subheading">Инсталяция светопрозрачных решений</p>
                </div>
            </div>

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

        </section>
    );
}

export default ArBellos;