import React from 'react'
import stylesss from './PageSix.module.css'
import PageSiximg from './Page6img.jpg'
import PageSixOne from './Page6One.jpg'
import PageSixTwo from './Page6Two.jpg'
import PageSixThree from './Page6Three.jpg'



function PageSix() {
  return (
    <>
        <div className={stylesss.outeraa}>
        <div className={stylesss.iy}><img src={PageSiximg} alt="" /></div>
        <div className={stylesss.partwo}>
                <div>
                    <div className={stylesss.zy}><h1>Get in Touch</h1></div>
                </div>
                <div className={stylesss.wrappera}>
                        <div className={stylesss.input_data}>
                        <input type="text" name="name" placeholder='Name'/>
                        <label htmlFor="#">Name</label>

                        </div>

                </div>



                <div className={stylesss.wrappera}>
                        <div className={stylesss.input_data}>
                        <input type="text" name="name" placeholder='E-Mail'/>
                        <label htmlFor="#">Name</label>

                        </div>

                </div>


                <div className={stylesss.wrappera}>
                        <div className={stylesss.input_data}>
                        <input type="text" name="name" placeholder='Phone Number'/>
                        <label htmlFor="#">Name</label>

                        </div>

                </div>


                <div className={stylesss.wrappera}>
                        <div className={stylesss.input_data}>
                        <input type="text" name="name" placeholder='Message'/>
                        <label htmlFor="#">Name</label>

                        </div>

                </div>
        </div>
            
        </div>
        <hr className={stylesss.hra}/>
    </>
  )
}

export default PageSix