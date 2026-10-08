import ProCard from "../components/ui/pro-card";

import { List } from "react-native-paper";

const fundData = [
  { fund_name: "UTI Nifty 50 Index - Growth-Direct" },
  { fund_name: "Motilal Oswal Midcap - Direct-Growth" },
  { fund_name: "Parag Parikh Flexi Cap - Direct-Growth" },
  { fund_name: "Aditya Birla Sun Life Liquid Fund-Direct Growth" },
  {},
];
export default function MyFunds() {
  return (
    <ProCard title="My Funds">
      {fundData.map((fund) => (
        <List.Item title={fund.fund_name} />
      ))}
    </ProCard>
  );
}
