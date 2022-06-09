window.addEventListener("load", function(){
    let section = document.querySelector("#section1");
    let noticeList = section.querySelector(".notice-list");
    let delButton = section.querySelector(".del-button");
    let swapButton = section.querySelector(".swap-button");
    let tbodyNode = section.querySelector("tbody");
    let allCheckbox = section.querySelector(".overall-checkbox")

    allCheckbox.onchange = function(){
        let inputs = tbodyNode.querySelectorAll("input[type='checkbox']");
        console.log(inputs);
        for(let i = 0; i < inputs.length; i++){
            // allCheckbox의 체크 형태를 기준으로 각 체크박스에 대입함
            // checked는 체크가 된 상태
            inputs[i].checked = allCheckbox.checked;
        }
    }

    delButton.onclick = function(){
        // 체크된 것만 inputs에 포함 됨
        // 체크가 안된 것만 포함할 경우는 unchecked로 바꾸면 됨
        let inputs = tbodyNode.querySelectorAll("input[type='checkbox']:checked");
        for(let i = 0; i < inputs.length; i++){
            // 체크박스는 input 태그, input -> td -> tr 이 시점에서 remove
            inputs[i].parentElement.parentElement.remove();
        }
    };

    swapButton.onclick = function(){
        // 체크된 것만 inputs에 포함 됨
        let inputs = tbodyNode.querySelectorAll("input[type='checkbox']:checked");
        if(inputs.length != 2){
            alert("2개만 체크해주세요");
            return;
        }

        trs = [];

        for(let i = 0; i < inputs.length; i++){
            // trs에 선택된 2개의 input -> td -> tr의 내용을 넣음
            trs.push(inputs[i].parentElement.parentElement);
        }

        // 첫 번째 것을 복사해서 clone으로 생성
        let cloneNode = trs[0].cloneNode(true);
        // 두 번째 것과 복제된 것을 교체
        trs[1].replaceWith(cloneNode);
        // 첫 번째 것과 두 번째 것을 교체
        trs[0].replaceWith(trs[1]);

        // 변수 a,b값을 바꿀 때 중간에 저장할 변수를 선언해서 바꾸는 방식과 동일 함
    };

});