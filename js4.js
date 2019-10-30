function tafels(){
	tafelvraag = prompt("voer 1, 2 of 3 in")
	if (tafelvraag == "1") {
		for(var i=0; i<=10; i++)
			document.write("<br> 1 x"+i+"=" + 1*i+"<br>");
}
else if (tafelvraag == "2") {

	for(var i=0; i<=10; i++)
			document.write(" 1 x"+i+"=" + 1*i+"<br>");
	for(var j=0; j<=10; j++)
		
		document.write(" 2 x"+j+"=" + 2*j+"<br>")

}
else if (tafelvraag == "3") {
	for(var i=0; i<=10; i++)
			document.write(" 1 x"+i+"=" + 1*i+"<br>");
	for(var j=0; j<=10; j++)
		document.write("2 x"+j+"=" + 2*j+"<br>")
	for(var d=0; d<=10; d++)
		document.write("3 x"+d+"=" + 3*d+"<br>")
}
else{
	alert("voer 1, 2 of 3 in.")
	window.location.reload();
}
}
tafels();