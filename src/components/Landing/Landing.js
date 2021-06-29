import React from 'react';
import { Helmet } from 'react-helmet-async';
import mouse from '../../images/svg/mouse.svg';
import PriceTableLanding from '../PriceTableLanding/PriceTableLanding';

function Landing(props) {

    const {
        onOpenPopup,
    } = props;

    return (
        <div className="landing">
            <Helmet
                title='Создание Landing Page под ключ в Санкт-Петербурге "Вымпел"'
                meta={[
                    { "name": "description", "content": "Занимаемся созданием и продвижением качественных сайтов! Современный и продающий дизайн! SEO оптимизация для эффективного привлечения клиентов! Команда профессионалов! ГК 'Вымпел'" }
                ]}
                link={[
                    { "rel": "canonical", "href": "https://178spb.com/landing/" }
                ]}
            />
            <section className="landing__image-container">
                <h2 className="landing__heading">создание landing page под ключ</h2>
                <p className="landing__subheading">Проектирование и разработка landing page в Санкт-Петербурге</p>
                <button className="landing__button" type="button" onClick={onOpenPopup}>Заказать сайт</button>
                <div className="landing__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="landing__mouse-icon" />
                    <p className="landing__text">Прокрутите вниз</p>
                </div>
            </section>
            <section className="landing-info">
                <div className="landing-info__container">
                    <h3 className="landing-info__heading">создание одностраничного сайта (лендинга) под ключ</h3>
                    <p className="landing-info__description">
                        Что отличает хороший Landing Page от плохого? Неопытный специалист чаще всего
                        во главу угла поставит красивый броский дизайн и окажется неправ. Безусловно, внешний
                        вид продающей страницы важен, но определяющую роль он не играет.
                    </p>
                    <h4 className="landing-info__subheading">почему наши лендинги работают?</h4>
                    <p className="landing-info__subdescription">
                        Как мы уже заметили выше, красивой обертки мало. Профессиональный
                        Landing Page сочетает в себе сразу несколько важных факторов:
                    </p>
                    <ul className="landing-info__list">
                        <li className="landing-info__list-item">
                            Грамотная подача контента, которая в свою очередь подразумевает
                            визуальное и текстовое выделение нужных заказчику акцентов, учитывает
                            популярные психологические паттерны поведения посетителей;
                        </li>
                        <li className="landing-info__list-item">
                            Высокая скорость загрузки страницы, которая возможна только при
                            правильном подходе к написанию кода сайта. При прочих равных показателях
                            посетитель примет решение о покупке там, где страница загрузится
                            быстрее, даже если разница будет составлять доли секунды;
                        </li>
                        <li className="landing-info__list-item">
                            Правильно настроенные цели, с помощью которых грамотный маркетолог
                            сможет держать руку на пульсе и контролировать расходование бюджета.
                        </li>
                    </ul>
                    <p className="landing-info__subdescription">
                        Наши специалисты годами совершенствовали свои навыки, поэтому
                        все наши лендинги обладают хорошо продуманной структурой, отлично
                        оптимизированы под загрузку через мобильный интернет с мобильных
                        устройств, за счет чего обеспечивают высокую конверсию посетителей на
                        совершение целевого действия – покупку или подачу заявки.
                    </p>
                </div>
            </section>
            <PriceTableLanding />
        </div>
    );
}

export default Landing;