import { MouseEvent } from "react";
import { ButtonProps, ButtonType } from "../../components/Button/types";

const FooterBtn = ({
  buttonLabel,
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
      className="bg-slate-800 text-white rounded-md p-3 px-10"
      disabled={isDisabled}
      onClick={handleClick}
    >
      {buttonLabel}
    </button>
  );
};

export default FooterBtn;
