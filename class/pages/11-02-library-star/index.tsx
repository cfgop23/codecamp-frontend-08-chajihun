import { Rate } from "antd";
import styled from "@emotion/styled";
import "antd/dist/antd.css";
import { useState } from "react";

const MyStar = styled(Rate)``;

export default function LibraryIconPage() {
  const [value, setValue] = useState(3);

  console.log(value);
  return <MyStar onChange={setValue} />;
}
