// NightShadeOS Navigation Core
// Version: v0.0.1-alpha


const userUnlocked =
localStorage.getItem(
    "nightshade_unlocked"
);



function bootRoute(){


    if(userUnlocked){

        window.location.href =
        "desktop.html";

    }

    else{

        window.location.href =
        "veil.html";

    }


}
