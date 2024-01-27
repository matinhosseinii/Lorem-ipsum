import './Products.css'
import cicle from '/image/Ellipse.png'
import right from '/image/right.png'
import left from '/image/left.png'
import MallFirst from '/image/Foroshgah1.png'
import MallSecond from '/image/Foroshgah2.png'
import MallThird from '/image/Foroshgah3.png'
import MallForth from '/image/Foroshgah4.png'



const Cloths = [

    {
        "row": 1,
        "id": 1,
        "nameOfpRODUCT": "کاپشن",
        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/1.jpg",
        "loc": "./static/image/location icon.png"

    },
    {
        "row": 1,
        "nameOfpRODUCT": "کاپشن",

        "id": 2,
        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/2.jpg",
        "loc": "./static/image/location icon.png"



    },
    {
        "row": 1,
        "nameOfpRODUCT": "کاپشن",

        "id": 3,

        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/3.jpg",
        "loc": "./static/image/location icon.png"



    },
    {
        "row": 4,
        "nameOfpRODUCT": "کاپشن",

        "id": 4,

        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/4.jpg",
        "loc": "./static/image/location icon.png"



    },
    {
        "row": 5,
        "nameOfpRODUCT": " کاپشن",

        "id": 5,

        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "رایگان",
        "image": "./static/image/5.jpg",
        "loc": "./static/image/location icon.png"


    },
    {
        "row": 6,
        "nameOfpRODUCT": "کاپشن",

        "id": 6,

        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/11.jpg",
        "loc": "./static/image/location icon.png"



    },
    {
        "row": 7,
        "nameOfpRODUCT": "کاپشن",

        "id": 7,

        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/7.jpg",
        "loc": "./static/image/location icon.png"



    },
    {
        "row": 8,
        "nameOfpRODUCT": "کاپشن",
        "id": 8,

        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "یک صلوات",
        "image": "./static/image/8.jpg",
        "loc": "./static/image/location icon.png"



    },
    {
        "row": 9,
        "nameOfpRODUCT": "کاپشن",

        "id": 9,

        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/9.jpg",
        "loc": "./static/image/location icon.png"



    },
    {
        "row": 10,
        "nameOfpRODUCT": "کاپشن",

        "id": 10,

        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/14.jpg",
        "loc": "./static/image/location icon.png"



    },
    {
        "row": 11,
        "nameOfpRODUCT": "کاپشن",

        "id": 11,

        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/13.jpg",
        "loc": "./static/image/location icon.png"



    },
    {
        "row": 12,
        "nameOfpRODUCT": "کاپشن",

        "id": 12,
        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/12.jpg",
        "loc": "./static/image/location icon.png"


    },
    {
        "row": 1,
        "id": 1,
        "nameOfpRODUCT": "کاپشن",
        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/1.jpg",
        "loc": "./static/image/location icon.png"

    },
    {
        "row": 1,
        "nameOfpRODUCT": "کاپشن",

        "id": 2,
        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/2.jpg",
        "loc": "./static/image/location icon.png"



    },
    {
        "row": 1,
        "nameOfpRODUCT": "کاپشن",

        "id": 3,

        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/3.jpg",
        "loc": "./static/image/location icon.png"



    },
    {
        "row": 4,
        "nameOfpRODUCT": "کاپشن",

        "id": 4,

        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/4.jpg",
        "loc": "./static/image/location icon.png"



    },
    {
        "row": 5,
        "nameOfpRODUCT": "کاپشن",

        "id": 5,

        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/5.jpg",
        "loc": "./static/image/location icon.png"


    },
    {
        "row": 6,
        "nameOfpRODUCT": "کاپشن",

        "id": 6,

        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/11.jpg",
        "loc": "./static/image/location icon.png"



    },
    {
        "row": 7,
        "nameOfpRODUCT": "کاپشن",

        "id": 7,

        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/7.jpg",
        "loc": "./static/image/location icon.png"



    },
    {
        "row": 8,
        "nameOfpRODUCT": "کاپشن",

        "id": 8,

        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/8.jpg",
        "loc": "./static/image/location icon.png"



    },
    {
        "row": 9,
        "nameOfpRODUCT": "کاپشن",

        "id": 9,

        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "سمنان",
        "price": "1.200.000 تومان",
        "image": "./static/image/9.jpg",
        "loc": "./static/image/location icon.png"



    },
    {
        "row": 10,
        "nameOfpRODUCT": "کاپشن",

        "id": 10,

        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/14.jpg",
        "loc": "./static/image/location icon.png"



    },
    {
        "row": 11,
        "nameOfpRODUCT": "کاپشن",

        "id": 11,

        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/13.jpg",
        "loc": "./static/image/location icon.png"



    },
    {
        "row": 12,
        "nameOfpRODUCT": "کاپشن",

        "id": 12,
        "name": "لویی ویتون",
        "size": "مدیوم",
        "color": "بنفش",
        "material": "نخ",
        "daysForRent": "یک ماهه",
        "days": "دو روز پیش",
        "location": "اصفهان",
        "price": "1.200.000 تومان",
        "image": "./static/image/12.jpg",
        "loc": "./static/image/location icon.png"


    }


]

export default function Products() {
    const cicle = 'static/image/Ellipse.png'
    const right = 'static/image/right.png'
    const left = 'static/image/left.png'
    const MallFirst = 'static/image/Foroshgah1.png'
    const MallSecond = 'static/image/Foroshgah2.png'
    const MallThird = 'static/image/Foroshgah3.png'
    const MallForth = 'static/image/Foroshgah4.png'
    return (
        <>
            <p className='title'>جدید ترین ها</p>

            <div className='rowOfProduct'>

                {Cloths.map((cloth) => (

                    <div key={cloth.id} className='listOfProductInBox'>
                        <div className='description'>
                            <div className='attributes'>
                                <h2 className='nameOfpRODUCT'>{cloth.nameOfpRODUCT}</h2>
                                <h4 className='attribute'>{cloth.name}.</h4>
                                <h4 className='attribute'>{cloth.size}.</h4>
                                <h4 className='attribute'>{cloth.color}.</h4>
                                <h4 className='attribute'>{cloth.material}.</h4>
                                <div className='TimeAndPrice'>
                                    <h4 className='attribute'>:{cloth.daysForRent}.</h4>
                                    <h2 className='price'>{cloth.price}</h2>
                                </div>
                                <div className='DaysAndLoc'>
                                    <h4 className='attribute'>{cloth.days}.</h4>
                                    <div className='location'>
                                        <h6>{cloth.location}</h6>
                                        <img src={cloth.loc} />
                                    </div>
                                </div>

                            </div>
                            <div className='img'>
                                <img src={cloth.image} className='clothImage' />
                            </div>
                        </div>

                    </div>

                ))}


            </div>
            <div className='pages'>
                <div className='circles'>
                    <div className='page'>

                        <a href='!#'><img src={left} /></a>

                    </div>
                    <div className='page'>
                        <p className='Bignumber'>43</p>

                        <a href='!#'><img src={cicle} /></a>

                    </div>
                    <div className='page'>
                        <p className='dote'>...</p>

                        <a href='!#'><img src={cicle} /></a>

                    </div>
                    <div className='page'>
                        <p className='number'>8</p>
                        <a href='!#'><img src={cicle} /></a>
                    </div>
                    <div className='page' >
                        <p className='number'>7</p>

                        <a href='!#'><img src={cicle} /></a>

                    </div>
                    <div className='page'>
                        <p className='number'>6</p>

                        <a href='!#'><img src={cicle} /></a>

                    </div>
                    <div className='page'>
                        <p className='number'>5</p>

                        <a href='!#'><img src={cicle} /></a>

                    </div>
                    <div className='page'>
                        <p className='number'>4</p>

                        <a href='!#'><img src={cicle} /></a>

                    </div>
                    <div className='page'>
                        <p className='number'>3</p>

                        <a href='!#'><img src={cicle} /></a>

                    </div>
                    <div className='page'>
                        <p className='number'>2</p>

                        <a href='!#'><img src={cicle} /></a>

                    </div>
                    <div className='page'>
                        <p className='number'>1</p>

                        <a href='!#'><img src={cicle} /></a>

                    </div>
                    <div className='page'>


                        <a href='!#'><img src={right} /></a>

                    </div>


                </div>
            </div>
            <div className='NamesMalls'>
                <p className='montakhab'>فروشگاه‌های منتخب</p>
                <div className='Malss'>
                    <div className='Mall'>
                        <img src={MallFirst} />
                        <p className='selasPlace'>فروشگاه ورناس</p>
                        <p className='city'>کرج</p>
                    </div>
                    <div className='Mall'>
                        <img src={MallSecond} />
                        <p className='selasPlace'>فروشگاه دیان</p>
                        <p className='city'>مشهد</p>

                    </div>
                    <div className='Mall'>
                        <img src={MallThird} />
                        <p className='selasPlace'>فروشگاه برک</p>
                        <p className='city'>تهران</p>

                    </div>
                    <div className='Mall'>
                        <img src={MallForth} />
                        <p className='selasPlace'>فروشگاه دارمیس</p>
                        <p className='city'>شیراز</p>

                    </div>



                </div>

            </div>
        </>

    )
}
