import React from 'react'
import { Title } from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flx-col md:flex-row gap-16'>
        <img className='flex flex-col justify-center gap-6 md:w-2/4' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Foreever was born out of a passion for innovation and desire to revolutionize the way people shop online. Our journey with the simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
          <p>Since our inciption, we've worked tirelessly to curate a diverse selection of high-quailty products that cater to every taste and preference. From fashon and beauty to electronics and home essentials, we offer an extensive collecton soursed from trusted brands and suppliers. </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our Mission is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless experience taht exceeds expectons, from browsng and ordering to deliveery and beyond.</p>
        </div>
      </div>
      <div className=' text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-20 md:px-16 sm:py:20 flex flex-col gap-5'>
          <p>Quality Assurance:</p>
          <p>We meticulously select and vet each product to ensure it meets our stringent quailty standards.</p>
        </div>
        <div className='border px-20 md:px-16 sm:py:20 flex flex-col gap-5'>
          <p>Convenience:</p>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shoping has never been easier.</p>
        </div>
        <div className='border px-20 md:px-16 sm:py:20 flex flex-col gap-5'>
          <p>Exceptional Customer Service:</p>
          <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfacton is our top priorty.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About