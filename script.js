// STEP 1
var favoriteMovies = ["Titanic", "Harry Potter", "Zootopia", "Moana", "Pirates of the Caribbean"];
console.log("STEP 1");
console.log(favoriteMovies[1]);

// STEP 2
console.log("");
console.log("STEP 2");
var movies = new Array(5);
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
console.log(movies[0]);

// STEP 3
console.log("");
console.log("STEP 3");
var movies = new Array(5);
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
movies.splice(2, 0, "Coco");
console.log(movies.length);

// STEP 4
console.log("");
console.log("STEP 4");
var movies = [];
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
delete movies[0];
console.log(movies);

 // STEP 5
console.log("");
console.log("STEP 5");
var index;
var movies = [];
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
movies[5] = "Frozen I";
movies[6] = "Tangled";

for(index in movies) {
    console.log(movies[index]);
}

// STEP 6
console.log("");
console.log("STEP 6");
//copying the code from STEP 5 as mentioned in the requirment
var movies = [];
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
movies[5] = "Frozen I";
movies[6] = "Tangled";

for(var movie of movies) {
    window.console.log(movie);
}

// STEP 7
console.log("");
console.log("STEP 7");

var movies = [];
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
movies[5] = "Frozen I";
movies[6] = "Tangled";

movies.sort();

for(const movie of movies) {
    window.console.log(movie);
}

// STEP 8
console.log("");
console.log("STEP 8");

var movies = [];
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
movies[5] = "Frozen I";
movies[6] = "Tangled";

var leastFavMovies = [movies[0], movies[5], movies[6]];

console.log("Movies I like:\n");
console.log("");
for(var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}

console.log("");
console.log("Movies I regret watching:");
console.log("");
for(var i=0; i< leastFavMovies.length; i++) {
    console.log(leastFavMovies[i]);
}

// STEP 9
console.log("");
console.log("STEP 9");

var movies = [];
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
movies[5] = "Frozen I";
movies[6] = "Tangled";

var leastFavMovies = [movies[0], movies[5], movies[6]];

movies = movies.concat(leastFavMovies);
console.log(movies.sort().reverse());


// STEP 10
console.log("");
console.log("STEP 10");
var movies = [];
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
movies[5] = "Frozen I";
movies[6] = "Tangled";

var leastFavMovies = [movies[0], movies[5], movies[6]];

movies = movies.concat(leastFavMovies);
movies.sort().reverse();
console.log(movies[movies.length -1]);
// console.log(movies.pop()); -> This will remove the last element in the array and return it. But assignment
// doesn't mention if the array needs to be modified or not.

// STEP 11
console.log("");
console.log("STEP 11");
var movies = [];
movies[0] = "Titanic";
movies[1] = "Happy Potter";
movies[2] = "Zootopia";
movies[3] = "Moana";
movies[4] = "Pirates of the Caribbean";
movies[5] = "Frozen I";
movies[6] = "Tangled";

var leastFavMovies = [movies[0], movies[5], movies[6]];

movies = movies.concat(leastFavMovies);
movies.sort().reverse();
console.log(movies[0]);
// console.log(movies.shift()); -> This will remove the first element in the array and return it. But assignment
// doesn't mention if the array needs to be modified or not.


// STEP 12
console.log("");
console.log("STEP 12");
var movies = ["Titanic", "Zootopia", "Tangled", "Moana", "Pirates of the Caribbean"];

var dislikedMovies = ["Zootopia", "Moana"];

var indices = [];

for (let i = 0; i < movies.length; i++) {
  if (dislikedMovies.includes(movies[i])) {
    indices.push(i);
  }
}

console.log("Indices of disliked movies:", indices);

var likedMovies = ["Pursuit of Happiness", "The Matrix"];

for (let i = 0; i < indices.length; i++) {
  movies[indices[i]] = likedMovies[i];
}

console.log("Updated movie list:", movies);


// STEP 13
console.log("");
console.log("STEP 13");
var movies = [["Titanic", 1], ["Tangled", 2], ["Pirates of the Caribbean", 3], ["The Matrix", 4], ["Inception", 5]];
// Solution 1: we can use nested loop to find string element in movie and ranking
movies.forEach(pair => console.log(pair.filter(ele => typeof ele === 'string')[0]))

// Solution 2: Since we know movie name is at index 0, we check for type string and return
// var movieNames = movies.filter(function(movie) {
//   return typeof movie[0] === 'string';
// });

// console.log('Movie names:', movieNames.map(movie => movie[0]));


// STEP 14
console.log("");
console.log("STEP 14");
var employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY'];

var showEmployee = function(arr) {
  console.log('Employees:');
  console.log('');
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

showEmployee(employees);


// STEP 15
console.log("");
console.log("STEP 15");
function filterValues(arr) {
    return arr.filter(function(value) {
        return value !== false && value !== null && value !== 0 && value !== '';
    });
}
  
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
  
// STEP 16
console.log("");
console.log("STEP 16");
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
  
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getRandomItem(numbers));
  
// STEP 17
console.log("");
console.log("STEP 17");
function getLargestNumber(arr) {
    return Math.max.apply(null, arr);
  }
  
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(getLargestNumber(numbers));
  