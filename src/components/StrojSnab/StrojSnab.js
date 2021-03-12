import React from 'react';
import stroiSnabIcon from '../../images/svg/stroi-snab-icon.svg';

function StrojSnab() {

    return (
        <section className="stroj-snab">
            <div className="stroj-snab__image">
                <div className="stroj-snab__overlay-container">
                    <img src={stroiSnabIcon} alt="Иконка Строй Снаб" className="stroj-snab__icon" />
                    <h3 className="stroj-snab__heading">СтройСнаб</h3>
                    <p className="stroj-snab__subheading">Компания осуществляет строительные работы</p>
                </div>
            </div>
        </section>
    );
}

export default StrojSnab;