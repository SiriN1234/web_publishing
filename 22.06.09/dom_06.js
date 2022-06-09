window.addEventListener("load", function(){
    let notices = [
        {"id" : 5, "title" : "가입인사3", "content" : "가입인사3", "writer" : "xxx"},
        {"id" : 6, "title" : "가입인사4", "content" : "가입인사4", "writer" : "ooo"},
    ];
    let section = document.querySelector("#section1");
    let noticeList = section.querySelector(".notice-list");
    let cloneButton = section.querySelector(".clone-button");
    let inputButton = section.querySelector(".input-button");
    let temptButton = section.querySelector(".temp-button");

    cloneButton.onclick = function(){
        // querySelector (먼저 있는 것 1개)
        // querySelectorAll (모든 것을 배열로 가져옴)
        let trNode = noticeList.querySelector("tbody tr");
        let cloneNode = trNode.cloneNode(true);
        // true : tr 하위까지 포함 복제하여 엘리먼트 생성
        //false : tr 본인만 복제하여 엘리먼트 생성
        let tbodyNode = noticeList.querySelector("tbody");
        tbodyNode.appendChild(cloneNode);
        // tbody 엘리먼트 하위로 복제된 것을 연결함
    };

    inputButton.onclick = function(){
        let tbodyNode = noticeList.querySelector("tbody");
        let trNode = noticeList.querySelector("tbody tr");
        let cloneNode = trNode.cloneNode(true);
        // querySelectorAll로 인해서 td[0]~td[3]
        let tds = cloneNode.querySelectorAll("td");
        // td의 값을 notice의 값으로 바꿔치기 함

        console.log(tds);
        tds[0].textContent = notices[0].id;
        tds[1].textContent = notices[0].title;
        tds[2].textContent = notices[0].content;
        tds[3].textContent = notices[0].writer;
        // tbodyNode 하위로 cloneNode를 붙여 넣음
        tbodyNode.appendChild(cloneNode);
    };

    temptButton.onclick = function(){
        let tempNode = section.querySelector("template");
        // true는 하위 전체를 import 함
        let cloneNode = document.importNode(tempNode.content, true);
        let tds = cloneNode.querySelectorAll("td");
        tds[0].textContent = notices[0].id;
        tds[1].textContent = notices[0].title;
        tds[2].textContent = notices[0].content;
        tds[3].textContent = notices[0].writer;
        let tbodyNode = noticeList.querySelector("tbody");
        tbodyNode.appendChild(cloneNode);
    };

});