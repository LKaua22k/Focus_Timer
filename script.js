// Play timer
const Play = {
    playButton: document.querySelector('.play'),
    pausebutton: document.querySelector('.pause'),

    start:() => {
        Play.playButton.classList.add('hide')
        Play.pausebutton.classList.remove('hide')
    },

    close:() =>{
        Play.playButton.classList.remove('hide')
        Play.pausebutton.classList.add('hide')
    }
}

Play.playButton.addEventListener('click', Play.start)
Play.pausebutton.addEventListener('click', Play.close)