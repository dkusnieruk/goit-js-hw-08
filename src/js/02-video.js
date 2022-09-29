import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector(`iframe`);

const player = new Player(iframe);
player.on('timeupdate', throttle(onTimedUpdate, 1000));


player.on('timeupdate', function(data) {
    
    console.log(data.seconds);
    
    localStorage.setItem("videoplayer-current-time", `${data.seconds}`);       
});

const theme = localStorage.getItem("videoplayer-current-time");



console.log(theme);

player.setCurrentTime(theme).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});