window.addEventListener("load", function(){
    let section = document.querySelector("#section");
    let container = section.querySelector(".container");
    let box = section.querySelector(".box");
    let dragging = false;
    let offset = {x : 0, y: 0};
    
    // onmousedown은 마우스가 눌린 상태
    container.onmousedown = function(e){
        //선택된 객체가 box라면. dragging을 true로 처리
        if(e.target == box){
            dragging = true;
        };
    };

    container.onmouseup = function(e){
        //선택된 객체가 box라면. dragging을 false로 처리
        if(e.target == box){
            dragging = false;
        };
    };

    box.onmousedown = function(e){
        offset.x = e.offsetX;
        offset.y = e.offsetY;
    }

    container.onmousemove = function(e){
        if (dragging){
            // box.style.left = e.x + "px";
            // box.style.top = e.y + "px";
            box.style.left = e.x - offset.x + "px";
            box.style.top = e.y - offset.y + "px";
        };
    };
});