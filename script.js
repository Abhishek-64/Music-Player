// Initialize the Variables
let songIndex = 10;
let audioElement = new Audio("songs/11.mp3");
let masterPlay = document.getElementById("masterPlay");
let smasterPlay = document.getElementById("smasterPlay");
let myProgressBar2 = document.getElementById("myProgressBar2");
let myProgressBar1 = document.getElementById('myProgressBar1');
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let SongName = document.getElementById("SongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let SongImg= document.getElementById("songImg");

let songs = [
  {
    songName: "Warriyo - Mortals [NCS Release]",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
   

  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
    
  },
  {
    songName: "DEAF KEV - Invincible [NCS Release]-320k",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
    songduration : songItems[1].duration,
  },
  {
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
    songduration : songItems[1].duration,
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
    songduration :  songItems[1].duration,
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/6.jpg",
    songduration :  songItems[1].duration,
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/7.jpg",
    songduration : songItems[1].duration,
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/8.jpg",
    songduration : songItems[1].duration,
    
  },
  {
    songName: "Tumhari Kasam - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/9.jpg",
    songduration : songItems[1].duration,
  },
  {
    songName: "Na Jaana - Salam-e-Ishq",
    filePath: "songs/4.mp3",
    coverPath: "covers/10.jpg",
    songduration :  songItems[1].duration,
  },
  {
    songName: "Rudrastcam",
    filePath: "songs/music.mpeg",
    coverPath: "covers/image.jpeg",
    songduration :  songItems[1].duration,
  },
];
 
// Handle play/pause click
function playPause (){
  if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      this.classList.remove('fa-play-circle');
      this.classList.add('fa-pause-circle');
      gif.style.opacity = 1;
  }
  else{
      audioElement.pause();
      this.classList.remove('fa-pause-circle');
      this.classList.add('fa-play-circle');
      gif.style.opacity = 0;
  }
}
masterPlay.addEventListener('click' , playPause);
smasterPlay.addEventListener('click', playPause);




songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});

audioElement.onloadedmetadata = function () {
  myProgressBar1.max= myProgressBar2.max = audioElement.duration;

  myProgressBar1.value = myProgressBar2.value = audioElement.currentTime;
};


if (audioElement.play()) {
  setInterval(() => {
    myProgressBar1.value= myProgressBar2.value = audioElement.currentTime;
  }, 200);
}

function changeProgess () {
  audioElement.play();
  masterPlay.classList.add("fa-pause-circle");
  masterPlay.classList.remove("fa-play-circle");
  
  audioElement.currentTime = this.value;
 };
 myProgressBar1.addEventListener("change" , changeProgess);
 myProgressBar2.addEventListener('change', changeProgess);
// masterPlay.addEventListener("click", playPause);


const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{ 
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src = `songs/${songIndex+1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      SongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      smasterPlay.classList.remove('fa-play-circle');
      smasterPlay.classList.add('fa-pause-circle');
  })
})
function next (){
  if(songIndex>=10){
      songIndex = 0
  }
  else{
      songIndex += 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  SongName.innerText = songs[songIndex].songName;
  SongImg.src = songs[songIndex].coverPath;

  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  smasterPlay.classList.remove('fa-play-circle');
  smasterPlay.classList.add('fa-pause-circle');

}

document.getElementById('next').addEventListener('click',next);
document.getElementById('snext').addEventListener('click',next);

function previous (){
  if(songIndex<=0){
      songIndex = 0
  }
  else{
      songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  smasterPlay.classList.remove('fa-play-circle');
  smasterPlay.classList.add('fa-pause-circle');
}

document.getElementById('previous').addEventListener('click', previous);
document.getElementById('sprevious').addEventListener('click', previous);