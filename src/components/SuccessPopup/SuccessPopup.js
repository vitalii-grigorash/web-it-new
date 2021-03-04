import React from 'react'
import closeButton from '../../images/svg/popup-close-button.svg';

function SuccessPopup(props) {

    const {
        isOpen,
        onClose,
    } = props;

    const handleOverlayClose = (evt) => {
        if (evt.target.classList.contains('success-popup_opened')) {
            onClose();
        }
    }

    return (
        <div className={`success-popup ${isOpen && 'success-popup_opened'}`} onMouseDown={handleOverlayClose}>
            <div className="success-popup__background">
                <img src={closeButton} alt="Иконка закрытия" className='success-popup__close-button' onClick={onClose}/>
                <p className="success-popup__title">Заявка успешно отправлена!</p>
                <button
                    type='button'
                    className='success-popup__ok-button'
                    onClick={onClose}
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
}

export default SuccessPopup;