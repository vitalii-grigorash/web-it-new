import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function NotFound () {

    return (
        <section className="not-found">
            <Helmet
                title='Ошибка 404: Страница не найдена'
                meta={[
                    {"name": "description", "content": "Создание и продвижение сайтов! Современный дизайн! SEO оптимизация для эффективного привлечения клиентов! Техническое обслуживание персональных компьютеров, печатных устройств и т.д.! Команда профессионалов!"}
                ]}
            />
            <section className="not-found__image-container">
                <h3 className="not-found__heading">404</h3>
                <p className="not-found__subheading">Ой... что-то пошло не так</p>
                <p className="not-found__description">
                    К сожалению, страница не найдена, либо уже не 
                    существует. Пожалуйста, перейдите на главную страницу, либо воспользуйтесь меню.
                </p>
                <Link to={'/'}><button className="not-found__button" type="button">На главную страницу</button></Link>
            </section>
        </section>
    )
}

export default NotFound;