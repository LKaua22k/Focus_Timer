// Play timer
const Play = {
    playButton: document.querySelector('.play'),
    pausebutton: document.querySelector('.pause'),

    start:() => {
        Play.playButton.classList.add('hide')
        Play.pausebutton.classList.remove('hide')
        Set.setButton.classList.add('hide')
        Set.stopButton.classList.remove('hide')
        Sound.pressButton
        countDown()
    },

    close:() =>{
        Play.pausebutton.classList.add('hide')
        Play.playButton.classList.remove('hide')

        clearTimeout(timerTimeout)
    },
}
const Set = {
    setButton: document.querySelector('.set'),
    stopButton: document.querySelector('.stop'),

    start:() => {
        let Newinutes = prompt("Quantos minutos?")
        if(!Newinutes){
            reseTimeout()
            return
        }

        minutes = Newinutes
        // minutesDisplay.textContent = String(minutes).padStart(2,"0")
        updateTimer(minutes,0)
    },

    stop:() => {
        resetButtons()
        reseTimeout()
    }
}
const Sound = {
    soundOn: document.querySelector('.on'),
    soundOff:document.querySelector('.muted'),
    
    buttonPressAudio: new Audio(
        "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
      ),

    kitchenTimer: new Audio(
        "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
      ),

    bgAudio = new Audio(
        "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true"
    ),
    
    on:() => {
        Sound.soundOn.classList.add('hide')
        Sound.soundOff.classList.remove('hide')
    },

    off:() => {
        Sound.soundOn.classList.remove('hide')
        Sound.soundOff.classList.add('hide')
    },

    pressButton:() => { Sound.buttonPressAudio.play()},

}

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeout

function updateTimer(minutes,seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2,"0")
    secondsDisplay.textContent = String(seconds).padStart(2,"0")
}

function resetButtons(){
    Play.playButton.classList.remove('hide')
    Play.pausebutton.classList.add('hide')
    Set.setButton.classList.remove('hide')
    Set.stopButton.classList.add('hide')
}

function reseTimeout(){
    updateTimer(minutes, 0)
    clearTimeout(timerTimeout)
}


function countDown(){
    timerTimeout = setTimeout(() => {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        if(minutes <= 0 && seconds <=0){
            resetButtons()
            return;
        }

        if(seconds <= 0){
            seconds = 10

            --minutes
            // minutesDisplay.textContent = String(minutes - 1).padStart(2,"0")
        }


        // secondsDisplay.textContent = String(seconds - 1).padStart(2,"0")
        updateTimer(minutes , String(seconds -1))
        
        countDown()
    }, 1000)
}

Play.playButton.addEventListener('click', Play.start)
Play.pausebutton.addEventListener('click', Play.close)
Set.stopButton.addEventListener('click', Set.stop)
Set.setButton.addEventListener('click', Set.start)
Sound.soundOn.addEventListener('click', Sound.on )
Sound.soundOff.addEventListener('click', Sound.off )