window.addEventListener("load", function(){
    let section = document.querySelector("#section");
    let fileButton = section.querySelector(".file-button");
    let fileTriggerButton = section.querySelector(".file-trigger-button");

    // fileButton.onclick에 대해서는 미정의
    fileButton.onclick = function(e){
    };

    fileTriggerButton.onclick = function(e){
        let event = new MouseEvent("click", {
            'view' : window,
            'bubbles' : true,
            'cancelable' : true
        })
        // 숨겨진 fileButton은 event(위에서 정의한 마우스 이벤트)를 수행한다
        fileButton.dispatchEvent(event);
    }


});