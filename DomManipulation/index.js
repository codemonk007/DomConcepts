// document.getElementsByClassName('Temp')[0].outerHTML="Hi Ganapati";
console.log(document.getElementsByClassName('Temp')[0].innerHTML);
var temp = document.getElementsByClassName('Temp')[0];
temp.innerHTML = "ganapati Bhat"
console.log(document.getElementsByClassName("Temp")[0].outerHTML);
//getElementsByClassName
//getElementByID

var test = document.querySelectorAll('.test');
test.forEach(element => {
   console.log(element.innerHTML);
});

//mousedown
//mouseup
//enter
//resize
document.getElementById('checkclick').addEventListener('click',(event)=>{
    console.log("event clicked");    
})

document.getElementById('buttonDynamic').addEventListener('click',(event)=>{
    var element = document.getElementById('tes');
    console.log(element);
    var newchild = document.createElement('div');
    newchild.innerHTML = "Narayan Bhat";  
    element.parentElement.appendChild(newchild);
    console.log(element.parentElement);      
})
console.log("query --->", test);


