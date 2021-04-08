import React from 'react';
import PageForm from '../PageForm/PageForm';
import Stages from '../Stages/Stages';
import PortfolioSlider from '../PortfolioSlider/PortfolioSlider';
import mouse from '../../images/svg/mouse.svg';
import illustrationWeb from '../../images/illustration-web.jpg';
import lineOfHistory from '../../images/svg/line-of-history.svg';

function Web (props) {

    const {
        onSendForm,
        onOpenPopup,
        submitButtonText
    } = props;

    return (
        <section className="web">
            <section className="web__image-container">
                <h1 className="web__heading">WEB СТУДИЯ</h1>
                <button className="web__button" type="button" onClick={onOpenPopup}>
                    Получить консультацию
                </button>
                <div className="web__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="web__mouse-icon" />
                    <p className="web__text">Прокрутите вниз</p>
                </div>
            </section>
            <section className="services">
                <h2 className="services__heading">чем мы занимаемся</h2>
                <div className="grid">
                    <div className="grid__item">
                        <h3 className="grid__heading">интернет магазин</h3>
                        <p className="grid__description">
                            Хороший интернет-магазин – это простая, понятная и удобная для
                            посетителя витрина товаров или услуг в интернете, которая позволяет
                            найти всю необходимую информацию за минимальное количество кликов.
                        </p>
                    </div>
                    <div className="grid__item">
                        <h3 className="grid__heading">landing page</h3>
                        <p className="grid__description">
                            Если для запуска рекламной кампании, проведения акции или исследования
                            вашей компании требуется одностраничный сайт, мы рады помочь и изготовить
                            качественный, яркий и современный Landing Page.
                        </p>
                    </div>
                    <div className="grid__item">
                        <h3 className="grid__heading">сайт-визитка</h3>
                        <p className="grid__description">
                            Создание сайта-визитки под ключ предполагает, что с помощью такого сайта
                            начинающий предприниматель или компания хотят заявить о себе, разместить в компактном
                            удобном формате перечень своих услуг и их стоимость.
                        </p>
                    </div>
                    <div className="grid__item">
                        <h3 className="grid__heading">корпоративный сайт</h3>
                        <p className="grid__description">
                            Хороший корпоративный сайт – это большой информационный портал с ярким
                            индивидуальным дизайном, подчеркивающим достоинства вашей компании и выгодные
                            отличия от конкурентов на рынке, который вы также можете заказать у нас.
                        </p>
                    </div>
                    <div className="grid__item">
                        <h3 className="grid__heading">сайт-каталог</h3>
                        <p className="grid__description">
                            Если компания предлагает широкий ассортимент товаров или услуг, тогда обязательно
                            встает вопрос о необходимости создания полноценного сайта-каталога, с возможностью
                            импорта и экспорта товаров, а также удобной системой фильтров для поиска товаров.
                        </p>
                    </div>
                    <div className="grid__item">
                        <h3 className="grid__heading">seo</h3>
                        <p className="grid__description">
                            Многие клиенты недооценивают важность такого этапа, как SEO-оптимизация
                            сайта. И зря! Только представьте, что сайт может стабильно приводить вам клиентов
                            каждый месяц без дополнительных расходов на рекламу! Стоит лишь раз грамотно настроить
                            его для правильной выдачи в результатах поиска.
                        </p>
                    </div>
                </div>
            </section>
            <Stages />
            <section className="history-web">
                <div className="history-web__container">
                    <h2 className="history-web__heading">немного истории</h2>
                    <img className="history-web__img history-web__img_mobile" src={illustrationWeb} alt="Иллюстрация совещания" />
                    <div className="history-web__text-container">
                        <p className="history-web__text">
                            2017 год стал знаковым для всего SEO-сообщества в России и не
                            только. Google задал тренд на всеобщий переход к работе сайтов
                            по безопасному протоколу https. Вместе с этим давно существовавший
                            термин «mobile-first» приобрел особенную значимость для всех, кто
                            занимается продвижением в поиске.
                        </p>
                        <p className="history-web__text">
                            Фактически, с этого момента рынок веб-услуг вынужден был адаптироваться под
                            новые правила игры: при ранжировании сайта первостепенное значение отныне
                            будет иметь его мобильная версия и лишь затем – десктопная.
                        </p>
                        <p className="history-web__text">
                            Мы в группе компаний Вымпел быстро поняли, какие ключевые факторы будут
                            иметь важнейшее значение для быстрого продвижения сайтов наших заказчиков.
                        </p>
                    </div>
                    <img className="history-web__line" src={lineOfHistory} alt="Линия истории" />
                </div>
                <img className="history-web__img" src={illustrationWeb} alt="Иллюстрация совещания" />
            </section>
            <PageForm
                onSendForm={onSendForm}
                submitButtonText={submitButtonText}
            />
            <PortfolioSlider />
        </section>
    );
}

export default Web;