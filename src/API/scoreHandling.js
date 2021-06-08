import { firestore } from "../firebase";

async function getHighScore(imageID) {
  let highScore
  await firestore.collection(imageID).orderBy("score", "asc").limit(1).get().then(snapshotterino => {
    snapshotterino.forEach(doc => {
      highScore = doc.data()
    })
  })
  return highScore
}

async function getScores(imageID) {
  let data = []
  await firestore.collection(imageID).get().then(query => {
    query.forEach(doc => {
      data.push(doc.data())
    })
  })
  return data
}

function postScore(imageID, name, score) {
  firestore.collection(imageID).add({
    name: name,
    score: score
  })
}

function format(time) {   
  // Hours, minutes and seconds
  var hrs = ~~(time / 3600);
  var mins = ~~((time % 3600) / 60);
  var secs = ~~time % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = "";
  if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }
  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}

export {getHighScore, getScores, postScore, format}