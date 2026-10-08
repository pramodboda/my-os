import ProCard from "../components/ui/pro-card";

import { List } from "react-native-paper";

const fundData = [
  { id: 1, fund_name: "UTI Nifty 50 Index - Growth-Direct" },
  { id: 2, fund_name: "Motilal Oswal Midcap - Direct-Growth" },
  { id: 3, fund_name: "Parag Parikh Flexi Cap - Direct-Growth" },
  { id: 4, fund_name: "Aditya Birla Sun Life Liquid Fund-Direct Growth" },
  { id: 5, fund_name: "ICICI Gold ETF - Stock" },
  { id: 6, fund_name: "LIC" },
  { id: 7, fund_name: "PPF" },
  { id: 8, fund_name: "EPFO" },
];
export default function MyFunds() {
  return (
    <ProCard title="My Investments">
      {fundData.map((fund) => (
        <List.Item
          key={fund.id}
          title={fund.fund_name}
          left={(props) => <List.Icon {...props} icon="chart-line" />}
        />
      ))}
    </ProCard>
  );
}
