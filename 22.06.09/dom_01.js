window.addEventListener("load", function(){
    let section = document.querySelector("#section1");
    let srcInput = section.querySelector(".src-input");
    let changeButton = section.querySelector(".change-button");
    let img = section.querySelector(".img");

    changeButton.onclick = function(){
        if(srcInput.value != 1 && srcInput.value != 2 && srcInput.value != 3)
            img.src = "";
        else
            img.src = "./images/img" + srcInput.value + ".jpg";
    }
});