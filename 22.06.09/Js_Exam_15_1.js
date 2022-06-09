//window.onload = function(){
window.addEventListener("load", function(){
    let printBtn = window.document.getElementById("btn5");
    printBtn.onclick = function(){
        let x,y;
        x=eval(prompt ("x값 입력 = ", 0));
        y=eval(prompt ("y값 입력 = ", 0));
        btn5.type = "text";
        btn5.value = x+y;
    };    
}
);
//문서가 모두 load가 되었을때. init 함수를 실행