import React from "react";

import { useTranslation } from "react-i18next";
import "../../locales/i18n";
import guardar from "../../img/guardar.png";
import pass from "../../img/pass.png";

const ContentStep1 = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="font-bold text-lg">
        {t("common.creaTuPasswordTitulo")}
      </div>
      <div className="flex flex-row justify-center mt-10 space-x-10">
        <div className="basis-2/5">
          <img src={guardar} width="30%" alt="img" className=" mx-20 mb-5" />
          <p className="">{t("step1.texto1")}</p>
        </div>
        <div className="basis-2/5">
          <img src={pass} width="30%" alt="img" className=" mx-20 mb-5" />
          <p className="">{t("step1.texto2")}</p>
        </div>
      </div>
      <div className="mt-20">
        <div className="">
          <h3 className="font-bold">{t("step1.comoFuncionaTitulo")}</h3>
          <p className="">{t("step1.comoFuncionaText")}</p>
        </div>
        <div className="">
          <h3 className="font-bold">{t("step1.datosGuardarTitulo")}</h3>
          <p>{t("step1.datosGuardarTexto")}</p>
        </div>
      </div>
    </>
  );
};

export default ContentStep1;
