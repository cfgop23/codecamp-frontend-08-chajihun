import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import { withAuth } from "../../../../src/components/commons/hocs/withAuth";
import { FETCH_USEDITEM } from "../../../../src/components/units/market/detail/MarketDetail.queries";
import MarketNew from "../../../../src/components/units/market/new/MarketNew.container";

function MarketEditPage() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: String(router.query.marketId) },
  });

  return <MarketNew isEdit={true} data={data} />;
}

export default withAuth(MarketEditPage);
