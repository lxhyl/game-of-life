import { useMemo } from 'react'
import { greet } from "../assets/wasm/game_of_life_core_bg.wasm"

export const GameOfLife = () => {
  const screenSize = useMemo(
    () => ({
      h: document.documentElement.clientHeight,
      w: document.documentElement.clientWidth,
    }),
    []
  )
  const test = () => {
    console.log("111")
    console.log("greet", greet(1, 2))
  }
  return <div>
    <div className='z-50'>
      <button onClick={test}>Test</button>
    </div>
    <canvas className='fixed z-0' height={screenSize.h} width={screenSize.w} />

  </div>
}
