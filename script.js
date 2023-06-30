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

    stop:() => {
        Play.playButton.classList.remove('hide')
        Play.pausebutton.classList.add('hide')
        Set.setButton.classList.remove('hide')
        Set.stopButton.classList.add('hide')
    }
}

Play.playButton.addEventListener('click', Play.start)
Play.pausebutton.addEventListener('click', Play.close)
Set.stopButton.addEventListener('click', Set.stop)