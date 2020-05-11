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
//#########################
//POPULATION
let bwA0P = [];
let bwA0P0 = [];
let bwA0P1 = [];
let bwA0P2 = [];
let bwA0P3 = [];
let bwA0P4 = [];
let bwA1P = [];
let bwA1P0 = [];
let bwA1P1 = [];
let bwA1P2 = [];
let bwA1P3 = [];
let bwA1P4 = [];
let bwA2P = [];
let bwA2P0 = [];
let bwA2P1 = [];
let bwA2P2 = [];
let bwA2P3 = [];
let bwA2P4 = [];
let bwA3P = [];
let bwA3P0 = [];
let bwA3P1 = [];
let bwA3P2 = [];
let bwA3P3 = [];
let bwA3P4 = [];
let bwA4P = [];
let bwA4P0 = [];
let bwA4P1 = [];
let bwA4P2 = [];
let bwA4P3 = [];
let bwA4P4 = [];
//#########################
//SCIENCE
let bwA0Sc = [];
let bwA0Sc0 = [];
let bwA0Sc1 = [];
let bwA0Sc2 = [];
let bwA0Sc3 = [];
let bwA0Sc4 = [];
let bwA1Sc = [];
let bwA1Sc0 = [];
let bwA1Sc1 = [];
let bwA1Sc2 = [];
let bwA1Sc3 = [];
let bwA1Sc4 = [];
let bwA2Sc = [];
let bwA2Sc0 = [];
let bwA2Sc1 = [];
let bwA2Sc2 = [];
let bwA2Sc3 = [];
let bwA2Sc4 = [];
let bwA3Sc = [];
let bwA3Sc0 = [];
let bwA3Sc1 = [];
let bwA3Sc2 = [];
let bwA3Sc3 = [];
let bwA3Sc4 = [];
let bwA4Sc = [];
let bwA4Sc0 = [];
let bwA4Sc1 = [];
let bwA4Sc2 = [];
let bwA4Sc3 = [];
let bwA4Sc4 = [];
//#########################
//SECURITY
let bwA0Se = [];
let bwA0Se0 = [];
let bwA0Se1 = [];
let bwA0Se2 = [];
let bwA0Se3 = [];
let bwA0Se4 = [];
let bwA1Se = [];
let bwA1Se0 = [];
let bwA1Se1 = [];
let bwA1Se2 = [];
let bwA1Se3 = [];
let bwA1Se4 = [];
let bwA2Se = [];
let bwA2Se0 = [];
let bwA2Se1 = [];
let bwA2Se2 = [];
let bwA2Se3 = [];
let bwA2Se4 = [];
let bwA3Se = [];
let bwA3Se0 = [];
let bwA3Se1 = [];
let bwA3Se2 = [];
let bwA3Se3 = [];
let bwA3Se4 = [];
let bwA4Se = [];
let bwA4Se0 = [];
let bwA4Se1 = [];
let bwA4Se2 = [];
let bwA4Se3 = [];
let bwA4Se4 = [];
//#########################
//TIME
let bwA0T = [];
let bwA0T0 = [];
let bwA0T1 = [];
let bwA0T2 = [];
let bwA0T3 = [];
let bwA0T4 = [];
let bwA1T = [];
let bwA1T0 = [];
let bwA1T1 = [];
let bwA1T2 = [];
let bwA1T3 = [];
let bwA1T4 = [];
let bwA2T = [];
let bwA2T0 = [];
let bwA2T1 = [];
let bwA2T2 = [];
let bwA2T3 = [];
let bwA2T4 = [];
let bwA3T = [];
let bwA3T0 = [];
let bwA3T1 = [];
let bwA3T2 = [];
let bwA3T3 = [];
let bwA3T4 = [];
let bwA4T = [];
let bwA4T0 = [];
let bwA4T1 = [];
let bwA4T2 = [];
let bwA4T3 = [];
let bwA4T4 = [];




//BUTTONS
function updateBigData(){
    dataGroup=[];
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
        bwA4M,
        //####
        bwA0P,
        bwA1P,
        bwA2P,
        bwA3P,
        bwA4P,
        //####
        bwA0Sc,
        bwA1Sc,
        bwA2Sc,
        bwA3Sc,
        bwA4Sc,
        //####
        bwA0Se,
        bwA1Se,
        bwA2Se,
        bwA3Se,
        bwA4Se
        //####
        // bwA0T,
        // bwA1T,
        // bwA2T,
        // bwA3T,
        // bwA4T
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
        "Age4-Military",
        "Age0-Population",
        "Age1-Population",
        "Age2-Population",
        "Age3-Population",
        "Age4-Population",
        "Age0-Science",
        "Age1-Science",
        "Age2-Science",
        "Age3-Science",
        "Age4-Science",
        "Age0-Security",
        "Age1-Security",
        "Age2-Security",
        "Age3-Security",
        "Age4-Security"
        // "Age0-Time",
        // "Age1-Time",
        // "Age2-Time",
        // "Age3-Time",
        // "Age4-Time"
    ];

    selectedPlot = "BigData";

    bw_vis();
    //update a descriptor text to the bottom of the page/plot
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

        svg.selectAll("defs").remove();
        svg.selectAll("clipPath").remove();
        svg.selectAll(".laneLines").remove();
        svg.selectAll(".laneText").remove();
        svg.selectAll("eventItems").remove();
        svg.selectAll(".eventLabels").remove();
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

    //color for boxes for age ????????????????????????
    var myColor = d3.scaleOrdinal()
        .domain([1,5])
        .range(d3.schemeSet3);
    //legend for color
    //https://www.d3-graph-gallery.com/graph/custom_legend.html

    //console.log(dataGroup);
    var i = 0;
    var agei = 0;
    dataGroup.forEach(data => {
        //console.log(i);
        if(agei >= 5) agei=0;

        //console.log(agei);

        var tempdata = data.filter(() => true);
        //remove null or 0 values
        if(!nulldata){
            for( var v = tempdata.length-1; v--;){
                //cap at 1
                if (tempdata[v]>1) tempdata = 1;
                //remove
                if ((tempdata[v] === 0) || (isNaN(tempdata[v]))) tempdata.splice(v, 1);
            }
        }
        else{
            for( var v = tempdata.length-1; v--;){
                //cap at 1
                if (tempdata[v]>1) tempdata = 1;
                //remove
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
        var boxWidth = 75;

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
            .attr("fill", d3.schemeSet3[agei]);

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
        var jitterWidth = 50;
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
        agei += 1;
    });

}

