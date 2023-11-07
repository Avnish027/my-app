import React from 'react'
import style from './PageFour.module.css'
import Page4One from './Page4One.jpg'
import Page4Two from './Page4Two.jpg'
import Page4Three from './Page4Three.jpg'


function PageFour() {
  return (
    <>
    <div className={style.otrp}>
        <div className={style.otra}>
            <div className={style.otrb}><h1>Unlock New Skills with Our Courses</h1>
            <h3>Learn and Grow at Your Own Pace</h3>
        </div>
        </div>
        <div className={style.otra}><a href="#"><button>Explore More</button></a></div>
    </div>


    <div className={style.bade}>
    <div className={style.bbdf}>
        <div><img className={style.ss}src={Page4One} alt="" /></div>
        <div className={style.aa}>
            <h3>Web Development</h3>
            <h3>Rs.60,000</h3>
            <p>Master the art of web development with <br /> our comprehensive course. Learn coding,<br /> design and development</p>
        </div>
        <div className={style.learn}>
            <p>Learn more</p>
        </div>
    </div>

    <div className={style.bbdf}>
        <div><img className={style.ss}src={Page4Two} alt="" /></div>
        <div className={style.aa}>
            <h3>Digital Marketing</h3>
            <h3>Rs.80,000</h3>
            <p>Navigate the digital landscape<br />Explore the world of digital marketing,<br />Acquire skill in SEO and social media</p>
        </div>
        <div className={style.learn}>
            <p>Learn more</p>
        </div>
    </div>

    <div className={style.bbdf}>
        <div><img className={style.ss}src={Page4Three} alt="" /></div>
        <div className={style.aa}>
            <h3>Graphic Design</h3>
            <h3>Rs.60,000</h3>
            <p>Master the art of graphic design with <br /> our comprehensive course. Learn coding,<br /> design and development</p>
        </div>
        <div className={style.learn}>
            <p>Learn more</p>
        </div>
    </div>


    </div>

    </>
  )
}

export default PageFour