import React, {useState, useEffect} from 'react'
import {getScores, format} from '../API/scoreHandling'

function Scores(props) {
  const [scores, setScores] = useState([])
  const [loading, setLoading] = useState(true)  

  useEffect(() => {
    getScores(props.imageID).then(data => {
      let memes = data
      setScores(memes)
      setLoading(false)
    })
  },[])

  let scoreText = []

  

  return (
    <div className="scores">
      <h1 className="font-bold text-3xl mb-3 border-b-2 w-2/5 mx-auto">Scores</h1>
      {loading ? <p>Loading</p> : (
        <div className="grid grid-cols-2 w-3/5 mx-auto">
          <div>
            <h1 className="font-bold text-lg">Name</h1>
            {scores.map(score => <p>{score.name}</p>)}
          </div>
          <div>
            <h1 className="font-bold text-lg">Score</h1>
            {scores.map(score => <p>{format(score.score)}</p>)}
          </div>
        </div>
      ) }
    </div>
  )
}

export default Scores
