import React from 'react';
import { Helmet } from 'react-helmet-async';
import mouse from '../../images/svg/mouse.svg';
import aopfLogo from '../../images/company-logo-it/aopf-logo.jpg';
import voleksLogo from '../../images/company-logo-it/voleks-logo.jpg';
import kapriLogo from '../../images/company-logo-it/kapri-logo.jpg';
import tdVelikiyKorolLogo from '../../images/company-logo-it/td-velikiy-korol-logo.jpg';
import olimpTkLogo from '../../images/company-logo-it/olimp-tk-logo.jpg';
import legionStroiLogo from '../../images/company-logo-it/legion-stroi-logo.jpg';
import tkPromresursLogo from '../../images/company-logo-it/tk-promresurs-logo.jpg';
import expressDieselLogo from '../../images/company-logo-it/express-diesel-logo.jpg';
import spbSchoolLogo from '../../images/company-logo-it/spb-school-logo.jpg';
import tsnObyhovoLogo from '../../images/company-logo-it/tsn-obyhovo-logo.jpg';

function PortfolioWeb () {

    return (
        <div className="portfolio-it">
            <Helmet
                title='Портфолио It ГК "Вымпел"'
                meta={[
                    {"name": "description", "content": "ГК 'Вымпел' Техническое обслуживание персональных компьютеров, печатных устройств и т.д.! Команда профессионалов!"}
                ]}
                link={[
                    {"rel": "canonical", "href": "https://178spb.com/portfolio-it/"}
                ]}
            />
            <section className="portfolio-it__image-container">
                <h2 className="portfolio-it__heading">портфолио it сервис</h2>
                <div className="portfolio-it__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="portfolio-it__mouse-icon" />
                    <p className="portfolio-it__text">Прокрутите вниз</p>
                </div>
            </section>
            <section className="company">
                <h3 className="company__heading">наши клиенты:</h3>
                <section className="grid-company">
                    <div className="grid-company__card">
                        <img className="grid-company__logo" src={aopfLogo} alt="Логотип компании АОПФ" />
                        <h4 className="grid-company__heading">АОПФ</h4>
                        <p className="grid-company__description">Агенство оценки производственных факторов</p>
                    </div>
                    <div className="grid-company__card">
                        <img className="grid-company__logo" src={voleksLogo} alt="Логотип компании Волекс" />
                        <h4 className="grid-company__heading">Волекс</h4>
                        <p className="grid-company__description">Продажа промышленного инструмента и абразивных материалов</p>
                    </div>
                    <div className="grid-company__card">
                        <img className="grid-company__logo grid-company__logo_kapri" src={kapriLogo} alt="Логотип компании КАПРИ" />
                        <h4 className="grid-company__heading grid-company__heading_kapri">КАПРИ</h4>
                        <p className="grid-company__description">Производство цистерн</p>
                    </div>
                    <div className="grid-company__card">
                        <img className="grid-company__logo" src={tdVelikiyKorolLogo} alt="Логотип компании ТД Великий король" />
                        <h4 className="grid-company__heading">ТД Великий король</h4>
                        <p className="grid-company__description">Поставка азиатских продуктов питания</p>
                    </div>
                    <div className="grid-company__card">
                        <img className="grid-company__logo grid-company__logo_olimp-tk" src={olimpTkLogo} alt="Логотип компании ОЛИМП ТК" />
                        <h4 className="grid-company__heading grid-company__heading_olimp-tk">ОЛИМП ТК</h4>
                        <p className="grid-company__description">Поставка нерудных материалов в Санкт-Петеребргу и Лен. области</p>
                    </div>
                    <div className="grid-company__card">
                        <img className="grid-company__logo grid-company__logo_legion-stroi" src={legionStroiLogo} alt="Логотип компании Легион-Строй" />
                        <h4 className="grid-company__heading grid-company__heading_legion-stroi">Легион-Строй</h4>
                        <p className="grid-company__description">Проектирование и общестроительные работы</p>
                    </div>
                    <div className="grid-company__card">
                        <img className="grid-company__logo grid-company__logo_tk-promresurs" src={tkPromresursLogo} alt="Логотип компании ТК ПРОМРЕСУРС" />
                        <h4 className="grid-company__heading">ТК ПРОМРЕСУРС</h4>
                        <p className="grid-company__description">Транспортно-экспедиционная компания</p>
                    </div>
                    <div className="grid-company__card">
                        <img className="grid-company__logo grid-company__logo_express-diesel" src={expressDieselLogo} alt="Логотип компании ЭКПРЕССДИЗЕЛЬ" />
                        <h4 className="grid-company__heading">ЭКПРЕССДИЗЕЛЬ</h4>
                        <p className="grid-company__description">Доставка дизельного топлива</p>
                    </div>
                    <div className="grid-company__card">
                        <img className="grid-company__logo grid-company__logo_spb-school" src={spbSchoolLogo} alt="Логотип компании САНКТ-ПЕТЕРБУРГСКАЯ ДЕТСКАЯ ШКОЛА ИСКУССТВ №4" />
                        <h4 className="grid-company__heading grid-company__heading_spb-school">САНКТ-ПЕТЕРБУРГСКАЯ ДЕТСКАЯ ШКОЛА ИСКУССТВ №4</h4>
                    </div>
                    <div className="grid-company__card">
                        <img className="grid-company__logo grid-company__logo_tsn-obyhovo" src={tsnObyhovoLogo} alt="Логотип компании ТСН (Ж) «ОБУХОВО»" />
                        <h4 className="grid-company__heading grid-company__heading_tsn-obyhovo">ТОВАРИЩЕСТВО СОБСТВЕННИКОВ НЕДВИЖИМОСТИ (ЖИЛЬЯ)</h4>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default PortfolioWeb;