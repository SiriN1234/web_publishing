window.addEventListener("load", function(){
    let section = document.querySelector("#section");
    let imgList = section.querySelector("#img-list");
    let imgs = section.querySelectorAll(".img");
    let currentImg = section.querySelector(".current-img");
    
    /*
    for(let i = 0; i < imgs.length; i++){
        imgs[i].onclick = function(e){
            console.log(e.target.src);
            currentImg.src = e.target.src;
        };
    };
    */

    /*
        버블링
        상위 객체에서도 이벤트를 bubbling을 통해서 받기 때문에
        상위 객체에서도 관리가 가능 함
    */
    imgList.onclick = function(e){
        if(e.target.className =='img')
            currentImg.src = e.target.src;
    };

});