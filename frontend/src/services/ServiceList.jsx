import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `GlobeTrek's Weathering Service offers real-time weather updates and forecasts, helping travelers prepare for their adventures. Stay informed about local conditions to ensure a safe and enjoyable journey, no matter the destination!`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `GlobeTrek's Tour Guiding Service provides expert local guides who enhance your travel experience with insightful stories and hidden gems. Discover destinations like never before, ensuring memorable adventures tailored just for you!`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Unlock your adventure with Globetrek’s customization service! Tailor your journey to fit your dreams—choose destinations, activities, and experiences for a unique travel experience designed just for you,ensuring an unforgettable and personalized getway.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList