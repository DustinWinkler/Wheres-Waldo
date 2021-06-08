import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import ImagePreview from './components/ImagePreview'
import Game from './components/Game'
import {getHighScore, getScores} from './API/scoreHandling'

function App() {
  const [imageSelectedBool, setImageSelectedBool] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')
  const [loadingScores, setLoadingScores] = useState(true)
  const [highScores, setHighScores] = useState({
    "Ski_Trip": {"name": "Maggie", "score": "100"},
    "The_Moon": {"name": "Maggie", "score": "100"},
    "The_Race_Track": {"name": "Maggie", "score": "100"}
  })

  useEffect(() => {
    let prevState = highScores
    let promises = []
    let keys = []

    // Use Promise.all to await all high scores
    Object.keys(waldoJSON).forEach(keyText => {
      keys.push(keyText)
      promises.push(new Promise((resolve, reject) => {
        resolve(getHighScore(keyText))
      }))
    })

    Promise.all(promises).then(values => {
      values.forEach((thing, index) => {
        prevState[keys[index]] = thing
      })
      setHighScores(prevState)
      setLoadingScores(false)
    })

  }, [])

  const waldoJSON = require("./waldo.json")

  function receiveImage(imageName) {
    setImageSelectedBool(true)
    setSelectedImage(imageName)
  }

  function returnHome() {
    setImageSelectedBool(false)
    setSelectedImage('')
  }

  let previews = [
    <h1 className="text-2xl text-center text-white">Choose a Picture</h1>
  ]
  
  // Create Image Preview for each key in our JSON
  Object.keys(waldoJSON).forEach(keyText => {
    previews.push(
      <ImagePreview highScore={highScores[keyText]} sendImageFunc={receiveImage} loading={loadingScores} imageName={keyText} />
    )
  })

  let content
  if (!imageSelectedBool) {
    content = previews
  } else {
    content = ( <div>
        <Game imageName={selectedImage} />
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-b pb-3 from-red-400 to-red-300 min-h-screen h-full">
      <div>
        <Header homeFunc={returnHome} />
      </div>
      

      { content }
    </div>
  );
}

export default App;
