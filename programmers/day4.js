// let answer = 0
// let current = 1

// function robot(){
// while(current !== 100){
//   answer++
//   current++
// }
//   return answer
// }

// robot()

//23.

function sum(num) {
  let count = 0;
  for (let i = 0; i < num + 1; i++) {
    count = count + i;
  }
  return count;
}

// function sum(num){
//   let count = 0;
//   for (let i = 1; i<= num; i++){
//     count += i
//   }
//   return count
// }

//24.

function countLetter(str) {
  let count = 0;
  let alphabet = str.split("");
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] === "a" || alphabet[i] === "A") {
      count = count + 1;
    }
  }
  return count;
}

// function countLetter (str){
//   str = str.toLowerCase()
//   // str = str.toUpperCase()

//   let count = 0
// 	for(i=0; i<str.length; i++){
//     if(str[i] === "a"){
//     	count++
//     }
//   }
//   return count
// }

//25.

function makeNumber(num) {
  let result = 1;
  let str = "-";
  for (let i = 1; i < num; i++) {
    result = result + str + Number(i + 1);
  }
  return result;
}

// function makeNumber(num){
//   let answer = ""
//   for(let i = 1 ; i <= num; i++){
//     answer += i
//     if(i !== num){
//       answer += '-'
//     }
//   }
//   return answer
// }

//26.

function makeOdd(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      str = str + i;
    }
  }
  return result;
}

// function makeOdd(num) {
//   let answer = ''
//   for(let i=1; i<=num; i++){
//     if(i%2 === 1) answer += i
//   }
//   return answer
// }

//27.

function bigNum(str) {
  let biggest = 1;
  // let biggest = Number(str[0]);
  //Math.max(...[1,2,3,4,5])
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) > biggest) {
      biggest = Number(str[i]);
    }
  }
  return biggest;
}
