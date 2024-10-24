import React from 'react'
import Heading from '../components/Heading'
import styles from './subscriptions.module.css'
import Image from 'next/image'
import Pricing from '../images/Pricings.jpg'
import Card from '../components/Card'

function Sub() {
  const features = [
    "Access to all gym equipment",
    "Free personal training session",
    "Unlimited group classes",
    "Complimentary water bottle",
    "Free parking"
  ];
  return (
    <>
     <div>
      <Heading subheading='Pricing' heading='OUR PLANS'></Heading>
    </div> 
    <div className={styles["container"]}>
      <div className={styles["image"]}><Image src={Pricing} alt='' height={600} width={450}></Image></div>
      
      <Card
        pricing = '$30'
        pricingHeading="Basic Plan"
        features={features}
      />
      <Card
        pricing = '$45'
        pricingHeading="Premium Plan"
        features={features}
      />
      
     
    </div> 
    </>
  )
}

export default Sub
