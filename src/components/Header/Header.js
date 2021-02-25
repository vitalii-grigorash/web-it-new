import React from 'react'

function Header(props) {

  const { 
    onOpenPopup,
} = props;

  return (

    <div className="header">

      <div className="header__container">

        <a href="https://yandex.ru/maps/2/saint-petersburg/house/prospekt_obukhovskoy_oborony_199/Z0kYcgFhS0IPQFtjfXR3dnVqZA" target="_blank" rel="nofollow noreferrer" className="header__location">
          г. Санкт-Петербург, пр. Обуховской Обороны, д.199
        </a>

        <a href="tel:+79874323036" className="header__phone-number">
          +7-987-432-30-36
        </a>

        <button className="header__button" type="button" onClick={onOpenPopup}>
          <p className="header__button-text">Заказать сайт</p>
        </button>

        <a href="https://www.instagram.com/vimpel_it_web/" target="_blank" rel="nofollow noreferrer" className="header__icon-container header__icon-container_inst"></a>

        <a href="https://vk.com/vimpel_it_web/" target="_blank" rel="nofollow noreferrer" className="header__icon-container header__icon-container_vk"></a>

      </div>

    </div>

  );
}

export default Header;