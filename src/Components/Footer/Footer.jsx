import React from 'react';
import { FaFacebookF, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
      <div>
      <footer
        className="footer sm:footer-horizontal bg-black text-white flex justify-between items-center
         p-10 mx-auto w-11/12"
      >
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Useful Links</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Terms and Conditions</a>
          <a className="link link-hover">Privacy and Policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Follow Us</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/share/16DsAGWHhJ/" target="blank">
              <FaFacebookF size={25} />
            </a>
            <a
              href="https://www.youtube.com/@ProgrammingHeroCommunity"
              target="blank"
            >
              <FaYoutube size={25} />
            </a>
            <a href="https://bd.linkedin.com/in/deeptodutta" target="blank">
              <FaLinkedin size={25} />
            </a>
          </div>
        </nav>
      </footer>
    </div>
    );
};

export default Footer;