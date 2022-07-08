//41.

function grade(score) {
  if (score <= 100 && score >= 0) {
    if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else if (score >= 0) {
      return "F";
    }
  } else {
    console.log("잘못된 점수입니다.");
  }
}

// function grade(score){
//   if(score > 100 || score < 0 ) return "error"

//   let answer = ''
//   if(score >= 90){
//     answer = 'a'
//   } else if (score >= 80){
//     answer = 'b'
//   } else if (score >= 70){
//     answer = 'c'
//   } else if (score >= 60){
//     answer = 'd'
//   } else {
//     answer = 'f'
//   }
//   return answer
// }

//43.

const myShopping = [
  { category: "과일", price: 12000 },
  { category: "의류", price: 10000 },
  { category: "의류", price: 20000 },
  { category: "장난감", price: 9000 },
  { category: "과일", price: 5000 },
  { category: "의류", price: 10000 },
  { category: "과일", price: 8000 },
  { category: "의류", price: 7000 },
  { category: "장난감", price: 5000 },
  { category: "의류", price: 10000 },
];

const vip = () => {
  let count = 0;
  let price = 0;
  let grade = "";
  for (let i = 0; i < myShopping.length; i++) {
    if (myShopping[i].category === "의류") {
      count += 1;
      price = price + myShopping[i].price;
    }
  }
  if (count >= 5) {
    grade = "Gold";
  } else if (count >= 3) {
    grade = "Silver";
  } else {
    grade = "Bronze";
  }
  console.log(`의류를 구매한 횟수는 총 ${count}회,
금액은 ${price}원이며 등급은 ${grade}입니다.`);
};

// function myPage(category){
//   let count = 0
//   let amount = 0
//   let grade = ''
//   for(let i=0; i<myShopping.length; i++){
//     if(myShopping[i].category === category){
//       count ++
//       amount += myShopping[i].price
//     }
//   }
//   if (count >= 5) {
//     grade = "Gold";
//   } else if (count >= 3) {
//     grade = "Silver";
//   } else {
//     grade = "Bronze";
//   }
//   console.log(count, amount, grade)
//   return `${category}를 구매한 횟수는 총 ${count}회, 금액은 ${amount}원이며 등급은 ${grade}입니다.`
// }
