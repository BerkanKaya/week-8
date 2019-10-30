function naam(){
	var name = prompt('Wat is uw naam?');
	var age = prompt('Wat is uw leeftijd?');

if(name !== "stop"){
	document.write("<br> Naam = " + name);
	naam();

	if(age !== "stop"){
	document.write("<br> leeftijd = " + age);
}

	
}
}

	

naam();


