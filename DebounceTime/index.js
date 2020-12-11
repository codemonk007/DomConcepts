var button = document.getElementById("debounce"); 
// const debounce = (func, delay) => { 
//     let debounceTimer 
//     return function() { 
//         // const context = this
//         // console.log(arguments);        
//         // const args = arguments 
//         clearTimeout(debounceTimer) 
//                 debounceTimer 
//             = setTimeout(() => func(), delay) 
//     } 
// }  
// button.addEventListener('click', debounce(function() { 
//         alert("Hello\nNo matter how many times you" + 
//             "click the debounce button, I get " + 
//             "executed once every 3 seconds!!") 
//                         }, 3000)); 

var debounce = function(inpFun, wait) {
    var timeout;
    return function () {
        if(!timeout) {
            inpFun.apply(this, arguments);
            timeout = setTimeout(function() {
                timeout = undefined;
            }, wait);
        }
        else {
            console.log("Debouncing");
        }
    }
};

var buttonClickFunction = debounce(function (event) {
    console.log("Button Clicked");
    console.log(event.target.id);
}, 2000);

button.addEventListener('click', buttonClickFunction); 