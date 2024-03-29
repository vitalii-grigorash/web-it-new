import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import mouse from '../../images/svg/mouse.svg';
import PriceTableLanding from '../PriceTableLanding/PriceTableLanding';
import PriceTableBusinessCard from '../PriceTableBusinessCard/PriceTableBusinessCard';
import PriceTableSeo from '../PriceTableSeo/PriceTableSeo';
import PriceTableMultipage from '../PriceTableMultipage/PriceTableMultipage';

function PriceWeb(props) {

    const {
        onOpenPopup,
    } = props;

    const [isFirstActive, setFirstActive] = useState(true);
    function handleFirstSectionActive() {
        setSecondActive(false);
        setThirdActive(false);
        setFourthActive(false);
        setFirstActive(true);
    };

    const [isSecondActive, setSecondActive] = useState(false);
    function handleSecondSectionActive() {
        setFirstActive(false);
        setThirdActive(false);
        setFourthActive(false);
        setSecondActive(true);
    };

    const [isThirdActive, setThirdActive] = useState(false);
    function handleThirdSectionActive() {
        setFirstActive(false);
        setSecondActive(false);
        setFourthActive(false);
        setThirdActive(true);
    };

    const [isFourthActive, setFourthActive] = useState(false);
    function handleFourthSectionActive() {
        setFirstActive(false);
        setSecondActive(false);
        setThirdActive(false);
        setFourthActive(true);
    };

    return (
        <div className="price-web">
            <Helmet
                title='Цены на услуги WEB студии ГК "Вымпел"'
                meta={[
                    { "name": "description", "content": "ГК 'Вымпел' - Создаем и продвигаем сайты в СПб! Современный дизайн! SEO оптимизация для эффективного привлечения клиентов! Команда профессионалов!" }
                ]}
                link={[
                    { "rel": "canonical", "href": "https://178spb.com/price-web/" }
                ]}
            />
            <section className="price-web__image-container">
                <h2 className="price-web__heading">цены на услуги web студии</h2>
                <p className="price-web__subheading">Ознакомьтесь с перечнем наших услуг,  а также их стоимостью</p>
                <button className="price-web__button" type="button" onClick={onOpenPopup}>Получить консультацию</button>
                <div className="price-web__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="price-web__mouse-icon" />
                    <p className="price-web__text">Прокрутите вниз</p>
                </div>
            </section>
            <h3 className="price-web__tables-heading">СТОИМОСТЬ УСЛУГ</h3>
            <h4 className="price-web__table-heading">ИНТЕРНЕТ-МАГАЗИН</h4>
            <section className="price-table-shop">
                <div className="price-table-shop__main-container">
                    <div className="price-table-shop__cards-container">
                        <div className={`${isFirstActive ? 'card-shop' : 'card-shop card-shop_disabled'}`} onClick={handleFirstSectionActive}>
                            <h5 className={`${isFirstActive ? 'card-shop__heading' : 'card-shop__heading card-shop__heading_disabled'}`}>до 100 позиций</h5>
                            <ul className={`${isFirstActive ? 'card-shop__list' : 'card-shop__list card-shop__list_disabled'}`}>
                                <li className="card-shop__item">Базовое SEO</li>
                                <li className="card-shop__item">Оптимизация под мобильные устройства</li>
                                <li className="card-shop__item">Весь необходимый функционал</li>
                                <li className="card-shop__item">Возможность расширения до 500 позиций</li>
                                <li className="card-shop__item">Оплата on-line</li>
                                <li className="card-shop__item">Разработка до 45 рабочих дней</li>
                                <li className="card-shop__item">Дополнительно интеграция с 1с</li>
                            </ul>
                            <p className={`${isFirstActive ? 'card-shop__value' : 'card-shop__value card-shop__value_disabled'}`}>от 65 000 рублей</p>
                        </div>
                        <div className={`${isSecondActive ? 'card-shop' : 'card-shop card-shop_disabled'}`} onClick={handleSecondSectionActive}>
                            <h5 className={`${isSecondActive ? 'card-shop__heading' : 'card-shop__heading card-shop__heading_disabled'}`}>до 500 позиций</h5>
                            <ul className={`${isSecondActive ? 'card-shop__list' : 'card-shop__list card-shop__list_disabled'}`}>
                                <li className="card-shop__item">Базовое SEO</li>
                                <li className="card-shop__item">Оптимизация под мобильные устройства</li>
                                <li className="card-shop__item">Весь необходимый функционал</li>
                                <li className="card-shop__item">Возможность расширения до 1000 позиций</li>
                                <li className="card-shop__item">Оплата on-line</li>
                                <li className="card-shop__item">Разработка до 60 рабочих дней</li>
                                <li className="card-shop__item">Дополнительно интеграция с 1с</li>
                            </ul>
                            <p className={`${isSecondActive ? 'card-shop__value' : 'card-shop__value card-shop__value_disabled'}`}>от 75 000 рублей</p>
                        </div>
                    </div>
                    <div className="price-table-shop__cards-container">
                        <div className={`${isThirdActive ? 'card-shop' : 'card-shop card-shop_disabled'}`} onClick={handleThirdSectionActive}>
                            <h5 className={`${isThirdActive ? 'card-shop__heading' : 'card-shop__heading card-shop__heading_disabled'}`}>до 1000 позиций</h5>
                            <ul className={`${isThirdActive ? 'card-shop__list' : 'card-shop__list card-shop__list_disabled'}`}>
                                <li className="card-shop__item">Базовое SEO</li>
                                <li className="card-shop__item">Оптимизация под мобильные устройства</li>
                                <li className="card-shop__item">Весь необходимый функционал</li>
                                <li className="card-shop__item">Возможность расширения до 5000 позиций</li>
                                <li className="card-shop__item">Оплата on-line</li>
                                <li className="card-shop__item">Разработка от 60 рабочих дней</li>
                                <li className="card-shop__item">Интеграция с 1с</li>
                            </ul>
                            <p className={`${isThirdActive ? 'card-shop__value' : 'card-shop__value card-shop__value_disabled'}`}>от 105 000 рублей</p>
                        </div>
                        <div className={`${isFourthActive ? 'card-shop' : 'card-shop card-shop_disabled'}`} onClick={handleFourthSectionActive}>
                            <h5 className={`${isFourthActive ? 'card-shop__heading' : 'card-shop__heading card-shop__heading_disabled'}`}>свыше 1000 позиций</h5>
                            <ul className={`${isFourthActive ? 'card-shop__list' : 'card-shop__list card-shop__list_disabled'}`}>
                                <li className="card-shop__item">Базовое SEO</li>
                                <li className="card-shop__item">Оптимизация под мобильные устройства</li>
                                <li className="card-shop__item">Весь необходимый функционал</li>
                                <li className="card-shop__item">Возможность расширения более 5000 позиций</li>
                                <li className="card-shop__item">Оплата on-line</li>
                                <li className="card-shop__item">Разработка от 60 рабочих дней</li>
                                <li className="card-shop__item">Интеграция с 1с</li>
                            </ul>
                            <p className={`${isFourthActive ? 'card-shop__value' : 'card-shop__value card-shop__value_disabled'}`}>от 135 000 рублей</p>
                        </div>
                    </div>
                </div>
            </section>
            <h4 className="price-web__table-heading">САЙТ-ВИЗИТКА</h4>
                <PriceTableBusinessCard />
            <h4 className="price-web__table-heading">LANDING PAGE</h4>
                <PriceTableLanding />
            <h4 className="price-web__table-heading">SEO-УСЛУГИ</h4>
                <PriceTableSeo />
            <h4 className="price-web__table-heading">МНОГОСТРАНИЧНЫЙ (КОРПОРАТИВНЫЙ) САЙТ</h4>
                <PriceTableMultipage />
            <h4 className="price-web__table-heading">САЙТ-КАТАЛОГ</h4>
            <section className="price-table-catalog">
                <div className="price-table-catalog__container">
                    <div className="price-table-catalog__container-first">
                        <h5 className="price-table-catalog__heading">
                            САЙТ-КАТАЛОГ
                            <span className="price-table-catalog__cost"> 45&nbsp;000&nbsp;руб.</span>
                        </h5>
                    </div>
                    <div className="price-table-catalog__container-second">
                        <ul className="price-table-catalog__list">
                            <li className="price-table-catalog__list-item">Базовое SEO</li>
                            <li className="price-table-catalog__list-item">Дизайн</li>
                            <li className="price-table-catalog__list-item">Адаптивная верстка</li>
                        </ul>
                        <ul className="price-table-catalog__list">
                            <li className="price-table-catalog__list-item">Наполнение до 10 страниц</li>
                            <li className="price-table-catalog__list-item">Наполнение до 20 позиций</li>
                        </ul>
                    </div>
                    <p className="price-table-catalog__cost-mobile">45 000 руб.</p>
                </div>
            </section>
        </div>
    );
}

export default PriceWeb;