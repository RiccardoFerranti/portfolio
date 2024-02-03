import { StyledCardCLip, StyledCardBadgeCord } from "./Card.style";
import {
  StyledCardFront,
  StyledCardNavTabs,
  StyledCardContent,
  StyledCardContainer,
} from "./CardFront.style";
import About from "../../tabs/About";
import Experience from "../../tabs/Experience";
import Contacts from "../../tabs/Contacts";
import useTabs from "../../hooks/useTabs";
import { TABS } from "../../consts/tabs";
import useSwipeDetection from "../../hooks/useSwipeDetection";

interface ICardFrontProps {
  flip: boolean;
}

export default function CardFront(props: ICardFrontProps) {
  const { flip } = props;
  const { tabSelected, setTabSelected } = useTabs(1);
  const { onSwipeStart, onSwipeMove, onSwipeEnd } = useSwipeDetection(
    tabSelected,
    setTabSelected
  );

  const handlSetTab = (tab: number) => {
    setTabSelected(tab);
  };

  return (
    <StyledCardFront
      onTouchStart={onSwipeStart}
      onTouchMove={onSwipeMove}
      onTouchEnd={onSwipeEnd}
    >
      <StyledCardBadgeCord $flip={flip} />
      <StyledCardCLip />
      <StyledCardContainer>
        <StyledCardContent tabSelected={tabSelected}>
          <About />
          <Experience />
          <Contacts />
        </StyledCardContent>
      </StyledCardContainer>
      <StyledCardNavTabs tabSelected={tabSelected}>
        {TABS.map((tab, index) => (
          <li onClick={() => handlSetTab(index + 1)} key={tab}>
            {tab}
          </li>
        ))}
        <li className="tab__slider" />
        <li className="tab__slider-active" />
      </StyledCardNavTabs>
    </StyledCardFront>
  );
}
