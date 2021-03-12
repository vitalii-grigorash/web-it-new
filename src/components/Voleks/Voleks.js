import React from 'react';
import voleksIcon from '../../images/svg/voleks-icon.svg';

function Voleks () {

    return (
        <section className="voleks">
            <div className="voleks__image">
                <div className="voleks__overlay-container">
                    <img src={voleksIcon} alt="Иконка Строй Снаб" className="voleks__icon" />
                    <h3 className="voleks__heading">Волекс аббразив</h3>
                    <p className="voleks__subheading">Продажа инстремуента и аббразинвных материалов</p>
                </div>
            </div>
        </section>
    );
}

export default Voleks;