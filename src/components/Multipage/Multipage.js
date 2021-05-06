import React from 'react';
import { Helmet } from 'react-helmet-async';
import mouse from '../../images/svg/mouse.svg';
import PageForm from '../PageForm/PageForm';
import Table from '../Table/Table';

function Multipage (props) {

    const {
        onSendForm,
        onOpenPopup,
        submitButtonText,
    } = props;

    return (
        <div className="multipage">
            <Helmet
                title='Создание Многостраничного (корпоративного) сайта в Санкт-Петербурге "Вымпел"'
                meta={[
                    {"name": "description", "content": "Проектирование и разработка многостраничного сайта в Санкт-Петербурге! Создание и продвижение веб-сайтов! Современный дизайн! SEO оптимизация для эффективного привлечения клиентов! Команда профессионалов!"}
                ]}
                link={[
                    {"rel": "canonical", "href": "https://178spb.com/multipage/"}
                ]}
            />
            <section className="multipage__image-container">
                <h2 className="multipage__heading">создание многостраничного (корпоративного) сайта "под ключ"</h2>
                <p className="multipage__subheading">Проектирование и разработка многостраничного сайта в Санкт-Петербурге</p>
                <button className="multipage__button" type="button" onClick={onOpenPopup}>Заказать сайт</button>
                <div className="multipage__bottom-container">
                    <img src={mouse} alt="Иконка мышки" className="multipage__mouse-icon" />
                    <p className="multipage__text">Прокрутите вниз</p>
                </div>
            </section>
            <section className="multipage-info">
                <div className="multipage-info__container">
                    <h3 className="multipage-info__heading">создание многостраничного (корпоративного) сайта для стабильных организаций</h3>
                    <p className="multipage-info__description">
                        Наша команда рада предложить вам создание уникального, разработанного, персонально 
                        под вас и ваш бизнес, корпоративного сайта, который выгодно подчеркнет ваши отличия 
                        от ближайших конкурентов и максимально полно раскроет ваши преимущества для клиентов. Такой 
                        сайт непременно станет визитной карточкой вашей компании и поможет поднять узнаваемость в сети.
                    </p>
                    <p className="multipage-info__description">Корпоративный сайт, заказанный у нас – это:</p>
                    <ul className="multipage-info__list-container">
                        <li className="multipage-info__list">никаких ограничений по функционалу и дальнейшему масштабированию в связи с ростом вашего бизнеса;</li>
                        <li className="multipage-info__list">полностью уникальный, а не выстроенный на готовых шаблонах внешний вид;</li>
                        <li className="multipage-info__list">моментальная загрузка на всех устройствах;</li>
                        <li className="multipage-info__list">полная адаптивность под любые разрешения экрана телефонов и планшетов;</li>
                        <li className="multipage-info__list">уникальный контент, созданный профессиональными копирайтерами.</li>
                    </ul>
                    <p className="multipage-info__description">
                        Стоимость разработки вашего корпоративного сайта согласуется до старта 
                        работы и не может быть увеличена в одностороннем порядке. Итоговая цена 
                        зависит от размеров сайта и технических решений, задействованных при разработке.
                    </p>
                </div>
            </section>
            <PageForm
                onSendForm={onSendForm}
                submitButtonText={submitButtonText}
            />
            <Table />
        </div>
    );
}

export default Multipage;