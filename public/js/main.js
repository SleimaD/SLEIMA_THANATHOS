document.addEventListener("DOMContentLoaded", () => {
    //! Twitter
    let nbrAboTwitter = 12000;
    let incrementnbrTwitter = 350;    

    //! Youtube
    let nbrAboYoutube = 5000;
    let incrementnbrYoutube = 150;

    //! Facebook
    let nbrAboFacebook = 7500;
    let incrementnbrFacebook = 200; 


    let lesnbrs = document.querySelectorAll(".numbers");

    let nbrAboArray = [nbrAboTwitter, nbrAboYoutube, nbrAboFacebook];

    let incrementnbrArray = [incrementnbrTwitter, incrementnbrYoutube, incrementnbrFacebook];

    lesnbrs.forEach((element, i) => {

        let nbrdebase = 0;

        setInterval(() => {
            
            nbrdebase += incrementnbrArray[i];
            element.innerText = nbrdebase;

            if (nbrdebase >= nbrAboArray[i]) {
                element.innerText = nbrAboArray[i];   
            }
        }, 15);
    });
});
 

  

