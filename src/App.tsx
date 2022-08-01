import "./styles.css";

import { useState } from "react";
import ContentStep1 from "./components/ContentStep1/ContentStep1";
import ContentStep2 from "./components/ContentStep2/ContentStep2";
import { StepIndicator } from "./components/StepIndicator";
import FooterBtn from "./components/Footer/Footer";
import { submitForm } from "./api/api";

import { useTranslation } from "react-i18next";
import "../src/locales/i18n";

export default function App() {
  const { t } = useTranslation();

  const initialStep = 0;
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [notMatch, setNotMatch] = useState(false);

  const steps = [
    {
      name: "step-1",
    },
    {
      name: "step-2",
    },
    {
      name: "step-3",
    },
  ];

  const handlePrevButtonClick = () => setCurrentStep((prev) => prev - 1);

  const handleNextButtonClick = () => setCurrentStep((prev) => prev + 1);

  const backToTop = () => {
    setCurrentStep(0);
    setError(false);
    setSuccess(false);
  };

  const getResponse = () => {
    handleNextButtonClick();
    submitForm("1234")
      .then((response) => {
        setSuccess(true);
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <>
      <StepIndicator numOfSteps={steps.length} currentStep={currentStep} />
      <div className="grid grid-cols-1 ">
        <div className="mx-60 mt-16">
          {currentStep === 0 && (
            <>
              <ContentStep1 />
              <div className="flex justify-between mt-16">
                <FooterBtn buttonLabel={t("common.btnCancelar")} />
                <FooterBtn
                  onClick={handleNextButtonClick}
                  buttonLabel={t("common.btnSiguiente")}
                />
              </div>
            </>
          )}
          {currentStep === 1 && (
            <>
              <ContentStep2 notMatch={notMatch} setNotMatch={setNotMatch} />
              <div className="flex justify-between">
                <FooterBtn
                  onClick={handlePrevButtonClick}
                  buttonLabel={t("common.btnCancelar")}
                />
                <FooterBtn
                  isDisabled={notMatch}
                  onClick={getResponse}
                  buttonLabel={t("common.btnSiguiente")}
                />
              </div>
            </>
          )}
          {currentStep === 2 && error === true && (
            <>
              <h1>{t("errorStep.titulo")}</h1>
              <p>{t("errorStep.texto")}</p>
              <FooterBtn
                onClick={backToTop}
                buttonLabel={t("common.btnVolverInicio")}
              />
            </>
          )}
          {currentStep === 2 && success === true && (
            <>
              <h1>{t("successStep.titulo")}</h1>
              <p>{t("successStep.texto")}</p>
              <FooterBtn buttonLabel={t("common.btnAcceder")} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
