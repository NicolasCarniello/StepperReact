export type PasswordProps = {
  label?: string;
  repeatLabel?: string;
  notMatch: boolean;
  setNotMatch: (matchPassword: boolean) => void;
};
