import React from 'react'
import Navbar from '../Components/Navbar';
import PartnersCarosel from '../Components/PartnersCarosel'
import BIRTH from '../images/birth.png'
import TELECOM from '../images/Telecom.png'
import DI from '../images/DI.png'
// import Blog1 from './Blog1'
// import Blog2 from './Blog2'
import {Routes, Route, useNavigate} from 'react-router-dom';


const blogs = [
  {
    src: BIRTH,
    heading: `E2EM’s Birth`,
    text: 'In bustling Delhi, a college student named Pankaj faced daily commuting struggles. Determined to find an efficient solution, he founded E2EM (End to End..'
  },
  {
    src: TELECOM,
    heading: `World Telecom Day`,
    text: 'World telecom day, hosted by the University of Delhi, provided us with a corporative and constructive environment. Several startups ...'
  },
  {
    src: DI,
    heading: `Digital India Week`,
    text: `E2EM's team recently participated in prestigious Digital India Week 2022. With the theme 'Catalyzing New India's Techade,' the event ...`
  },
]


export default function About() {
  

  return (
    <>
    
      <div>
        <div>
          <div className='main-cont-mv'>
            <div className='mission-cont'>
              <div className='mission-head'>
                <div className='mission-s'>
                  Be a part of our
                </div>
                <div className='mission'>
                  Mission
                </div>
              </div>
              <div className='mission-text'>
                Our mission at E2EM (End to End Mobility) is to revolutionize transportation with sustainable, affordable EVs that integrate seamlessly, promote connectivity, and combat fossil fuel challenges.
              </div>
            </div>
<br/>
<hr></hr>
            <div className='mission-cont'>
              <div className='mission-head'>
                <div className='mission-s'>
                  Be a part of our
                </div>
                <div className='mission'>
                  Vision
                </div>
              </div>
              <div className='vision-text'>
              Leading the electric mobility revolution, we envision a future where our affordable, compact EVs drive sustainable transportation, addressing fuel costs and reducing carbon emissions. By embracing innovative technologies and connectivity, we strive to make electric mobility convenient and compatible globally, while minimizing our environmental impact through eco-friendly, energy-efficient solutions.
              </div>
            </div>
          
          </div>
        </div>


        <div>
          <div className='partner-cont'>
            <div className='partner-text'>
              Helping us achieve our dream
            </div>
            <div className='partner-head'>
              Our Partners
            </div>
          </div>
        </div>

        <div className='carosel'>
          <PartnersCarosel/>
        </div>
      </div>

      
    </>
  )
}
