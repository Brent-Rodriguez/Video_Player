const video = document.getElementById('video')
const play = document.getElementById('play')
const stopvid = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')


// Play/ Pause Video
const toggleVideoStatus = () => {
  if(video.paused) {
    video.play()
  }else{
    video.pause()
  }
}

// Update Play/Pause Icon
const updatePlayIcon = () => {
  if(video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x">'
  }else{
    play.innerHTML='<i class="fa fa-pause fa-2x">'
  }
}

//Update Progress timestamp
const updateProgress = () => {

}

//Set progress time
const setProgress = () => {

}

//Stop video
const stopVideo = () => {
  video.currentTime = 0
  video.pause()
}



// Event Listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timestamp', updateProgress)


play.addEventListener('click', toggleVideoStatus)

stopvid.addEventListener('click', stopVideo)

progress.addEventListener('change', setProgress)