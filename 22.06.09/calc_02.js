window.addEventListener("load", function(){
    let btnPrint = document.getElementById("add");
    btnPrint.onclick = function(){
        let section = document.getElementById("section1");
        let inputs = section.getElementsByTagName("input");

        console.log(inputs);

        let x, y;
        x = parseInt(inputs[0].value);
        y = parseInt(inputs[1].value);
        sum.value = x + y;
    };
});