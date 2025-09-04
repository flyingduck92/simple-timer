import { useEffect, useRef } from 'react'

const TimerControls = ({ isRunning, onToggle, onReset }) => {
  const startBtnRef = useRef(null)

  useEffect(() => {
    if (startBtnRef.current) {
      startBtnRef.current.focus()
    }
  }, [])

  return (
    <>
      <button ref={startBtnRef} onClick={onToggle} className="cursor-pointer mt-3 mr-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={onReset} className="cursor-pointer mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Reset
      </button>
    </>
  )
}

export default TimerControls