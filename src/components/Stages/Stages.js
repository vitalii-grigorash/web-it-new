import React from 'react';
import miniEllipse from '../../images/svg/mini-ellipse.svg';
import iconOne from '../../images/svg/stages-1.svg';
import iconTwo from '../../images/svg/stages-2.svg';
import iconThree from '../../images/svg/stages-3.svg';
import iconFour from '../../images/svg/stages-4.svg';

function Stages () {

    return (
        <section className="stages">
            <h2 className="stages__heading">этапы работы</h2>
            <div className="stages__container">
                <div className="stages__item-container">
                    <div className="stages__icon-container">
                        <img className="stages__icon" src={iconOne} alt="Иконка листа" />
                        <img className="stages__mini-ellipse" src={miniEllipse} alt="Иконка кружка" />
                        <img className="stages__mini-ellipse" src={miniEllipse} alt="Иконка кружка" />
                    </div>
                    <h3 className="stages__item-heading">Техническое задание</h3>
                    <p className="stages__item-subheding">Определяем требования, по которым будет разработан ваш сайт</p>
                </div>
                <div className="stages__item-container">
                    <div className="stages__icon-container">
                        <img className="stages__mini-ellipse" src={miniEllipse} alt="Иконка кружка" />
                        <img className="stages__mini-ellipse" src={miniEllipse} alt="Иконка кружка" />
                        <img className="stages__icon" src={iconTwo} alt="Иконка чернильной ручки" />
                        <img className="stages__mini-ellipse" src={miniEllipse} alt="Иконка кружка" />
                        <img className="stages__mini-ellipse" src={miniEllipse} alt="Иконка кружка" />
                    </div>
                    <h3 className="stages__item-heading">Прототип дизайна</h3>
                    <p className="stages__item-subheding">Показываем вам, как будет выглядеть ваш будущий сайт</p>
                </div>
                <div className="stages__item-container">
                    <div className="stages__icon-container">
                        <img className="stages__mini-ellipse" src={miniEllipse} alt="Иконка кружка" />
                        <img className="stages__mini-ellipse" src={miniEllipse} alt="Иконка кружка" />
                        <img className="stages__icon" src={iconThree} alt="Иконка тега" />
                        <img className="stages__mini-ellipse" src={miniEllipse} alt="Иконка кружка" />
                        <img className="stages__mini-ellipse" src={miniEllipse} alt="Иконка кружка" />
                    </div>
                    <h3 className="stages__item-heading">Програмирование</h3>
                    <p className="stages__item-subheding">Наши программисты создают сайт, адаптивный под любые устройства</p>
                </div>
                <div className="stages__item-container">
                    <div className="stages__icon-container">
                        <img className="stages__mini-ellipse" src={miniEllipse} alt="Иконка кружка" />
                        <img className="stages__mini-ellipse" src={miniEllipse} alt="Иконка кружка" />
                        <img className="stages__icon" src={iconFour} alt="Иконка галочки" />
                    </div>
                    <h3 className="stages__item-heading">Сдача проекта</h3>
                    <p className="stages__item-subheding">Вы принимаете готовый сайт и получаете необходимые консультации</p>
                </div>
            </div>
        </section>
    );
}

export default Stages;