import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import RoutedPageUI from "./06-routed.presenter";
import { FETCH_BOARD } from "./06-routed.queries";

export default function RoutedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  console.log(data);
  return <RoutedPageUI data={data} number={Number(router.query.number)} />;
}
