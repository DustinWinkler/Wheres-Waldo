import React from 'react'
import {format} from '../API/scoreHandling'

function ImagePreview(props) {

  console.log(props)

  const highScoreText = "High Score: " + props.highScore.name + " - " + format(props.highScore.score)

  return (
    <div onClick={()=>{props.sendImageFunc(props.imageName)}}
    className="mx-auto mt-3 mb-6 text-center w-3/5 flex justify-center
              border-2 border-red-800 shadow-2xl rounded relative cursor-pointer">
      <div>
        <img alt={props.imageName} src={"./images/" + props.imageName + ".jpg"}
            className="rounded" />

        <div className="absolute w-full h-full bg-gradient-to-b from-gray-200 via-white to-transparent inset-0 opacity-0 hover:opacity-100 transition rounded">
        <p className="mt-10 mb-8 text-5xl font-bold">{props.imageName.split("_").join(" ")}</p>
        <p className="font-mono text-3xl">{props.loading ? "Loading high score" : highScoreText}</p>
        </div>
      </div>
    </div>
  )
}

export default ImagePreview
