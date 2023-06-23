import React, { useEffect, useState } from 'react'

// API로 가져올 데이터 형태
interface dataBusan {
    AREA_NM :string,
    MENU_NM :string,
    RSTR_NM :string
}


// Fetch를 통해서 외부 API(서버와 연결해서 데이터가져오는)를 사용하여
// 그값을 가져와서 state에 저장해서 사용할수 있다
export default function FetchComp() {

  const [data, setData] = useState<dataBusan>()


  // FetchAPI를 사용할때 외부(서버)
  // 항상 코드안에서 쓸때와 속도차이가 나기때문에 비동기로 가져온다
  const getData = async () => {
    const promise = await fetch("https://busan-food.openapi.redtable.global/api/menu-dscrn/korean?serviceKey=3cOsoxEnSZYVeTrfKrARQcYYonhykJwpZEurgWtYALHVUijbNn2a5tu7p5V7MIcw");
    
    // await를 이용하여 값 가져오기
    const response = await promise.json();
    console.log(response.body[0])
  }
  // 한번만 데이터 가져옴
  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
        <h3>FetchComp</h3>
    </div>
  )
}
