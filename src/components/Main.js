import React from 'react'
import Header from './Header'
import Heading from './Heading'
import { Technology } from './Technology'
import Status from './Status'
import Student from './Student'
import Benefits from './Benefits'
import KeyFeatures from './KeyFeatures'
import Customers from './Customers'
import Challenge from './Challenge'
import Footer from './Footer'
import { ParallaxProvider } from 'react-scroll-parallax'



const Main = () => {
  return (
    <div>
      <ParallaxProvider>

    

      
        <Heading />
        <Technology />
        <Status />
        <Student />
        <Benefits />
        <KeyFeatures />
        <Customers />
     
    
      </ParallaxProvider>
    </div>
  )
}

export default Main