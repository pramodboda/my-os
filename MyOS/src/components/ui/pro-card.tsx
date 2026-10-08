import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

type ProCardProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const LeftContent = (props: React.ComponentProps<typeof Avatar.Icon>) => (
  <Avatar.Icon {...props} icon="folder" />
);

const ProCard = ({
  title = "Card Title",
  subtitle = "Card Subtitle",
  children,
}: ProCardProps) => (
  <Card>
    <Card.Title title={title} subtitle={subtitle} left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">{title}</Text>
      <Text variant="bodyMedium">Card content</Text>
      <Text variant="bodySmall">{children}</Text>
    </Card.Content>
    {/* <Card.Cover source={{ uri: "https://picsum.photos/700" }} /> */}
    {/* <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}
  </Card>
);

export default ProCard;
