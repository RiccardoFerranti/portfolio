import profile from 'assets/profile.png';

import {
  StyledAbout,
  StyledProfile,
  StyledTitle,
  StyledSubTitle,
  StyledDescription,
} from './About.style';

export default function About() {
  return (
    <StyledAbout>
      <StyledProfile
        src={profile}
        alt="profile picture"
        title="profile picture"
        data-testid="profile-pic"
      />
      <StyledTitle>Riccardo Ferranti</StyledTitle>
      <StyledSubTitle>Lead Front End Developer</StyledSubTitle>
      <StyledDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsa
        pariatur molestiae rem dicta quam incidunt sit amet quae earum corporis
        vero accusantium, dolore est! Neque molestiae libero hic ab?
      </StyledDescription>
    </StyledAbout>
  );
}
