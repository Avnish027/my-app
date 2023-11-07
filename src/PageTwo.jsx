import React from 'react'
import styles from './PageTwo.module.css'
import Page2One from './Page2One.jpg'
import Page2Two from './Page2Two.jpg'
import Page2Three from './Page2Three.jpg'


function PageTwo() {
  return (
    <>
            <div className={styles.wrapper}>
                <div >
                    <h2 className={styles.hh1}>Explore Our Platform's Unique Features</h2>
                </div>
                <div className={styles.ootr}>
                        <div className={styles.bha}>
                            <div className={styles.ii}><img src={Page2One} alt="" /></div>
                            <div className={styles.it}><h3>Wide Range Of Services</h3></div>
                            <div className={styles.it}><p>Find everything from web development to marketing under one roof. Our platform offers a diverse array of tech services</p></div>
                        </div>
                        <div className={styles.bha}>
                            <div className={styles.ii}><img src={Page2Two} alt="" /></div>
                            <div className={styles.it}><h3>Instant Search</h3></div>
                            <div className={styles.it}><p>Get connected to top tech professional within moments of our intutive search function ensure quick acces</p></div>
                        </div><div className={styles.bha}>
                            <div className={styles.ii}><img src={Page2Three} alt="" /></div>
                            <div className={styles.it}><h3>Quality Scoring</h3></div>
                            <div className={styles.it}><p>We maintain high service standard our unique scoring system ensure you receive top noutch quality</p></div>
                        </div>
                </div>
            </div>
    </>
  )
}

export default PageTwo