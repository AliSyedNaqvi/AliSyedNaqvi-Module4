(function (window){
    var bye = {};
    var speak = "Good Bye";
    
    bye.speak = function (names) {
      console.log(speak + " " + names);
    }
     
     window.bye = bye;
})(window);
