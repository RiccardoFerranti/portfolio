import StyledButton from './Button.style';

interface IButtonProps {
  text: string;
  onClick: () => void;
  bgDark?: boolean;
  shadow?: boolean;
  dataTestid?: string;
}

export default function Button(props: IButtonProps) {
  const {
    text,
    onClick,
    bgDark = false,
    shadow = true,
    dataTestid = 'button',
  } = props;

  return (
    <StyledButton $bgDark={bgDark} $shadow={shadow} onClick={onClick} data-testid={dataTestid}>
      {text}
    </StyledButton>
  );
}
