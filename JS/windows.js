// NightShadeOS Window Core
// Version: v0.1-alpha


let windowCount = 0;


function createWindow(title, content){


    windowCount++;


    const win =
    document.createElement("div");
    
    win.style.left =
    (140 + windowCount * 25) + "px";

    win.style.top =
    (80 + windowCount * 25) + "px";

    win.className =
    "ns-window";


    win.id =
    "window-" + windowCount;



    win.innerHTML = `

        <div class="window-header">

            <span>
                ${title}
            </span>


            <div class="window-buttons">

                <button class="minimize">
                    —
                </button>


                <button class="maximize">
                    □
                </button>


                <button class="close">
                    X
                </button>

            </div>

        </div>


        <div class="window-content">

            ${content}

        </div>

    `;



    document
    .getElementById("sanctum")
    .appendChild(win);



    setupWindow(win);


}



function setupWindow(win){makeDraggable(win);


    win.querySelector(".close")
    .onclick = ()=>{

        win.remove();

    };



    win.querySelector(".minimize")
    .onclick = ()=>{

        win.style.display =
        "none";

    };



    win.querySelector(".maximize")
    .onclick = ()=>{


        win.classList.toggle(
            "maximized"
        );

let highestZ = 100;

function makeDraggable(win){

    const header =
    win.querySelector(
        ".window-header"
    );

    let dragging = false;

    let offsetX = 0;
    let offsetY = 0;


    header.addEventListener(
        "mousedown",
        (e)=>{

            dragging = true;

            highestZ++;

            win.style.zIndex =
            highestZ;

            offsetX =
            e.clientX -
            win.offsetLeft;

            offsetY =
            e.clientY -
            win.offsetTop;

        }
    );


    document.addEventListener(
        "mousemove",
        (e)=>{

            if(!dragging) return;

            win.style.left =
            (e.clientX - offsetX)
            + "px";

            win.style.top =
            (e.clientY - offsetY)
            + "px";

        }
    );


    document.addEventListener(
        "mouseup",
        ()=>{

            dragging = false;

        }
    );

}
        
    };

}
