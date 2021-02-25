import React from 'react'

function DropDownMenu (props) {

    const { 
        isOpen,
    } = props;

    return (

        <div className={`drop-down-menu ${isOpen && 'drop-down-menu_opened'}`}>

            <div className="drop-down-menu__background">

                <div className="drop-down-menu__container">
                    <h3 className="drop-down-menu__heading drop-down-menu__heading_web">WEB Студия</h3>
                    <a href="#" className="drop-down-menu__links drop-down-menu__links_web">Интернет-магазин</a>
                    <a href="#" className="drop-down-menu__links drop-down-menu__links_web">Landing page</a>
                    <a href="#" className="drop-down-menu__links drop-down-menu__links_web">Сайт-визитка</a>
                    <a href="#" className="drop-down-menu__links drop-down-menu__links_web">Корпоративный сайт</a>
                    <a href="#" className="drop-down-menu__links drop-down-menu__links_web">Сайт-каталог</a>
                </div>

                <div className="drop-down-menu__container drop-down-menu__container_it">
                    <h3 className="drop-down-menu__heading drop-down-menu__heading_it">IT Сервис</h3>
                    <a href="#" className="drop-down-menu__links drop-down-menu__links_it">Абонентское обслуживание</a>
                    <a href="#" className="drop-down-menu__links drop-down-menu__links_it">Разовые услуги IT</a>
                </div>

            </div>        

        </div>

    );
}

export default DropDownMenu;