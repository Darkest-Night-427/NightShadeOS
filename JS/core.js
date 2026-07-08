// NightShadeOS Core Engine
// Version: v0.0.1-alpha


const bootMessages = [

    "Initializing Core...",

    "Loading Sanctum...",

    "Preparing Applications...",

    "Establishing Astral Services...",

    "Checking Memory...",

    "Preparing Launcher...",

    "Ready."

];


let messageIndex = 0;

let progress = 0;


const messageBox =
document.getElementById("boot-message");


const progressBar =
document.getElementById("progress");



function updateBoot(){

    if(messageIndex < bootMessages.length){

        messageBox.textContent =
        bootMessages[messageIndex];

        messageIndex++;

    }


    progress += 20;


    if(progress > 100){

        progress = 100;

    }


    progressBar.style.width =
    progress + "%";


    if(progress === 100){

        clearInterval(bootTimer);

        finishBoot();

    }

}



function finishBoot(){

    messageBox.textContent =
    "Welcome to NightShadeOS";


    setTimeout(()=>{

        window.location.href =
        "desktop.html";

    },1500);

}



const bootTimer = setInterval(

    updateBoot,

    900

);
