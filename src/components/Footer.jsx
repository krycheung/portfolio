import React from 'react'
import styles from '../style'
import {logo} from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () =>(
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        {/* <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain' /> */}
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          Thanks for visiting!
        </p>
      </div>

      <div>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <a href={social.link}><img src={social.icon} alt={social.id} key={social.id} className={`w-[40px] h-[40px] object-contain cursor-pointer mr-6`}/></a>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Footer