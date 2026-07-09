// NightShadeOS Sanctum Engine
// Version: v0.0.1-alpha


const clock =
document.getElementById("clock");



function updateClock(){

    const now = new Date();


    let hours =
    now.getHours();


    let minutes =
    now.getMinutes()
    .toString()
    .padStart(2,"0");


    let period =
    hours >= 12 ? "PM" : "AM";


    hours =
    hours % 12 || 12;


    clock.textContent =
    `${hours}:${minutes} ${period}`;

}



setInterval(

    updateClock,

    1000

);


updateClock();



// Moon Launcher button


const launcher =
document.getElementById(
    "launcher-button"
);


launcher.addEventListener(

    "click",

    ()=>{

        console.log(
        "Opening Lunar Launcher..."

            // Launch Codex

const codexIcon = document.getElementById("codex-icon");

codexIcon.addEventListener("dblclick", () => {

    createWindow(

        "📁 Codex",

        `
        <h2>Welcome to Codex</h2>

        <hr>

        <p>Select a folder to begin.</p>

        <ul>

            <li>📁 Documents</li>

            <li>📁 Downloads</li>

            <li>📁 Pictures</li>

            <li>📁 Music</li>

        </ul>

        `

    );

});
            
        );

    }

);
