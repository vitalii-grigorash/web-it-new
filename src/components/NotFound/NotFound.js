import React from 'react';
import { Link } from 'react-router-dom';

function NotFound () {

    return (
        <section className="not-found">
            <section className="not-found__image-container">
                <h1 className="not-found__heading">404</h1>
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