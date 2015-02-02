var bio = {
			"name" : name, 
			"role" : role, 
			"contacts" : {"tel" : "+57.1.21238805", "email" : "garcia@lacasonadelpatio.net"}, 
			"pictureURL" : "https://cdn4.iconfinder.com/data/icons/avatar-and-user/78/Avatar_person_user_character_man_woman_human-05-128.png",
			"welcomeMessage" : "Hello", 
			"skills" : skills,
			"city": "Bogotá"

	}

var work = {}



work.jobPosition = "Director General";
work.employer = "Hotel Casona del Patio"; 
work.yearsWored = 10; 
work.cityOfBusiness = "Bogotá"; 

var projects = {}

var edu = {} 

edu["lastSchool"] = "Universidad de los Andes"; 
edu["yearsAttended"] = 2; 
edu["cityOfSchool"] = "Bogotá";  


$("#header").append(work.jobPosition + " " +edu["lastSchool"]); 


var education = { 	"Schools" : [ {
							"SchollName" : "Universidad de los Andes",
							"City" : "Bogotá",
							"Majors" : ["MBA"],
							"Minors" : [],
							"GraduationYear": 2012
						}, 
						{
							"SchollName" : "Purdue University",
							"City" : "West Lafayette",
							"Majors" : "Econ",
							"Minors" : ["Phyl", "Psy"],
							"GraduationYear": 2002
						}, 
						{
							"SchollName" : "American Univç",
							"City" : "Washington DC",
							"Majors" : "Philosophy",
							"Minors" : [],
							"GraduationYear": 2004
						}], 

					"OnlineCourse" : [{ "Web": "udacity.com",
										"NameOfCourse" : "git", 
										"Date": 2015},
										{ "Web": "udemy.com",
										"NameOfCourse" : "baby", 
										"Date": 2014}]


} 

	