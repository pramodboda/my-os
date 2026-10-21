
import * as React from 'react';
import { List } from 'react-native-paper';

import { seniorFrontendDeveloper_InterviewRounds } from '../../app/data/interviewRounds';
import ProCard from "../../components/ui/pro-card";

export default function CommonSFDInterviewRounds() {
  return (
    <ProCard title="SeniorFrontendDeveloper" subtitle="Interview Rounds">
      <List.AccordionGroup>
      {seniorFrontendDeveloper_InterviewRounds.map((ir) => (
        <List.Accordion
          key={ir.id}
          id={ir.id}
          title={ir.round_name}
        >
          {ir.topics.map((topic, index) => (
            <List.Item
              key={`${ir.id}-${index}`}
              title={topic}
            />
          ))}
        </List.Accordion>
      ))}
    </List.AccordionGroup>
    </ProCard>

  );
}
