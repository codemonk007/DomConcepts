// ES6 code
function throttled(delay, fn) {
    let lastCall = 0;
    return function (...args) {
      console.log("calling");
       
      const now = (new Date).getTime();
      // console.log(args.lastCall);      
      if (now - lastCall < delay) {
        // console.log("still running wait");        
        return;
      }
      lastCall = now;
      return fn(...args);
    }
  }
  var button = document.getElementById("debounce"); 
  button.addEventListener('click', throttled(5000, ()=>{
      console.log("Ganapati Bhat");
      
  })); 