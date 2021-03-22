import React from 'react';
import laMiaBorsaIcon from '../../images/svg/la-mia-borsa-icon.svg';

function LaMiaBorsa () {

    return (
        <section className="la-mia-borsa">
            <div className="la-mia-borsa__image">
                <div className="la-mia-borsa__overlay-container">
                    <img src={laMiaBorsaIcon} alt="Иконка Арбеллос" className="la-mia-borsa__icon" />
                    <h3 className="la-mia-borsa__heading">La mia Borsa</h3>
                    <p className="la-mia-borsa__subheading">Итальянские сумки в Санкт-Петербурге</p>
                </div>
            </div>
        </section>
    );
}

export default LaMiaBorsa;