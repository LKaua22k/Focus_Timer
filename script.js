// Play timer
const Play = {
    playButton: document.querySelector('.play'),
    pausebutton: document.querySelector('.pause'),

    start:() => {
        Play.playButton.classList.add('hide')
        Play.pausebutton.classList.remove('hide')
        Set.setButton.classList.add('hide')
        Set.stopButton.classList.remove('hide')

        Play.countDown()
    },

    close:() =>{
        Play.pausebutton.classList.add('hide')
        Play.playButton.classList.remove('hide')
    },

    countDown:() => {
        setTimeout(() => {
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
            
            Play.countDown()
        }, 1000)
    }
}
const Set = {
    setButton: document.querySelector('.set'),
    stopButton: document.querySelector('.stop'),

    start:() => {
        minutes = prompt("Quantos minutos?")
        // minutesDisplay.textContent = String(minutes).padStart(2,"0")
        updateTimer(minutes,0)
    },

    stop:() => {
        resetButtons()
    }
}
const Sound = {
    soundOn: document.querySelector('.on'),
    soundOff:document.querySelector('.muted'),

    on:() => {
        Sound.soundOn.classList.add('hide')
        Sound.soundOff.classList.remove('hide')
    },

    off:() => {
        Sound.soundOn.classList.remove('hide')
        Sound.soundOff.classList.add('hide')
    }
}

function resetButtons(){
    Play.playButton.classList.remove('hide')
    Play.pausebutton.classList.add('hide')
    Set.setButton.classList.remove('hide')
    Set.stopButton.classList.add('hide')
}

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes

function updateTimer(minutes,seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2,"0")
    secondsDisplay.textContent = String(seconds).padStart(2,"0")
}

Play.playButton.addEventListener('click', Play.start)
Play.pausebutton.addEventListener('click', Play.close)
Set.stopButton.addEventListener('click', Set.stop)
Set.setButton.addEventListener('click', Set.start)
Sound.soundOn.addEventListener('click', Sound.on )
Sound.soundOff.addEventListener('click', Sound.off )