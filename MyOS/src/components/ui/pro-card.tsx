import React from "react";
import { Avatar, Card, Text } from "react-native-paper";

type ProCardProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

const LeftContent = (props: React.ComponentProps<typeof Avatar.Icon>) => (
  <Avatar.Icon {...props} icon="folder" />
);

const ProCard = ({
  title = "Card Title",
  subtitle = "Card Subtitle",
  children,
}: ProCardProps) => {
  return (
    <Card mode="elevated" style={{marginBottom: "15px"}}>
      <Card.Title title={title} subtitle={subtitle} left={LeftContent} />
      <Card.Content>
        <Text variant="bodySmall">{children}</Text>
      </Card.Content>
    </Card>
  );
};

export default ProCard;
