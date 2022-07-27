import { useMemo } from 'react'

export const GameOfLife = () => {
  const screenSize = useMemo(
    () => ({
      h: document.documentElement.clientHeight,
      w: document.documentElement.clientWidth,
    }),
    []
  )
  return <canvas height={screenSize.h} width={screenSize.w} />
}
