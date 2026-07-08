function updateVeilClock(){

    const now = new Date();


    document.getElementById(
        "veil-time"
    ).textContent =
    now.toLocaleTimeString([], {
        hour:"2-digit",
        minute:"2-digit"
    });


    document.getElementById(
        "veil-date"
    ).textContent =
    now.toDateString();

}


setInterval(
    updateVeilClock,
    1000
);


updateVeilClock();



document.getElementById(
    "unlock"
).onclick = ()=>{

    window.location.href =
    "awakening.html";

};
