// 18.
function boolean(input1, input2) {
  if (input1 === false && input2 === false) {
    // console.log("false");
    return "false";
  } else {
    // console.log("true");
    return "true";
  }
}

// 19.

function evenOdd(num) {
  // if (num > 0) {
  //   if (num % 2 === 0) {
  //     console.log("Even");
  //   } else {
  //     console.log("Odd");
  //   }
  // } else if (num === 0) {
  //   console.log("zero");
  // }
  // 예외처리 먼저 하는 게 좋음
  if (num === 0) {
    return "zero";
  } else if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// 20.

function temperature(num) {
  if (num >= 24 && num <= 30) {
    console.log("조금 덥습니다");
  } else if (num >= 19) {
    console.log("날씨가 좋네요");
  } else if (num >= 10 && num <= 18) {
    console.log("조금 춥네요");
  }
}

//21.

const monthList = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

function days(month) {
  //   if (month >= 1 && month <= 12) {
  //     if (
  //       month === 1 ||
  //       month === 3 ||
  //       month === 5 ||
  //       month === 7 ||
  //       month === 8 ||
  //       month === 10 ||
  //       month === 12
  //     ) {
  //       console.log("31");
  //     } else if (month === 4 || month === 6 || month === 9 || month === 11) {
  //       console.log("30");
  //     } else {
  //       console.log("28");
  //     }
  //   }
  return monthList[month];
}
