import LABELS from "../consts/labels";
import {
  StyledExperience,
  StyledExperienceTimelineContainer,
  StyledExperienceTimelineItem,
  StyledExperienceTimeline,
  StyledExperienceTimelineYear,
  StyledExperienceTimelineContent,
  StyledExperienceTimelineTags,
} from "./Experience.style";
import { COMPANIES, TAGS } from "./consts";
import { ECompanies } from "../commonTypes";

export default function Experience() {
  return (
    <StyledExperience>
      <StyledExperienceTimelineContainer>
        <StyledExperienceTimeline>
          {COMPANIES.map((company) => {
            const currentCompany = company as keyof typeof ECompanies;

            return (
              <StyledExperienceTimelineItem key={currentCompany}>
                <StyledExperienceTimelineYear>
                  {LABELS.periods[currentCompany]}
                </StyledExperienceTimelineYear>
                <StyledExperienceTimelineContent>
                  <h4>{LABELS.positions[currentCompany]}</h4>
                  <h5>{`at ${LABELS.companies[currentCompany]}`}</h5>
                  <p>{LABELS.descriptions[currentCompany]}</p>
                  {TAGS[currentCompany].length ? (
                    <StyledExperienceTimelineTags>
                      {TAGS[currentCompany].map((tag: string) => {
                        return <li key={tag}>{tag}</li>;
                      })}
                    </StyledExperienceTimelineTags>
                  ) : null}
                </StyledExperienceTimelineContent>
              </StyledExperienceTimelineItem>
            );
          })}
        </StyledExperienceTimeline>
      </StyledExperienceTimelineContainer>
    </StyledExperience>
  );
}
