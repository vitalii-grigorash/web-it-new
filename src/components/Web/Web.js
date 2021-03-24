import React from 'react';
import mouse from '../../images/svg/mouse.svg';
import PageForm from '../PageForm/PageForm';
import Stages from '../Stages/Stages';
import PortfolioSlider from '../PortfolioSlider/PortfolioSlider';

function Web(props) {

    const {
        onSendForm,
        onOpenPopup,
    } = props;

    return (
        <section className="web">
            <div className="web__image-container">
                <h2 className="web__heading">WEB СТУДИЯ</h2>
                <button className="web__button" type="button" onClick={onOpenPopup}>
                    Получить консультацию
                </button>
                <div className="web__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="web__mouse-icon" />
                    <p className="web__text">Прокрутите вниз</p>
                </div>
            </div>

            <Stages />

            <PageForm
                onSendForm={onSendForm}
            />

            <PortfolioSlider />           

        </section>
    );
}

export default Web;