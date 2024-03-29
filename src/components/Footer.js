import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
    return(
      <footer className="footer mt-20 text-sm text-gray-400 font-thin ">
        <div className=" flex gap-2 align-middle h-20 bg-gray-100 py-5 px-8">
        <StaticImage className="inline-block w-6 h-6 min-w-[30px] min-h-[30px]" src="../images/man-logo.jpg" objectFit="fill" alt="裸男" ></StaticImage>
        <div className="mt-1"><span className="siteurl">Nakeman.cn</span> 2023 Build by <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a> and <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">Tailwind</a>, <span>Deploy on <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify</a>.</span></div>
        </div>
      </footer>
  
    )
  }

export default Footer;