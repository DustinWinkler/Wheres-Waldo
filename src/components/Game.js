import React, {useState} from 'react'
import ProgressSidebar from './ProgressSidebar'
import Scores from './Scores'
import {postScore, format} from '../API/scoreHandling'

function Game(props) {
  const [waldoFound, setWaldoFound] = useState(false)
  const [wendaFound, setWendaFound] = useState(false)
  const [wizardFound, setWizardFound] = useState(false)
  const [odlawFound, setOdlawFound] = useState(false)
  const [score, setScore] = useState(0)

  function receiveScore(num) {
    setScore(num)
  }

  let imageJSON = require("../waldo.json")
  imageJSON = imageJSON[props.imageName]
  let coords = imageJSON.coords

  function foundWaldo() {
    setWaldoFound(true)
  }

  function foundWenda() {
    setWendaFound(true)
  }

  function foundWizard() {
    setWizardFound(true)
  }

  function foundOdlaw() {
    setOdlawFound(true)
  }

  function allFound() {
    return (waldoFound && wendaFound && wizardFound && odlawFound)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target[0].value)
    postScore(props.imageName, e.target[0].value, score)
    setTimeout(()=>{window.location.reload()},1000)
  }

  let win = []
  let progress = []
  if (allFound()) {
    win = (
      <div>
        <div className="fixed z-10 inset-0 h-auto min-w-screen w-full bg-gray-200 opacity-80">
        </div>
        
        <div className="fixed inset-0 z-20 w-3/5 filter-none mx-auto my-4 text-center bg-green-300 rounded-lg p-4 text-white"
        style={{backgroundColor: "#29B38D"}}
        >

          <p className="mt-3 text-5xl font-bold">You did it!</p>

          <p className="mt-3 text-xl" >You finished in {format(score)}</p>

          <p className="m-3 text-lg">Please type your name below to submit your score!</p>

          <form onSubmit={handleSubmit}>
            <label className="p-2 block font-bold text-xl">
              Name
            </label>
            <input type="text" className="text-black rounded-xl mb-2 px-3" /> 
            <button className="block w-24 text-center my-6 mx-auto border-2 ">
              Submit</button>
          </form>

          <Scores imageID={props.imageName} />

        </div>
      </div>
      
    )
  } 
  if(!allFound()) {
    progress = (
      <ProgressSidebar waldo={waldoFound} wenda={wendaFound} wizard={wizardFound} odlaw={odlawFound} allFound={allFound} sendScore={receiveScore} />
    )
  }

  return (
    <div className="flex justify-center mb-1 relative">
      <div className={"relative " + (allFound() ? "filter blur" : '')}>
      <img alt={props.imageName} src={"./images/" + props.imageName + ".jpg"}
            style={{minwidth: "1000px", maxWidth: "1000px"}} />
      <button onClick={()=>{foundWaldo()}} className="absolute bg-blue-300 w-8 h-8 cursor-default opacity-0" style={{top: coords.waldo[0], left: coords.waldo[1]}} ></button>
      <button onClick={()=>{foundWenda()}} className="absolute bg-blue-300 w-8 h-8 cursor-default opacity-0" style={{top: coords.wenda[0], left: coords.wenda[1]}} ></button>
      <button onClick={()=>{foundWizard()}} className="absolute bg-blue-300 w-8 h-8 cursor-default opacity-0" style={{top: coords.wizard[0], left: coords.wizard[1]}} ></button>
      <button onClick={()=>{foundOdlaw()}} className="absolute bg-blue-300 w-8 h-8 cursor-default opacity-0" style={{top: coords.odlaw[0], left: coords.odlaw[1]}} ></button>

      {progress}
    </div>

      

      {win}
    </div>
  )
}

export default Game
