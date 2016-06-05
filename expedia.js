var EXPEDIA_KEY = '1XKcKOZGpyfXQZvmupYy8cbK2XatgGUP';

var SUMMER_DATE = '2016-07-15';
var SUMMER_DATE_OUT = '2016-07-17'
var FALL_DATE = '2016-10-15';
var FALL_DATE_OUT = '2016-10-17';
var WINTER_DATE = '2017-01-01-15';
var WINTER_DATE_OUT = '2017-01-17';
var SPRING_DATE = '2017-04-15';
var SPRING_DATE_OUTPUT = '2017-04-17';

function getJSON(theURL){
  var xmlHttp = null;
  xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theURL, false );
  xmlHttp.send( null );
  response  = xmlHttp.responseText;
  response = JSON.parse(response);
  console.log(response);
  return response;
}

function getFlightURL(home, destination, date){
  var flight = "http://terminal2.expedia.com:80/x/flights/search/1/";
  home = home.replace(/ /g,"%20");
  destination = destination.replace(/ /g,"%20");
  flight = flight.concat(home).concat("/").concat(destination).concat("/").concat(date).concat("?apikey=").concat(EXPEDIA_KEY);
  return flight;
}

function getHotelsURL(city, country, date1, date2){
  var hotels = " http://terminal2.expedia.com:80/x/mhotels/search?city=";
  city = city.replace(/ /g,"%20");
  country = country.replace(/ /g,"%20");
  hotels = hotels.concat(city).concat("%20").concat(country).concat("&filterUnavailable=true&sortOrder=true&checkInDate=").concat(date1).concat("&checkOutDate=").concat(date2).concat("&room1=2&apikey=").concat(EXPEDIA_KEY);
  return hotels;
}

function getHotelsArray(hotelsJSON){
  array = hotelsJSON.hotelList;
  return array;
}

function expensiveHotel(array){
  var highest = 0;
  for(i=1; i<array.length; i++) {
    var temp = array[i];
     if(parseInt(array[i].lowRateInfo.priceToShowUsers) > parseInt(array[highest].lowRateInfo.priceToShowUsers)){
       highest = i;
     }
  }
  return array[highest];
}

function cheapHotel(array){
  var lowest = 0;
  for(i=1; i<array.length; i++) {
    var temp = array[i];
     if(parseInt(array[i].lowRateInfo.priceToShowUsers) < parseInt(array[lowest].lowRateInfo.priceToShowUsers)){
       lowest = i;
     }
  }
  return array[lowest];
}

function averageFlightPrice(flightJSON){
 return flightJSON.trendData.median;
}

//var flightURL = getFlightURL('YUL', 'LAX', SUMMER_DATE);
//var flightJSON = getJSON(flightURL);
//var hotels = getHotelsURL('toronto', 'canada', SUMMER_DATE, SUMMER_DATE_OUT);
//var hotelsJSON = getJSON(hotels);
//var hotelsArray = getHotelsArray(hotelsJSON);
//document.write(hotelsArray.toString());
//document.write(hotelsArray[0].lowRateInfo.averageRate);
//expensiveHotel(hotelsArray).name;
//cheapHotel(hotelsArray).name;
//document.write(averageFlightPrice(flightJSON));

function setDateTo( season){
 var date;
 switch (season){
   case "summer":
           date = SUMMER_DATE;
           break;
   case "fall":
           date = FALL_DATE;
           break;
   case "winter":
           date = WINTER_DATE;
           break;
   case "spring":
           date = SPRING_DATE;
           break;
 }
 return date;
}

function setDateFrom( season){
 var date;
 switch (season){
   case "summer":
           date = SUMMER_DATE_OUT;
           break;
   case "fall":
           date = FALL_DATE_OUT;
           break;
   case "winter":
           date = WINTER_DATE_OUT;
           break;
   case "spring":
           date = SPRING_DATE_OUT;
           break;
 }
 return date;
}

function result(home, homeAirport, dest, destAirport, destCountry, season){
 var departDate = setDateTo(season);
 var returnDate = setDateFrom(season);

 var flightURL = getFlightURL(homeAirport, destAirport, departDate);
 var flightJSON = getJSON(flightURL);
 var flightPrice = averageFlightPrice(flightJSON);

 var hotelsURL = getHotelsURL(dest, destCountry, departDate, returnDate);
 var hotelsJSON = getJSON(hotelsURL);
 var hotelsArray = getHotelsArray(hotelsJSON);
 var cheapestHotel = cheapHotel(hotelsArray);
 var mostExpensiveHotel = expensiveHotel(hotelsArray);

 dest = dest.toUpperCase();
 destCountry = destCountry.toUpperCase();

 return output = dest + ", " + destCountry + "\n During " + season + ", the average flight price is $" + flightPrice +"\nCheapest hotel: " + cheapestHotel.name + " at $" + cheapestHotel.lowRateInfo.averageRate + " per night\nMost expensive hotel: " + mostExpensiveHotel.name + " at $" + mostExpensiveHotel.lowRateInfo.averageRate + " per night";
}
