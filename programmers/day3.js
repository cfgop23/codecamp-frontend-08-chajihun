// 18.
function boolean(input1, input2) {
  if (input1 === false && input2 === false) {
    console.log("false");
  } else {
    console.log("true");
  }
}

// 19.

function evenOdd(num) {
  if (num > 0) {
    if (num % 2 === 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
  } else if (num === 0) {
    console.log("zero");
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

function days(month) {
  if (month >= 1 && month <= 12) {
    if (
      month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10 ||
      month === 12
    ) {
      console.log("31");
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      console.log("30");
    } else {
      console.log("28");
    }
  }
}
