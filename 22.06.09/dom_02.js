window.addEventListener("load", function(){
    let section = document.querySelector("#section1");
    let imgSelector = section.querySelector(".img-select");
    let changeButton = section.querySelector(".change-button");
    let img = section.querySelector(".img");

    changeButton.onclick = function(){
        img.src = "../images/" + imgSelector.value;
    }
});