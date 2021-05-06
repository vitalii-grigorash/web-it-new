import React from 'react';
import { Helmet } from 'react-helmet-async';
import mouse from '../../images/svg/mouse.svg';

function Shop (props) {

    const {
        onOpenPopup,
    } = props;
    
    return (
        <div className="shop">
            <Helmet
                title='Создание Интернет-магазина в Санкт-Петербурге "Вымпел"'
                meta={[
                    {"name": "description", "content": "Создание и продвижение сайтов в Санкт-Петербурге! Современный дизайн. SEO оптимизация для эффективного привлечения клиентов. Продающий дизайн. Команда профессионалов!"}
                ]}
                link={[
                    {"rel": "canonical", "href": "https://178spb.com/shop/"}
                ]}
            />
            <section className="shop__image-container">
                <h2 className="shop__heading">СОЗДАНИЕ ИНТЕРНЕТ-МАГАЗИНА ПОД КЛЮЧ</h2>
                <p className="shop__subheading">Проектирование и разработка интернет-магазина в Санкт-Петербурге</p>
                <button className="shop__button" type="button" onClick={onOpenPopup}>Заказать сайт</button>
                <div className="shop__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="shop__mouse-icon" />
                    <p className="shop__text">Прокрутите вниз</p>
                </div>
            </section>
            <section className="web-shop">
                <div className="web-shop__info-container">
                    <h3 className="web-shop__info-heading">интернет-магазин</h3>
                    <p className="web-shop__info-description">
                        Прежде чем заказать готовый интернет-магазин под ключ, важно определиться, какой
                        функционал необходим для вашего сайта. От этого будут зависеть не только стоимость
                        и сроки разработки, но также и другие, технические нюансы, такие как выбор системы
                        управления сайтом. Наши опытные специалисты с удовольствием бесплатно проконсультируют
                        вас до оформления заказа и подскажут, какие технические решения наилучшим образом
                        подойдут для решения ваших задач.
                    </p>
                    <p className="web-shop__info-description">
                        Создание интернет-магазинов любого уровня сложности и их последующее продвижение – одни
                        из основных направлений нашей деятельности, поэтому, оформляя заказ в нашей компании, вы
                        можете быть уверены в качестве услуг, а также не беспокоиться о том, что разработка
                        затянется на неопределенный срок.
                    </p>
                </div>
                <div className="web-shop__price-container">
                    <h4 className="web-shop__price-heading">стоимость создания интернет-магазина</h4>
                    <p className="web-shop__price-description">
                        Вопрос, который волнует многих, кто прежде не сталкивался с созданием сайтов. Действительно, если
                        воспользоваться поиском, можно заметить огромный разброс цен на услугу по созданию
                        сайта интернет-магазина под ключ.
                    </p>
                    <p className="web-shop__price-description">
                        Помимо функционала сайта, как мы уже писали чуть выше, огромное значение при формировании
                        стоимости такой услуги имеет раскрученность веб-студии. Крупные студии нередко формируют
                        завышенный ценник, пользуясь своим авторитетом и наличием заметных медийных
                        компаний в портфолио. При этом не всегда сайт, заказанный в такой студии, в действительности
                        будет лучше, технологичнее и эффективнее в решении поставленных перед ним задач.
                    </p>
                </div>
            </section>
            <section className="price">
                <div className="price__main-container">
                    <div className="price__cards-container">
                        <div className="card">
                            <h5 className="card__heading">до 100 позиций</h5>
                            <ul className="card__list">
                                <li className="card__item">CMS WordPress</li>
                                <li className="card__item">Базовое SEO</li>
                                <li className="card__item">Оптимизация под мобильные устройства</li>
                                <li className="card__item">Весь необходимый функционал</li>
                                <li className="card__item">Возможность расширения до 500 позиций</li>
                                <li className="card__item">Оплата on-line</li>
                                <li className="card__item">Разработка до 45 рабочих дней</li>
                                <li className="card__item">Дополнительно интеграция с 1с</li>
                            </ul>
                            <p className="card__value">от 65 000 рублей</p>
                        </div>
                        <div className="card">
                            <h5 className="card__heading">до 500 позиций</h5>
                            <ul className="card__list">
                                <li className="card__item">CMS WordPress/Open Cart</li>
                                <li className="card__item">Базовое SEO</li>
                                <li className="card__item">Оптимизация под мобильные устройства</li>
                                <li className="card__item">Весь необходимый функционал</li>
                                <li className="card__item">Возможность расширения до 1000 позиций</li>
                                <li className="card__item">Оплата on-line</li>
                                <li className="card__item">Разработка до 60 рабочих дней</li>
                                <li className="card__item">Дополнительно интеграция с 1с</li>
                            </ul>
                            <p className="card__value">от 75 000 рублей</p>
                        </div>
                    </div>
                    <div className="price__cards-container">
                        <div className="card">
                            <h5 className="card__heading">до 1000 позиций</h5>
                            <ul className="card__list">
                                <li className="card__item">CMS Битрикс/Open Cart</li>
                                <li className="card__item">Базовое SEO</li>
                                <li className="card__item">Оптимизация под мобильные устройства</li>
                                <li className="card__item">Весь необходимый функционал</li>
                                <li className="card__item">Возможность расширения до 5000 позиций</li>
                                <li className="card__item">Оплата on-line</li>
                                <li className="card__item">Разработка от 60 рабочих дней</li>
                                <li className="card__item">Интеграция с 1с</li>
                            </ul>
                            <p className="card__value">от 105 000 рублей</p>
                        </div>
                        <div className="card">
                            <h5 className="card__heading">свыше 1000 позиций</h5>
                            <ul className="card__list">
                                <li className="card__item">CMS Битрикс</li>
                                <li className="card__item">Базовое SEO</li>
                                <li className="card__item">Оптимизация под мобильные устройства</li>
                                <li className="card__item">Весь необходимый функционал</li>
                                <li className="card__item">Возможность расширения более 5000 позиций</li>
                                <li className="card__item">Оплата on-line</li>
                                <li className="card__item">Разработка от 60 рабочих дней</li>
                                <li className="card__item">Интеграция с 1с</li>
                            </ul>
                            <p className="card__value">от 135 000 рублей</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Shop;