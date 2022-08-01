export type FooterProps = {
  buttonLabel: string;
  isNextBottonDisabled?: boolean;
  onPrevButtonClick?: () => void;
  onNextButtonClick?: () => void;
  onCancelButtonClick?: () => void;
  prevButtonLabel?: string;
  nextButtonLabel?: string;
  withCancelButton?: boolean;
};
