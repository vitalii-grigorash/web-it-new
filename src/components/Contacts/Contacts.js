import React from 'react';
import mouse from '../../images/svg/mouse.svg';

function Contacts () {
    return (
        <section className="contacts">
            <div className="contacts__image-container">
                <h2 className="contacts__heading">КОНТАКТЫ</h2>
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
        </section>
    );
}

export default Contacts;