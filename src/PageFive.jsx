import React from 'react'
import Page5One from './Page5One.jpg'
import styless from './PageFive.module.css'

function PageFive() {
  return (
    <>
    <div className={styless.oo}>
            <div className={styless.pp}><h1>Enhance Your Workflow with Integrated Tools</h1></div>
            <div className={styless.qq}>
                <img src={Page5One} alt="" />
            </div>
            <div className={styless.ww}>
            <a href="#"><button>Explore More</button></a>

            </div>
    </div>
    </>
  )
}

export default PageFive