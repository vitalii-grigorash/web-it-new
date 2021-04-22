import React from 'react';
import Helmet from "react-helmet";
import mouse from '../../images/svg/mouse.svg';
import analysisIcon from '../../images/analysis-icon.jpg';
import designIcon from '../../images/design-icon.jpg';
import programmingIcon from '../../images/programming-icon.jpg';
import supportIcon from '../../images/support-icon.jpg';
import CatalogPageForm from '../CatalogPageForm/CatalogPageForm';

function Catalog (props) {

    const {
        onSendForm,
        onOpenPopup,
        submitButtonText,
    } = props;

    return (
        <section className="catalog">
            <Helmet
                title='Создание Сайта-каталога под ключ в Санкт-Петербурге "Вымпел"'
                meta={[
                    {"name": "description", "content": "Проектирование и разработка сайта-каталога в Санкт-Петербурге! Создание и продвижение веб-сайтов! Современный дизайн! SEO оптимизация для эффективного привлечения клиентов! Команда профессионалов!"}
                ]}
            />
            <section className="catalog__image-container">
                <h1 className="catalog__heading">СОЗДАНИЕ <nobr>САЙТА-КАТАЛОГА</nobr> ПОД КЛЮЧ</h1>
                <p className="catalog__subheading">Проектирование и разработка сайта-каталога в Санкт-Петербурге</p>
                <button className="catalog__button" type="button" onClick={onOpenPopup}>Заказать сайт</button>
                <div className="catalog__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="catalog__mouse-icon" />
                    <p className="catalog__text">Прокрутите вниз</p>
                </div>
            </section>
            <section className="catalog-info">
                <div className="catalog-info__container">
                    <h2 className="catalog-info__heading">продающий <nobr>сайт-каталог</nobr> с трендовым дизайном в <nobr>санкт-петербурге</nobr></h2>
                    <p className="catalog-info__description">
                        Наша компания занимается проектированием и разработкой сайтов-каталогов любого 
                        масштаба и сложности с 2017 года. За это время несколько сотен клиентов обзавелись 
                        удобными и функциональными онлайн-витринами для своих товаров.
                        Сайт-каталог может содержать самые разнообразные разделы помимо классической 
                        витрины с карточками товаров и подробной информацией об их характеристиках. Наполнение 
                        каталога оговаривается индивидуально с каждым клиентом.
                    </p>
                    <p className="catalog-info__description">Классический сайт-каталог включает:</p>
                    <ul className="catalog-info__list-container">
                        <li className="catalog-info__list">структурированный каталог товаров с возможностью поиска по заданным категориям и с применением различных опций и фильтров;</li>
                        <li className="catalog-info__list">карточки товара с подробной информацией, фотографиями и ценой;</li>
                        <li className="catalog-info__list">дополнительные разделы по желанию клиента: модуль комментариев, оценки и отзывы, доска желаний.</li>
                    </ul>
                    <p className="catalog-info__description">
                        При разработке каталога особенное внимание мы отводим системе поиска и сравнения 
                        товаров, которая обязательно включает в себя возможность отфильтровать каждый 
                        товар по нужному признаку, расставить товары по убыванию и возрастанию цены, задать 
                        нужный ценовой диапазон и так далее.
                    </p>
                </div>
            </section>
            <CatalogPageForm
                onSendForm={onSendForm}
                submitButtonText={submitButtonText}
            />
            <section className="days">
                <div className="days__container">
                    <h2 className="days__heading">дни разработки</h2>
                    <div className="days__items-container">
                        <div className="days__item-container">
                            <img className="days__img" src={analysisIcon} alt="Иконка анализа"/>
                            <div className="days__info-container">
                                <p className="days__value">2 дня</p>
                                <p className="days__type">Анализ</p>
                            </div>
                        </div>
                        <div className="days__item-container">
                            <img className="days__img" src={designIcon} alt="Иконка дизайна"/>
                            <div className="days__info-container">
                                <p className="days__value">5 дней</p>
                                <p className="days__type">Дизайн</p>
                            </div>
                        </div>
                    </div>
                    <div className="days__items-container">
                        <div className="days__item-container">
                            <img className="days__img" src={programmingIcon} alt="Иконка программирования"/>
                            <div className="days__info-container">
                                <p className="days__value">10 дней</p>
                                <p className="days__type">Программирование</p>
                            </div>
                        </div>
                        <div className="days__item-container">
                            <img className="days__img" src={supportIcon} alt="Иконка технической поддержки"/>
                            <div className="days__info-container">
                                <p className="days__value">1 месяц</p>
                                <p className="days__type">Техническая поддержка</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Catalog;