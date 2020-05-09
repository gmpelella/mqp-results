
var ids = ["person0","person1"];





function updateEvent(){

    dataGroup = [
        // json format?
        {
            class:0,
            label: "testboi",
            data: [{time:5, details:{hunger:50,stuff:10}},
                {time:15, details:{hunger:20,stuff:20}},
                {time:20, details:{hunger:30,stuff:30}}]
        },
        {
            class:1,
            label: "testboi2",
            data: [{time:5, details:{hunger:50,stuff:10}},
                {time:10, details:{hunger:50,stuff:10}}]
        }
    ];

    selectedPlot = "eventTime";

    et_vis();
    //update a descriptor text to the bottom of the page/plot
}


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
        width = 500 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom,
        miniHeight = ids.length *12 +50,
        mainHeight = height - miniHeight -50;

    //scales
    var x = d3.scaleLinear()
        .domain([0, 15])
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
        .attr("height", mainHeight);


    var main = svg.append("g")
        .attr("transform", "translate(" + margin.right + "," + margin.top + ")")
        .attr("width", width)
        .attr("height", mainHeight)
        .attr("class", "main");

    var mini = svg.append("g")
        .attr("transform", "translate(" + margin.right + "," + (mainHeight + margin.top) + ")")
        .attr("width", width)
        .attr("height", miniHeight)
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
        .data(ids)
        .enter().append("text")
        .text(function(d) {return d;})
        .attr("x", 0) //-margin.right
        .attr("y", function(d, i) {return y2(i + .5);})
        .attr("dy", ".5ex")
        .attr("text-anchor", "end")
        .attr("class", "laneText");



    var itemRects = main.append("g")
        .attr("clip-path", "url(#clip)");

    //for each set of time/details in dataGroup
    dataGroup.forEach(data => {

        var tempdata = JSON.parse(JSON.stringify(data));
        console.log(tempdata);
        console.log(tempdata.class);
        console.log(tempdata.label);
        console.log(tempdata.data[0].time);

        //mini item rects
        mini.append("g").selectAll("miniItems")
            .data(tempdata.data)
            .enter().append("rect")
            .attr("class", "miniItem" + tempdata.class)
            .attr("x", function(d) {return x(d.time)})
            .attr("y", y2(tempdata.class + .5) - 5)
            .attr("width", 5)
            .attr("height", 10);

        // //mini labels
        // mini.append("g").selectAll(".miniLabels")
        //     .data(tempdata)
        //     .enter().append("text")
        //     .text(function(d) {return d.label;})
        //     .attr("x", function(d,i) {return x(d.data[i].time);})
        //     .attr("y", function(d) {return y2(d.class + .5);})
        //     .attr("dy",".5ex");


    });





}