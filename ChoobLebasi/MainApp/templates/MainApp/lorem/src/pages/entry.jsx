import firstLogo from '/image/firstLogo.png'
import { useState } from 'react';
import '../components/entry.css'
export default function entry() {
    const [pass, setpass] = useState('');


    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(`Form submitted, ${phone}`);


    }
    return (
        <div className='TotalSecondPage'>

            <div className="mainLogoInTop">
                <img className='signupLogo' src={firstLogo} />
            </div>
            <div className="userPart">
                <div className="registeration">
                    <div className="reg">
                        <p className="PRg">ورود به حساب کاربری</p>
                    </div>
                    <div className="UserInputPartThree">
                        <input value={pass}
                            onChange={(e) => setpass(e.target.value)} className='inputUser' placeholder="تلفن همراه" />
                        <div className='codes'>
                            <input className='CodeNumber' type='number' />
                            <input className='CodeNumber' type='number' />
                            <input className='CodeNumber' type='number'/>
                            <input className='CodeNumber' type='number'/>
                            <input className='CodeNumber' type='number'/>
                            <input className='CodeNumber' type='number' />
                        </div>
                    </div>
                    <div>
                    </div>

                    <button href='./' type="submit" onClick={handleSubmit} className='Secondbtn'>ورود</button>

                    <div className='passPart'>
                        <p className='passWarnning'>استفاده از رمز عبور یک‌بارمصرف</p>
                        <div className='GettingPass'>
                            <p className='question'>حساب کاربری ندارید؟</p>
                            <a href='./login' className='link'>ثبت نام</a>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}
