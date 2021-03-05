import React from 'react';
import mouse from '../../images/svg/mouse.svg';
import PageForm from '../PageForm/PageForm';

function Web (props) {

    const {
        onSendForm,
    } = props;

    return (
        <section className="web">
            <div className="web__image-container">
                <h2 className="web__heading">WEB СТУДИЯ</h2>
                <div className="web__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="web__mouse-icon" />
                    <p className="web__text">Прокрутите вниз</p>
                </div>
            </div>
            <PageForm
                onSendForm={onSendForm}
            />
        </section>
    );
}

export default Web;