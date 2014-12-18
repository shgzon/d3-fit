var parseDate = d3.time.format("%d-%m-%y").parse;			//omzetten van datum in juiste vorm %d, %m, %y zijn vaste waarde vanuit D3 library
var d_huidige_datum = d3.time.format("%d-%m-%Y").parse;		//omzetten van datum in juiste vorm %d, %m, %y zijn vaste waarde vanuit D3 library

var unSelected = "#34BEA2";	//variable maken met een kleur in hexadecimaal voor ongeselecteerd (meerdere keren gebruiken)
var Selected = "#FF6F00" //variable maken met een kleur in hexadecimaal voor geselecteerd(meerdere keren gebruiken)

d3.csv("data-fit.csv", function(error, data) {		//de function maken voor het binnenhalen van een CSV bestand met source
    data.forEach(function(d) {						//de regel die de data "per cel"/"per regel" invoerd
    	d.huidige_datum = d.datum 					//meteen de data van datum een ander synoniem geven
		d.datum = parseDate(d.datum)				//zeggen de data van datum data zijn ;)
    });

var canvas = d3.select("#grafiek")					//variable maken die de div waarin de grafiek moet komen selecteerd.
			.append("svg")							//er een SVG aanvast hangen
			.attr("class", "grafiek");				//de SVG een class grafiek geven voor styling met CSS
			

var bars = canvas.selectAll("rect")											//een variable maken die voor elke regel een <rect> maakt
			.data(data)														//koppeling van data-fit.csv
			.enter()														//op elke regel de data
				.append("rect")												//voor rect de data koppelen
				.attr("width", 20 )											//attribute width (breedte) instellen
				.attr("height", function(d, i){ return d.totaal*3; })		//attribute height (hoogte) instellen vanuit data.totaal * 3
				.attr("x", function(d, i) { return i * 30 })				//attribute x (positie op de x-as) instellen vanuit integer * 30
				.attr("fill", "#34BEA2")									//attribute fill kleur geven
				.attr("y", function(d,i) { return 300-(d.totaal*3); })		//attribute y (positie op de y-as) instellen vanuit data.totaal * 3

			.on("mouseenter", function(d,i){ 								//zodra de muis over de <rect> gaat
				d3.select(this)												//selecteer die <rect> waar muis overheen gaat
				.attr("fill", Selected);									//verander de attribute "fill"
				$('.datum span').text(d.huidige_datum);						//vul span met waarde vanuit data (d.huidige_datum)
				$('.bike span').text(d.fietsen +" minuten");				//vul span met waarde vanuit data (d.fietsen)
				$('.walk span').text(d.lopen +" minuten");					//vul span met waarde vanuit data (d.lopen)
				})
			.on('mouseleave', function(d, i){								//zodra muis van de <rect> afgaat
				d3.select(this)												//selecteer die <rect> waar muis vanaf gaat
				.attr("fill", unSelected);									//verander de attribute "fill" terug
			});	
});


function updateDataTotaal() {												//functie zodra op de knop "Totaal" wordt gedrukt onClick()

    // Haal de data opnieuw op
    d3.csv("data-fit.csv", function(error, data) {
	    data.forEach(function(d) {
	    	d.huidige_datum = d.datum
			d.datum = parseDate(d.datum)
	   	
	   	var canvas = d3.select("#grafiek")

	    canvas.selectAll("rect")
					   .data(data)
					   .transition()										//geef aan dat er een transitie plaatsvindt
					   .duration(1000)										//geef de totale duur aan in ms
					   .attr("y", function(d,i) {
					   		return 300-(d.totaal*3);						//data: d.totaal
					   })
					   .attr("height", function(d, i) { 
					   		return d.totaal*3; 								//data: d.totaal
					   })
					   .attr("fill", "#34BEA2");
    });
 });
}

function updateDataFietsen() {												//functie zodra op de knop "Fietsen" wordt gedrukt onClick()

    d3.csv("data-fit.csv", function(error, data) {
	    data.forEach(function(d) {
	    	d.huidige_datum = d.datum
			d.datum = parseDate(d.datum)
	   	
	   	var canvas = d3.select("#grafiek")

	    canvas.selectAll("rect")
					   .data(data)
					   .transition()										
					   .duration(1000)										
					   .attr("y", function(d,i) {
					   		return 300-(d.fietsen*3);						//data: d.fietsen
					   })
					   .attr("height", function(d, i) { 
					   		return d.fietsen*3; 							//data: d.fietsen
					   })
					   .attr("fill", "#34BEA2");
    });
 });
}

function updateDataLopen() {												//functie zodra op de knop "Lopen" wordt gedrukt onClick()

    d3.csv("data-fit.csv", function(error, data) {
	    data.forEach(function(d) {
	    	d.huidige_datum = d.datum
			d.datum = parseDate(d.datum)
	   	
	   	var canvas = d3.select("#grafiek")

	    canvas.selectAll("rect")
					   .data(data)
					   .transition()
					   .duration(1000)
					   .attr("y", function(d,i) {
					   		return 300-(d.lopen*3);							//data: d.lopen
					   })
					   .attr("height", function(d, i) { 
					   		return d.lopen*3; 								//data: d.lopen
					   })
					   .attr("fill", "#34BEA2");
    });
 });
}