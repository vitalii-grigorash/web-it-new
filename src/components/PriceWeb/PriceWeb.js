import React, {useState} from 'react';
import { Helmet } from 'react-helmet-async';
import mouse from '../../images/svg/mouse.svg';
import PriceTableLanding from '../PriceTableLanding/PriceTableLanding';
import PriceTableBusinessCard from '../PriceTableBusinessCard/PriceTableBusinessCard';
import PriceTableSeo from '../PriceTableSeo/PriceTableSeo';
import PriceTableMultipage from '../PriceTableMultipage/PriceTableMultipage';

function PriceWeb (props) {

    const {
        onOpenPopup,
    } = props;

    const [isFirstActive, setFirstActive] = useState(true);
    function handleFirstSectionActive () {
        setSecondActive(false);
        setThirdActive(false);
        setFourthActive(false);
        setFirstActive(true);
    };

    const [isSecondActive, setSecondActive] = useState(false);
    function handleSecondSectionActive () {
        setFirstActive(false);
        setThirdActive(false);
        setFourthActive(false);
        setSecondActive(true);
    };

    const [isThirdActive, setThirdActive] = useState(false);
    function handleThirdSectionActive () {
        setFirstActive(false);
        setSecondActive(false);
        setFourthActive(false);
        setThirdActive(true);
    };

    const [isFourthActive, setFourthActive] = useState(false);
    function handleFourthSectionActive () {
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
                    {"name": "description", "content": "ГК 'Вымпел' - Создаем и продвигаем сайты в СПб! Современный дизайн! SEO оптимизация для эффективного привлечения клиентов! Команда профессионалов!"}
                ]}
                link={[
                    {"rel": "canonical", "href": "https://178spb.com/price-web/"}
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
            <section className="price">
                <div className="price__main-container price__main-container_web">
                    <div className="price__cards-container">
                        <div className={`${isFirstActive ? 'card' : 'card-disabled'}`} onClick={handleFirstSectionActive}>
                            <h5 className={`${isFirstActive ? 'card__heading' : 'card__heading-disabled'}`}>до 100 позиций</h5>
                            <ul className={`${isFirstActive ? 'card__list' : 'card__list-disabled'}`}>
                                <li className="card__item">CMS WordPress</li>
                                <li className="card__item">Базовое SEO</li>
                                <li className="card__item">Оптимизация под мобильные устройства</li>
                                <li className="card__item">Весь необходимый функционал</li>
                                <li className="card__item">Возможность расширения до 500 позиций</li>
                                <li className="card__item">Оплата on-line</li>
                                <li className="card__item">Разработка до 45 рабочих дней</li>
                                <li className="card__item">Дополнительно интеграция с 1с</li>
                            </ul>
                            <p className={`${isFirstActive ? 'card__value' : 'card__value-disabled'}`}>от 65 000 рублей</p>
                        </div>
                        <div className={`${isSecondActive ? 'card' : 'card-disabled'}`} onClick={handleSecondSectionActive}>
                            <h5 className={`${isSecondActive ? 'card__heading' : 'card__heading-disabled'}`}>до 500 позиций</h5>
                            <ul className={`${isSecondActive ? 'card__list' : 'card__list-disabled'}`}>
                                <li className="card__item">CMS WordPress/Open Cart</li>
                                <li className="card__item">Базовое SEO</li>
                                <li className="card__item">Оптимизация под мобильные устройства</li>
                                <li className="card__item">Весь необходимый функционал</li>
                                <li className="card__item">Возможность расширения до 1000 позиций</li>
                                <li className="card__item">Оплата on-line</li>
                                <li className="card__item">Разработка до 60 рабочих дней</li>
                                <li className="card__item">Дополнительно интеграция с 1с</li>
                            </ul>
                            <p className={`${isSecondActive ? 'card__value' : 'card__value-disabled'}`}>от 75 000 рублей</p>
                        </div>
                    </div>
                    <div className="price__cards-container">
                        <div className={`${isThirdActive ? 'card' : 'card-disabled'}`} onClick={handleThirdSectionActive}>
                            <h5 className={`${isThirdActive ? 'card__heading' : 'card__heading-disabled'}`}>до 1000 позиций</h5>
                            <ul className={`${isThirdActive ? 'card__list' : 'card__list-disabled'}`}>
                                <li className="card__item">CMS Битрикс/Open Cart</li>
                                <li className="card__item">Базовое SEO</li>
                                <li className="card__item">Оптимизация под мобильные устройства</li>
                                <li className="card__item">Весь необходимый функционал</li>
                                <li className="card__item">Возможность расширения до 5000 позиций</li>
                                <li className="card__item">Оплата on-line</li>
                                <li className="card__item">Разработка от 60 рабочих дней</li>
                                <li className="card__item">Интеграция с 1с</li>
                            </ul>
                            <p className={`${isThirdActive ? 'card__value' : 'card__value-disabled'}`}>от 105 000 рублей</p>
                        </div>
                        <div className={`${isFourthActive ? 'card' : 'card-disabled'}`} onClick={handleFourthSectionActive}>
                            <h5 className={`${isFourthActive ? 'card__heading' : 'card__heading-disabled'}`}>свыше 1000 позиций</h5>
                            <ul className={`${isFourthActive ? 'card__list' : 'card__list-disabled'}`}>
                                <li className="card__item">CMS Битрикс</li>
                                <li className="card__item">Базовое SEO</li>
                                <li className="card__item">Оптимизация под мобильные устройства</li>
                                <li className="card__item">Весь необходимый функционал</li>
                                <li className="card__item">Возможность расширения более 5000 позиций</li>
                                <li className="card__item">Оплата on-line</li>
                                <li className="card__item">Разработка от 60 рабочих дней</li>
                                <li className="card__item">Интеграция с 1с</li>
                            </ul>
                            <p className={`${isFourthActive ? 'card__value' : 'card__value-disabled'}`}>от 135 000 рублей</p>
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
        </div>
    );
}

export default PriceWeb;