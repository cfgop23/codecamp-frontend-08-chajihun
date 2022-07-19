import { Rate, DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import styled from "@emotion/styled";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const Wrapper = styled.div`
  margin: 20px;
`;

const MyStar = styled(Rate)``;

const StarCount = styled.div`
  font-size: 20px;
`;

const DatePick = styled(DatePicker)`
  margin-top: 20px;
`;

const DateCount = styled.div`
  font-size: 20px;
`;

const PlayerWrapper = styled.div`
  margin-top: 50px;
`;

export default function LibraryIconPage() {
  const [value, setValue] = useState<number>(0);
  const [date, setDate] = useState("");

  const onChangeRating = (value: number) => {
    setValue(value);
    alert(`${value}점`);
  };

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    // setDate(date);
    setDate(dateString);
  };

  console.log(value);
  return (
    <Wrapper>
      <MyStar onChange={onChangeRating} value={value} />
      <StarCount>{value}점</StarCount>
      <DatePick onChange={onChangeDate} />
      <DateCount>{date}</DateCount>
      <DateCount>{date.slice(5, 7)}</DateCount>
      <PlayerWrapper>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dyRsYk0LyA8"
          width="800px"
          height="600px"
          playing={true}
          muted={true}
        ></ReactPlayer>
      </PlayerWrapper>
    </Wrapper>
  );
}
