import illustor from './illustration.png'
import './Pic.css'

export default function Pic() {
    return (
        <div className='SecondPartWithMainPic'>
            <img src={illustor} alt='illustor' className='picture' />
            <p className='text'> وقتشه <br/>
                کمدتو <br/>
                بزرگتر <br/>
                :) کنی</p>
        </div>
    )
}
