import React, { useState } from 'react';
import vector from '../../images/svg/vector.svg';
import mainImg from '../../images/animation-main.jpg';
import designImg from '../../images/animation-design.jpg';
import formImg from '../../images/animation-form.jpg';
import sliderImg from '../../images/animation-slider.jpg';
import mapImg from '../../images/animation-map.jpg';
import adaptiveImg from '../../images/animation-adaptive.jpg';
import mediaImg from '../../images/animation-media.jpg';
import advertisImg from '../../images/animation-advertis.jpg';

function Table() {

    const [img, setImg] = useState(mainImg);
    const [text, setText] = useState('Система управления сайтом (например, CMS WordPress)')
    const [textStyle, setTextStyle] = useState('animation__text');

    return (
        <section className="table">
            <section className="animation">
                <img src={img} alt="Статичное изображение" className="animation__img"/>
                <div className="animation__text-container">
                    <p className={textStyle}>{text}</p>
                </div>
            </section>
            <section className="table__container">
                <table className="design">
                    <thead className="design__head">
                        <tr className="design__head-container">
                            <th className="design__head-item design__head-item_main">Дизайн</th>
                            <th className="design__head-item">до 15 страниц</th>
                            <th className="design__head-item">до 25 страниц</th>
                            <th className="design__head-item">до 25 страниц "под ключ"</th>
                        </tr>
                    </thead>
                    <tbody className="design__body">
                        <tr className="design__body-container">
                            <td 
                                className="design__body-text"
                                onMouseEnter={() => setImg(designImg)} 
                                onMouseLeave={() => setImg(mainImg)} 
                            >
                                Уникальный дизайн для всех страниц
                            </td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-text design__body-text_center">по 2-3 эскиза</td>
                        </tr>
                        <tr className="design__body-container">
                            <td 
                                className="design__body-text"
                                onMouseEnter={() => setImg(formImg)} 
                                onMouseLeave={() => setImg(mainImg)} 
                            >
                                Форма обратной связи
                            </td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-text design__body-text_center">до 4 различных форм</td>
                        </tr>
                        <tr className="design__body-container">
                            <td 
                                className="design__body-text"
                                onMouseEnter={() => setImg(sliderImg)} 
                                onMouseLeave={() => setImg(mainImg)} 
                            >
                                Слайдер с УТП (спец предложение)
                            </td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                        </tr>
                        <tr className="design__body-container">
                            <td 
                                className="design__body-text"
                                onMouseEnter={() => setImg(mapImg)} 
                                onMouseLeave={() => setImg(mainImg)} 
                            >
                                Карта проезда
                            </td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                        </tr>
                        <tr className="design__body-container">
                            <td 
                                className="design__body-text"
                                onMouseEnter={() => setImg(adaptiveImg)} 
                                onMouseLeave={() => setImg(mainImg)} 
                            >
                                Адаптивная (резиновая) верстка под планшеты и телефоны
                            </td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                        </tr>
                        <tr className="design__body-container">
                            <td 
                                className="design__body-text"
                                onMouseEnter={() => setImg(mediaImg)} 
                                onMouseLeave={() => setImg(mainImg)} 
                            >
                                Медиагалерея (фото и видео)
                            </td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                        </tr>
                        <tr className="design__body-container">
                            <td 
                                className="design__body-text"
                                onMouseEnter={() => setImg(advertisImg)} 
                                onMouseLeave={() => setImg(mainImg)} 
                            >
                                Разработка рекламного баннера
                            </td>
                            <td></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                        </tr>
                    </tbody>
                </table>
                <table className="design">
                    <thead className="design__head">
                        <tr className="design__head-container">
                            <th className="design__head-item design__head-item_dev">Разработка</th>
                            <th className="design__head-item">до 15 страниц</th>
                            <th className="design__head-item">до 25 страниц</th>
                            <th className="design__head-item">до 25 страниц "под ключ"</th>
                        </tr>
                    </thead>
                    <tbody className="design__body">
                        <tr className="design__body-container">
                            <td 
                                className="design__body-text"
                                onMouseEnter={() => setText('Система управления сайтом (например, CMS WordPress)')} 
                                onMouseLeave={() => setText('Система управления сайтом (например, CMS WordPress)')} 
                            >
                                Система управления сайтом (например, CMS WordPress)
                            </td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                        </tr>
                        <tr className="design__body-container">
                            <td 
                                className="design__body-text"
                                onMouseEnter={() => {setText('Почтовый ящик с доменным именем'); setTextStyle('animation__text animation__text_hover')}} 
                                onMouseLeave={() => {setText('Система управления сайтом (например, CMS WordPress)'); setTextStyle('animation__text')}} 
                            >
                                Почтовый ящик с доменным именем
                            </td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                        </tr>
                        <tr className="design__body-container">
                            <td 
                                className="design__body-text"
                                onMouseEnter={() => setText('Составление семантического ядра')} 
                                onMouseLeave={() => setText('Система управления сайтом (например, CMS WordPress)')} 
                            >
                                Составление семантического ядра
                            </td>
                            <td className="design__body-text design__body-text_center">по 1 направлению</td>
                            <td className="design__body-text design__body-text_center">по 2 направлениям</td>
                            <td className="design__body-text design__body-text_center">по 3 направлениям</td>
                        </tr>
                        <tr className="design__body-container">
                            <td 
                                className="design__body-text"
                                onMouseEnter={() => {setText('Кроссбраузерная верстка (кроме Safari и IE ниже 11 версии)'); setTextStyle('animation__text animation__text_hover')}} 
                                onMouseLeave={() => {setText('Система управления сайтом (например, CMS WordPress)'); setTextStyle('animation__text')}} 
                            >
                                Кроссбраузерная верстка (кроме Safari и IE ниже 11 версии)
                            </td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                        </tr>
                        <tr className="design__body-container">
                            <td 
                                className="design__body-text"
                                onMouseEnter={() => setText('Интеграция с соцсетями')} 
                                onMouseLeave={() => setText('Система управления сайтом (например, CMS WordPress)')} 
                            >
                                Интеграция с соцсетями
                            </td>
                            <td className="design__body-img"></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                        </tr>
                        <tr className="design__body-container">
                            <td 
                                className="design__body-text"
                                onMouseEnter={() => {setText('Онлайн консультант (JivoSite)'); setTextStyle('animation__text animation__text_hover')}} 
                                onMouseLeave={() => {setText('Система управления сайтом (например, CMS WordPress)'); setTextStyle('animation__text')}} 
                            >
                                Онлайн консультант (JivoSite)
                            </td>
                            <td className="design__body-img"></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                        </tr>
                        <tr className="design__body-container">
                            <td 
                                className="design__body-text"
                                onMouseEnter={() => setText('Уникальные программируемые динамические блоки')} 
                                onMouseLeave={() => setText('Система управления сайтом (например, CMS WordPress)')} 
                            >
                                Уникальные программируемые динамические блоки
                            </td>
                            <td className="design__body-img"></td>
                            <td className="design__body-img"></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                        </tr>
                        <tr className="design__body-container">
                            <td 
                                className="design__body-text"
                                onMouseEnter={() => {setText('Реализация кода страниц любой сложности'); setTextStyle('animation__text animation__text_hover')}} 
                                onMouseLeave={() => {setText('Система управления сайтом (например, CMS WordPress)'); setTextStyle('animation__text')}} 
                            >
                                Реализация кода страниц любой сложности
                            </td>
                            <td className="design__body-img"></td>
                            <td className="design__body-img"></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                        </tr>
                        <tr className="design__body-container">
                            <td 
                                className="design__body-text"
                                onMouseEnter={() => setText('Подключение CRM системы')} 
                                onMouseLeave={() => setText('Система управления сайтом (например, CMS WordPress)')} 
                            >
                                Подключение CRM системы
                            </td>
                            <td className="design__body-img"></td>
                            <td className="design__body-img"></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                        </tr>
                        <tr className="design__body-container">
                            <td 
                                className="design__body-text"
                                onMouseEnter={() => {setText('Установка и настройка Я.Метрики и G.Analitics'); setTextStyle('animation__text animation__text_hover')}} 
                                onMouseLeave={() => {setText('Система управления сайтом (например, CMS WordPress)'); setTextStyle('animation__text')}} 
                            >
                                Установка и настройка Я.Метрики и G.Analitics
                            </td>
                            <td className="design__body-img"></td>
                            <td className="design__body-img"></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                        </tr>
                        <tr className="design__body-container">
                            <td 
                                className="design__body-text"
                                onMouseEnter={() => setText('Наполнение сайта контентом')} 
                                onMouseLeave={() => setText('Система управления сайтом (например, CMS WordPress)')} 
                            >
                                Наполнение сайта контентом
                            </td>
                            <td className="design__body-img"></td>
                            <td className="design__body-img"></td>
                            <td className="design__body-img"><img src={vector} alt="Иконка галочки" /></td>
                        </tr>
                    </tbody>
                </table>
                <table className="design">
                    <thead className="design__head">
                        <tr className="design__head-container">
                            <th className="design__head-item design__head-item_time">Время выполнения</th>
                            <th className="design__head-item">45 дней</th>
                            <th className="design__head-item">60 дней</th>
                            <th className="design__head-item">75 дней</th>
                        </tr>
                    </thead>
                    <tbody className="design__body">
                        <tr className="design__body-container">
                            <td className="design__body-text design__body-text_pay">Оплата в 2 этапа (предоплата 50%)</td>
                            <td className="design__body-text design__body-text_center design__body-text_value">99 000 руб.</td>
                            <td className="design__body-text design__body-text_center design__body-text_value">150 000 руб.</td>
                            <td className="design__body-text design__body-text_center design__body-text_value">200 000 руб.</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </section>
    );
}

export default Table;