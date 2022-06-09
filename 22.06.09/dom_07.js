window.addEventListener("load", function(){
    let section = document.querySelector("#section1");
    let noticeList = section.querySelector(".notice-list");
    let upButton = section.querySelector(".up-button");
    let downButton = section.querySelector(".down-button");
    let tbodyNode = section.querySelector("tbody");
    let currentNode = tbodyNode.firstElementChild;

    upButton.onclick = function(){
        let prevNode = currentNode.previousElementSibling;
        if(prevNode == null) {
            alert("더 이상 이동이 안됩니다");
            return;
        }
        tbodyNode.insertBefore(currentNode, prevNode);
    };

    downButton.onclick = function(){
        let nextNode = currentNode.nextElementSibling;
        if(nextNode == null) {
            alert("더 이상 이동이 안됩니다");
            return;
        }
        // insertBefore란 currentNode 앞으로 nextNode를 이동한다
        tbodyNode.insertBefore(nextNode, currentNode);
    };

});