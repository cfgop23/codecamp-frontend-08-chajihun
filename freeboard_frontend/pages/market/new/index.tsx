import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import MarketNew from "../../../src/components/units/market/new/MarketNew.container";

function MarketNeWPage() {
  return <MarketNew />;
}

export default withAuth(MarketNeWPage);
