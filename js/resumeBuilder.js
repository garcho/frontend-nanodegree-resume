
var name = "Luis García"; 
var role = "Director General"; 
var skills = ["x", "y", "z"]; 



var formattedName = HTMLheaderName.replace("%data%", name); 

var formattedRolle = HTMLheaderRole.replace("%data%", role); 

$("#header").prepend(formattedRolle);
$("#header").prepend(formattedName);


var bio = {
			"name" : name, 
			"role" : role, 
			"contacts" : {"tel" : "+57.1.21238805", "email" : "garcia@lacasonadelpatio.net"}, 
			"pictureURL" : "https://cdn4.iconfinder.com/data/icons/avatar-and-user/78/Avatar_person_user_character_man_woman_human-05-128.png",
			"welcomeMessage" : "Hello", 
			"skills" : skills,
			"city": "Bogotá"

	}	

var work = {
}



work.jobPosition = "Director General";
work.employer = "Hotel Casona del Patio"; 
work.yearsWored = 10; 
work.cityOfBusiness = "Bogotá"; 

var education {
}

education["lastSchool"] = "Universidad de los Andes"; 
education["yearsAttended"] = 2; 
education["cityOfSchool"] = "Bogotá";  


$("#header").append(work.jobPosition); 
$("#header").append(education["lastSchool"]); 


	/*
	
	
	var awesomeThoughts = "I am Luis García and I am awesome."; 
	
	var fun = awesomeThoughts.replace("awesome", "FUN"); 
	
	console.log(awesomeThoughts);
	console.log(fun);
	
	$("#main").append(fun); 
*/