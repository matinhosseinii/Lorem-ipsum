import '../components/account.css'
import firstLogo from '/image/firstLogo.png'
import { useState } from 'react';
export default function user() {
    const [pass, setpass] = useState('');
    const [phone, setPhone] = useState('');
    const firstLogo = '../static/image/firstLogo.png'

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(`Form submitted, ${user}`);
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
                    <div className="UserInputPartTwo">
                        <input value={pass}
                            onChange={(e) => setpass(e.target.value)} className='inputUser' placeholder="تلفن همراه" />
                        <input value={[phone]}
                            onChange={(e) => setPhone(e.target.value)} className='inputUser' placeholder="رمز عبور" />
                    </div>
                    <div>
                    </div>
                    
                        <a href='./' type="submit" onClick={handleSubmit} className='Secondbtn'>ورود</a>
                 
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
