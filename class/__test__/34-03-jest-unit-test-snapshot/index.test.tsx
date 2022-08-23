import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import JestUnitTestPage from "../../34-03-jest-unit-test-snapshot";

it("기존 사진이랑 바뀐 게 없는지 비교해보자 - 스냅샷 테스트", () => {
  const result = render(<JestUnitTestPage />);
  expect(result.container);
});

// yarn test -update new  새로 업데이트된 거 찍음
