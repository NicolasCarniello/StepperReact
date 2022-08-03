import InputText from "../InputText/InputText";
import { Password } from "../Password/Password";
import { PasswordProps } from "../Password/types";

import { useTranslation } from "react-i18next";
import "../../locales/i18n";

const ContentStep2 = ({ notMatch, setNotMatch }: PasswordProps) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="font-bold text-lg mb-16">
        {t("common.creaTuPasswordTitulo")}
      </div>
      <div className="px-36">
        <p className="">{t("step2.texto1")}</p>
        <p>{t("step2.texto2")}</p>
        <Password
          notMatch={notMatch}
          setNotMatch={setNotMatch}
          label={t("step2.labelPassword")}
          repeatLabel={t("step2.repLabelPassword")}
        />
        <InputText
          placeholder={t("common.password")}
          label={t("step2.labelPista")}
          text={t("step2.texto3")}
        />
      </div>
    </>
  );
};

export default ContentStep2;
