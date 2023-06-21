import React, { useState } from 'react'

// props의 값을 사용하기위해서 interface 작성
interface CounterProps {
    startNumber : number;
    name? :string;
}

// 매개변수로 받아오는 props 타입지정
export default function TypeFuncComp(props:CounterProps) {
  // 안에 있는 속성을 알고 있기때문에 
  // ctrl+space를 이용해서 이름을 찾을 수 있다
  const {startNumber, name} = props;

  // 현재 넣어준 값으로 타입이 고정되서 사용
  const [text, setText] = useState("텍스트 작성");
  // 만약 count에 들어갈 타입이 두개이상이라면 <>안에 직접적용
  const [count, setCount] = useState<number|undefined>(5)
  return (
    <div>
        <h3>TypeFuncComp</h3>
        <p>{props.startNumber}</p>
        <p>{props.name}</p>
        <p>{count}</p>
        <p>{text}</p>
        {/** props으로 check를 boolean 값으로 받아오기 */}

        {/** useState로 [1,2,3]만들어서 map으로출력하기 */}
    </div>
  )
}
