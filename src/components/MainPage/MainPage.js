import React from 'react';
import mouse from '../../images/svg/mouse.svg';
import illustrationOne from '../../images/illustration-one.jpg';
import illustrationTwo from '../../images/illustration-two.jpg';
import lineOfHistory from '../../images/svg/line-of-history.svg';
import teamOne from '../../images/team-one.jpg'
import teamTwo from '../../images/team-two.jpg'
import teamThree from '../../images/team-three.jpg'
import PageForm from '../PageForm/PageForm';
import { Link } from 'react-router-dom';

function MainPage (props) {

    const {
        onSendForm,
        isDropDownMenuOpen,
    } = props;

    return (
        <div className="main-page">
            <nav className="main-page__images-container">
                <Link to={isDropDownMenuOpen ? `/` : `/it`} className="main-page__container main-page__container_it">
                    <div className="main-page__container-overlay">
                        <h2 className="main-page__heading main-page__heading_it">it сервис</h2>
                        <img src={mouse} alt="Иконка мышки" className="main-page__mouse-icon" />
                    </div>
                </Link>
                <Link to={isDropDownMenuOpen ? `/` : `/web`} className="main-page__container main-page__container_web">
                    <div className="main-page__container-overlay">
                        <h2 className="main-page__heading main-page__heading_web">web студия</h2>
                        <p className="main-page__down-text">Прокрутите вниз</p>
                    </div>
                </Link>
            </nav>
            <section className="about-us">
                <div className="about-us__container">
                    <h3 className="about-us__heading">о нашей компании</h3>
                    <p className="about-us__text">
                        Приветствуем вас на сайте нашей компании! Группа компаний Вымпел на
                        сегодня – это целая IT-экосистема для тех, кто нуждается в быстрой и
                        квалифицированной помощи по созданию и продвижению веб-сайтов.
                    </p>
                    <p className="about-us__text">
                        Наши опытные специалисты готовы оказать вам полный комплекс услуг, начиная
                        от разработки макета будущего сайта, заканчивая его SEO-настройкой и
                        запуском контекстной рекламы для эффективного привлечения клиентов для вашего бизнеса.
                    </p>
                    <p className="about-us__text">
                        Одним из направлений нашей деятельности также является техническое обслуживание
                        электронного оборудования (персональные компьютеры, печатные
                        устройства и т.д.) – дистанционно или с выездом наших специалистов к вам.
                    </p>
                </div>
                <img className="about-us__img" src={illustrationOne} alt="Иллюстрация офиса" />
            </section>
            <PageForm
                onSendForm={onSendForm}
            />
            <section className="history">
                <img className="history__img" src={illustrationTwo} alt="Иллюстрация совещания" />
                <div className="history__container">
                    <h3 className="history__heading">немного истории</h3>
                    <img className="history__img history__img_mobile" src={illustrationTwo} alt="Иллюстрация совещания" />
                    <p className="history__text">
                        2017 год стал знаковым для всего SEO-сообщества в России и не
                        только. Google задал тренд на всеобщий переход к работе сайтов
                        по безопасному протоколу https. Вместе с этим давно существовавший
                        термин «mobile-first» приобрел особенную значимость для всех, кто
                        занимается продвижением в поиске.
                    </p>
                    <p className="history__text">
                        Фактически, с этого момента рынок веб-услуг вынужден был адаптироваться под
                        новые правила игры: при ранжировании сайта первостепенное значение отныне
                        будет иметь его мобильная версия и лишь затем – десктопная.
                    </p>
                    <p className="history__text">
                        Мы в группе компаний Вымпел быстро поняли, какие ключевые факторы будут
                        иметь важнейшее значение для быстрого продвижения сайтов наших заказчиков.
                    </p>
                    <img className="history__line" src={lineOfHistory} alt="Линия истории" />
                </div>
            </section>
            <section className="schedule">
                <h3 className="schedule__heading">мы в цифрах</h3>
                <div className="schedule__container">
                    <div className="schedule__info-container">
                        <p className="schedule__number">97%</p>
                        <p className="schedule__info">довольных клиентов</p>
                    </div>
                    <div className="schedule__info-container">
                        <p className="schedule__number">23</p>
                        <p className="schedule__info">сотрудника</p>
                    </div>
                    <div className="schedule__info-container">
                        <p className="schedule__number">106</p>
                        <p className="schedule__info">компьютеров обслужено</p>
                    </div>
                    <div className="schedule__info-container">
                        <p className="schedule__number">59</p>
                        <p className="schedule__info">макетов уже сделано</p>
                    </div>
                </div>
            </section>
            <div className="team">
                <div className="team__container">
                    <img className="team__img" src={teamOne} alt="Иллюстрация команды"/>
                    <p className="team__text">
                        Наши специалисты до того, как присоединиться к нам, занимались созданием 
                        и продвижением сайтов по меньшей мере 3-5 лет, а стаж некоторых более 10 лет.
                    </p>
                </div>
                <div className="team__container">
                    <img className="team__img team__img_center" src={teamTwo} alt="Иллюстрация команды"/>
                    <p className="team__text team__text_center">
                        Мы всегда на связи с заказчиком, готовы ответить на любые вопросы быстро 
                        и оперативно, поэтому вы будете в курсе каждого этапа работы.
                    </p>
                </div>
                <div className="team__container">
                    <img className="team__img team__img_bottom" src={teamThree} alt="Иллюстрация команды"/>
                    <p className="team__text">
                        Наши специалисты оказывают полный комплекс услуг, начиная от разработки 
                        макета будущего сайта, заканчивая его SEO-настройкой.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainPage;