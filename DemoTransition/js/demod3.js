
(function (){

  var canvas = d3.select("#canvas")
      .append("svg")
      .attr("width",window.screen.width+"px")
        .attr("height",window.screen.height+"px");

    var dataset = [1000,2000,3000,4000,5000];
    var color = d3.scale.category20();

    var scale = d3.scale.linear()
        .domain([d3.min(dataset),d3.max(dataset)])
        .range([50,500]);


    var axis = d3.svg.axis()
        .scale(scale)
        .orient("bottom")
        .ticks(5)
        .tickSubdivide(10);


    canvas.append("g")
        .attr("transform","translate (150,0)")
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr({
            height:0,
            y:0,
            x:0,
            width:0
        })
        .transition()
        .duration(2000)
        .attr({
            x:function (d,i){
                return (100*i);
            },
            y:function (d,i){
                return 600-scale(d);
            },
            width:25,
            height:function (d,i){
                return scale(d)+"px";
            },
            fill:function (d,i){
                return color(i);
            }
        });


    canvas.append("g")
        .attr("class","axis")
        .attr("transform","translate (100,600) ")
        .call(axis);

})();


