document.getElementById('firstButtonHandler').addEventListener('click',()=>
{
let t = Array.from(document.querySelector('#query').children);
console.log(t);
console.log(typeof t);

t.forEach(element => {
    element.innerHTML= element.innerHTML+" Bhat<br>"   
});

})