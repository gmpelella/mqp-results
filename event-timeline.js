
//var ids = ["person0","person1"];






function updateEvent(){

    dataGroup=[];
    for (var i=0; i < orderedIDs.length; i++){
        dataGroup.push(
            {
                class:i,
                label:orderedIDs[i],
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
        svg.selectAll("miniItems").remove();
        svg.selectAll(".miniLabels").remove();

    }
    //#####################################################




    var margin = {top: 10, right: 30, bottom: 30, left: 40},
        width = 700 - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom,
        miniHeight = orderedIDs.length * 5,
        mainHeight = height - miniHeight -50;

    //scales
    var x = d3.scaleLinear()
        .domain([0, 200])
        .range([0, width]);
    var x1 = d3.scaleLinear()
        .range([0, width]);
    var y1 = d3.scaleLinear()
        .domain([0, ids.length])
        .range([0, mainHeight]);
    var y2 = d3.scaleLinear()
        .domain([0, ids.length])
        .range([0, miniHeight]);


    svg = d3.select("#vis")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
        // .append("g")
        // .attr("transform",  "translate(" + margin.left + "," + margin.top + ")");

    svg.append("defs")
        .append("clipPath")
        .attr("id", "clip")
        .append("rect")
        .attr("width", width)
        .attr("height", mainHeight+50);


    // var main = svg.append("g")
    //     .attr("transform", "translate(" + margin.right + "," + margin.top + ")")
    //     .attr("width", width)
    //     .attr("height", mainHeight)
    //     .attr("class", "main");

    var mini = svg.append("g")
        .attr("transform", "translate(" + margin.right + "," + (mainHeight + margin.top) + ")")
        .attr("width", width)
        .attr("height", miniHeight+50)
        .attr("class", "mini");


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

    //mini lanes and texts
    mini.append("g").selectAll(".laneLines")
        .data(dataGroup)
        .enter().append("line")
        .attr("x1", margin.right)
        .attr("y1", function(d) {return y2(d.class);})
        .attr("x2", width)
        .attr("y2", function(d) {return y2(d.class);})
        .attr("stroke", "lightgray");

    mini.append("g").selectAll(".laneText")
        .data(orderedIDs)
        .enter().append("text")
        .text(function(d) {return d;})
        .attr("x", 10) //-margin.right
        .attr("y", function(d, i) {return y2(i + .5);})
        .attr("dy", ".5ex")
        .attr("text-anchor", "end")
        .attr("class", "laneText");



    // var itemRects = main.append("g")
    //     .attr("clip-path", "url(#clip)");


    //for each set of time/details in dataGroup
    dataGroup.forEach(data => {

        var tempdata = JSON.parse(JSON.stringify(data));

        //mini item rects
        mini.append("g").selectAll("miniItems")
            .data(tempdata.data)
            .enter().append("circle")
            .attr("class", "miniItem" + tempdata.class)
            .attr("cx", function(d) {
                //console.log(x(d.time));
                return x(d.time)})
            .attr("cy", y2(tempdata.class + .5) - 5)
            .attr("r", 5);

        // //mini labels
        // mini.append("g").selectAll(".miniLabels")
        //     .data(tempdata)
        //     .enter().append("text")
        //     .text(function(d) {return d.label;})
        //     .attr("x", function(d,i) {return x(d.data[i].time);})
        //     .attr("y", function(d) {return y2(d.class + .5);})
        //     .attr("dy",".5ex");


        //details here

    });

}