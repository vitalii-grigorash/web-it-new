import React from 'react';
import { Helmet } from 'react-helmet-async';
import mouse from '../../images/svg/mouse.svg';
import pointOnMap from '../../images/svg/point-on-map.svg';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

function Contacts () {

    const placeMark = {
        geometry: [59.867990, 30.461278],
        properties: {
            hintContent: 'Группа Компаний Vimpel',
            balloonContent: 'пр. Обуховской Обороны, д.199',
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: pointOnMap,
            iconImageSize: [45, 55],
            iconImageOffset: [-20, -48],
        },
        modules: ['geoObject.addon.balloon', 'geoObject.addon.hint']
    }

    return (
        <div className="contacts">
            <Helmet
                title='Контакты ГК "Вымпел"'
                meta={[
                    {"name": "description", "content": "Техническое обслуживание персональных компьютеров, печатных устройств и т.д.! Создание и продвижение сайтов в Санкт-Петербурге! Современный дизайн! SEO оптимизация для эффективного привлечения клиентов! Команда профессионалов!"}
                ]}
            />
            <div className="contacts__image-container">
                <div className="contacts__main-container">
                    <a href="tel:+78123728561" className="contacts__main-phone">
                        +7 (812)-372-85-61
                    </a>
                    <div className="contacts__sub-container">
                        <div className="contacts__container">
                            <p className="contacts__phone-heading">Менеджер по работе с клиентами:</p>
                            <a href="tel:+79112146089" className="contacts__links">
                                +7 (911) 214-60-89
                            </a>
                            <p className="contacts__phone-heading">WEB отдел:</p>
                            <a href="tel:+79812492281" className="contacts__links">
                                +7 (981) 249-22-81
                            </a>
                            <p className="contacts__phone-heading">IT отдел:</p>
                            <a href="tel:+79119266439" className="contacts__links">
                                +7 (911) 926-64-39
                            </a>     
                            <a href="mailto:3728561@178Sspb.com" className="contacts__links">
                                3728561@178Sspb.com
                            </a>    
                            <p className="contacts__work-time">Время работы:</p>  
                            <p className="contacts__work-time">По будням 9:00 — 18:00</p>                  
                        </div>
                        <a href="https://yandex.ru/maps/2/saint-petersburg/house/prospekt_obukhovskoy_oborony_199/Z0kYcgFhS0IPQFtjfXR3dnVqZA" target="_blank" rel="nofollow noreferrer" className="contacts__location">
                            <p className="contacts__location-icon"></p>
                            г. Санкт-Петербург, пр. Обуховской Обороны, д.199
                        </a>
                    </div>
                    <div className="contacts__social-icons-container">
                        <a href="https://www.instagram.com/vimpel_it_web/" target="_blank" rel="nofollow noreferrer" className="contacts__social-icon contacts__social-icon_inst"></a>
                        <a href="https://vk.com/vimpel_it_web/" target="_blank" rel="nofollow noreferrer" className="contacts__social-icon contacts__social-icon_vk"></a>
                    </div>
                </div>
                <div className="contacts__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="contacts__mouse-icon" />
                    <p className="contacts__text">Прокрутите вниз</p>
                </div>
            </div>
            <YMaps>
                <div className="contacts__yandex-maps">
                    <Map 
                        defaultState={{ center: [59.867990, 30.461278], zoom: 17 }}
                        width={"100%"} 
                        height={"100%"}
                    >
                        <Placemark {...placeMark} />
                    </Map>
                </div>
            </YMaps>
        </div>
    );
}

export default Contacts;