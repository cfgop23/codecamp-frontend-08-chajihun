// 1.

//let name = "차지훈";

//2.

let name = "영희";
name = "철수";

//const

//3.

//let fruits = ["사과", "바나나", "파인애플"];

//4.

let newFruits = [];

fruits[fruits.length - 1];

newFruits.push(fruits[fruits.length - 1]);

//5.

let students = ["철수", "영희", "훈이", "짱구", "유리"];

let newStudents = students.slice(0, 3);

//6.

let fruits = ["사과", "바나나"];

fruits = fruits.map((fruits) => "맛있는 " + fruits);

//7.

const number = "01012345678";

const arr = [number.slice(0, 3), number.slice(3, 7), number.slice(7, 11)];

//8.

const student = {};

student.name = "철수";

//9.

const student = {
  name: "철수",
  age: 8,
};

const school = {
  name: "다람쥐초등학교",
  teacher: "다람이",
};

student.school = school;

//10.

let student1 = {
  name: "철수",
  drink: "사이다",
};

delete student1.drink;

//11.

const classmates = [
  {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  },
  {
    name: "영희",
    age: 8,
    school: "토끼초등학교",
  },
  {
    name: "짱구",
    age: 8,
    school: "다람쥐초등학교",
  },
];

classmates[1].school = "다람쥐초등학교";
