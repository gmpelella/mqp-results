let parsedData;

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


//parsed data - organize data
function parseData(data){
    //for each row of the data, organize the columns
    data.forEach( d => {
        let id = d.uuid;

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

        //box&whisker plot data:
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



        // //wait do i need this here? // i dont think so
        // //age 0: stone age
        // let age0choice0 = {
        //     hunger: d.age0Data__hunger0,
        //     military: d.age0Data__military0,
        //     population: d.age0Data__population0,
        //     science: d.age0Data__science0,
        //     security: d.age0Data__security0,
        //     time: d.age0Data__time0};
        // let age0choice1 = {
        //     hunger: d.age0Data__hunger1,
        //     military: d.age0Data__military1,
        //     population: d.age0Data__population1,
        //     science: d.age0Data__science1,
        //     security: d.age0Data__security1,
        //     time: d.age0Data__time1};
        // let age0choice2 = {
        //     hunger: d.age0Data__hunger2,
        //     military: d.age0Data__military2,
        //     population: d.age0Data__population2,
        //     science: d.age0Data__science2,
        //     security: d.age0Data__security2,
        //     time: d.age0Data__time2};
        // let age0choice3 = {
        //     hunger: d.age0Data__hunger3,
        //     military: d.age0Data__military3,
        //     population: d.age0Data__population3,
        //     science: d.age0Data__science3,
        //     security: d.age0Data__security3,
        //     time: d.age0Data__time3};
        // let age0choice4 = {
        //     hunger: d.age0Data__hunger4,
        //     military: d.age0Data__military4,
        //     population: d.age0Data__population4,
        //     science: d.age0Data__science4,
        //     security: d.age0Data__security4,
        //     time: d.age0Data__time4};
        // //age 1: metal age
        // let age1choice0 = {
        //     hunger: d.age1Data__hunger0,
        //     military: d.age1Data__military0,
        //     population: d.age1Data__population0,
        //     science: d.age1Data__science0,
        //     security: d.age1Data__security0,
        //     time: d.age1Data__time0};
        // let age1choice1 = {
        //     hunger: d.age1Data__hunger1,
        //     military: d.age1Data__military1,
        //     population: d.age1Data__population1,
        //     science: d.age1Data__science1,
        //     security: d.age1Data__security1,
        //     time: d.age1Data__time1};
        // let age1choice2 = {
        //     hunger: d.age1Data__hunger2,
        //     military: d.age1Data__military2,
        //     population: d.age1Data__population2,
        //     science: d.age1Data__science2,
        //     security: d.age1Data__security2,
        //     time: d.age1Data__time2};
        // let age1choice3 = {
        //     hunger: d.age1Data__hunger3,
        //     military: d.age1Data__military3,
        //     population: d.age1Data__population3,
        //     science: d.age1Data__science3,
        //     security: d.age1Data__security3,
        //     time: d.age1Data__time3};
        // let age1choice4 = {
        //     hunger: d.age1Data__hunger4,
        //     military: d.age1Data__military4,
        //     population: d.age1Data__population4,
        //     science: d.age1Data__science4,
        //     security: d.age1Data__security4,
        //     time: d.age1Data__time4};
        // //age 2: conquering age
        // let age2choice0 = {
        //     hunger: d.age2Data__hunger0,
        //     military: d.age2Data__military0,
        //     population: d.age2Data__population0,
        //     science: d.age2Data__science0,
        //     security: d.age2Data__security0,
        //     time: d.age2Data__time0};
        // let age2choice1 = {
        //     hunger: d.age2Data__hunger1,
        //     military: d.age2Data__military1,
        //     population: d.age2Data__population1,
        //     science: d.age2Data__science1,
        //     security: d.age2Data__security1,
        //     time: d.age2Data__time1};
        // let age2choice2 = {
        //     hunger: d.age2Data__hunger2,
        //     military: d.age2Data__military2,
        //     population: d.age2Data__population2,
        //     science: d.age2Data__science2,
        //     security: d.age2Data__security2,
        //     time: d.age2Data__time2};
        // let age2choice3 = {
        //     hunger: d.age2Data__hunger3,
        //     military: d.age2Data__military3,
        //     population: d.age2Data__population3,
        //     science: d.age2Data__science3,
        //     security: d.age2Data__security3,
        //     time: d.age2Data__time3};
        // let age2choice4 = {
        //     hunger: d.age2Data__hunger4,
        //     military: d.age2Data__military4,
        //     population: d.age2Data__population4,
        //     science: d.age2Data__science4,
        //     security: d.age2Data__security4,
        //     time: d.age2Data__time4};
        // //age 3: industrial age
        // let age3choice0 = {
        //     hunger: d.age3Data__hunger0,
        //     military: d.age3Data__military0,
        //     population: d.age3Data__population0,
        //     science: d.age3Data__science0,
        //     security: d.age3Data__security0,
        //     time: d.age3Data__time0};
        // let age3choice1 = {
        //     hunger: d.age3Data__hunger1,
        //     military: d.age3Data__military1,
        //     population: d.age3Data__population1,
        //     science: d.age3Data__science1,
        //     security: d.age3Data__security1,
        //     time: d.age3Data__time1};
        // let age3choice2 = {
        //     hunger: d.age3Data__hunger2,
        //     military: d.age3Data__military2,
        //     population: d.age3Data__population2,
        //     science: d.age3Data__science2,
        //     security: d.age3Data__security2,
        //     time: d.age3Data__time2};
        // let age3choice3 = {
        //     hunger: d.age3Data__hunger3,
        //     military: d.age3Data__military3,
        //     population: d.age3Data__population3,
        //     science: d.age3Data__science3,
        //     security: d.age3Data__security3,
        //     time: d.age3Data__time3};
        // let age3choice4 = {
        //     hunger: d.age3Data__hunger4,
        //     military: d.age3Data__military4,
        //     population: d.age3Data__population4,
        //     science: d.age3Data__science4,
        //     security: d.age3Data__security4,
        //     time: d.age3Data__time4};
        // //age 4: space age
        // let age4choice0 = {
        //     hunger: d.age4Data__hunger0,
        //     military: d.age4Data__military0,
        //     population: d.age4Data__population0,
        //     science: d.age4Data__science0,
        //     security: d.age4Data__security0,
        //     time: d.age4Data__time0};
        // let age4choice1 = {
        //     hunger: d.age4Data__hunger1,
        //     military: d.age4Data__military1,
        //     population: d.age4Data__population1,
        //     science: d.age4Data__science1,
        //     security: d.age4Data__security1,
        //     time: d.age4Data__time1};
        // let age4choice2 = {
        //     hunger: d.age4Data__hunger2,
        //     military: d.age4Data__military2,
        //     population: d.age4Data__population2,
        //     science: d.age4Data__science2,
        //     security: d.age4Data__security2,
        //     time: d.age4Data__time2};
        // let age4choice3 = {
        //     hunger: d.age4Data__hunger3,
        //     military: d.age4Data__military3,
        //     population: d.age4Data__population3,
        //     science: d.age4Data__science3,
        //     security: d.age4Data__security3,
        //     time: d.age4Data__time3};
        // let age4choice4 = {
        //     hunger: d.age4Data__hunger4,
        //     military: d.age4Data__military4,
        //     population: d.age4Data__population4,
        //     science: d.age4Data__science4,
        //     security: d.age4Data__security4,
        //     time: d.age4Data__time4};
    })

    bw_vis();
}

//GRAPHS / VIS
function bw_vis(){
    // set the dimensions and margins of the graph
    var margin = {top: 10, right: 30, bottom: 30, left: 40},
        width = 400 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#content")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Compute summary statistics used for the box:
    var data = bwA0H;

    var data_sorted = data.sort(d3.ascending);
    var q1 = d3.quantile(data_sorted, .25);
    var median = d3.quantile(data_sorted, .5);
    var q3 = d3.quantile(data_sorted, .75);
    var interQuantileRange = q3 - q1;
    var min = q1 - 1.5 * interQuantileRange;
    var max = q1 + 1.5 * interQuantileRange;

    // Show the Y scale
    var y = d3.scaleLinear()
        .domain([0,3])
        .range([height, 0]);
    svg.call(d3.axisLeft(y));

    // a few features for the box
    var center = 200;
    var width = 100;

    // Show the main vertical line
    svg.append("line")
        .attr("x1", center)
        .attr("x2", center)
        .attr("y1", y(min) )
        .attr("y2", y(max) )
        .attr("stroke", "black");

    // Show the box
    svg.append("rect")
        .attr("x", center - width/2)
        .attr("y", y(q3) )
        .attr("height", (y(q1)-y(q3)) )
        .attr("width", width )
        .attr("stroke", "black")
        .style("fill", "#69b3a2");

    // show median, min and max horizontal lines
    svg.selectAll("toto")
        .data([min, median, max])
        .enter()
        .append("line")
        .attr("x1", center-width/2)
        .attr("x2", center+width/2)
        .attr("y1", function(d){ return(y(d))} )
        .attr("y2", function(d){ return(y(d))} )
        .attr("stroke", "black");
}













d3.csv('data-fixed.csv').then( function(data) {
    parsedData = parseData(data);

    //update graph
});