import { MouseEvent, ReactNode } from "react";

export enum ButtonType {
  Primary,
  Link,
}

export type ButtonProps = {
  buttonLabel: string;
  children?: ReactNode;
  isDisabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  type?: ButtonType;
};
