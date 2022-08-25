import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  onClickPick?: () => void;
  onClickDelete?: () => void;
  onClickUpdate?: () => void;
  onClickBuy?: () => void;
}

export interface IMarketDetailProps {
  data?: Pick<IQuery, "fetchUseditem">;
}
