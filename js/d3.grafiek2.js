function graph1() {
var width = 400,
   	height = 300,
    radius = Math.min(width, height) / 2;

var color = ["#34BEA2","#FF6F00"];

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.week1; });

var svg = d3.select("#grafiek2").append("svg")
    .attr("width", width)
    .attr("height", height)
  	.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

d3.csv("data-fit-2.csv", function(error, data) {

  data.forEach(function(d){
  });

  var g = svg.selectAll(".arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc");

  g.append("path")
    .attr("d", arc)
    .attr("fill", function(d,i) { return color[i];})	

  g.append("text")
    .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
    .attr("dy", ".35em")
    .style("text-anchor", "middle")
    .text(function(d) { return d.data.week1 + "%"; });
});

}