let parsedData;
let nulldata = false;
let selectedPlot;

// box and whisker shit:
//HUNGER
let bwA0H = [];
let bwA0H0 = [];
let bwA0H1 = [];
let bwA0H2 = [];
let bwA0H3 = [];
let bwA0H4 = [];
let bwA1H = [];
let bwA1H0 = [];
let bwA1H1 = [];
let bwA1H2 = [];
let bwA1H3 = [];
let bwA1H4 = [];
let bwA2H = [];
let bwA2H0 = [];
let bwA2H1 = [];
let bwA2H2 = [];
let bwA2H3 = [];
let bwA2H4 = [];
let bwA3H = [];
let bwA3H0 = [];
let bwA3H1 = [];
let bwA3H2 = [];
let bwA3H3 = [];
let bwA3H4 = [];
let bwA4H = [];
let bwA4H0 = [];
let bwA4H1 = [];
let bwA4H2 = [];
let bwA4H3 = [];
let bwA4H4 = [];
//#########################
//MILITARY
let bwA0M = [];
let bwA0M0 = [];
let bwA0M1 = [];
let bwA0M2 = [];
let bwA0M3 = [];
let bwA0M4 = [];
let bwA1M = [];
let bwA1M0 = [];
let bwA1M1 = [];
let bwA1M2 = [];
let bwA1M3 = [];
let bwA1M4 = [];
let bwA2M = [];
let bwA2M0 = [];
let bwA2M1 = [];
let bwA2M2 = [];
let bwA2M3 = [];
let bwA2M4 = [];
let bwA3M = [];
let bwA3M0 = [];
let bwA3M1 = [];
let bwA3M2 = [];
let bwA3M3 = [];
let bwA3M4 = [];
let bwA4M = [];
let bwA4M0 = [];
let bwA4M1 = [];
let bwA4M2 = [];
let bwA4M3 = [];
let bwA4M4 = [];


var dataGroup = [];
var xLabels = [];
//BUTTONS
function updateBigData(){
    dataGroup = [
        bwA0H,
        bwA1H,
        bwA2H,
        bwA3H,
        bwA4H,
        //####
        bwA0M,
        bwA1M,
        bwA2M,
        bwA3M,
        bwA4M
    ];
    xLabels = [
        "Age0-Hunger",
        "Age1-Hunger",
        "Age2-Hunger",
        "Age3-Hunger",
        "Age4-Hunger",
        "Age0-Military",
        "Age1-Military",
        "Age2-Military",
        "Age3-Military",
        "Age4-Military"
    ];

    selectedPlot = "BigData";

    bw_vis();
    //update a descriptor text to the bottom of the page/plot
}
//CHECKBOX
function nullData(){
    //swap null data
    if(nulldata == false)nulldata=true;
    else if(nulldata == true)nulldata=false;
    console.log("swapping true/false");
    console.log(nulldata);
    //and update whichever graphydoo
    console.log(selectedPlot);
    if(selectedPlot === "BigData")updateBigData();
}

//parsed data - organize data
function parseData(data){
    //for each row of the data, organize the columns
    data.forEach( d => {
        //let id = d.uuid;

        //need to make sure all the values except the uuid is counted as an int - not string
        //age 0
        d["age0Data__hunger0"] =     +d["age0Data__hunger0"];
        d["age0Data__military0"] =   +d["age0Data__military0"];
        d["age0Data__population0"] = +d["age0Data__population0"];
        d["age0Data__science0"] =    +d["age0Data__science0"];
        d["age0Data__security0"] =   +d["age0Data__security0"];
        d["age0Data__time0"] =       +d["age0Data__time0"];
        d["age0Data__hunger1"] =     +d["age0Data__hunger1"];
        d["age0Data__military1"] =   +d["age0Data__military1"];
        d["age0Data__population1"] = +d["age0Data__population1"];
        d["age0Data__science1"] =    +d["age0Data__science1"];
        d["age0Data__security1"] =   +d["age0Data__security1"];
        d["age0Data__time1"] =       +d["age0Data__time1"];
        d["age0Data__hunger2"] =     +d["age0Data__hunger2"];
        d["age0Data__military2"] =   +d["age0Data__military2"];
        d["age0Data__population2"] = +d["age0Data__population2"];
        d["age0Data__science2"] =    +d["age0Data__science2"];
        d["age0Data__security2"] =   +d["age0Data__security2"];
        d["age0Data__time2"] =       +d["age0Data__time2"];
        d["age0Data__hunger3"] =     +d["age0Data__hunger3"];
        d["age0Data__military3"] =   +d["age0Data__military3"];
        d["age0Data__population3"] = +d["age0Data__population3"];
        d["age0Data__science3"] =    +d["age0Data__science3"];
        d["age0Data__security3"] =   +d["age0Data__security3"];
        d["age0Data__time3"] =       +d["age0Data__time3"];
        d["age0Data__hunger4"] =     +d["age0Data__hunger4"];
        d["age0Data__military4"] =   +d["age0Data__military4"];
        d["age0Data__population4"] = +d["age0Data__population4"];
        d["age0Data__science4"] =    +d["age0Data__science4"];
        d["age0Data__security4"] =   +d["age0Data__security4"];
        d["age0Data__time4"] =       +d["age0Data__time4"];
        //age 1
        d["age1Data__hunger0"] =     +d["age1Data__hunger0"];
        d["age1Data__military0"] =   +d["age1Data__military0"];
        d["age1Data__population0"] = +d["age1Data__population0"];
        d["age1Data__science0"] =    +d["age1Data__science0"];
        d["age1Data__security0"] =   +d["age1Data__security0"];
        d["age1Data__time0"] =       +d["age1Data__time0"];
        d["age1Data__hunger1"] =     +d["age1Data__hunger1"];
        d["age1Data__military1"] =   +d["age1Data__military1"];
        d["age1Data__population1"] = +d["age1Data__population1"];
        d["age1Data__science1"] =    +d["age1Data__science1"];
        d["age1Data__security1"] =   +d["age1Data__security1"];
        d["age1Data__time1"] =       +d["age1Data__time1"];
        d["age1Data__hunger2"] =     +d["age1Data__hunger2"];
        d["age1Data__military2"] =   +d["age1Data__military2"];
        d["age1Data__population2"] = +d["age1Data__population2"];
        d["age1Data__science2"] =    +d["age1Data__science2"];
        d["age1Data__security2"] =   +d["age1Data__security2"];
        d["age1Data__time2"] =       +d["age1Data__time2"];
        d["age1Data__hunger3"] =     +d["age1Data__hunger3"];
        d["age1Data__military3"] =   +d["age1Data__military3"];
        d["age1Data__population3"] = +d["age1Data__population3"];
        d["age1Data__science3"] =    +d["age1Data__science3"];
        d["age1Data__security3"] =   +d["age1Data__security3"];
        d["age1Data__time3"] =       +d["age1Data__time3"];
        d["age1Data__hunger4"] =     +d["age1Data__hunger4"];
        d["age1Data__military4"] =   +d["age1Data__military4"];
        d["age1Data__population4"] = +d["age1Data__population4"];
        d["age1Data__science4"] =    +d["age1Data__science4"];
        d["age1Data__security4"] =   +d["age1Data__security4"];
        d["age1Data__time4"] =       +d["age1Data__time4"];
        //age 2
        d["age2Data__hunger0"] =     +d["age2Data__hunger0"];
        d["age2Data__military0"] =   +d["age2Data__military0"];
        d["age2Data__population0"] = +d["age2Data__population0"];
        d["age2Data__science0"] =    +d["age2Data__science0"];
        d["age2Data__security0"] =   +d["age2Data__security0"];
        d["age2Data__time0"] =       +d["age2Data__time0"];
        d["age2Data__hunger1"] =     +d["age2Data__hunger1"];
        d["age2Data__military1"] =   +d["age2Data__military1"];
        d["age2Data__population1"] = +d["age2Data__population1"];
        d["age2Data__science1"] =    +d["age2Data__science1"];
        d["age2Data__security1"] =   +d["age2Data__security1"];
        d["age2Data__time1"] =       +d["age2Data__time1"];
        d["age2Data__hunger2"] =     +d["age2Data__hunger2"];
        d["age2Data__military2"] =   +d["age2Data__military2"];
        d["age2Data__population2"] = +d["age2Data__population2"];
        d["age2Data__science2"] =    +d["age2Data__science2"];
        d["age2Data__security2"] =   +d["age2Data__security2"];
        d["age2Data__time2"] =       +d["age2Data__time2"];
        d["age2Data__hunger3"] =     +d["age2Data__hunger3"];
        d["age2Data__military3"] =   +d["age2Data__military3"];
        d["age2Data__population3"] = +d["age2Data__population3"];
        d["age2Data__science3"] =    +d["age2Data__science3"];
        d["age2Data__security3"] =   +d["age2Data__security3"];
        d["age2Data__time3"] =       +d["age2Data__time3"];
        d["age2Data__hunger4"] =     +d["age2Data__hunger4"];
        d["age2Data__military4"] =   +d["age2Data__military4"];
        d["age2Data__population4"] = +d["age2Data__population4"];
        d["age2Data__science4"] =    +d["age2Data__science4"];
        d["age2Data__security4"] =   +d["age2Data__security4"];
        d["age2Data__time4"] =       +d["age2Data__time4"];
        //age 3
        d["age3Data__hunger0"] =     +d["age3Data__hunger0"];
        d["age3Data__military0"] =   +d["age3Data__military0"];
        d["age3Data__population0"] = +d["age3Data__population0"];
        d["age3Data__science0"] =    +d["age3Data__science0"];
        d["age3Data__security0"] =   +d["age3Data__security0"];
        d["age3Data__time0"] =       +d["age3Data__time0"];
        d["age3Data__hunger1"] =     +d["age3Data__hunger1"];
        d["age3Data__military1"] =   +d["age3Data__military1"];
        d["age3Data__population1"] = +d["age3Data__population1"];
        d["age3Data__science1"] =    +d["age3Data__science1"];
        d["age3Data__security1"] =   +d["age3Data__security1"];
        d["age3Data__time1"] =       +d["age3Data__time1"];
        d["age3Data__hunger2"] =     +d["age3Data__hunger2"];
        d["age3Data__military2"] =   +d["age3Data__military2"];
        d["age3Data__population2"] = +d["age3Data__population2"];
        d["age3Data__science2"] =    +d["age3Data__science2"];
        d["age3Data__security2"] =   +d["age3Data__security2"];
        d["age3Data__time2"] =       +d["age3Data__time2"];
        d["age3Data__hunger3"] =     +d["age3Data__hunger3"];
        d["age3Data__military3"] =   +d["age3Data__military3"];
        d["age3Data__population3"] = +d["age3Data__population3"];
        d["age3Data__science3"] =    +d["age3Data__science3"];
        d["age3Data__security3"] =   +d["age3Data__security3"];
        d["age3Data__time3"] =       +d["age3Data__time3"];
        d["age3Data__hunger4"] =     +d["age3Data__hunger4"];
        d["age3Data__military4"] =   +d["age3Data__military4"];
        d["age3Data__population4"] = +d["age3Data__population4"];
        d["age3Data__science4"] =    +d["age3Data__science4"];
        d["age3Data__security4"] =   +d["age3Data__security4"];
        d["age3Data__time4"] =       +d["age3Data__time4"];
        //age 4
        d["age4Data__hunger0"] =     +d["age4Data__hunger0"];
        d["age4Data__military0"] =   +d["age4Data__military0"];
        d["age4Data__population0"] = +d["age4Data__population0"];
        d["age4Data__science0"] =    +d["age4Data__science0"];
        d["age4Data__security0"] =   +d["age4Data__security0"];
        d["age4Data__time0"] =       +d["age4Data__time0"];
        d["age4Data__hunger1"] =     +d["age4Data__hunger1"];
        d["age4Data__military1"] =   +d["age4Data__military1"];
        d["age4Data__population1"] = +d["age4Data__population1"];
        d["age4Data__science1"] =    +d["age4Data__science1"];
        d["age4Data__security1"] =   +d["age4Data__security1"];
        d["age4Data__time1"] =       +d["age4Data__time1"];
        d["age4Data__hunger2"] =     +d["age4Data__hunger2"];
        d["age4Data__military2"] =   +d["age4Data__military2"];
        d["age4Data__population2"] = +d["age4Data__population2"];
        d["age4Data__science2"] =    +d["age4Data__science2"];
        d["age4Data__security2"] =   +d["age4Data__security2"];
        d["age4Data__time2"] =       +d["age4Data__time2"];
        d["age4Data__hunger3"] =     +d["age4Data__hunger3"];
        d["age4Data__military3"] =   +d["age4Data__military3"];
        d["age4Data__population3"] = +d["age4Data__population3"];
        d["age4Data__science3"] =    +d["age4Data__science3"];
        d["age4Data__security3"] =   +d["age4Data__security3"];
        d["age4Data__time3"] =       +d["age4Data__time3"];
        d["age4Data__hunger4"] =     +d["age4Data__hunger4"];
        d["age4Data__military4"] =   +d["age4Data__military4"];
        d["age4Data__population4"] = +d["age4Data__population4"];
        d["age4Data__science4"] =    +d["age4Data__science4"];
        d["age4Data__security4"] =   +d["age4Data__security4"];
        d["age4Data__time4"] =       +d["age4Data__time4"];

        //box&whisker plot data so far: // could prolly use for other plots too
        //HUNGER
        bwA0H.push(d["age0Data__hunger0"],
            d["age0Data__hunger1"],
            d["age0Data__hunger2"],
            d["age0Data__hunger3"],
            d["age0Data__hunger4"]);
        bwA0H0.push(d["age0Data__hunger0"]);
        bwA0H1.push(d["age0Data__hunger1"]);
        bwA0H2.push(d["age0Data__hunger2"]);
        bwA0H3.push(d["age0Data__hunger3"]);
        bwA0H4.push(d["age0Data__hunger4"]);
        bwA1H.push(d["age1Data__hunger0"],
            d["age1Data__hunger1"],
            d["age1Data__hunger2"],
            d["age1Data__hunger3"],
            d["age1Data__hunger4"]);
        bwA1H0.push(d["age1Data__hunger0"]);
        bwA1H1.push(d["age1Data__hunger1"]);
        bwA1H2.push(d["age1Data__hunger2"]);
        bwA1H3.push(d["age1Data__hunger3"]);
        bwA1H4.push(d["age1Data__hunger4"]);
        bwA2H.push(d["age2Data__hunger0"],
            d["age2Data__hunger1"],
            d["age2Data__hunger2"],
            d["age2Data__hunger3"],
            d["age2Data__hunger4"]);
        bwA2H0.push(d["age2Data__hunger0"]);
        bwA2H1.push(d["age2Data__hunger1"]);
        bwA2H2.push(d["age2Data__hunger2"]);
        bwA2H3.push(d["age2Data__hunger3"]);
        bwA2H4.push(d["age2Data__hunger4"]);
        bwA3H.push(d["age3Data__hunger0"],
            d["age3Data__hunger1"],
            d["age3Data__hunger2"],
            d["age3Data__hunger3"],
            d["age3Data__hunger4"]);
        bwA3H0.push(d["age3Data__hunger0"]);
        bwA3H1.push(d["age3Data__hunger1"]);
        bwA3H2.push(d["age3Data__hunger2"]);
        bwA3H3.push(d["age3Data__hunger3"]);
        bwA3H4.push(d["age3Data__hunger4"]);
        bwA4H.push(d["age4Data__hunger0"],
            d["age4Data__hunger1"],
            d["age4Data__hunger2"],
            d["age4Data__hunger3"],
            d["age4Data__hunger4"]);
        bwA4H0.push(d["age4Data__hunger0"]);
        bwA4H1.push(d["age4Data__hunger1"]);
        bwA4H2.push(d["age4Data__hunger2"]);
        bwA4H3.push(d["age4Data__hunger3"]);
        bwA4H4.push(d["age4Data__hunger4"]);
        //hunger
        //#######################################################
        //military
        bwA0M.push(d["age0Data__military0"],
            d["age0Data__military1"],
            d["age0Data__military2"],
            d["age0Data__military3"],
            d["age0Data__military4"]);
        bwA0M0.push(d["age0Data__military0"]);
        bwA0M1.push(d["age0Data__military1"]);
        bwA0M2.push(d["age0Data__military2"]);
        bwA0M3.push(d["age0Data__military3"]);
        bwA0M4.push(d["age0Data__military4"]);
        bwA1M.push(d["age1Data__military0"],
            d["age1Data__military1"],
            d["age1Data__military2"],
            d["age1Data__military3"],
            d["age1Data__military4"]);
        bwA1M0.push(d["age1Data__military0"]);
        bwA1M1.push(d["age1Data__military1"]);
        bwA1M2.push(d["age1Data__military2"]);
        bwA1M3.push(d["age1Data__military3"]);
        bwA1M4.push(d["age1Data__military4"]);
        bwA2M.push(d["age2Data__military0"],
            d["age2Data__military1"],
            d["age2Data__military2"],
            d["age2Data__military3"],
            d["age2Data__military4"]);
        bwA2M0.push(d["age2Data__military0"]);
        bwA2M1.push(d["age2Data__military1"]);
        bwA2M2.push(d["age2Data__military2"]);
        bwA2M3.push(d["age2Data__military3"]);
        bwA2M4.push(d["age2Data__military4"]);
        bwA3M.push(d["age3Data__military0"],
            d["age3Data__military1"],
            d["age3Data__military2"],
            d["age3Data__military3"],
            d["age3Data__military4"]);
        bwA3M0.push(d["age3Data__military0"]);
        bwA3M1.push(d["age3Data__military1"]);
        bwA3M2.push(d["age3Data__military2"]);
        bwA3M3.push(d["age3Data__military3"]);
        bwA3M4.push(d["age3Data__military4"]);
        bwA4M.push(d["age4Data__military0"],
            d["age4Data__military1"],
            d["age4Data__military2"],
            d["age4Data__military3"],
            d["age4Data__military4"]);
        bwA4M0.push(d["age4Data__military0"]);
        bwA4M1.push(d["age4Data__military1"]);
        bwA4M2.push(d["age4Data__military2"]);
        bwA4M3.push(d["age4Data__military3"]);
        bwA4M4.push(d["age4Data__military4"]);


    });
    //on startup, do the box&whisker visual with general ages / stats
    updateBigData();
}

//GRAPHS / VIS
function bw_vis(){

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
    }
    //#####################################################

    // set the dimensions and margins of the graph
    var margin = {top: 10, right: 30, bottom: 30, left: 40},
        width = xLabels.length*100 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    svg = d3.select("#vis")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",  "translate(" + margin.left + "," + margin.top + ")");

    // Show the X scale
    var x = d3.scaleBand()
        .range([ 0, width ])
        .domain(xLabels)
        .paddingInner(1)
        .paddingOuter(.5);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Show the Y scale
    var y = d3.scaleLinear()
        .domain([0,1])
        .range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));



    //console.log(dataGroup);
    var i = 0;
    dataGroup.forEach(data => {

        var tempdata = data.filter(() => true);
        //remove null or 0 values
        if(nulldata){
            for( var v = tempdata.length-1; v--;){
                if ((tempdata[v] === 0) || (isNaN(tempdata[v]))) tempdata.splice(v, 1);
            }
        }
        else{
            for( var v = tempdata.length-1; v--;){
                if (isNaN(tempdata[v])) tempdata.splice(v, 1);
            }
        }


        var data_sorted = tempdata.sort(d3.ascending);
        //console.log(data_sorted);

        // Compute summary statistics used for the box:
        var q1 = d3.quantile(data_sorted, .25);
        var median = d3.quantile(data_sorted, .5);
        var q3 = d3.quantile(data_sorted, .75);
        var interQuantileRange = q3 - q1;
        var min = q1 - 1.5 * interQuantileRange;
        var max = q1 + 1.5 * interQuantileRange;

        // console.log(data_sorted);
        // console.log(q1);
        // console.log(median);
        // console.log(q3);
        // console.log(interQuantileRange);
        // console.log(min);
        // console.log(max);

        // a few features for the box
        var center = 200;
        var boxWidth = 50;

        // Show the main vertical line
        svg.selectAll("vertLines")
            .data([1])
            .enter()
            .append("line")
                .attr("x1", x(xLabels[i]))
                .attr("x2", x(xLabels[i]))
                .attr("y1", y(min))
                .attr("y2", y(max))
                .attr("stroke", "black")
                .style("width", 40);

        // Show the box
        svg.selectAll("boxes")
            .data([1])
            .enter()
            .append("rect")
                .attr("x", x(xLabels[i])-boxWidth/2)
                .attr("y", y(q3))
                .attr("height", y(q1)-y(q3))
                .attr("width", boxWidth )
                .attr("stroke", "black")
                .style("fill", "#69b3a2");

        // show median, min and max horizontal lines
        svg.selectAll("medianLines")
            .data([1])
            .enter()
            .append("line")
            .attr("x1", x(xLabels[i])-boxWidth/2)
            .attr("x2", x(xLabels[i])+boxWidth/2)
            .attr("y1", y(median))
            .attr("y2", y(median))
            .attr("stroke", "black")
            .style("width", 80);

        // Add individual points with jitter
        var jitterWidth = 25;
        svg.selectAll("indPoints")
            .data(tempdata)
            .enter()
            .append("circle")
            .attr("cx", function(){return(x(xLabels[i]) - jitterWidth/2 + Math.random()*jitterWidth )})
            .attr("cy", function(d){return(y(d))})
            .attr("r", 4)
            .style("fill", "white")
            .attr("stroke", "black");

        i += 1;
    });

}













d3.csv('data-fixed.csv').then( function(data) {
    parsedData = parseData(data);

    //update graph
});