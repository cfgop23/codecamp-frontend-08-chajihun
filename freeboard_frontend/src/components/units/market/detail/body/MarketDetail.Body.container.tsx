import { IMarketDetailProps } from "../MarketDetail.types";
import MarketDetailBodyUI from "./MarketDetail.Body.presenter";

export default function MarketDetailBody(props: IMarketDetailProps) {
  return <MarketDetailBodyUI data={props.data} />;
}
