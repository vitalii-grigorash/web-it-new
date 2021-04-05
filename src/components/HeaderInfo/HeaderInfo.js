import React from 'react';
import { useLocation } from 'react-router-dom';

function HeaderInfo (props) {

    const {
        onOpenPopup,
    } = props;

    const { pathname } = useLocation();
    const header = `${
        pathname === '/' || 
        pathname === '/stroj-snab' ||
        pathname === '/voleks' ||
        pathname === '/yur-konsul' ||
        pathname === '/telecom-service' ||
        pathname === '/ar-bellos' ||
        pathname === '/la-mia-borsa' ||
        pathname === '/ost-med-consult' ? `header-info header-info_background` : `header-info`
    }`;

    return (
        <div className={header}>
            <nav className="header-info__container">
                <a href="https://yandex.ru/maps/2/saint-petersburg/house/prospekt_obukhovskoy_oborony_199/Z0kYcgFhS0IPQFtjfXR3dnVqZA" target="_blank" rel="nofollow noreferrer" className="header-info__location">
                    г. Санкт-Петербург, пр. Обуховской Обороны, д.199
                </a>
                <a href="tel:+79874323036" className="header-info__phone-number">
                    +7-987-432-30-36
                </a>
                <button className="header-info__button" type="button" onClick={onOpenPopup}>
                    Получить консультацию
                </button>
                <a href="https://www.instagram.com/vimpel_it_web/" target="_blank" rel="nofollow noreferrer" className="header-info__icon-container header-info__icon-container_inst"></a>
                <a href="https://vk.com/vimpel_it_web/" target="_blank" rel="nofollow noreferrer" className="header-info__icon-container header-info__icon-container_vk"></a>
            </nav>
        </div>
    );
}

export default HeaderInfo;