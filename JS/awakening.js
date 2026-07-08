// NightShadeOS Awakening
// Moon Key System


const correctPIN = "0427";


let entered = "";


const pinBox =
document.getElementById("pin");


const message =
document.getElementById("message");



document.querySelectorAll(
"#keypad button"
).forEach(button=>{


button.onclick = ()=>{


let value =
button.textContent;



if(value==="C"){

    entered="";

}


else if(value==="↵"){


    if(entered===correctPIN){

        message.textContent =
        "Access Granted";


        setTimeout(()=>{

            window.location.href =
            "desktop.html";

        },800);


    }

    else{

        message.textContent =
        "Incorrect Moon Key";

        entered="";

    }


}


else{

    if(entered.length < 4){

        entered += value;

    }

}



pinBox.value =
entered;


};


});
