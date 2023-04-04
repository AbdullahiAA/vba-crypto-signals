import { GrayCard, VBATable } from "components/global";
import { ITableHeader } from "components/global/Table/VBATable";

const header: ITableHeader[] = [
  {
    label: "Exchange Wallet",
    dataIndex: "exchangeWallet",
  },
  { label: "Coin", dataIndex: "coin" },
  { label: "Balance", dataIndex: "balance" },
];

const body = [
  { exchangeWallet: "Binance", coin: "BTC", balance: "0.0000123" },
  { exchangeWallet: "Binance", coin: "USDT", balance: "0.0000123" },
  { exchangeWallet: "Binance", coin: "BUSD", balance: "0.0000123" },
];

function ExchangeRates() {
  return (
    <GrayCard p={0}>
      <VBATable header={header} body={body} />
    </GrayCard>
  );
}

export default ExchangeRates;
