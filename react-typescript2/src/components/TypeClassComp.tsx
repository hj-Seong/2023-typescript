import React, { Component } from 'react'

// props 값을 가져오기 위해 interface로 지정해서 사용
interface CounterProps {
    startNumber: number;
    name? :string;
}
// state를 사용하기위해서 interface를 지정해서 넣어야한다
// interface에 이름과 타입이 없으면 쓸수 없다
interface CounterState {
    number: number;
    text : string;
}

// 클래스형의 제너릭의 자료형(타입)을 지정
// 자료형을 지정해주면 들어오는 props의 자료형을 알고 메소드를 쓸수있다
// 이름을 미리 지정을 했기때문에 props의 이름을 자동완성으로 가져올수있다
export default class TypeClassComp
        extends Component<CounterProps, CounterState> {
            // Component의 자료형으로 props과 state를 지정(순서고정)


  // state를 사용하기위해 constructor 생성
  // props의 자료형은 위에서 작성한 interface로 지정
  constructor(props: CounterProps) {
    super(props)
    this.state = {
        number : props.startNumber,
        text :"hi"
    }
  }

  render() {
    return (
      <div>
        <h3>TypeClassComp</h3>
        {/** render에서 화면에 출력되는 방식은 동일 */}
        <p>{this.props.startNumber}</p>
        <p>{this.props.name}</p>
        <p>{this.state.number}</p>
        {/** props의 boolean 값 check를 받아와서 삼항연산자로
         * 확인/미확인을 출력하세요
         */}

         {/**state에 배열값 [1,2,3]를 넣어 li태그로 출력하세요 */}
      </div>
    )
  }
}
