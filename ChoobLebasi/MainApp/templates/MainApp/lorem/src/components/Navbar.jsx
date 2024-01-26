/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import profile from '/image/AVATAR.png'
import notification from '/image/NOTIFICATION.png'
import cart from '/image/CART.png'
import serach from '/image/search icon.png'
import logo from '/image/logo.png'
import './Navbar.css'

export default function Navbar() {
    const [inputValue, setInputValue] = useState('');
    const profile = 'static/image/AVATAR.png'
    

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
        <div className='nav'>
            <div className='mainNavbar'>
                <div className='profile'>
                    <a href="!#" target="_blank">
                        <img src={profile} alt='profile' className='profilePic' />

                    </a>
                    <a href="!#" target="_blank">
                        <img src={notification} alt='profile' className='notification' />
                    </a>

                    <a href="!#" target="_blank">
                        <img src={cart} alt='profile' className='cart' />
                    </a>


                </div>
                <div className='seraching'>
                        <img src={serach} alt='serachIcon' className='serachIcon' />
                        <input
                            type="text"
                            id="myInput"
                            value={inputValue}
                            onChange={handleInputChange}
                            className='serachinput'
                        />

                </div>
                <div className='mainLogo'>
                    <img src={logo} alt='logo' />
                  
                </div>

            </div>
            <div className='secondNav'>
               <ul className='mainList'>
                <li className='list'>
                    <a href='!#' className='ListItem' target='_self'>دسته بندی</a>
                </li>
                <li className='list'>
                    <a href='!#' className='ListItem' target='_self'>مناسبت ها</a>
                </li>
                <li className='list'>
                    <a href='!#' className='ListItem' target='_self'>فروشگاه</a>
                </li>
                <li className='list'>
                    <a href='./subscribe' className='ListItem' target='_self'>طرح های اشتراک</a>
                </li>
                <li className='list'>
                    <a href='!#' className='ListItem' target='_self'>پرسش های متداول</a>
                </li>
                <li className='list'>
                    <a href='!#' className='ListItem' target='_self'>درباره ما</a>
                </li>

               </ul>

            </div>

        </div>
    )
}
