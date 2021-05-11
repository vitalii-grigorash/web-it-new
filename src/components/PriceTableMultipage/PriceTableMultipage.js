import React, { useState } from 'react';

function PriceTableMultipage () {

    const [isFirstActive, setFirstActive] = useState(true);
    function handleFirstSectionActive () {
        setFirstActive(true);
        setSecondActive(false);
        setLastActive(false);
    }
    const [isSecondActive, setSecondActive] = useState(false);
    function handleSecondSectionActive () {
        setFirstActive(false);
        setLastActive(false);
        setSecondActive(true);
    }
    const [isLastActive, setLastActive] = useState(false);
    function handleLastSectionActive () {
        setFirstActive(false);
        setSecondActive(false);
        setLastActive(true);
    }
    return (
        <section className="price-table-multipage">
            <div className="price-table-multipage__container price-table-multipage__container_web">
                <div className="price-table-multipage__section">
                    <div className={`price-table-multipage__heading-container-first ${isFirstActive && 'price-table-multipage__heading-container-first_active'}`} onClick={handleFirstSectionActive}>
                        <h5 
                            className={`price-table-multipage__heading ${isFirstActive && 'price-table-multipage__heading_active'}`}
                        >
                            САЙТ ЗА 45 ДНЕЙ
                            <span 
                                className={`price-table-multipage__heading-span ${isFirstActive && 'price-table-multipage__heading-span_active'}`}
                            > 99&nbsp;000&nbsp;руб.*</span>
                        </h5>
                    </div>
                </div>
                <div className="price-table-multipage__section">
                    <div className={`price-table-multipage__heading-container-second ${isSecondActive && 'price-table-multipage__heading-container-second_active'}`} onClick={handleSecondSectionActive}>
                        <h5 
                            className={`price-table-multipage__heading ${isSecondActive && 'price-table-multipage__heading_active'}`}
                        >
                            САЙТ ЗА 60 ДНЕЙ
                            <span 
                                className={`price-table-multipage__heading-span ${isSecondActive && 'price-table-multipage__heading-span_active'}`}
                            > 150&nbsp;000&nbsp;руб.*</span>
                        </h5>
                    </div>
                </div>
                <div className="price-table-multipage__section">
                    <div className={`price-table-multipage__heading-container-last ${isLastActive && 'price-table-multipage__heading-container-last_active'}`} onClick={handleLastSectionActive}>
                        <h5 
                            className={`price-table-multipage__heading ${isLastActive && 'price-table-multipage__heading_active'}`}
                        >
                            САЙТ ЗА 75 ДНЕЙ
                            <span 
                                className={`price-table-multipage__heading-span ${isLastActive && 'price-table-multipage__heading-span_active'}`}
                            > 200&nbsp;000&nbsp;руб.*</span>
                        </h5>
                    </div>
                </div>
            </div>
            <div className="price-web__table-description-container">
                <p className="price-web__table-description">*Оплата осуществляется в 2 этапа (предоплата 50%)</p>
            </div>
        </section>
    );
}

export default PriceTableMultipage;