import React, { Component } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import stroiSnabIcon from '../../images/svg/stroi-snab-icon.svg';
import voleksIcon from '../../images/svg/voleks-icon.svg';
import arbellosIcon from '../../images/svg/arbellos-icon.svg';
import urKonsulIcon from '../../images/svg/ur-consul-icon.svg';
import ostMebConsaltIcon from '../../images/svg/ost-med-consalt-icon.svg';
import telecomServiceIcon from '../../images/svg/telecom-service-icon.svg';
import laMiaBorsaIcon from '../../images/svg/la-mia-borsa-icon.svg';
import prevArrow from '../../images/svg/prev-arrow.svg';
import nextArrow from '../../images/svg/next-arrow.svg'

export default class PortfolioSlider extends Component {

    render() {

        function SamplePrevArrow (props) {
            const { className, style, onClick } = props;
            return (
                <img 
                    className={className}
                    onClick={onClick}
                    style={{ ...style, 
                        position: 'absolute',
                        width: 20, 
                        height: 44,
                        top: 170,
                        left: -76,
                    }}
                    src={prevArrow} 
                    alt="Стрелочка"
                />
            );
        }

        function SampleNextArrow (props) {
            const { className, style, onClick } = props;
            return (
                <img 
                    className={className}
                    onClick={onClick}
                    style={{ ...style, 
                        position: 'absolute',
                        width: 20, 
                        height: 44,
                        top: 170,
                        right: -76
                    }}
                    src={nextArrow} 
                    alt="Стрелочка"
                />
            );
        }

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            swipe: false,
            responsive: [
                {
                    breakpoint: 1760,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1380,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 1,
                        swipe: true,
                        className: "center",
                        centerMode: true,
                        centerPadding: "90px",
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        swipe: true,
                        className: "center",
                        centerMode: true,
                        centerPadding: "90px",
                    }
                },
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        swipe: true,
                        className: "center",
                        centerMode: true,
                        centerPadding: "120px",
                    }
                },
                {
                    breakpoint: 510,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        swipe: true,
                        className: "center",
                        centerMode: true,
                        centerPadding: "100px",
                    }
                },
                {
                    breakpoint: 470,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        swipe: true,
                        className: "center",
                        centerMode: true,
                        centerPadding: "85px",
                    }
                },
                {
                    breakpoint: 440,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        swipe: true,
                        className: "center",
                        centerMode: true,
                        centerPadding: "65px",
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        swipe: true,
                        className: "center",
                        centerMode: true,
                        centerPadding: "50px",
                    }
                },
                {
                    breakpoint: 370,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        swipe: true,
                        className: "center",
                        centerMode: true,
                        centerPadding: "35px",
                    }
                },
                {
                    breakpoint: 340,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        swipe: true,
                        className: "center",
                        centerMode: true,
                        centerPadding: "30px",
                    }
                },
                {
                    breakpoint: 330,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        swipe: true,
                        className: "center",
                        centerMode: true,
                        centerPadding: "25px",
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        swipe: true,
                        className: "center",
                        centerMode: true,
                        centerPadding: "20px",
                    }
                },
                {
                    breakpoint: 310,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        swipe: true,
                        className: "center",
                        centerMode: true,
                        centerPadding: "15px",
                    }
                },
            ]
        };

        return (
            <section className="portfolio-slider">
                <div className="portfolio-slider__container">
                    <h3 className="portfolio-slider__heading">НАШИ ПОСЛЕДНИЕ РАБОТЫ</h3>
                    <Slider {...settings}>
                        <Link to={'/stroj-snab'} className="carousel__container carousel__container_stroj-snab">
                            <div className="carousel-overlay">
                                <img src={stroiSnabIcon} alt="Иконка Строй Снаб" className="carousel-overlay__icon carousel-overlay__icon_stroi-snab" />
                                <h3 className="carousel-overlay__heading">СтройСнаб</h3>
                                <p className="carousel-overlay__subheading">Компания осуществляет строительные работы</p>
                            </div>
                        </Link>
                        <Link to={'/voleks'} className="carousel__container carousel__container_voleks">
                            <div className="carousel-overlay">
                                <img src={voleksIcon} alt="Иконка Волекс" className="carousel-overlay__icon carousel-overlay__icon_voleks" />
                                <h3 className="carousel-overlay__heading">Волекс</h3>
                                <p className="carousel-overlay__subheading">Продажа промышленного инструмента абразивных материалов</p>
                            </div>
                        </Link>
                        <Link to={'/ar-bellos'} className="carousel__container carousel__container_ar-bellos">
                            <div className="carousel-overlay">
                                <img src={arbellosIcon} alt="Иконка Арбеллос" className="carousel-overlay__icon carousel-overlay__icon_arbellos" />
                                <h3 className="carousel-overlay__heading">ARbellos</h3>
                                <p className="carousel-overlay__subheading">Инсталяция светопрозрачных решений</p>
                            </div>
                        </Link>
                        <Link to={'/yur-konsul'} className="carousel__container carousel__container_yur-konsul">
                            <div className="carousel-overlay">
                                <img src={urKonsulIcon} alt="Иконка Юр Консул" className="carousel-overlay__icon carousel-overlay__icon_ur-konsul" />
                                <h3 className="carousel-overlay__heading">ЮрКонсул</h3>
                                <p className="carousel-overlay__subheading">Реализация деятельности ТСН(Ж), ЖСК и УК по управлению недвижимым имуществом</p>
                            </div>
                        </Link>
                        <Link to={'/ost-med-consult'} className="carousel__container carousel__container_ost-med-consult">
                            <div className="carousel-overlay">
                                <img src={ostMebConsaltIcon} alt="Иконка Ост Мед Консалт" className="carousel-overlay__icon carousel-overlay__icon_ost-meb-consalt" />
                                <h3 className="carousel-overlay__heading">Остмедконсалт</h3>
                                <p className="carousel-overlay__subheading">Многопрофильная клиника: эстетическая медецины и пластическая хирургия</p>
                            </div>
                        </Link>
                        <Link to={'/telecom-service'} className="carousel__container carousel__container_telecom-service">
                            <div className="carousel-overlay">
                                <img src={telecomServiceIcon} alt="Иконка Телеком Сервис" className="carousel-overlay__icon carousel-overlay__icon_telecom-service" />
                                <h3 className="carousel-overlay__heading">ТелекомСервис</h3>
                                <p className="carousel-overlay__subheading">Телекоммуникации, благоустройство и асфалтировании</p>
                            </div>
                        </Link>
                        <Link to={'/la-mia-borsa'} className="carousel__container carousel__container_la-mia-borsa">
                            <div className="carousel-overlay">
                                <img src={laMiaBorsaIcon} alt="Иконка Ля Миа Борса" className="carousel-overlay__icon carousel-overlay__icon_la-mia-borsa" />
                                <h3 className="carousel-overlay__heading">La mia Borsa</h3>
                                <p className="carousel-overlay__subheading">Итальянские сумки в <nobr>Санкт-Петербурге</nobr></p>
                            </div>
                        </Link>
                    </Slider>
                </div>
            </section>
        );
    }
}