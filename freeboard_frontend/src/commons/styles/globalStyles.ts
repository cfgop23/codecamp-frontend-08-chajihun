import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: "myfont"; */
  }

  body {
    width: 100%;
    height: 100%;
    background-color: #fafafa;
  }

  @font-face {
    font-family: "myfont";
    src: url("/fonts/scifibit.ttf");
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
