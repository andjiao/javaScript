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
  All cars with a price below 5000

 */
  const newerThan1999 =cars.filter(cars=>cars.year>1999)
  console.log(newerThan1999)

  const onlyVolvo= cars.filter(cars=>cars.make==="Volvo")
  console.log(onlyVolvo)


  const below500 =cars.filter(cars=>cars.price<5000);
  console.log(below500)


  function myFilter(array, callback){
      const arry= []
  }
