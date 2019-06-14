/*  //10) Creacion de Elementos
var deportesPreferidos = ["Hockey", "Polo", "Rugby"]

var deportes = prompt("Ingrese sus 3 deportes preferidos separados por comas")

var deportesArray = deportes.split(",")

var deportesUL = document.querySelector(".sports-list")

if (esDeportePreferido(deportesArray[0], deportesPreferidos)) {
  deportesUL.innerHTML += "<li style='font-style:italic'>" + deportesArray[0] + "</li>"
} else {
  deportesUL.innerHTML += "<li>" + deportesArray[0] + "</li>"
}

if (esDeportePreferido(deportesArray[1], deportesPreferidos)) {
  deportesUL.innerHTML += "<li style='font-style:italic'>" + deportesArray[1] + "</li>"
} else {
  deportesUL.innerHTML += "<li>" + deportesArray[1] + "</li>"
}

if (esDeportePreferido(deportesArray[2], deportesPreferidos)) {
  deportesUL.innerHTML += "<li style='font-style:italic'>" + deportesArray[2] + "</li>"
} else {
  deportesUL.innerHTML += "<li>" + deportesArray[2] + "</li>"
}

*/
// fetch("https://api.themoviedb.org/3/movie/550?api_key=2816f7e0d88c5c7abbd4003375fc50fe")
// .then(function(response) {
// return response.json()
// })
// .then(function(information) {
// console.log(information);
// })
// .catch(function(error) {
// console.log("Error: " + error);
// })

var api_key = "2816f7e0d88c5c7abbd4003375fc50fe"
var urlPopulares = "https://api.themoviedb.org/3/movie/popular?api_key="+api_key+"&language=en-US&page=1"


fetch(urlPopulares)
.then(function(response) {
return response.json()
})
.then(function(information) {
  console.log(information.results);
 var arrayDePeliculas = information.results;
 var destino = document.querySelector(".peliculas_populares")
 for (var i = 0; i < arrayDePeliculas.length; i++) {
   destino.innerHTML += "<h1>" + arrayDePeliculas[i].title + "</h1>"
}



})
.catch(function(error) {
console.log("Error: " + error);
})



var urlValoradas = "https://api.themoviedb.org/3/movie/top_rated?api_key="+api_key+"&language=en-US&page=1"

fetch(urlValoradas)
.then(function(response) {
return response.json()
})
.then(function(information) {
  console.log(information.results);
 var arrayDePeliculas = information.results;
 var destino = document.querySelector(".mejor_valoradas")
 for (var i = 0; i < arrayDePeliculas.length; i++) {
   destino.innerHTML += "<h1>" + arrayDePeliculas[i].title + "</h1>"
   }



})
.catch(function(error) {
console.log("Error: " + error);
})


var urlSoon = "https://api.themoviedb.org/3/movie/upcoming?api_key="+api_key+"&language=en-US&page=1"


fetch(urlSoon)
.then(function(response) {
return response.json()
})
.then(function(information) {
  console.log(information.results);
 var arrayDePeliculas = information.results;
 var destino = document.querySelector(".proximamente")
 for (var i = 0; i < arrayDePeliculas.length; i++) {
   destino.innerHTML += "<h1>" + arrayDePeliculas[i].title + "</h1>"
   }



})
.catch(function(error) {
console.log("Error: " + error);
})
