import apiKey from './config.js';


const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=Instrumental+rap&type=video&maxResults=10&videoEmbeddable=true&videoSyndicated=true&safeSearch=strict&videoDuration=short&key=${apiKey}`;

console.log(apiKey);


  
var playButton = document.getElementById("play-btn");
var errorMsg = document.getElementById("error");



playButton.addEventListener("click", function () {
    let randomVideoId = Math.floor(Math.random() * 10);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var DATA = xhr.response;
                console.log(DATA);
                const videoId = DATA.items[randomVideoId].id.videoId;
                console.log(randomVideoId);

                const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                document.getElementById("yt-video").src = embedUrl;
                // Activate LED effect on title
                document.getElementById("title").classList.add("led-effect");

            } else {
                errorMsg.innerHTML = "Error Fetching Data!";

            }
        }
    }

});


//dj scratch sounds
const scratchBtn = document.querySelectorAll(".btn");
scratchBtn[0].addEventListener("click", function (e) {

    var scrachSound = new Audio("./sounds/groovy-disco-drums-dj-away.wav");
    scrachSound.play();

});

scratchBtn[1].addEventListener("click", function (e) {

    var scrachSound = new Audio("./sounds/dj-scratch-2.wav");
    scrachSound.play();

});

scratchBtn[2].addEventListener("click", function (e) {

    var scrachSound = new Audio("./sounds/dj-scratch-3.wav");
    scrachSound.play();

});
scratchBtn[3].addEventListener("click", function (e) {

    var scrachSound = new Audio("./sounds/dj-scratch-4.wav");
    scrachSound.play();

});
scratchBtn[4].addEventListener("click", function (e) {

    var scrachSound = new Audio("./sounds/dj-scratch-5.mp3");
    scrachSound.play();

});

scratchBtn[5].addEventListener("click", function (e) {

    var scrachSound = new Audio("./sounds/dj-airhorn.mp3");
    scrachSound.play();

});
scratchBtn[6].addEventListener("click", function (e) {

    var scrachSound = new Audio("./sounds/dj-beats.mp3");
    scrachSound.play();

});
scratchBtn[7].addEventListener("click", function (e) {

    var scrachSound = new Audio("./sounds/dj-packs.mp3");
    scrachSound.play();

});


