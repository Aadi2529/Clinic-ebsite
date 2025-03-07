import React from 'react'

import Hero from '../Home Page/Hero'
import Dental_Service from './Dental_Service'
import Dental_Card from './Dental_Card'
import Appointment_Section from './Appointment_Section'
import Dental_Blog from './Dental_Blog'
import Dental_Pricing from './Dental_Pricing'
import Dental_Doctor_Section from './Dental_DoctorSection'
import Dental_Section from './Dental_Section'
import DentiesNav from './DentiesNav'
import ServiceSection from './ServiceSection'
import Dental_Hero from './Dental_Hero'
import BehaveSection from './BehaveSection'
import DoctorSection from './DoctorSection'
import CardsSection from './CardsSection'
import AnimatedSection from '../Dermatology Section/AnimatedSection'
import Dental_AnimatedSection from './Dental_AnimatedSection'


const Dentis = () => {
  return (
    <div className='overflow-x-hidden'>


      <DentiesNav />
      <Dental_Hero />
      {/* <Hero /> */}
      <Dental_Section />
      <BehaveSection />
      <Dental_AnimatedSection />
      <DoctorSection />
      <CardsSection />
      <Dental_Service />
      <Dental_Card />
      <ServiceSection />
      <Dental_Doctor_Section/>
      <Appointment_Section />
      <Dental_Pricing />
      <Dental_Blog />

   
      
      
      
    </div>
  )
}

export default Dentis
