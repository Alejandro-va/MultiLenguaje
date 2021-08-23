import React from 'react';
import { useTranslation } from 'react-i18next';
import Ciguena from "../image/ciguena.jpeg"


const Contact = () => {
   const [t,i18n] = useTranslation("global");
   return (
      <div className="principal">
         <h2 className="caption">{t("titleP3.title3")}</h2>

         <p className="p">{t("contenP3.content-pg3")}</p>
         <div className="contentImg">
            <img src={Ciguena} alt="" className="img"/>
         </div>
      </div>
   )
}

export default Contact
