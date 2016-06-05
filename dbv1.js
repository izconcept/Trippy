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

 return output = "Average flight price:  $" + flightPrice +"<br>Cheapest hotel: $" + cheapestHotel.lowRateInfo.averageRate + " per night<br>Most expensive hotel: $" + mostExpensiveHotel.lowRateInfo.averageRate + " per night";
}

//justin's part
function load(){
	var response="";
	var theUrl = "https://raw.githubusercontent.com/izconcept/Trippy/master/db.json?token=AEM932dGuJ0hgZBp-CoFWf0e91RK7w1nks5XXNqNwA%3D%3D";
	var xmlHttp = null;
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", theUrl, false );
	xmlHttp.send( null );
	response  = xmlHttp.responseText;
	response = JSON.parse(response);
	console.log(response);

	//demo variable to test everything
	var season = "Summer";
	var vibe = "Relax";
	var description="City";
	var uber = "No";
	var busbud = "No";
	var age=21;
	var drinking=true;
	var arrayBeen = ["San Francisco","Little Cayman"];
	var arrayLike = ["Miami","Amsterdam"];
	// you will pass the value above in load
	//calling for evaluation
	eval(season, vibe, description, uber, busbud, age, drinking,arrayBeen,arrayLike,response);
}
//season, vibe, description, uber, busbud, age, drinking
function eval(season, vibe, description, uber, busbud, age, drinking,arrayBeen,arrayLike,response){
	var firstVal=0;
	var secondVal=0;
	var thirdVal=0;
	var firstIndex=0;
	var secondIndex=0;
	var thirdIndex=0;
	for (objects in response){
		var weight =0;
		if(season==response[objects]["Season"]){
			weight+=10;
		}
		if(vibe==response[objects]["Vibe"]){
			weight+=5;
		}
		if(description==response[objects]["Description"]){
			weight+=5;
		}
		if(uber=="Yes"&&response[objects]["Uber"]=="Yes"){
			weight+=2;
		}
		if(busbud=="Yes"&&response[objects]["Busbus"]=="Yes"){
			weight+=2;
		}
		if(drinking==true&&age>=response[objects]["Age"]){
			weight+=8;
		}
		if(response[objects]["Country"]=="Singapore") weight=0;
		if(arrayBeen.indexOf(response[objects]["City"])!=-1) weight =0;
		else if(arrayLike.indexOf(response[objects]["City"])!=-1) {
			console.log(weight);
			weight*=2;
			console.log(weight);
		}
		if(weight>firstVal){
			thirdIndex = secondIndex;
			secondIndex = firstIndex;
			thirdVal = secondVal;
			secondVal = firstVal;
			firstVal = weight;
			firstIndex = objects;
		} else if(weight>secondVal){
			thirdIndex = secondIndex;
			thirdVal = secondVal;
			secondVal = weight;
			secondIndex = objects;
		} else if(weight>thirdVal){
			thirdIndex = objects;
			thirdVal = weight;
		}
	}
	//console.log(response[firstIndex]);
	var city1 = response[firstIndex]["City"].replace(/ /g,"%20");
	var city2 = response[secondIndex]["City"].replace(/ /g,"%20");
	var city3 = response[thirdIndex]["City"].replace(/ /g,"%20");
	console.log(result("montreal","YUL",response[firstIndex]["City"],response[firstIndex]["Airport"],response[firstIndex]["Country"],response[firstIndex]["Season"].toLowerCase()));
	console.log(result("montreal","YUL",response[secondIndex]["City"],response[secondIndex]["Airport"],response[secondIndex]["Country"],response[secondIndex]["Season"].toLowerCase()));
	
	console.log(result("montreal","YUL",response[thirdIndex]["City"],response[thirdIndex]["Airport"],response[thirdIndex]["Country"],response[thirdIndex]["Season"].toLowerCase()));
    
    $('.gif').remove();
    
    $('#chat').append("<div class='row'><div class='bubble left animated fadeInUp'><span>Here are three cities we think you should visit based on your preferences and our algorithm</span></div></div>")
    
    var contents = "<div class='animate fadeInLeft botpad' style='font-size: .7em'><div class='col-sm-4'><div class='card animate fadeInUp sequence7' style='max-width: 240px;'><div class='card-block'><h4 class='card-title'>"+response[firstIndex]["City"]+"</h4><h6 class='card-subtitle text-muted'>"+response[firstIndex]["Country"]+"</h6></div><img class='pic' src='imgs/"+city1+".jpg' alt='Photo of sunset'><div class='card-block'><p class='card-text'>"+result("montreal","YUL",response[firstIndex]["City"],response[firstIndex]["Airport"],response[firstIndex]["Country"],response[firstIndex]["Season"].toLowerCase()) +"</p></div></div></div><div class='col-sm-4 botpad'><div class='card animate fadeInUp sequence7' style='max-width: 240px;'><div class='card-block'><h4 class='card-title'>"+response[secondIndex]["City"]+"</h4><h6 class='card-subtitle text-muted'>"+response[secondIndex]["Country"]+"</h6></div><img class='pic' src='imgs/"+city2+".jpg' alt='Photo of sunset'><div class='card-block'><p class='card-text'>"+result("montreal","YUL",response[secondIndex]["City"],response[secondIndex]["Airport"],response[secondIndex]["Country"],response[secondIndex]["Season"].toLowerCase())+"</p></div></div></div><div class='col-sm-4 botpad'><div class='card animate fadeInUp sequence7' style='max-width: 240px;'><div class='card-block'><h4 class='card-title'>"+response[thirdIndex]["City"]+"</h4><h6 class='card-subtitle text-muted'>"+response[thirdIndex]["Country"]+"</h6></div><img class='pic' src='imgs/"+city3+".jpg' alt='Photo of sunset'><div class='card-block'><p class='card-text'>"+result("montreal","YUL",response[thirdIndex]["City"],response[thirdIndex]["Airport"],response[thirdIndex]["Country"],response[thirdIndex]["Season"].toLowerCase())+"</p></div></div></div></div>";
    
	$("#chat").append(contents);
    
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    
	//console.log(firstVal);
	console.log(response[secondIndex]);
	//console.log(response[thirdIndex]);

}

