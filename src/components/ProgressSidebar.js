import React, {useState, useEffect} from 'react'
import { format } from '../API/scoreHandling'

function ProgressSidebar(props) {
  const [timer, setTimer] = useState(0)

  const waldo = require('../images/waldo.webp')
  const wenda = require('../images/wenda.webp')
  const wizard = require('../images/wizard.webp')
  const odlaw = require('../images/odlaw.webp')  

  useEffect(() => {
    const timerTick = setInterval(()=>tickUp(), 1000)

    return () => {
      props.sendScore(timer)
      clearInterval(timerTick)
    }
  })

  function tickUp() {
    let time = timer
    setTimer(time + 1)
  }

  let checkmark = (
    <p className="text-green-400 text-7xl absolute inset-x-0 inset-y-0">✓</p>
  )

  return (
    <div className="absolute top-28 rounded w-16 bg-green-700 text-center inset-y -inset-x-16">
      <div className="m-1 relative h-16">
        <img className="h-16 w-16 object-cover object-top" alt="waldo" src={waldo.default} />
        {props.waldo ? checkmark : '' }
      </div>

      <div className="m-1 relative h-16">
        <img className="h-16 w-16 object-cover object-top"  alt="waldo" src={wenda.default} />
        {props.wenda ? checkmark : '' }
      </div>

      <div className="m-1 relative h-16">
        <img className="h-16 w-16 object-cover object-top"  alt="waldo" src={wizard.default} />
        {props.wizard ? checkmark : '' }
      </div>

      <div className="m-1 relative h-16">
        <img className="h-16 w-16 object-cover object-top"  alt="waldo" src={odlaw.default} />
        {props.odlaw ? checkmark : '' }
      </div>

      <p className="text-white">Timer</p>
      <p className="pb-2 text-xl text-white">{format(timer)}</p>
    </div>
  )
}

export default ProgressSidebar
