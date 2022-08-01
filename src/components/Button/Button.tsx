import { MouseEvent } from "react";
import classnames from "classnames";

import styles from "./Button.module.css";
import { ButtonProps, ButtonType } from "./types";

const Button = ({
  children,
  isDisabled,
  onClick,
  type = ButtonType.Primary,
}: ButtonProps) => {
  const handleClick = (event: MouseEvent) => {
    if (!isDisabled && onClick) {
      onClick(event);
    }
  };

  return (
    <button
      disabled={isDisabled}
      className={classnames(styles.button, {
        [styles.disable]: isDisabled,
        [styles.primary]: type === ButtonType.Primary,
        [styles.link]: type === ButtonType.Link,
      })}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export { Button };
