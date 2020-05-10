
var playtesters = ["playtester 0","playtester 1","playtester 2","playtester 3","playtester 4","playtester 5","playtester 6","playtester 7","playtester 8","playtester 9"];






function updateEvent(){

    dataGroup=[];
    for (var i=0; i < orderedIDs.length; i++){
        dataGroup.push(
            {
                class:i,
                label:playtesters[i],
                data:ETperID[i]
            }
        )
    }

    console.log(ETperID);
    console.log(dataGroup);
    console.log("hello??");
    selectedPlot = "eventTime";

    et_vis();
    //update a descriptor text to the bottom of the page/plot
}


//http://bl.ocks.org/bunkat/2338034
function et_vis(){
    //#####################################################
    //remove previous lines, rects, circles
    var svg = d3.select("#vis");
    if(svg != null){
        svg.selectAll("rect").remove();
        svg.selectAll("boxes").remove();
        svg.selectAll("vertLines").remove();
        svg.selectAll("medianLines").remove();
        svg.selectAll("line").remove();
        svg.selectAll("circle").remove();
        svg.selectAll("indPoints").remove();
        svg.selectAll("g").remove();

        svg.selectAll("defs").remove();
        svg.selectAll("clipPath").remove();
        svg.selectAll(".laneLines").remove();
        svg.selectAll(".laneText").remove();
        svg.selectAll("eventItems").remove();
        svg.selectAll(".eventLabels").remove();

    }
    //#####################################################




    var margin = {top: 10, right: 30, bottom: 30, left: 100},
        width = 2000 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom,
        eventHeight = (height*7.3) - (orderedIDs.length * 7),
        mainHeight = height - eventHeight -50;

    //scales
    var x = d3.scaleLinear()
        .domain([0, 2000])
        .range([0, width]);
    var x1 = d3.scaleLinear()
        .range([0, width]);
    var y1 = d3.scaleLinear()
        .domain([0, ids.length])
        .range([0, mainHeight]);
    var y2 = d3.scaleLinear()
        .domain([0, ids.length])
        .range([0, eventHeight]);


    svg = d3.select("#vis")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
        // .append("g")
        // .attr("transform",  "translate(" + margin.left + "," + margin.top + ")");

    // svg.append("defs")
    //     .append("clipPath")
    //     .attr("id", "clip")
    //     .append("rect")
    //     .attr("width", width)
    //     .attr("height", mainHeight+50);


    // var main = svg.append("g")
    //     .attr("transform", "translate(" + margin.right + "," + margin.top + ")")
    //     .attr("width", width)
    //     .attr("height", mainHeight)
    //     .attr("class", "main");

    var event = svg.append("g")
        .attr("transform", "translate(" + margin.right + "," + margin.top + ")")
        .attr("width", width)
        .attr("height", eventHeight+10)
        .attr("class", "event");


    //
    // //main lanes and texts
    // main.append("g").selectAll(".laneLines")
    //     .data(dataGroup)
    //     .enter().append("line")
    //     .attr("x1", margin.right)
    //     .attr("y1", function(d) {return y1(d.class);})
    //     .attr("x2", width)
    //     .attr("y2", function(d) {return y1(d.class);})
    //     .attr("stroke", "lightgray");
    //
    // main.append("g").selectAll(".laneText")
    //     .data(ids)
    //     .enter().append("text")
    //     .text(function(d) {return d;})
    //     .attr("x", -margin.right)
    //     .attr("y", function(d, i) {return y1(i + .5);})
    //     .attr("dy", ".5ex")
    //     .attr("text-anchor", "end")
    //     .attr("class", "laneText");

    //event lanes and texts
    event.append("g").selectAll(".laneLines")
        .data(dataGroup)
        .enter().append("line")
        .attr("x1", margin.right)
        .attr("y1", function(d) {return y2(d.class);})
        .attr("x2", width)
        .attr("y2", function(d) {return y2(d.class);})
        .attr("stroke", "lightgray");

    event.append("g").selectAll(".laneText")
        .data(playtesters)
        .enter().append("text")
        .text(function(d) {
            //console.log(d);
            return d;})
        .attr("x", 45) //-margin.right
        .attr("y", function(d, i) {
            console.log(i);
            return y2(i + .5);})
        .attr("dy", ".5ex")
        .attr("text-anchor", "end")
        .attr("class", "laneText");



    // Define the div for the tooltip
    var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);


    //for each set of time/details in dataGroup
    dataGroup.forEach(data => {

        var tempdata = JSON.parse(JSON.stringify(data));
        for( var v = tempdata.data.length-1; v--;){
            if ((tempdata.data[v].time > 900 ) || (tempdata.data[v].hunger === 0) ) tempdata.data.splice(v, 1);
        //&& tempdata.data[v].hunger === null
            console.log(tempdata.data[v].time);
            console.log(tempdata.data[v].hunger);
        }
        //TODO:need to parse the data a bit - remove data where hunger - 0?
        //i dont know what firebase did
        //it be weird

        console.log(tempdata);

        //event item rects
        event.append("g").selectAll("eventItems")
            .data(tempdata.data)
            .enter().append("circle")
            .attr("class", "eventItem" + tempdata.class)
            .attr("cx", function(d) {return x(d.time)+50})
            .attr("cy", y2(tempdata.class + .5) - 5)
            .attr("r", 5)
            .attr("style",function (d) {
                if(d.age == "Stone Age") return "fill: palevioletred";
                if(d.age == "Metal Age") return "fill: peachpuff";
                if(d.age == "Conquering Age") return "fill: olivedrab";
                if(d.age == "Industrial Age") return "fill: mediumaquamarine";
                if(d.age == "Space Age") return "fill: steelblue";
            })
            .on("mouseover", function(d) {
                div.transition()
                    .duration(200)
                    .style("opacity", .9);
                div	.html("Age: "+d.age +"<br/>"+
                        "Time: "+parseInt(d.time)+" s"+ "<br/>"+
                        "Hunger: "+d.hunger +"%"+"<br/>"+
                        "Military: "+d.military +"%"+"<br/>"+
                        "Science: "+d.science +"%"+"<br/>"+
                        "Security: "+d.security+"%")
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 90) + "px");
            })
            .on("mouseout", function(d) {
                div.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        // //event labels
        // event.append("g").selectAll(".eventLabels")
        //     .data(tempdata)
        //     .enter().append("text")
        //     .text(function(d) {return d.label;})
        //     .attr("x", function(d,i) {return x(d.data[i].time);})
        //     .attr("y", function(d) {return y2(d.class + .5);})
        //     .attr("dy",".5ex");


        //details here

    });

}