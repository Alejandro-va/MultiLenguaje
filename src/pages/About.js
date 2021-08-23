import React from 'react';
import { useTranslation } from 'react-i18next';
import CuervoZorro from "../image/cuervoZorro.jpg"

const About = () => {
   const [t,i18n] = useTranslation("global");
   return (
      <div className="principal">
         <h2 className="caption">{t("titleP2.title2")}</h2>
 
         <p className="p">{t("contenP2.content-pg2")}</p>
         <div className="contentImg">
            <img src={CuervoZorro} alt="" className="img"/>
         </div>
      </div>
   )
}

export default About
