/*1) Given the code below answer, don’t execute the code, in what order you would expect to see the outputs:*/


const msgPrinter = function(msg,delay){
  setTimeout(() => console.log(msg),delay); //Observe an arrow-function
};

/* i første omgang så printer kodelinjen i kronisk rækkefølge, derfor printes koden på linje 11 først, herefter kode på linje 13
 og herefter linje 15 som tredje print. Herefter kigges der på alle dem der delay, da de er delay, kommer de efter dem der 
 ikke har delay(såsom dem som ikke har tal efter deres string) */
console.log("aaaaaaaaaa"); // nr.1 print
msgPrinter ("bbbbbbbbbb",2000); //nr. 5 print
console.log("dddddddddd");//nr.2 print
msgPrinter ("eeeeeeeeee",1000);// nr. 4 print
console.log("ffffffffff");//nr.3 print

/* 2) Add the code to a javascript file, execute and verify whether you answer to 1) was right
executed code:

aaaaaaaaaa
dddddddddd
ffffffffff
eeeeeeeeee
bbbbbbbbbb

*/
