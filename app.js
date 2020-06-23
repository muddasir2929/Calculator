function getNumber(num){
    var myResult = document.getElementById("result");
    myResult.value += num;
}
function clearResult(){
    var myResult = document.getElementById("result");
    myResult.value = ""
}
function getResult(){
    var myResult = document.getElementById("result");
    myResult.value = eval(myResult.value);
}