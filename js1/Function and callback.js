//Function Declaration
       //Observe: no return type, no type on parameters

/* instansiere en funktion, hvor der indsættes parameter. Da variablen ikke er defieneret endnu, kan dette afgøres senere. 
Derfor ekstra vigtigt med navngivning, så eksterne personer er sikker på hvilke typer de her variabler er tiltænkt skal være*/
function add(n1,n2){
    return n1 + n2
}


//Function expression

/* muligt at gøre, at en variabel kan instasieres som en funktion, hvor der indsættes parameter, dog udefineret typer af variabler*/
const sub =function (n1,n2){

    /* returnerer resultate af at variablerne lægges sammen*/
return n1 -n2

}

//Callback example 
/* navngiver en funktion, kaldet cb, som tager imod variabler og en funktion. 
Vi ved at dette er en funktion ved at se på, hvordan den håndteres i retursatementete*/
const cb = function(n1, n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
}

/* her kaldes der på funktionen add, som så udføres, baseret på de værdityper der er blevet indsat*/
console.log(add (1,2))

//her printes hele add-funktionen, da det er en reference til funktionen, men der ikke er opgivet nogle parameter
console.log( add )

// den printer 3, da funktionen har brug for 2 parameter og ignorrer tredje parameter
console.log( add(1,2,3) ); 

/*Her vil der opstå en fejl, da nr.2 parameter ikke er defineret og js 
derfor definere som udefineret og den ved derfor ikke hvordan den skal håndtere variblaen, den kan ikke plusse variabel med udefineret variabel*/
console.log( add(1) );

/*Den vil printe tallene og herefter resultate af add-funktionen, da vi her referer/kalder på add-funktionen */
console.log( cb(3,3,add) );

/*Den vil printe tallene og herefter resultate af sub-funktionen, da vi her referer/kalder på add-funktionen */
console.log( cb(4,3,sub) );

/*Der vil opstå fejl, da det syntax-mæssigt er forkert af kaalde på en funktion med paranteeser. paranteser bruges når der skal defineres variabel-typer
men ved allerede at have defineret dette med de første to tal, skal det ikke gøres igen */
//console.log(cb(3,3,add()));

/* den vil printe 3hh og resultatet af add-funktion, 
når man starter med et tal og tilføjer en string, omformes det før stringen også til en string. 
i js er det String der stærkest */
console.log(cb(3,"hh", add));

/* Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb function */

function mul(n1,n2, callback) {

    return "Result from the two numbers: " + n1 + n2 +callback(n1,n2)

    
}


