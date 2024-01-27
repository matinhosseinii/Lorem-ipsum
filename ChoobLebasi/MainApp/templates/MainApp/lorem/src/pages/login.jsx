import '../components/Login.css'
import firstLogo from '/image/firstLogo.png'
import { useState } from 'react';

export default function login() {
  const firstLogo = '../static/image/firstLogo.png'
  const [user, setUser] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  // const handleSubmit = (e) => {

  //   e.preventDefault();

  //   console.log(`Form submitted, ${user}`);
  //   console.log(`Form submitted, ${phone}`);
  //   console.log(`Form submitted, ${pass}`);
  //   console.log(`Form submitted, ${name}`);

  // }
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="TotalPage">
      <div className="mainLogoInTop">
        <img className='signupLogo' src={firstLogo} />
      </div>
      <div className="LoginPart">
        <div className="registeration">
          <div className="reg">
            <p className="PRg">ثبت نام</p>
          </div>
          <div className="UserInput">
            <input value={user}
              onChange={(e) => setUser(e.target.value)} className='inputSingUP' placeholder="نام کاربری" />
            <input value={phone}
              onChange={(e) => setPhone(e.target.value)} className='inputSingUP' placeholder="تلفن همراه" />
            <input value={pass}
              onChange={(e) => setPass(e.target.value)} className='inputSingUP' placeholder="رمز عبور" />
            <input value={name}
              onChange={(e) => setName(e.target.value)} className='inputSingUP' placeholder="تایید رمز عبور" />
          </div>
          <div>
            <button type="submit"  onClick={() => openInNewTab('./')} className='btn'>ثبت نام</button>
          </div>
          <div className='warrning'>
            <p className='warnningP'>.ثبت نام شما به منزله‌ی پذیرفتن شرایط استفاده از خدمات و حریم خصوصی چوب لباسی می‌باشد</p>
          </div>

        </div>

      </div>

    </div>
  )
}
