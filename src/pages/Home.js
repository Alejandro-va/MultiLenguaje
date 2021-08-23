import React from 'react';
import { useTranslation } from 'react-i18next';
import Gallo from "../image/gallo-perla.jpg";

const Home = () => {
   const [t,i18n] = useTranslation("global");

   return (
      <div  className="principal">
         <h2 className="caption">{t("titleP1.title1")}</h2>

         <p className="p">{t("contentP1.content-home")}</p>
         <div className="contentImg">
            <img src={Gallo} alt="" className="img"/>
         </div>
      </div>
   )
}

export default Home
