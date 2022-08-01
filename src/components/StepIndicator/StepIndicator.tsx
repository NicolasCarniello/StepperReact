import classnames from "classnames";

import styles from "./StepIndicator.module.css";
import { StepIndicatorProps } from "./types";

const StepIndicator = ({ numOfSteps, currentStep }: StepIndicatorProps) => (
  <div className={styles["step-indicator"]}>
    {Array.from(Array(numOfSteps).keys()).map((number) => (
      <span
        className={classnames(styles["step-number"], {
          [styles["step-number--active"]]: number === currentStep
        })}
        key={number}
      >
        {number + 1}
      </span>
    ))}
  </div>
);

export { StepIndicator };
