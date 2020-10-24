// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr){
  return arr.map(element => element.director)
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
  if(arr.length < 1){
    return 0;
  }
  let result = arr.filter((elem) => {
    return elem.director === "Steven Spielberg" && elem.genre.includes("Drama")
});
  return result.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage (arr) {
  var average = arr.reduce(function (avg, item) {
    if(!item.rate){
      return avg;
    }
    if(item.rate){
      return avg + item.rate / arr.length;
    }
   }, 0);
   return parseFloat(parseFloat(average).toFixed(2));
  };

// Iteration 4: Drama movies - Get the average of Drama Movies=
function dramaMoviesRate(arr){
  const dramaRate = arr.filter(function (element) {
    const dramaave = element.genre.includes("Drama");
    return dramaave;
  });
      return ratesAverage(dramaRate);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
  var newArr;
  result = [];
 newArr = [...arr].sort(function(a, b){
  if( a.year < b.year){
    return -1;
  } else if(a.year > b.year){
    return  1;
  } else  {
          if(a.title < b.title) {
              return -1;
          } else if (a.title > b.title) {
              return 1;
          } else {
            return 0;
    }
  }
});

return newArr;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){

  return arr.map(arr => arr.title).sort(function(a, b){
    if(a > b){
      return 1;
    } else if (a < b){
      return -1;
    } else{
      return 0;
    }
    }
    ).slice(0, 20)
  };

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

