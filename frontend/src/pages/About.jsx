import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Medico is a comprehensive healthcare app designed to connect patients with trusted medical professionals seamlessly and efficiently. Whether you're booking an appointment, consulting with a doctor online, or accessing your health records, Medico brings healthcare to your fingertips. Our intuitive platform is built to simplify the patient experience, offering a range of features that ensure convenience, accessibility, and personalized care for all users.</p>
          <p>With Medico, finding the right doctor has never been easier. Browse verified profiles, read reviews, and select specialists based on your specific needs—all within a few taps. Our app supports video consultations, secure chat, and appointment scheduling, enabling users to receive expert medical advice from the comfort of their homes. Medico also provides timely reminders, prescription tracking, and health tips to promote ongoing wellness.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>At the heart of Medico is a commitment to quality healthcare and patient satisfaction. We work with certified healthcare providers and utilize advanced security protocols to protect your data and privacy. Whether it's routine check-ups or urgent care, Medico is your reliable partner for managing your health in a modern, efficient, and user-friendly way.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]
        hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]
        hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Convenience:</b>
        <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]
        hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Personalisation:</b>
        <p>Tailored recommendations and reminders to help you stay on top of your health</p>
        </div>
      </div>

    </div>
  )
}

export default About