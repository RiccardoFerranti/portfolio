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
        In this role, I guide the development, leveraging cutting-edge technologies to ensure our projects deliver
        outstanding user experiences. I mentor the team for continuous improvement and I steer the project direction.
      </StyledDescription>
    </StyledAbout>
  );
}
