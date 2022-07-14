export default function TypescriptPage() {
  //타입 추론
  let aaa = "안녕하세요";

  //타입 명시
  let bbb: string = "반갑습니다";

  //문자타입(선언과 할당 분리)
  let ccc: string;
  ccc = "반가워요";

  //숫자타입
  let ddd: number;
  ddd = 111;

  //불린타입
  let eee: boolean;
  eee = false;
  //eee="false" js는 true로 작동 타입스크립트는 에러

  //배열타입
  let fff: number[] = [1, 2, 3, 4, 5];
  //let ggg:string[] = ["철수", "영희", "훈이", 10]
  let hhh: (string | number)[] = ["철수", "영희", "훈이", 10];

  //객체타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
  }
  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  };
  //profile.name = 333
  profile.age = "8살";

  //함수타입
  const add = (number1: number, number2: number, unit: string): string => {
    return number1 + number2 + unit;
  };
  const result = add(1000, 2000, "원"); //결과의 타입도 예측 가능
  // add("1000원", "2000원")

  //any타입
  let qqq: any = "철수"; // 자바스크립트와 동일
  qqq = 123;
  qqq = true;

  return <div>타입스크립트 연습하기</div>;
}
