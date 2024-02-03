import Form from "../../form/Form";
import {
  StyledCardCLip,
  StyledCardBody,
  StyledCardBadgeCord,
} from "./Card.style";
import { StyledCardBack } from "./CardBack.style";

interface ICardBackProps {
  flip: boolean;
}

export default function CardBack(props: ICardBackProps) {
  const { flip } = props;

  return (
    <StyledCardBack>
      <StyledCardBadgeCord $flip={flip} />
      <StyledCardCLip />
      <StyledCardBody>
        <Form />
      </StyledCardBody>
    </StyledCardBack>
  );
}
