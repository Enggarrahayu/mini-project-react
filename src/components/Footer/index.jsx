import React from "react";
import logo from '../../assets/img/logo.png'
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-theme-light/50">
      <div className="container">
        <div className="row gx-5 pb-10 pt-[52px]">
          <div className="mt-12 col-12 md:col-6 lg:col-3">
            <a href="index.html">
              <img src={logo} alt="Logo" className="w-32"/>
            </a>
            <p className="mt-6">
              This project is developed to fulfill a mini project task from Dibimbing.id,
              showcasing practical implementation of frontend web development skills.
            </p>
          </div>
          <div className="mt-12 col-12 md:col-6 lg:col-3">
            <h6>Socials</h6>
            <p>enggarrahayu64@gmail.com</p>
            <ul className="mt-4 social-icons lg:mt-6">
                <li>
                  <a href="#">
                    <FaLinkedinIn size={20} />
                  </a>
              </li>
              <li>
                  <a href="#">
                    <FaGithub size={20} />
                  </a>
              </li>
              <li>
                  <a href="#">
                    <FaInstagram size={20} />
                  </a>
              </li>
            </ul>
          </div>
          <div className="mt-12 col-12 md:col-6 lg:col-3">
            <h6>Quick Links</h6>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Users</a></li>
              <li><a href="#">Profile</a></li>
            </ul>
          </div>
          <div className="mt-12 col-12 md:col-6 lg:col-3">
            <h6>Location & Contact</h6>
            <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
            <p>(704) 555-0127</p>
          </div>
        </div>
      </div>
      <div className="container max-w-[1440px]">
        <div className="pb-10 mx-auto text-center border-t footer-copyright border-border pt-7">
          <p>
            Developed by Enggar Rahayu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;