import React from 'react'
import PageOne1 from './PageOne1.jpg'
import PageOne2 from './PageOne2.jpg'
import styles from './PageOne.module.css'

function PageOne () {
  return (
    <>
        <div className={styles.cont}>
           <div className={styles.txt1}>
                <div className={styles.txt1}>
                    <h1>Discover Top Tech</h1>
                    <h1>Professional In Minutes</h1>
                </div>
                    <div className={styles.txt4}>
                            <h4>Streamline Your Business Needs with Ricoz's All-in-
                            <h4>One Tech Service Hub</h4>
                            </h4>
                    </div>
                            <div>
                                <button>Get Started</button>
                            </div>
           </div>

            <div className={styles.img1} >
                <img src={PageOne1} alt="" />
                <img src={PageOne2} alt="" />
            </div>
        </div>

        

    </>
  )
}

export default PageOne