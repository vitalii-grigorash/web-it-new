import React from 'react';
import mouse from '../../images/svg/mouse.svg';
import PageForm from '../PageForm/PageForm';

function Multipage (props) {

    const {
        onSendForm,
    } = props;

    return (
        <section className="multipage">
            <div className="multipage__image-container">
                <h2 className="multipage__heading">СОЗДАНИЕ МНОГОСТРАНИЧНОГО САЙТА&nbsp;ПОД&nbsp;КЛЮЧ</h2>
                <p className="multipage__subheading">Проектирование и разработка многостраничного сайта в Санкт-Петербурге</p>
                <button className="multipage__button" type="button">Заказать сайт</button>
                <div className="multipage__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="multipage__mouse-icon" />
                    <p className="multipage__text">Прокрутите вниз</p>
                </div>
            </div>
            <PageForm
                onSendForm={onSendForm}
            />
        </section>
    );
}

export default Multipage;