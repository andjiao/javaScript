const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

  /*
  a) Use the filter filter function to get arrays with only: 
  
  Cars newer than 1999
  All  Volvo’s
  All cars with a price below 5000 */

  const newerThan1999 =cars.filter(cars=>cars.year>1999)
  console.log(newerThan1999)

  const onlyVolvo= cars.filter(cars=>cars.make==="Volvo")
  console.log(onlyVolvo)


  const below500 =cars.filter(cars=>cars.price<5000);
  console.log(below500)


/*Implement a function: myFilter(array, callback)that takes an array as the first argument, and a callback
as the second and returns a new (filtered) array according to the code provided in the callback*/


//tager imod et array parameter og en funktion
function myFilter(array, method) {

 //instansiere et nyt array, da vi skal have et nyt array, som er sorteret
  const filteredArray = []

  // const index er det samme som i et klassisk for-loop, og den skal kører igennem arrayet
  for (const index in array) {

//når loopet rykker til et nyt placering i arrayet, gemmes objektet i den givende placering i variablen kaldet car
      const car = array[index]

      TODO //Forstår ikke hvad der sker på denne linje
      const carIncluded = method(car)

      //Hvis should-include er sand, så skal elementes tilføjes til den nye array
      if (carIncluded) { 
        filteredArray.push(car) }
  }
  return filteredArray

}


console.log(myFilter(cars, car=>car.price>5000))



//b) Implement a function: myMap(array, callback)that, provided an array and a callback, provides the same functionality as calling the existing map method on an array.
// Test the method with the same array and callback as in the example with the original map method.
function myMap(array, callback) {
  //laver et tomt array, som skal indehoplde den modelleret array
  let mappedArray = []

  //kører igennem arrayet, for at kunne modelerwer med elementerne i arrayer
  for (let index in array) {

    TODO //Forstår ikke hvad der sker på denne linje
      mappedArray.push(callback(array[index]))
  }
  return mappedArray
}
console.log(myMap(cars, car=>car.price));