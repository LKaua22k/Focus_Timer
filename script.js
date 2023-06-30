// Play timer
const Play = {
    playButton: document.querySelector('.play'),
    pausebutton: document.querySelector('.pause'),

    start:() => {
        Play.playButton.classList.add('hide')
        Play.pausebutton.classList.remove('hide')
        Set.setButton.classList.add('hide')
        Set.stopButton.classList.remove('hide')

    },

    close:() =>{
        Play.pausebutton.classList.add('hide')
        Play.playButton.classList.remove('hide')
    }
}
const Set = {
    setButton: document.querySelector('.set'),
    stopButton: document.querySelector('.stop'),

    start:() => {
        minutes = prompt("Quantos minutos?")

    },

    stop:() => {
        Play.playButton.classList.remove('hide')
        Play.pausebutton.classList.add('hide')
        Set.setButton.classList.remove('hide')
        Set.stopButton.classList.add('hide')
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

let minutes

Play.playButton.addEventListener('click', Play.start)
Play.pausebutton.addEventListener('click', Play.close)
Set.stopButton.addEventListener('click', Set.stop)
Set.setButton.addEventListener('click', Set.start)
Sound.soundOn.addEventListener('click', Sound.on )
Sound.soundOff.addEventListener('click', Sound.off )