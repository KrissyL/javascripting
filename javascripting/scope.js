var a = 1, b = 2, c = 3;

(function firstFunction() {
    b = 5, c = 6;

    (function secondFunction() {
        b = 8;
		console.log("a: "+a+", b: "+b+", c: "+c);

       (function thirdFunction() {
           a = 7, c = 9;

           (function fourthFunction() {
               a = 1, c = 8;

           })();

       })();
    })();
})();