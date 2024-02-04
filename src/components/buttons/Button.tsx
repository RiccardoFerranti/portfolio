import StyledButton from './Button.style';

interface IButtonProps {
  text: string;
  onClick: () => void;
  bgDark?: boolean;
}

export default function Button(props: IButtonProps) {
  const { text, onClick, bgDark } = props;

  return (
    <StyledButton $bgDark={bgDark} onClick={onClick}>
      {text}
    </StyledButton>
  );
}
