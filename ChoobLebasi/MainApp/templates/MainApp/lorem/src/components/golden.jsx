import React, { useState } from 'react'; 
import Navbar from './Navbar'; 
import Modal from '../components/Modal'; 
import { useNavigate } from 'react-router-dom'; 
import '../components/subpage.css'; 
 
export default function Subscription() { 
    const [isModalOpen, setModalOpen] = useState(false); 
    const navigate = useNavigate(); 
 
    const openModal = () => { 
        setModalOpen(true); 
    }; 
 
    const closeModal = () => { 
        setModalOpen(false); 
    }; 
 
 
 
    return ( 
        <div className='subPage'> 
            <Navbar /> 
 
            <div className='sub'> 
                <div className='idea'> 
                    <p className='ideaP'>طرح‌های اشتراک</p> 
                </div> 
                <div className='paragraphForSub' > 
                    <p className='notifBigParaghraph'>با اشتراک‌های سایت چوب‌لباسی میتوانید به تعداد متناسب با هر اشتراک، لباس‌های مورد پسند خود را به کمدتان ببرید و یا لباس‌های بیشتری آگهی کنید. 
                        اشتراک‌ها جهت رفاه حال کاربران عزیز در سه طرح اقتصادی، ویژه و طلایی 
                        قرار داده شده است تا امکان خرید با هر بودجه و شرایطی مهیا باشد.</p> 
                    <p className='notifSmallParagraph'>تمامی اشتراک‌ها یک‌ماهه می‌باشند</p> 
                </div> 
                <div className='buySub'> 
                    <div className='buysubParagraphPart'> 
                        <p className='active'>! اشتراک شما طلایی است </p> 
                        {/* <a href='!#' className='lonkTOSub'> */} 
 
                        <button className='subBtn1' onClick={openModal}> 
                        ۱۳ روز تا پایان اشتراک 
            </button> 
 
                        {/* </a> */} 
                        <a href='!#' className='lonkTOSub'> 
                            <div className='subBtn'> 
                                <button className='subBtn1'> 
                                    تاریخ اشتراک ها 
 
                                </button> 
 
                            </div> 
                        </a> 
                    </div> 
 
                </div> 
            </div> 
 
            {isModalOpen && <Modal closeModal={closeModal} />} 
 
 
        </div> 
    ) 
}