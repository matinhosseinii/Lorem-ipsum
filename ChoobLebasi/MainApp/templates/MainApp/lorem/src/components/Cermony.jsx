import './Cermony.css'
import doostane from '/image/party.png'
import khanevade from '/image/family.png'
import mazhabi from '/image/mosque.png'
import tavalod from '/image/birth.png'
import mosaferat from '/image/travel.png'
import khaksepari from '/image/grave.png'
import aroosi from '/image/heart.png'
import varzeshi from '/image/kit.png'


export default function Cermony() {
    const doostane = 'static/image/party.png'
    const khanevade = 'static/image/family.png'
    const mazhabi = 'static/image/mosque.png'
    const tavalod = 'static/image/birth.png'
    const mosaferat = 'static/image/travel.png'
    const khaksepari = 'static/image/grave.png'
    const aroosi = 'static/image/heart.png'
    const varzeshi = 'static/image/kit.png'
    return (
        <div className='ThirdPart'>
            <div className='choosingText'>
                <p className='entekhbText'>انتخاب بر اساس مناسبت</p>
            </div>
            <div className='ThreeOption'>
                <div className='cermony'>
                    <img src={khanevade} alt='doostane' />

                    <p className='options'>مهمانی خانوادگی</p>

                </div>
                <div className='cermony'>
                    <img src={doostane} />

                    <p className='options'>دورهمی دوستانه</p>

                </div>
                <div className='cermony'>
                    <img src={mazhabi} />

                    <p className='options'>مراسمات مذهبی</p>

                </div>



            </div>
            <div className='FiveOPtion'>
                <div className='cermony'>
                    <img src={tavalod} />

                    <p className='options'>تولد</p>

                </div>
                <div className='cermony'>
                    <img src={mosaferat} />

                    <p className='options'>مسافرت</p>

                </div>
                <div className='cermony'>
                    <img src={khaksepari} />

                    <p className='options'>خاکسپاری</p>

                </div>
                <div className='cermony'>
                    <img src={aroosi} />

                    <p className='options'>عروسی</p>

                </div>
                <div className='cermony'>
                    <img src={varzeshi} />

                    <p className='options'>ورزشی</p>

                </div>


            </div>

        </div>
    )
}
