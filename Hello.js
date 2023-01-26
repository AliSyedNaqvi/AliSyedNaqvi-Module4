(function (window) {  
    var hello = {};
    var speak = "Hello";
    
    hello.speak = function (names) {
      console.log(speak + " " + names);
    }
        window.hello = hello;
}) (window);