import React from 'react';
import { useState } from 'react';
import './Modal.css';

const Modal = ({ closeModal }) => {

    const [isModalOpen, setModalOpen] = useState(true);

    // Function to close the modal 
    const handleClose = () => {
        setModalOpen(false);
        closeModal(); 
    };



    return (
        <div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={handleClose}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-btn" onClick={handleClose}>&times;</span>

                        <div className='box'>
                            <div className='threeBox'>
                                <a href='./econemy'>

                                    <p className='boxP'>اشتراک اقتصادی</p>
                                    <p className='boxPrice'>۲٫۰۰۰٫۰۰۰ تومان</p>
                                </a>

                            </div>
                            <div className='threeBox'>
                                <a href='./special'>
                                    <p className='boxP'>اشتراک ویژه</p>
                                    <p className='boxPrice'> ۲٫۹۰۰٫۰۰۰ تومان</p>
                                </a>


                            </div>
                            <div className='threeBox'>
                                <a href='./golden'>

                                    <p className='boxP'>اشتراک طلایی</p>
                                    <p className='boxPrice'> ۳٫۸۰۰٫۰۰۰ تومان</p>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;