const button = document.getElementById("exploreBtn");

button.addEventListener("click",function(){
    const gamesSection = document.querySelector(".games");

    window.scrollTo({
        top: gamesSection.offsetTop,
        behavior: "smooth"
    });
})