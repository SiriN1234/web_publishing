window.addEventListener("load", function(){
    let section = document.querySelector("#section1");
    let titleInput = section.querySelector(".title-input");
    let addButton = section.querySelector(".add-button");
    let delButton = section.querySelector(".del-button");
    let menuList = section.querySelector(".menu-list");

    addButton.onclick = function(){
        let textNode = document.createTextNode(titleInput.value);
        let liNode = document.createElement("li");  // li 태그를 만듦
        liNode.appendChild(textNode);   // li 태그에 textNode를 추가
        menuList.appendChild(liNode);   // menuList에 li 태그 추가
    };

    delButton.onclick = function(){
        let liNode = menuList.children[0];  // 자식 중 첫 번째 태그
        menuList.removeChild(liNode);   // li 태그에 관해 부모와의 연결을 제거
    };

});