

import * as React from 'react';
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';

import { seniorFrontendDeveloper_InterviewRounds } from "../../app/data/interviewRounds";


export default function CommonSFDInterviewRounds() {
  return (<List.AccordionGroup>
    {
      seniorFrontendDeveloper_InterviewRounds.map((ir) => {
        return (
          <List.Accordion title={ir.round_name} id={ir.id}>
            <List.Item title="Item 1" />
          </List.Accordion>
        )
      })

    }


    <List.Accordion title="Accordion 1" id="1">
      <List.Item title="Item 1" />
    </List.Accordion>
    <List.Accordion title="Accordion 2" id="2">
      <List.Item title="Item 2" />
    </List.Accordion>
    <View>
      <Text>
        List.Accordion can be wrapped because implementation uses React.Context.
      </Text>
      <List.Accordion title="Accordion 3" id="3">
        <List.Item title="Item 3" />
      </List.Accordion>
    </View>
  </List.AccordionGroup>)

}