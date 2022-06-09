window.addEventListener("load", function(){
    let btnPrint = document.getElementById("add");
    btnPrint.onclick = function(){
        let section = document.getElementById("section1");
        let inputs_x = section.getElementsByClassName("txt1");
        let inputs_y = section.getElementsByClassName("txt2");

        console.log(inputs_x, inputs_y);

        let x, y;
        x = parseInt(inputs_x[0].value);
        y = parseInt(inputs_y[0].value);
        sum.value = x + y;
    };
});