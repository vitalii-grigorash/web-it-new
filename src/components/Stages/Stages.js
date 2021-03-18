import React from 'react';
import miniEllipse from '../../images/svg/mini-ellipse.svg';
import iconOne from '../../images/svg/stages-1.svg';
import iconTwo from '../../images/svg/stages-2.svg';
import iconThree from '../../images/svg/stages-3.svg';
import iconFour from '../../images/svg/stages-4.svg';

function Stages () {

    return (
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
    );
}

export default Stages;