let songIndex;
const audioElement = new Audio(`./songs/1.mp3`)
const progressBar = document.querySelector('#progressBar')
const masterPlay = document.querySelector("#masterPlay")
const singleSongs = Array.from(document.querySelectorAll('.singleSong'));
const playIcon = Array.from(document.querySelectorAll('.playIcon'));
const playerSongName = document.querySelector('.playerSongName');
// const songsName = document.querySelectorAll('.songsName');
const previousBtn = document.querySelector(`#previousBtn`);
const nextBtn = document.querySelector(`#nextBtn`);
const id = parseInt(document.querySelector(`id`));
const timeStamp = document.querySelector(`.timeStamp`);
const playerTime = document.querySelector(`.playerTime`);

const makeAllPlays = () => {
    playIcon.forEach((elem) => {
        elem.classList.remove(`fa-circle-pause`);
        elem.classList.add(`fa-circle-play`);
    })
}

const songs = [
    {songName:"Egzod - Rise Up ",filepath:"./songs/0.mp3",coverPath:"./coverImg/1.jpg" ,duration:"3:08"},
    {songName:"Leat_eq - Sunrise [NCS Release]",filepath:"./songs/1.mp3",coverPath:"./coverImg/2.jpg" ,duration:"2:26"},
    {songName:"Anikdote - Turn It Up ",filepath:"./songs/2.mp3",coverPath:"./coverImg/3.jpg" ,duration:"4:07"},
    {songName:"Barren Gates - Devil ",filepath:"./songs/3.mp3",coverPath:"./coverImg/4.jpg",duration:"2:56" },
    {songName:"Cartoon - Why We Lose ",filepath:"./songs/4.mp3",coverPath:"./coverImg/5.jpg" ,duration:"3:33"},
    {songName:"Unknown Brain - Why Do I",filepath:"./songs/5.mp3",coverPath:"./coverImg/6.jpg",duration:"3:16" },
    {songName:"Different Heaven EH_DE - My Heart ",filepath:"./songs/6.mp3",coverPath:"./coverImg/7.jpg",duration:"4:27" },
]
//////////////////////////////////////////////////////////////////////////////////
singleSongs.forEach( (elem,i)=> {
    elem.querySelector('.songsName').innerHTML = songs[i].songName;
    elem.querySelector('img').src = songs[i].coverPath;
    elem.querySelector(`.timeStamp`).innerText = songs[i].duration;

})


masterPlay.addEventListener('click',() => {
    if(audioElement.paused || audioElement.currentTime<=0){
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        audioElement.play();
        playerSongName.innerHTML = songs[songIndex].songName;

    }
    else{
          masterPlay.classList.remove(`fa-circle-pause`);
          masterPlay.classList.add(`fa-circle-play`);
          audioElement.pause();
    }
})
let progress;
    audioElement.addEventListener('timeupdate', ()=> {
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);////////P =CT/D * 100////percentage progress
     progressBar.value =  progress;
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration)/100  //////// CT =P*D/100/   ///progress
})

playIcon.forEach( (elem) => {
        elem.addEventListener('click', (e) => {
        makeAllPlays();
        e.target.classList.add(`fa-circle-pause`);
        e.target.classList.remove(`fa-circle-play`);
         songIndex = parseInt(e.target.id);
        audioElement.src = `/songs/${songIndex}.mp3`;
        audioElement.play();
        masterPlay.classList.remove(`fa-circle-play`);
        masterPlay.classList.add(`fa-circle-pause`);
        playerSongName.innerHTML = songs[songIndex].songName;

        // timeAssign();

    })
})

nextBtn.addEventListener('click',()=> {
    if(songIndex >= 6){
        songIndex=0;
    }
    else{
        console.log(songIndex);
        songIndex +=1;
    }
    audioElement.src = `./songs/${songIndex}.mp3`;
    audioElement.play();
    playerSongName.innerHTML = songs[songIndex].songName;

})
previousBtn.addEventListener('click',()=> {
    if(songIndex > 0){
        console.log(songIndex);
        songIndex -=1;
    }
    audioElement.src = `./songs/${songIndex}.mp3`
    audioElement.play()
    playerSongName.innerHTML = songs[songIndex].songName;
})

// const changeSongName = (e) => {
//     singleSongs.forEach( (elem) => {
//         // console.log(e.target.elem);
//         // console.log(e.target.songName);
//         playerSongName.innerHTML = 
//     })
// }
const timeAssign = () => {
    console.log(audioElement.duration);
    // let currMinutes = audioElement.duration/60;
    // let currSeconds = audioElement.duration % 60;
    // playerTime.innerHTML = `${currMinutes}:${currSeconds}`
}
