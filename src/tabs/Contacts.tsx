import Button from 'components/buttons/Button';
import MapLink from 'components/map/Map';
import LABELS from 'consts/labels';
import { useFlipProvider } from 'FlipProvider';

import {
  StyledBsGeoAltFill,
  StyledContacts,
  StyledContactsContent,
  StyledContactsContentRow,
  StyledFaLinkedinIn,
  StyledIconContainer,
  StyledMdEmail,
  StyledPiGithubLogoFill,
} from './Contacts.style';

export default function Contacts() {
  const { setFlip } = useFlipProvider();

  return (
    <StyledContacts>
      <StyledContactsContent>
        <StyledContactsContentRow>
          <StyledIconContainer>
            <StyledBsGeoAltFill />
          </StyledIconContainer>
          <MapLink address={LABELS.tabs.contacts.address} />
        </StyledContactsContentRow>
        <StyledContactsContentRow>
          <StyledIconContainer>
            <StyledMdEmail />
          </StyledIconContainer>
          <a href="mailto:riccardo.ferranti01@gmail.com">
            {LABELS.tabs.contacts.email}
          </a>
        </StyledContactsContentRow>
        <StyledContactsContentRow>
          <a
            href={LABELS.tabs.contacts.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <StyledIconContainer>
              <StyledFaLinkedinIn />
            </StyledIconContainer>
            {LABELS.tabs.contacts.linkedin}
          </a>
        </StyledContactsContentRow>
        <StyledContactsContentRow>
          <a
            href={LABELS.tabs.contacts.github}
            target="_blank"
            rel="noreferrer"
          >
            <StyledIconContainer>
              <StyledPiGithubLogoFill />
            </StyledIconContainer>
            {LABELS.tabs.contacts.github}
          </a>
        </StyledContactsContentRow>
        <Button
          text={LABELS.buttons.workWithMe}
          onClick={() => setFlip(true)}
        />
      </StyledContactsContent>
    </StyledContacts>
  );
}
