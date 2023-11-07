import React from 'react'
import sst from './PageSeven.module.css'
import Page7img from './Page7img.png'
import Page7One from './Page7One.png'
import Page7Two from './Page7Two.png'
import Page7Three from './Page7Three.png'
import Page7Four from './Page7Four.png'
import Page7Five from './Page7Five.png'


function PageSeven() {
  return (
    <>
        <div className={sst.oture}>
            <div><img src={Page7img} alt="" /></div>


                        <div className={sst.oti}>
                            <div className={sst.oto}><h4>Company</h4></div>
                            <div className={sst.otoo}>
                                <h4>About Us</h4>
                                <h4>Services</h4>
                                <h4>Courses</h4>
                                <h4>Contact Us</h4>

                            </div>
                            
                        </div>

                        <div className={sst.oti}>
                            <div className={sst.oto}><h4>Services</h4></div>
                            <div className={sst.otoo}>
                                <h4>Web Development</h4>
                                <h4>App Development</h4>
                                <h4>Graphic Design</h4>
                                <h4>UI/UX Design</h4>

                            </div>
                            
                        </div>


                        <div>
                            <div className={sst.yyy}><h4>Email Us</h4></div>
                            <div><a href="#">Riccoz1234@gmail.com</a></div>

                            <div className={sst.yyy}><h4>Contact Us</h4></div>
                            <div><a href="#">+919876543210</a></div>

                            {/* <div className={sst.yyoo}><img src={Page7One} alt="" /></div>
                            <div className={sst.yyoo}><img src={Page7One} alt="" /></div> */}
                            <img src={Page7One} className={sst.yyoo} alt="" />
                            <img src={Page7Two} className={sst.yyoo} alt="" />
                            <img src={Page7Three} className={sst.yyoo} alt="" />
                            <img src={Page7Four} className={sst.yyoo} alt="" />
                            <img src={Page7Five} className={sst.yyoo} alt="" />

                        </div>

                        <div>
                            <div className={sst.yyyT}><h4>SUBSCRIBE TO NEWSLETTER</h4></div>
                            <div className={sst.inn}><input type="text" placeholder='Enter email' /></div>
                        </div>
            
        </div>
        
    </>
  )
}

export default PageSeven