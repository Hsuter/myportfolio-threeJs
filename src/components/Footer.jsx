import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const openInsta = () => {
    window.open(
      "https://instagram.com/nimimi_suter?igshid=MTIzZWQxMDU=",
      "_blank"
    );
  };
  const openGit = () => {
    window.open("https://www.github.com/Hsuter/", "_blank");
  };
  const openLink = () => {
    window.open("https://www.linkedin.com/in/harry-suter-66a852170/", "_blank");
  };
  const openTwitter = () => {
    window.open(
      "https://twitter.com/SuterHarry?t=NGAjxzc_SOGhDs8JX91TzQ&s=09",
      "_blank"
    );
  };

  return (
    <div className="flex flex-row bg-black-100  items-center justify-around py-5">
      <div className="flex gap-10">
        <span className="text-red-800 cursor-pointer" onClick={openInsta}>
          <BsInstagram />
        </span>
        <span className="text-red-800 cursor-pointer" onClick={openGit}>
          <FaGithub />
        </span>
        <span className="text-red-800 cursor-pointer" onClick={openLink}>
          <FaLinkedin />
        </span>
        <span className="text-red-800 cursor-pointer " onClick={openTwitter}>
          <BsTwitter />
        </span>
      </div>
      <div className="flex ">
        <p className="text-white   font-serif text-[15px]">
          Suter Inc@2023 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
