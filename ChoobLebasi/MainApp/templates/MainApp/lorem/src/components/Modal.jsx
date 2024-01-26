import { useState } from 'react';
import './Modal.css';

const Modal = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };
  

    return (
        <div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-btn" onClick={closeModal}>&times;</span>

                        <div className='box'>
                            <div className='threeBox'>

                                <p className='boxP'>اشتراک اقتصادی</p>
                                <p className='boxPrice'>۲٫۰۰۰٫۰۰۰ تومان</p>

                            </div>
                            <div>
                                <p className='boxP'>اشتراک اقتصادی</p>
                                <p className='boxPrice'>۲٫۰۰۰٫۰۰۰ تومان</p>


                            </div>
                            <div>
                                <p className='boxP'>اشتراک اقتصادی</p>
                                <p className='boxPrice'>۲٫۰۰۰٫۰۰۰ تومان</p>


                            </div>

                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
