import { Component } from "react";

// extends: 상속
// Component도 일종의 class
// - 컴포넌트의 기능을 상속받아서 사용할 수 있다.
// class는 return이 없다. 그래서 render를 써서 return이 되게끔 한다.
// this는 자기 자신을 가리킴.
// this는 주체에 따라 가리키는 게 달라짐.
// 주체에 따라 바뀌는 게 헷갈리기 때문에(.bind(this)를 쓰는 등) 화살표 함수를 써서 직관적으로 알 수 있게 함.

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  counterUp = () => {
    this.setState({
      count: 1,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.counterUp}>카운트 올리기!!!</button>
        {/* <button onClick={counterDown}>카운트 내리기!!!</button> */}
      </>
    );
  }
}
