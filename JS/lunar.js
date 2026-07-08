// NightShadeOS Lunar Launcher
// Version: v0.0.1-alpha


const moonButton =
document.getElementById(
"launcher-button"
);


let launcherOpen = false;



moonButton.addEventListener(

"click",

()=>{


    launcherOpen =
    !launcherOpen;


    console.log(

    launcherOpen

    ? "Lunar Launcher opened"

    : "Lunar Launcher closed"

    );


}

);
