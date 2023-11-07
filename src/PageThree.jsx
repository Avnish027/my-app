import React from 'react'
import Page3One from './Page3One.jpg'
import Page3Two from './Page3Two.jpg'
import Page3Three from './Page3Three.jpg'
import Page3Four from './Page3Four.jpg'
import Page3img from './Page3img.jpg'
import style from './PageThree.module.css'
function PageThree() {
  return (
    <>
        <div className={style.wrp}>
                <div className={style.aa} ><h1>Why Choose Ricoz?</h1></div>
                <div className={style.aaa}>
                    <div>
                    <div className={style.thim}><img src={Page3img} alt="" /></div>
                    </div>

                    
                    <div className={style.aabb}>
                        <div className={style.bb}>
                            <div className={style.bbc}><img src={Page3One} alt="" /></div>
                            <div className={style.bbd}><h3>Vast Professional Network</h3>
                                <p>Access a wide range of skilled tech Professionals, all in one platform</p>
                            </div>
                        </div>

                        <div className={style.bb}>
                            <div className={style.bbc}><img src={Page3Two} alt="" /></div>
                            <div className={style.bbd}><h3>Quality You Can Trust</h3>
                                <p>Our stringent quality scoring system ensure that you receive expceptional quality</p>
                            </div>
                        </div>
                        <div className={style.bb}>
                            <div className={style.bbc}><img src={Page3Three} alt="" /></div>
                            <div className={style.bbd}><h3>Effortless Collaboration</h3>
                                <p>Our integrated tools facilitate seamless communication</p>
                            </div>
                        </div><div className={style.bb}>
                            <div className={style.bbc}><img src={Page3Four} alt="" /></div>
                            <div className={style.bbd}><h3>Save Time and Effort</h3>
                                <p>With our platform finding professional becomes effortless</p>
                            </div>
                        </div>
                    </div>
                            
                    
                </div>
        </div>
    </>
  )
}

export default PageThree