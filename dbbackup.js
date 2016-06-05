function load(){
	var response="";
	var theUrl = "https://raw.githubusercontent.com/izconcept/Trippy/master/db.json?token=AEM93wXncmxFaAUZpOk3G_O-brkLzI3sks5XXHOgwA%3D%3D";
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
	console.log(response[firstIndex]);
	console.log(firstVal);
	console.log(response[secondIndex]);
	console.log(response[thirdIndex]);

}


