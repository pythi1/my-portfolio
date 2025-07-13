import { useState } from "react";
import { socialImgs } from "../constants";
import Conditions from "./Conditions";

const Footer = () => {
  const [showterms, setshowterms] = useState(false);

 
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">

          <button onClick={()=> setshowterms(!showterms)}>Terms & Conditions</button>

          {showterms && (
            <div className="fixed inset-0 flex justify-center my-auto items-center z-100 overflow-scroll">
              <div className="bg-black-50 h-fit p-6 flex justify-center items-center rounded-lg w-6xl relative">
                <Conditions isopen={showterms} onclose={() => setshowterms(!showterms)} />
               
              </div>
            </div>
          )}

        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => {
            const IconComponent = socialImg.icon;
            return(

            <div key={index} className="icon">
              <a href={socialImg.pathlink} target="_blank">
                {/* <img src={socialImg.imgPath} alt="social icon" /> */}
                <IconComponent fontSize="large" />
              </a>
            </div>
            )
          })}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Pramod Jangra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
