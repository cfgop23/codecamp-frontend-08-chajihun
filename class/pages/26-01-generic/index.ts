//
// 1. 문자 타입
const getString = (arg: string): number => {
  return 123;
};
const result = getString("철수");

//
// 2. 숫자 타입
const getNumber = (arg: number): number => {
  return arg;
};
const result = getNumber(123);

//
// 3. any 타입 (JS와 동일)
const getAny = (arg: any): any => {
  return arg;
};
const result1 = getAny(123);
const result2 = getAny("철수");
const result3 = getAny(true);

//
// 4. unKnown 타입 : any처럼 받는 건 다 받지만, 사용할 때 타입을 지정해줘야함.
const getUnKnown = (arg: unknown): any => {
  if (typeof arg === "number") return arg + 2;
  else return "숫자를 넣어주세요.";
};
const result = getUnKnown(123);

//
// 5. generic 타입 (들어온 타입을 그대로 사용)
function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}
const result1 = getGeneric(123);
const result2 = getGeneric("철수");
const result3 = getGeneric(true);

//
// 6. any 타입 vs generic 타입 비교
function getAny2(arg1: any, arg2: any, arg3: any): [any, any, any] {
  return [arg3, arg2, arg1];
}
const result = getAny2(123, "철수", true);

// prettier-ignore
function getGeneric2<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
    return [arg3, arg2, arg1];
}
const result = getGeneric2(123, "철수", true);

//
// 7. generic-실무적 네이밍
// prettier-ignore
function getGeneric3<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
    return [arg3, arg2, arg1];
}
const result = getGeneric3(123, "철수", true);

function getGeneric4<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
const result = getGeneric4<number, string, boolean>(123, "철수", true);

//
// 8. generic-useState
function useMyState<T>(arg: T): [T, () => void] {
  const state = arg;

  const setState = () => {
    // 1. 스테이트 변경
    // 2. 컴포넌트를 리렌더링하는 기능
  };

  return [state, setState];
}

const [count, setCount] = useMyState(0);
