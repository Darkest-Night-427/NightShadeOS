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



function setupWindow(win){


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


    };

}
