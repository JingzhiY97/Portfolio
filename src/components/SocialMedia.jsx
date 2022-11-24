import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';
import { AiFillPhone } from "react-icons/ai"

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='mailto:y593886656@gmail.com'><FaEnvelope /></a>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/jingzhi-yang-18189524a/'><BsLinkedin /></a>
      </div>
      <div>
        <a href='tel: +61 043-5757-286'><AiFillPhone /></a>
      </div>
    </div>
  )
}

export default SocialMedia
