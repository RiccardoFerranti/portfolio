import { useFlipProvider } from "../../FlipProvider";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import { StyledCardFlip, StyledCardWrapper } from "./CommonStyle";
import useDelayedFlip from "../../hooks/useDelayedFlip";

export default function Card() {
  const { flip } = useFlipProvider();
  const { flipDelayed } = useDelayedFlip(flip, 300);

  return (
    <StyledCardWrapper $flip={flip}>
      <StyledCardFlip>
        <CardFront flip={flipDelayed} />
        <CardBack flip={flipDelayed} />
      </StyledCardFlip>
    </StyledCardWrapper>
  );
}
