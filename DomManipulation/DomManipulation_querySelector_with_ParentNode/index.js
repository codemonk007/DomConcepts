document.getElementById('firstButtonHandler').addEventListener('click',()=>
{
let t = Array.from(document.querySelector('#query').parentElement.children[0].children);
console.log(document.querySelector('#query').parentElement.children[0].children);
console.log(t);
console.log(typeof t);

t.forEach(element => {
    element.innerHTML= element.innerHTML+" Bhat<br>"   
});

})