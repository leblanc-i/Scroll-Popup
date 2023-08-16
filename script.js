// Créer un événement au scroll

// Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
let playOne = true; // permettre une seule fois la lecture.

window.addEventListener("scroll", () => {
    // console.log(window.scrollY);
    if (window.scrollY > 90) {
        navbar.style.height = "40px";
    } else {
        navbar.style.height = "90px";
    }
    if (window.scrollY > 320) {
        imgImprovise.style.transform = "translateX(0)";
        imgImprovise.style.opacity = "1";
    }
    if (window.scrollY > 1000 && playOne) {
        let popup = document.querySelector(".pop-up");
        popup.style.opacity = 1;   
        popup.style.transform = "translateX(0)"; 
        playOne = false;  
    }
});
closeBtn.addEventListener("click", () => {
    popup.style.transform = "translateX(1000px)"; 
});