import React from "react";

import { useTranslation } from "react-i18next";
import "../../locales/i18n";

const ContentStep1 = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="font-bold text-lg">
        {t("common.creaTuPasswordTitulo")}
      </div>
      <div className="flex flex-row justify-center mt-10">
        <div className="basis-1/5">
          <img src="./" alt="img" />
          <p className="">{t("step1.texto1")}</p>
        </div>
        <div className="basis-1/5">
          <img src="./" alt="img" />
          <p className="">{t("step1.texto2")}</p>
        </div>
      </div>
      <div className="mt-20">
        <div className="inline-grid justify-center items-center w-3/4">
          <h3 className="font-bold">{t("step1.comoFuncionaTitulo")}</h3>
          <p className="">{t("step1.comoFuncionaText")}</p>
        </div>
        <div className="inline-grid justify-center items-center w-3/4">
          <h3 className="font-bold">{t("step1.datosGuardarTitulo")}</h3>
          <p>{t("step1.datosGuardarTexto")}</p>
        </div>
      </div>
    </>
  );
};

export default ContentStep1;
