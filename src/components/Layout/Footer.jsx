import React, { useContext } from 'react'
import { Context } from '../../main';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';




const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>
        &copy; All Rights Reserved By Shradha.
      </div>
      <div>
        <Link to={'/'} targets="_blank"><FaFacebookF /></Link>
        <Link to={'/'} targets="_blank"><FaYoutube /></Link>
        <Link to={'/'} targets="_blank"><FaLinkedin /></Link>
        <Link to={'/'} targets="_blank"><RiInstagramFill /></Link>
      </div>

    </footer>
  )
}

export default Footer