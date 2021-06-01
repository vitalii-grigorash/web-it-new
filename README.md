# SPA Vimpel разработанное на React.js
---
## Описание

Проект создан по макету Figma. На данный момент имеет 21 страницу (включая страницу 404).
Приложение полность оптимизировано под все разрешения экрана, в том числе и под мобильные устройства (оптимизация реализована Медиазапросами).
Сайт разработан для IT компании  ООО "Вымпел", занимающейся проектированием и разработкой сайтов и содержит онформацию об организации, ее услугах, портфолио, ценах, контактах и т.д.
На страницах имеются формы обратной связи, которые валидируются и отправляют информацию на почту компании. 
Для отправки форм разработан Backend на Node.js, Express с использованием технологии Nodemailer.
Настроен Роутинг и Редирект на кастомную страницу 404, при переходе по несуществующей ссылке.
Проект создан с использованием Функциональных компонентов, Хуков, Стейт переменных.

## Стек
### Фронтенд
* JavaScript
* React
* CSS
### Бэкенд
* Node.js
* Express
* Nodemailer
### Что еще использовано в проекте:

* React Helmet Async (указание title, description и canonical url на каждой странице)
* React Snap (при `npm run build` собирает проект в статичные HTML файлы. 
Поисковые роботы Яндекс и Google индексируют эти файлы и получают доступ ко всей информации на каждой странице. 
Приложение становится SEO оптимизировано и отображается в поисковой выдаче)
* React Scroll (для прокрутки страницы до нужного блока при переходе по ссылкам)
* React Slick, Slick Carousel (используется в проекте для карусели портфолио)
* React Yandex Maps (Яндекс карта на странице Контактов)

К приложению подключена Яндекс.Метрика и заданы файлы robots и sitemap

### Ссылка на проект

Проект можно посмотреть по ссылке: [Vimpel](https://178spb.com/)
