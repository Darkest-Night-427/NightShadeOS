// NightShadeOS Lunar Launcher
// Version: v0.0.1-alpha


const moonButton =
document.getElementById(
    "launcher-button"
);


const lunarLauncher =
document.getElementById(
    "lunar-launcher"
);



let launcherOpen = false;



moonButton.addEventListener(

"click",

()=>{


    launcherOpen =
    !launcherOpen;



    if(launcherOpen){

        lunarLauncher.style.display =
        "block";

    }

    else{

        lunarLauncher.style.display =
        "none";

    }


}

);
