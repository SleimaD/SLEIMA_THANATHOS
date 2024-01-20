document.addEventListener("DOMContentLoaded", () => { //eventlistener
    //! Twitter
    let nbrAboTwitter = 12000; //number we want to obtain at the end
    let incrementnbrTwitter = 350;   //incrementation numbers

    //! Youtube
    let nbrAboYoutube = 5000; //number we want to obtain at the end
    let incrementnbrYoutube = 150; //incrementation numbers

    //! Facebook
    let nbrAboFacebook = 7500; //number we want to obtain at the end
    let incrementnbrFacebook = 200;  //incrementation numbers


    let lesnbrs = document.querySelectorAll(".numbers"); //targeting my numbers elements

    let nbrAboArray = [nbrAboTwitter, nbrAboYoutube, nbrAboFacebook]; //array to stock my number for my loop

    let incrementnbrArray = [incrementnbrTwitter, incrementnbrYoutube, incrementnbrFacebook]; //array to stock my incrementations for my loop

    lesnbrs.forEach((element, i) => {

        let nbrdebase = 0; //setting at 0

        setInterval(() => {
            
            nbrdebase += incrementnbrArray[i]; // adding my incrementation to 'nbrdebase'
            element.innerText = nbrdebase; 

            if (nbrdebase >= nbrAboArray[i]) {
                element.innerText = nbrAboArray[i];   
            }
        }, 13); // 15 milliseconds to run the incrementation
        confetti() //adding confettis
    });
});

  

