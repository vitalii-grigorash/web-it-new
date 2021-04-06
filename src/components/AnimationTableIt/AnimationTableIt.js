import React, {useState} from 'react';
import desktopImg from '../../images/desktop-it.jpg';
import desktopThreeImg from '../../images/desktop-it-3.jpg';
import desktopTenImg from '../../images/desktop-it-10.jpg';
import desktopSeventeenImg from '../../images/desktop-it-17.jpg';
import desktopTwentyFourImg from '../../images/desktop-it-24.jpg';
import desktopThirtyOneImg from '../../images/desktop-it-31.jpg';
import desktopFortyImg from '../../images/desktop-it-40.jpg';
import defaultServerImg from '../../images/default-server.jpg';
import windowsServerImg from '../../images/windows-server.jpg';
import linuxServerImg from '../../images/linux-server.jpg';
import virtualServerImg from '../../images/virtual-server.jpg';
import defaultAdministrateImg from '../../images/1-c-default.jpg';
import colorAdministrateImg from '../../images/1-c-color.jpg';
import phoneDefaultImg from '../../images/phone-default.jpg';
import phoneColorImg from '../../images/phone-color.jpg';
import userDefaultImg from '../../images/user-default.jpg';
import userWorkPlaceImg from '../../images/user-work-place.jpg';
import userInstallServerImg from '../../images/user-install-server.jpg';
import userCustomServerImg from '../../images/user-custom-server.jpg';
import userCopyImg from '../../images/user-copy.jpg';

function AnimationTableIt () {

    const [isDesktop, setDesktop] = useState(true);
    const [isDesktopThree, setDesktopThree] = useState(false);
    const [isDesktopTen, setDesktopTen] = useState(false);
    const [isDesktopSeventeen, setDesktopSeventeen] = useState(false);
    const [isDesktopTwentyFour, setDesktopTwentyFour] = useState(false);
    const [isDesktopThirtyOne, setDesktopThirtyOne] = useState(false);
    const [isDesktopForty, setDesktopForty] = useState(false);
    const [isDefault, setDefault] = useState(true);
    const [isWindows, setWindows] = useState(false);
    const [isLinux, setLinux] = useState(false);
    const [isVirtual, setVirtual] = useState(false);
    const [isDefaultAdministrate, setDefaultAdministrate] = useState(true);
    const [isColorAdministrate, setColorAdministrate] = useState(false);
    const [isDefaultPhone, setDefaultPhone] = useState(true);
    const [isColorPhone, setColorPhone] = useState(false);
    const [isDefaultUser, setDefaultUser] = useState(true);
    const [isWorkPlaceUser, setWorkPlaceUser] = useState(false);
    const [isInstallServerUser, setInstallServerUser] = useState(false);
    const [isCustomServerUser, setCustomServerUser] = useState(false);
    const [isCopyUser, setCopyUser] = useState(false);

    return (

        <section className="animation-table-it">
            <div className="animation-table-it__main-container">
                <img src={desktopImg} alt="Изображение монитора" className={`animation-table-it__img ${isDesktop && 'animation-table-it__img_desktop'}`}/>
                <img src={desktopThreeImg} alt="Изображение монитора" className={`animation-table-it__img ${isDesktopThree && 'animation-table-it__img_three'}`}/>
                <img src={desktopTenImg} alt="Изображение монитора" className={`animation-table-it__img ${isDesktopTen && 'animation-table-it__img_ten'}`}/>
                <img src={desktopSeventeenImg} alt="Изображение монитора" className={`animation-table-it__img ${isDesktopSeventeen && 'animation-table-it__img_seventeen'}`}/>
                <img src={desktopTwentyFourImg} alt="Изображение монитора" className={`animation-table-it__img ${isDesktopTwentyFour && 'animation-table-it__img_twenty-four'}`}/>
                <img src={desktopThirtyOneImg} alt="Изображение монитора" className={`animation-table-it__img ${isDesktopThirtyOne && 'animation-table-it__img_thirty-one'}`}/>
                <img src={desktopFortyImg} alt="Изображение монитора" className={`animation-table-it__img ${isDesktopForty && 'animation-table-it__img_forty'}`}/>
                <div className="animation-table-it__container">
                    <h3 className="animation-table-it__heading">стоимость абонентского обслуживания</h3>
                    <div className="animation-table">
                        <div className="animation-table__row">
                            <div className="animation-table__column animation-table__column_heading">
                                <p className="animation-table__text animation-table__text_heading">Количество компьютеров (рабочих мест)</p>
                            </div>
                            <div className="animation-table__column animation-table__column_heading">
                                <p className="animation-table__text animation-table__text_heading">Стоимость обслуживания одного компьютера (рабочего места) в месяц, руб.</p>
                            </div>
                        </div>
                        <div className="animation-table__row">
                            <div className="animation-table__column">
                                <p 
                                    className="animation-table__text animation-table__text_links" 
                                    onMouseEnter={() => {setDesktop(false); setDesktopThree(true);}}
                                    onMouseLeave={() => {setDesktop(true); setDesktopThree(false);}}
                                >3-9</p>
                            </div>
                            <div className="animation-table__column">
                                <p className="animation-table__text">1000</p>
                            </div>
                        </div>
                        <div className="animation-table__row">
                            <div className="animation-table__column">
                                <p 
                                    className="animation-table__text animation-table__text_links"
                                    onMouseEnter={() => {setDesktop(false); setDesktopTen(true);}}
                                    onMouseLeave={() => {setDesktop(true); setDesktopTen(false);}}
                                >10-16</p>
                            </div>
                            <div className="animation-table__column">
                                <p className="animation-table__text">950</p>
                            </div>
                        </div>
                        <div className="animation-table__row">
                            <div className="animation-table__column">
                                <p 
                                    className="animation-table__text animation-table__text_links"
                                    onMouseEnter={() => {setDesktop(false); setDesktopSeventeen(true);}}
                                    onMouseLeave={() => {setDesktop(true); setDesktopSeventeen(false);}}
                                >17-23</p>
                            </div>
                            <div className="animation-table__column">
                                <p className="animation-table__text">900</p>
                            </div>
                        </div>
                        <div className="animation-table__row">
                            <div className="animation-table__column">
                                <p 
                                    className="animation-table__text animation-table__text_links"
                                    onMouseEnter={() => {setDesktop(false); setDesktopTwentyFour(true);}}
                                    onMouseLeave={() => {setDesktop(true); setDesktopTwentyFour(false);}}
                                >24-30</p>
                            </div>
                            <div className="animation-table__column">
                                <p className="animation-table__text">850</p>
                            </div>
                        </div>
                        <div className="animation-table__row">
                            <div className="animation-table__column">
                                <p 
                                    className="animation-table__text animation-table__text_links"
                                    onMouseEnter={() => {setDesktop(false); setDesktopThirtyOne(true);}}
                                    onMouseLeave={() => {setDesktop(true); setDesktopThirtyOne(false);}}
                                >31-39</p>
                            </div>
                            <div className="animation-table__column">
                                <p className="animation-table__text">800</p>
                            </div>
                        </div>
                        <div className="animation-table__row">
                            <div className="animation-table__column">
                                <p 
                                    className="animation-table__text animation-table__text_links"
                                    onMouseEnter={() => {setDesktop(false); setDesktopForty(true);}}
                                    onMouseLeave={() => {setDesktop(true); setDesktopForty(false);}}
                                >от 40</p>
                            </div>
                            <div className="animation-table__column">
                                <p className="animation-table__text">уточняйте</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animation-table-it__main-container">
                <img src={defaultServerImg} alt="Изображение сервера" className={`animation-table-it__img-left-direction ${isDefault && 'animation-table-it__img-left-direction_default-server'}`}/>
                <img src={windowsServerImg} alt="Изображение windows сервера" className={`animation-table-it__img-left-direction ${isWindows && 'animation-table-it__img-left-direction_windows'}`}/>
                <img src={linuxServerImg} alt="Изображение linux сервера" className={`animation-table-it__img-left-direction ${isLinux && 'animation-table-it__img-left-direction_linux'}`}/>
                <img src={virtualServerImg} alt="Изображение виртуального сервера" className={`animation-table-it__img-left-direction ${isVirtual && 'animation-table-it__img-left-direction_virtual'}`}/>
                <div className="animation-table-it__container animation-table-it__container_left-direction">
                    <h3 className="animation-table-it__heading">стоимость абонентского обслуживания серверов</h3>
                    <div className="animation-table">
                        <div className="animation-table__row">
                            <div className="animation-table__column animation-table__column_heading">
                                <p className="animation-table__text animation-table__text_heading">Вид сервера</p>
                            </div>
                            <div className="animation-table__column animation-table__column_heading">
                                <p className="animation-table__text animation-table__text_heading">Стоимость обслуживания одного сервера в месяц, руб.</p>
                            </div>
                        </div>
                        <div className="animation-table__row">
                            <div className="animation-table__column">
                                <p 
                                    className="animation-table__text animation-table__text_links" 
                                    onMouseEnter={() => {setDefault(false); setWindows(true);}}
                                    onMouseLeave={() => {setDefault(true); setWindows(false);}}
                                >Windows</p>
                            </div>
                            <div className="animation-table__column">
                                <p className="animation-table__text">2000</p>
                            </div>
                        </div>
                        <div className="animation-table__row">
                            <div className="animation-table__column">
                                <p 
                                    className="animation-table__text animation-table__text_links"
                                    onMouseEnter={() => {setDefault(false); setLinux(true);}}
                                    onMouseLeave={() => {setDefault(true); setLinux(false);}}
                                >Linux</p>
                            </div>
                            <div className="animation-table__column">
                                <p className="animation-table__text">3250</p>
                            </div>
                        </div>
                        <div className="animation-table__row">
                            <div className="animation-table__column">
                                <p 
                                    className="animation-table__text animation-table__text_links"
                                    onMouseEnter={() => {setDefault(false); setVirtual(true);}}
                                    onMouseLeave={() => {setDefault(true); setVirtual(false);}}
                                >Виртуальный сервер</p>
                            </div>
                            <div className="animation-table__column">
                                <p className="animation-table__text">2000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animation-table-it__main-container">
                <img src={defaultAdministrateImg} alt="Изображение монитора" className={`animation-table-it__img ${isDefaultAdministrate && 'animation-table-it__img_default-administrate'}`}/>
                <img src={colorAdministrateImg} alt="Изображение монитора" className={`animation-table-it__img ${isColorAdministrate && 'animation-table-it__img_color-administrate'}`}/>
                <div className="animation-table-it__container">
                    <h3 className="animation-table-it__heading">стоимость абонентского администрирования 1с</h3>
                    <div className="animation-table">
                        <div className="animation-table__row">
                            <div className="animation-table__column animation-table__column_heading">
                                <p className="animation-table__text animation-table__text_heading">Вид услуги</p>
                            </div>
                            <div className="animation-table__column animation-table__column_heading">
                                <p className="animation-table__text animation-table__text_heading">Стоимость обслуживания одного компьютера (рабочего места) в месяц, руб.</p>
                            </div>
                        </div>
                        <div className="animation-table__row">
                            <div className="animation-table__column">
                                <p 
                                    className="animation-table__text animation-table__text_links" 
                                    onMouseEnter={() => {setDefaultAdministrate(false); setColorAdministrate(true);}}
                                    onMouseLeave={() => {setDefaultAdministrate(true); setColorAdministrate(false);}}
                                >Абонентское администрирование программ 1С</p>
                            </div>
                            <div className="animation-table__column">
                                <p className="animation-table__text">4780</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animation-table-it__main-container">
                <img src={phoneDefaultImg} alt="Изображение телефона" className={`animation-table-it__img-left-direction ${isDefaultPhone && 'animation-table-it__img-left-direction_phone-default'}`}/>
                <img src={phoneColorImg} alt="Изображение цветного телефона" className={`animation-table-it__img-left-direction ${isColorPhone && 'animation-table-it__img-left-direction_phone-color'}`}/>
                <div className="animation-table-it__container animation-table-it__container_left-direction">
                    <h3 className="animation-table-it__heading">стоимость абонентского обслуживания офисных атс и ip телефонии</h3>
                    <div className="animation-table">
                        <div className="animation-table__row">
                            <div className="animation-table__column animation-table__column_heading">
                                <p className="animation-table__text animation-table__text_heading">Вид услуги</p>
                            </div>
                            <div className="animation-table__column animation-table__column_heading">
                                <p className="animation-table__text animation-table__text_heading">Стоимость обслуживания одного компьютера (рабочего места) в месяц, руб.</p>
                            </div>
                        </div>
                        <div className="animation-table__row">
                            <div className="animation-table__column">
                                <p 
                                    className="animation-table__text animation-table__text_links" 
                                    onMouseEnter={() => {setDefaultPhone(false); setColorPhone(true);}}
                                    onMouseLeave={() => {setDefaultPhone(true); setColorPhone(false);}}
                                >Обслуживание офисной телефонии</p>
                            </div>
                            <div className="animation-table__column">
                                <p className="animation-table__text">от 2400</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animation-table-it__main-container">
                <img src={userDefaultImg} alt="Изображение монитора" className={`animation-table-it__img ${isDefaultUser && 'animation-table-it__img_default-user'}`}/>
                <img src={userWorkPlaceImg} alt="Изображение монитора" className={`animation-table-it__img ${isWorkPlaceUser && 'animation-table-it__img_work-place'}`}/>
                <img src={userInstallServerImg} alt="Изображение монитора" className={`animation-table-it__img ${isInstallServerUser && 'animation-table-it__img_install-server'}`}/>
                <img src={userCustomServerImg} alt="Изображение монитора" className={`animation-table-it__img ${isCustomServerUser && 'animation-table-it__img_custom-server'}`}/>
                <img src={userCopyImg} alt="Изображение монитора" className={`animation-table-it__img ${isCopyUser && 'animation-table-it__img_copy'}`}/>
                <div className="animation-table-it__container">
                    <h3 className="animation-table-it__heading">стоимость дополнительных услуг</h3>
                    <div className="animation-table">
                        <div className="animation-table__row">
                            <div className="animation-table__column animation-table__column_heading">
                                <p className="animation-table__text animation-table__text_heading">Наименование услуги</p>
                            </div>
                            <div className="animation-table__column animation-table__column_heading">
                                <p className="animation-table__text animation-table__text_heading">Стоимость, руб.</p>
                            </div>
                        </div>
                        <div className="animation-table__row">
                            <div className="animation-table__column">
                                <p 
                                    className="animation-table__text animation-table__text_links" 
                                    onMouseEnter={() => {setDefaultUser(false); setWorkPlaceUser(true);}}
                                    onMouseLeave={() => {setDefaultUser(true); setWorkPlaceUser(false);}}
                                >Организация нового рабочего места</p>
                            </div>
                            <div className="animation-table__column">
                                <p className="animation-table__text">750</p>
                            </div>
                        </div>
                        <div className="animation-table__row">
                            <div className="animation-table__column">
                                <p 
                                    className="animation-table__text animation-table__text_links" 
                                    onMouseEnter={() => {setDefaultUser(false); setInstallServerUser(true);}}
                                    onMouseLeave={() => {setDefaultUser(true); setInstallServerUser(false);}}
                                >Заказ сервера, установка серверной ОС</p>
                            </div>
                            <div className="animation-table__column">
                                <p className="animation-table__text">1500</p>
                            </div>
                        </div>
                        <div className="animation-table__row">
                            <div className="animation-table__column">
                                <p 
                                    className="animation-table__text animation-table__text_links" 
                                    onMouseEnter={() => {setDefaultUser(false); setCustomServerUser(true);}}
                                    onMouseLeave={() => {setDefaultUser(true); setCustomServerUser(false);}}
                                >Настройка сервера</p>
                            </div>
                            <div className="animation-table__column">
                                <p className="animation-table__text">уточняйте</p>
                            </div>
                        </div>
                        <div className="animation-table__row">
                            <div className="animation-table__column">
                                <p 
                                    className="animation-table__text animation-table__text_links" 
                                    onMouseEnter={() => {setDefaultUser(false); setCopyUser(true);}}
                                    onMouseLeave={() => {setDefaultUser(true); setCopyUser(false);}}
                                >Настройка резервного копирования данных</p>
                            </div>
                            <div className="animation-table__column">
                                <p className="animation-table__text">уточняйте</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default AnimationTableIt;