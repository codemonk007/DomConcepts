// ES6 code
function test(fn) {
    return function () {
      return fn();
    }
  }
  var button = document.getElementById("debounce"); 
  button.addEventListener('click', test(()=>{console.log("hello");
  })); 