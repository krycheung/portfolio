import React from 'react'
import styles from './style'

import { Navbar, Hero, Business, Billing, CardDeal, Testimonials, Clients, CTA , Footer } from './components'

const App = () =>  (
  //Div that wraps our entire application
  <div className="bg-primary w-full overflow-hidden">
    {/* Div that wraps the navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Landing page top section content */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Footer /> 
      </div>
    </div>
  </div>
)


export default App