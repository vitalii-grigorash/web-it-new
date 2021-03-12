import React from 'react';
import urKonsulIcon from '../../images/svg/ur-consul-icon.svg';

function YurKonsul () {

    return (
        <section className="yur-konsul">
            <div className="yur-konsul__image">
                <div className="yur-konsul__overlay-container">
                    <img src={urKonsulIcon} alt="Иконка Строй Снаб" className="yur-konsul__icon" />
                    <h3 className="yur-konsul__heading">ЮрКонсул</h3>
                    <p className="yur-konsul__subheading">Реализация деятельности ТСН(Ж),  ЖСК и УК по управлению недвижимым имуществом</p>
                </div>
            </div>
        </section>
    );
}

export default YurKonsul;