import { useRef, useState, useEffect } from 'react'
import TimerDisplay from './TimerDisplay'
import TimerControls from './TimerControls'

const Timer = () => {
  const timerRef = useRef(null)
  const [time, setTime] = useState(() => {
    const stored = localStorage.getItem("time")
    return stored !== null ? Number(stored) : 0
  })
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (time === null) {
      localStorage.removeItem("time")
    } else {
      localStorage.setItem("time", time)
    }
  }, [time])

  const toggleTimer = () => {
    if (isRunning) {
      // clear interval to stop timer
      clearInterval(timerRef.current)
      timerRef.current = null
    } else {
      // start the timer
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    }

    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    clearInterval(timerRef.current)
    setIsRunning(false)
    setTime(null)
    timerRef.current = null
  }

  return (
    <>
      <TimerDisplay time={time ?? 0} />
      <TimerControls onToggle={toggleTimer}
        isRunning={isRunning}
        onReset={resetTimer} />
    </>
  )
}

export default Timer