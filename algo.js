var response;
function load2(){
    response ='[{"id": 1,"Season": "Summer","City": "Little Cayman","Country": "Cayman Islands","Vibe": "Relax","Description": "Island","Age": 18,"Uber": "No","Busbus": "No","Airport": "CYB","Flight": 652,"Hotel": 345}, {"id": 2,"Season": "Summer","City": "Miami","Country": "US","Vibe": "Party","Description": "Beach","Age": 21,"Uber": "Yes","Busbus": "Yes","Airport": "MIA","Flight": 374,"Hotel": 217}, {"id": 3,"Season": "Summer","City": "Amsterdam","Country": "Netherlands","Vibe": "Sightseeing","Description": "City","Age": 16,"Uber": "Yes","Busbus": "Yes","Airport": "AMS","Flight": 974,"Hotel": 242}, {"id": 4,"Season": "Summer","City": "Singapore","Country": "Singapore","Vibe": "Sightseeing","Description": "City","Age": 18,"Uber": "Yes","Busbus": "No","Airport": "SIN","Flight": 1500,"Hotel": 243}, {"id": 5,"Season": "Summer","City": "Maui","Country": "US","Vibe": "Relax","Description": "Island","Age": 21,"Uber": "No","Busbus": "No","Airport": "KOA","Flight": 723,"Hotel": 225}, {"id": 6,"Season": "Summer","City": "Berlin","Country": "Germany","Vibe": "Sightseeing","Description": "City","Age": 16,"Uber": "Yes","Busbus": "Yes","Airport": "TXL","Flight": 1044,"Hotel": 128}, {"id": 7,"Season": "Summer","City": "Athens","Country": "Greece","Vibe": "Sightseeing","Description": "City","Age": 18,"Uber": "Yes","Busbus": "Yes","Airport": "ATH","Flight": 751,"Hotel": 173}, {"id": 8,"Season": "Summer","City": "Lima","Country": "Peru","Vibe": "Expeditions","Description": "Mountain","Age": 18,"Uber": "Yes","Busbus": "Yes","Airport": "LIM","Flight": 857,"Hotel": 149}, {"id": 9,"Season": "Summer","City": "Dubrovnik","Country": "Croatia","Vibe": "Party","Description": "Urban","Age": 18,"Uber": "No","Busbus": "Yes","Airport": "DBV","Flight": 1142,"Hotel": 155}, {"id": 10,"Season": "Summer","City": "Ibiza","Country": "Spain","Vibe": "Party","Description": "Nature","Age": 18,"Uber": "No","Busbus": "No","Airport": "IBZ","Flight": 1025,"Hotel": 388}, {"id": 11,"Season": "Summer","City": "Quito","Country": "Ecuador","Vibe": "Expeditions","Description": "Urban","Age": 18,"Uber": "No","Busbus": "No","Airport": "UIO","Flight": 726,"Hotel": 128}, {"id": 12,"Season": "Winter","City": "Costa Rica","Country": "Costa Rica","Vibe": "Expeditions","Description": "Nature","Age": 18,"Uber": "Yes","Busbus": "No","Airport": "SJO","Flight": 506,"Hotel": 169}, {"id": 13,"Season": "Winter","City": "Yellowstone National Park","Country": "US","Vibe": "Sightseeing","Description": "Nature","Age": 18,"Uber": "No","Busbus": "No","Airport": "JAN","Flight": 434,"Hotel": 200}, {"id": 14,"Season": "Winter","City": "Aspen","Country": "Switzerland","Vibe": "Sports","Description": "Mountain","Age": 16,"Uber": "Yes","Busbus": "No","Airport": "ASE","Flight": 719,"Hotel": 229}, {"id": 15,"Season": "Winter","City": "Veradero","Country": "Cuba","Vibe": "Relax","Description": "Beach","Age": 16,"Uber": "No","Busbus": "No","Airport": "VRA","Flight": 477,"Hotel": 140}, {"id": 16,"Season": "Winter","City": "Bora Bora","Country": "Tahiti","Vibe": "Relax","Description": "Island","Age": 18,"Uber": "No","Busbus": "No","Airport": "BOB","Flight": 2730,"Hotel": 1337}, {"id": 17,"Season": "Winter","City": "Barcelona","Country": "Spain","Vibe": "Sightseeing","Description": "City","Age": 16,"Uber": "No","Busbus": "Yes","Airport": "BCN","Flight": 698,"Hotel": 254}, {"id": 18,"Season": "Spring","City": "London","Country": "UK","Vibe": "Sightseeing","Description": "City","Age": 16,"Uber": "Yes","Busbus": "Yes","Airport": "LHR","Flight": 802,"Hotel": 338}, {"id": 19,"Season": "Spring","City": "Seoul","Country": "South Korea","Vibe": "Sightseeing","Description": "City","Age": 19,"Uber": "Yes","Busbus": "No","Airport": "ICN","Flight": 1532,"Hotel": 103}, {"id": 20,"Season": "Spring","City": "Cancun","Country": "Mexico","Vibe": "Party","Description": "Beach","Age": 18,"Uber": "No","Busbus": "No","Airport": "CUN","Flight": 476,"Hotel": 381}, {"id": 21,"Season": "Spring","City": "Istanbul","Country": "Turkey","Vibe": "Sightseeing","Description": "City","Age": 18,"Uber": "Yes","Busbus": "Yes","Airport": "IST","Flight": 1102,"Hotel": 59}, {"id": 22,"Season": "Spring","City": "Grand Canyon","Country": "US","Vibe": "Expeditions","Description": "Mountain","Age": 21,"Uber": "Yes","Busbus": "No","Airport": "PHX","Flight": 469,"Hotel": 186}, {"id": 23,"Season": "Spring","City": "Rio de Janeiro","Country": "Brazil","Vibe": "Sightseeing","Description": "City","Age": 18,"Uber": "Yes","Busbus": "Yes","Airport": "GIG","Flight": 920,"Hotel": 153}, {"id": 24,"Season": "Spring","City": "US Virgin Islands","Country": "US","Vibe": "Relax","Description": "Island","Age": 21,"Uber": "No","Busbus": "No","Airport": "STT","Flight": 711,"Hotel": 222}, {"id": 25,"Season": "Fall","City": "San Francisco","Country": "US","Vibe": "Sightseeing","Description": "City","Age": 21,"Uber": "Yes","Busbus": "Yes","Airport": "SFO","Flight": 582,"Hotel": 310}, {"id": 26,"Season": "Fall","City": "Vancouver","Country": "Canada","Vibe": "Sightseeing","Description": "Nature","Age": 19,"Uber": "No","Busbus": "Yes","Airport": "YVR","Flight": 750,"Hotel": 262}, {"id": 27,"Season": "Fall","City": "Paris","Country": "France","Vibe": "Sightseeing","Description": "City","Age": 18,"Uber": "Yes","Busbus": "Yes","Airport": "CDG","Flight": 669,"Hotel": 198}, {"id": 28,"Season": "Fall","City": "Hong Kong","Country": "China","Vibe": "Sightseeing","Description": "City","Age": 18,"Uber": "Yes","Busbus": "No","Airport": "HKG","Flight": 1506,"Hotel": 223}, {"id": 29,"Season": "Fall","City": "Punta Cana","Country": "Dominican Republic","Vibe": "Relax","Description": "Beach","Age": 18,"Uber": "No","Busbus": "No","Airport": "PUJ","Flight": 567,"Hotel": 246}]';
    response = JSON.parse(response);
    return response;
}
var vibe;
var description;
var drink;
var uber;
var response;
function evaluate(season, vibe, description, uber, busbud, age, drinking,arrayBeen,arrayLike){
    console.log(response);
    var firstVal=0;
	var secondVal=0;
	var thirdVal=0;
	var firstIndex=0;
	var secondIndex=0;
	var thirdIndex=0;
	for (objects in response){
		var weight =0;
		if(season==response[objects]["Season"]){
            console.log(response[objects]["Season"]);
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
		if(drinking=="Yes"&&age>=response[objects]["Age"]){
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
            $('.gif').remove();
    
    $('#chat').append("<div class='row'><div class='bubble left animated fadeInUp'><span>Here are three cities we think you should visit based on your preferences and our algorithm</span></div></div>")
    
    var contents = "<div class='animate fadeInLeft botpad' style='font-size: .7em'><div class='col-sm-4'><div class='card animate fadeInUp sequence7' style='max-width: 240px;'><div class='card-block'><h4 class='card-title'>"+response[firstIndex]["City"]+"</h4><h6 class='card-subtitle text-muted'>"+response[firstIndex]["Country"]+"</h6></div><img class='pic' src='imgs/"+response[firstIndex]["City"]+".jpg' alt='Photo of sunset'><div class='card-block'><p class='card-text'>Flight starting at $"+response[firstIndex]["Flight"]+"<br>Average rooms price: $"+response[firstIndex]["Hotel"] +"</p></div></div></div><div class='col-sm-4 botpad'><div class='card animate fadeInUp sequence7' style='max-width: 240px;'><div class='card-block'><h4 class='card-title'>"+response[secondIndex]["City"]+"</h4><h6 class='card-subtitle text-muted'>"+response[secondIndex]["Country"]+"</h6></div><img class='pic' src='imgs/"+response[secondIndex]["City"]+".jpg' alt='Photo of sunset'><div class='card-block'><p class='card-text'>Flight starting at $"+response[secondIndex]["Flight"]+"<br>Average rooms price: $"+response[secondIndex]["Hotel"] +"</p></div></div></div><div class='col-sm-4 botpad'><div class='card animate fadeInUp sequence7' style='max-width: 240px;'><div class='card-block'><h4 class='card-title'>"+response[thirdIndex]["City"]+"</h4><h6 class='card-subtitle text-muted'>"+response[thirdIndex]["Country"]+"</h6></div><img class='pic' src='imgs/"+response[thirdIndex]["City"]+".jpg' alt='Photo of sunset'><div class='card-block'><p class='card-text'>Flight starting at $"+response[thirdIndex]["Flight"]+"<br>Average rooms price: $"+response[thirdIndex]["Hotel"] +"</p></div></div></div></div>";
    
	$("#chat").append(contents);
    
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
}