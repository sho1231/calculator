function reset(){
    a=document.getElementById('result');
    a.innerHTML='0'
    form=document.querySelector("#form");
    form.reset();
}
function display(){
    a=document.getElementById('result');
    expr=document.querySelector("#evaluate").value;
    expr=eval(expr)
    a.innerHTML=expr;
}