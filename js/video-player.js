///Tutorial for the educational project. Delete in the working project.

// width и height — ширина и высота контейнера для проигрывания видео;
// videoWidth и videoHeight — внутреннее значение ширины и высоты видео, если размеры не известны, равны 0;
// poster — ссылка на картинку, которую можно показывать, пока видео недоступно(обычно это один
// из первых непустых кадров).

// Состояние сети и готовность к работе
// src — ссылка(url) на воспроизводимый контент
// buffered — буферизованные куски видео

// Воспроизведение и контролы
// currentTime — текущий момент проигрывания(с.)
// duration — длительность медиа - контента(с.)
// paused — находится ли воспроизведение на паузе
// ended — закончилось ли проигрывание
// muted — включение / выключение звука
// volume — уровень звука[0, 1]
// play() — начать проигрывание
// pause() — поставить на паузу

// События
// oncanplay — можно начать проигрывание
// ontimeupdate — изменена позиция проигрывания
// onplay — запущено проигрыв
// onpause — нажата пауза
// onended — воспроизведение закончилось

export default function playVideo() {
  /// General variables
  const videoFrame = document.querySelector('.video-presentation')
  const videoPlayer = videoFrame.querySelector('.video-viewer')
  const playVideoButton = videoFrame.querySelector('.play-video-button')

  /// Controls
  const controlButtons = videoFrame.querySelectorAll('.control-button')
  const controlPlay = videoFrame.querySelector('.play-icon')
  const controlVolume = videoFrame.querySelector('.volume-icon')
  const controlFullscreen = videoFrame.querySelector('.fullscreen-icon')
  const timelineBar = videoFrame.querySelector('.timeline')
  const volumeBar = videoFrame.querySelector('.volume')

  /// Events

  // Click on the big play button
  playVideoButton.addEventListener('click', toggleVideoPlayback)
  // Click on the video viewer area
  videoPlayer.addEventListener('click', pauseVideo)
  // Click on the playback control button
  controlPlay.addEventListener('click', toggleVideoPlayback)
  // Click on the volume control button
  controlVolume.addEventListener('click', toggleVolume)
  // Update the position on a timeline
  videoPlayer.addEventListener('timeupdate', updateTimelineBar)
  // Actions on video end event
  videoPlayer.addEventListener('ended', endVideoPlayback)
  // Manual value changes on the progress bars
  videoFrame.addEventListener('input', handleProgressBarChanges)
  // Switching to full screen mode and back
  controlFullscreen.addEventListener('click', toggleFullscreen)

  /// Functions

  function changeOneIconToOther(changeableIcon = '', currentIcon = '') {
    controlButtons.forEach(button => {
      if (button.classList.contains(changeableIcon)) {
        button.classList.remove(changeableIcon)
        button.classList.add(currentIcon)
      }
    })
  }

  function playVideo() {
    videoPlayer.play()
    videoFrame.classList.remove('hover')
    changeOneIconToOther('play-icon', 'pause-icon')
    changeOneIconToOther('reload-icon', 'pause-icon')
    playVideoButton.classList.add('hidden')
  }

  function pauseVideo() {
    videoPlayer.pause()
    changeOneIconToOther('pause-icon', 'play-icon')
    if (playVideoButton.classList.contains('hidden')) {
      playVideoButton.classList.remove('hidden')
    }
  }

  function stopVideo() {
    changeOneIconToOther('pause-icon', 'reload-icon')
    videoPlayer.currentTime = videoPlayer.duration
    videoPlayer.pause()
  }

  function playSound() {
    changeOneIconToOther('mute-icon', 'volume-icon')
    videoPlayer.muted = false
    updateVolumeBar(40)
  }

  function muteSound() {
    changeOneIconToOther('volume-icon', 'mute-icon')
    videoPlayer.muted = true
    updateVolumeBar(0)
  }

  function toggleVideoPlayback() {
    if (videoPlayer.paused) {
      playVideo()
    } else {
      pauseVideo()
    }
  }

  function toggleVolume() {
    if (videoPlayer.muted) {
      playSound()
    } else {
      muteSound()
    }
  }

  function endVideoPlayback() {
    stopVideo()
    videoFrame.classList.add('hover')
  }

  function updateTimelineBar() {
    let videoCurrentTime = Math.round(videoPlayer.currentTime)
    let videoTotalLength = Math.round(videoPlayer.duration)
    let value = (videoCurrentTime * 100 / videoTotalLength) || 0
    updateProgressBar(timelineBar, value);
  }

  function updateVolumeBar(value) {
    videoPlayer.volume = value / 100
    updateProgressBar(volumeBar, value)
  }

  function updateProgressBar(bar, value) {
    bar.value = value
    bar.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #b3b3b3 ${value}%, #b3b3b3 100%)`
  }

  function handleProgressBarChanges(event) {
    const target = event.target
    const value = target.value

    if (target === timelineBar) {
      videoPlayer.currentTime = value * videoPlayer.duration / 100
    }
    if (target === volumeBar) {
      updateVolumeBar(value)
      if (value === '0') {
        changeOneIconToOther('volume-icon', 'mute-icon')
      } else {
        changeOneIconToOther('mute-icon', 'volume-icon')
      }
    }
  }

  // Fullscreen
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      changeOneIconToOther('fullscreen-icon', 'fullscreen-exit-icon')
      videoFrame.requestFullscreen().catch(err => {
        alert(`Error to enable fullscreen mode: ${err.message} (${err.name})`)
      })
    } else {
      changeOneIconToOther('fullscreen-exit-icon', 'fullscreen-icon')
      document.exitFullscreen()
    }
  }

}


