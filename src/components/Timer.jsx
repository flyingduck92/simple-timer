import { useRef, useState } from 'react'
import TimerDisplay from './TimerDisplay'
import TimerControls from './TimerControls'

const Timer = () => {
  const timerRef = useRef(null)
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

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
    setTime(0)
    timerRef.current = null
  }

  return (
    <>
      <TimerDisplay time={time} />
      <TimerControls onToggle={toggleTimer}
        isRunning={isRunning}
        onReset={resetTimer} />
    </>
  )
}

export default Timer