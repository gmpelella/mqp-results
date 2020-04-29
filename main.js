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
        bwA4Se,
        //####
        bwA0T,
        bwA1T,
        bwA2T,
        bwA3T,
        bwA4T
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
        "Age4-Security",
        "Age0-Time",
        "Age1-Time",
        "Age2-Time",
        "Age3-Time",
        "Age4-Time"
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
    //console.log(selectedPlot);
    if(selectedPlot === "BigData")updateBigData();
}

//parsed data - organize data
function parseData(data){
    //for each row of the data, organize the columns
    data.forEach( d => {
        //let id = d.uuid; //TODO: make id list

        //TODO: make time/60 to fit in plot?
        //TODO: just kinda make sure all the data is capped at 1
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
        //military
        //#######################################################
        //population
        bwA0P.push(d["age0Data__population0"],
            d["age0Data__population1"],
            d["age0Data__population2"],
            d["age0Data__population3"],
            d["age0Data__population4"]);
        bwA0P0.push(d["age0Data__population0"]);
        bwA0P1.push(d["age0Data__population1"]);
        bwA0P2.push(d["age0Data__population2"]);
        bwA0P3.push(d["age0Data__population3"]);
        bwA0P4.push(d["age0Data__population4"]);
        bwA1P.push(d["age1Data__population0"],
            d["age1Data__population1"],
            d["age1Data__population2"],
            d["age1Data__population3"],
            d["age1Data__population4"]);
        bwA1P0.push(d["age1Data__population0"]);
        bwA1P1.push(d["age1Data__population1"]);
        bwA1P2.push(d["age1Data__population2"]);
        bwA1P3.push(d["age1Data__population3"]);
        bwA1P4.push(d["age1Data__population4"]);
        bwA2P.push(d["age2Data__population0"],
            d["age2Data__population1"],
            d["age2Data__population2"],
            d["age2Data__population3"],
            d["age2Data__population4"]);
        bwA2P0.push(d["age2Data__population0"]);
        bwA2P1.push(d["age2Data__population1"]);
        bwA2P2.push(d["age2Data__population2"]);
        bwA2P3.push(d["age2Data__population3"]);
        bwA2P4.push(d["age2Data__population4"]);
        bwA3P.push(d["age3Data__population0"],
            d["age3Data__population1"],
            d["age3Data__population2"],
            d["age3Data__population3"],
            d["age3Data__population4"]);
        bwA3P0.push(d["age3Data__population0"]);
        bwA3P1.push(d["age3Data__population1"]);
        bwA3P2.push(d["age3Data__population2"]);
        bwA3P3.push(d["age3Data__population3"]);
        bwA3P4.push(d["age3Data__population4"]);
        bwA4P.push(d["age4Data__population0"],
            d["age4Data__population1"],
            d["age4Data__population2"],
            d["age4Data__population3"],
            d["age4Data__population4"]);
        bwA4P0.push(d["age4Data__population0"]);
        bwA4P1.push(d["age4Data__population1"]);
        bwA4P2.push(d["age4Data__population2"]);
        bwA4P3.push(d["age4Data__population3"]);
        bwA4P4.push(d["age4Data__population4"]);
        //population
        //#######################################################
        //science
        bwA0Sc.push(d["age0Data__science0"],
            d["age0Data__science1"],
            d["age0Data__science2"],
            d["age0Data__science3"],
            d["age0Data__science4"]);
        bwA0Sc0.push(d["age0Data__science0"]);
        bwA0Sc1.push(d["age0Data__science1"]);
        bwA0Sc2.push(d["age0Data__science2"]);
        bwA0Sc3.push(d["age0Data__science3"]);
        bwA0Sc4.push(d["age0Data__science4"]);
        bwA1Sc.push(d["age1Data__science0"],
            d["age1Data__science1"],
            d["age1Data__science2"],
            d["age1Data__science3"],
            d["age1Data__science4"]);
        bwA1Sc0.push(d["age1Data__science0"]);
        bwA1Sc1.push(d["age1Data__science1"]);
        bwA1Sc2.push(d["age1Data__science2"]);
        bwA1Sc3.push(d["age1Data__science3"]);
        bwA1Sc4.push(d["age1Data__science4"]);
        bwA2Sc.push(d["age2Data__science0"],
            d["age2Data__science1"],
            d["age2Data__science2"],
            d["age2Data__science3"],
            d["age2Data__science4"]);
        bwA2Sc0.push(d["age2Data__science0"]);
        bwA2Sc1.push(d["age2Data__science1"]);
        bwA2Sc2.push(d["age2Data__science2"]);
        bwA2Sc3.push(d["age2Data__science3"]);
        bwA2Sc4.push(d["age2Data__science4"]);
        bwA3Sc.push(d["age3Data__science0"],
            d["age3Data__science1"],
            d["age3Data__science2"],
            d["age3Data__science3"],
            d["age3Data__science4"]);
        bwA3Sc0.push(d["age3Data__science0"]);
        bwA3Sc1.push(d["age3Data__science1"]);
        bwA3Sc2.push(d["age3Data__science2"]);
        bwA3Sc3.push(d["age3Data__science3"]);
        bwA3Sc4.push(d["age3Data__science4"]);
        bwA4Sc.push(d["age4Data__science0"],
            d["age4Data__science1"],
            d["age4Data__science2"],
            d["age4Data__science3"],
            d["age4Data__science4"]);
        bwA4Sc0.push(d["age4Data__science0"]);
        bwA4Sc1.push(d["age4Data__science1"]);
        bwA4Sc2.push(d["age4Data__science2"]);
        bwA4Sc3.push(d["age4Data__science3"]);
        bwA4Sc4.push(d["age4Data__science4"]);
        //science
        //#######################################################
        //security
        bwA0Se.push(d["age0Data__security0"],
            d["age0Data__security1"],
            d["age0Data__security2"],
            d["age0Data__security3"],
            d["age0Data__security4"]);
        bwA0Se0.push(d["age0Data__security0"]);
        bwA0Se1.push(d["age0Data__security1"]);
        bwA0Se2.push(d["age0Data__security2"]);
        bwA0Se3.push(d["age0Data__security3"]);
        bwA0Se4.push(d["age0Data__security4"]);
        bwA1Se.push(d["age1Data__security0"],
            d["age1Data__security1"],
            d["age1Data__security2"],
            d["age1Data__security3"],
            d["age1Data__security4"]);
        bwA1Se0.push(d["age1Data__security0"]);
        bwA1Se1.push(d["age1Data__security1"]);
        bwA1Se2.push(d["age1Data__security2"]);
        bwA1Se3.push(d["age1Data__security3"]);
        bwA1Se4.push(d["age1Data__security4"]);
        bwA2Se.push(d["age2Data__security0"],
            d["age2Data__security1"],
            d["age2Data__security2"],
            d["age2Data__security3"],
            d["age2Data__security4"]);
        bwA2Se0.push(d["age2Data__security0"]);
        bwA2Se1.push(d["age2Data__security1"]);
        bwA2Se2.push(d["age2Data__security2"]);
        bwA2Se3.push(d["age2Data__security3"]);
        bwA2Se4.push(d["age2Data__security4"]);
        bwA3Se.push(d["age3Data__security0"],
            d["age3Data__security1"],
            d["age3Data__security2"],
            d["age3Data__security3"],
            d["age3Data__security4"]);
        bwA3Se0.push(d["age3Data__security0"]);
        bwA3Se1.push(d["age3Data__security1"]);
        bwA3Se2.push(d["age3Data__security2"]);
        bwA3Se3.push(d["age3Data__security3"]);
        bwA3Se4.push(d["age3Data__security4"]);
        bwA4Se.push(d["age4Data__security0"],
            d["age4Data__security1"],
            d["age4Data__security2"],
            d["age4Data__security3"],
            d["age4Data__security4"]);
        bwA4Se0.push(d["age4Data__security0"]);
        bwA4Se1.push(d["age4Data__security1"]);
        bwA4Se2.push(d["age4Data__security2"]);
        bwA4Se3.push(d["age4Data__security3"]);
        bwA4Se4.push(d["age4Data__security4"]);
        //security
        //#######################################################
        //time
        bwA0T.push(d["age0Data__time0"],
            d["age0Data__time1"],
            d["age0Data__time2"],
            d["age0Data__time3"],
            d["age0Data__time4"]);
        bwA0T0.push(d["age0Data__time0"]);
        bwA0T1.push(d["age0Data__time1"]);
        bwA0T2.push(d["age0Data__time2"]);
        bwA0T3.push(d["age0Data__time3"]);
        bwA0T4.push(d["age0Data__time4"]);
        bwA1T.push(d["age1Data__time0"],
            d["age1Data__time1"],
            d["age1Data__time2"],
            d["age1Data__time3"],
            d["age1Data__time4"]);
        bwA1T0.push(d["age1Data__time0"]);
        bwA1T1.push(d["age1Data__time1"]);
        bwA1T2.push(d["age1Data__time2"]);
        bwA1T3.push(d["age1Data__time3"]);
        bwA1T4.push(d["age1Data__time4"]);
        bwA2T.push(d["age2Data__time0"],
            d["age2Data__time1"],
            d["age2Data__time2"],
            d["age2Data__time3"],
            d["age2Data__time4"]);
        bwA2T0.push(d["age2Data__time0"]);
        bwA2T1.push(d["age2Data__time1"]);
        bwA2T2.push(d["age2Data__time2"]);
        bwA2T3.push(d["age2Data__time3"]);
        bwA2T4.push(d["age2Data__time4"]);
        bwA3T.push(d["age3Data__time0"],
            d["age3Data__time1"],
            d["age3Data__time2"],
            d["age3Data__time3"],
            d["age3Data__time4"]);
        bwA3T0.push(d["age3Data__time0"]);
        bwA3T1.push(d["age3Data__time1"]);
        bwA3T2.push(d["age3Data__time2"]);
        bwA3T3.push(d["age3Data__time3"]);
        bwA3T4.push(d["age3Data__time4"]);
        bwA4T.push(d["age4Data__time0"],
            d["age4Data__time1"],
            d["age4Data__time2"],
            d["age4Data__time3"],
            d["age4Data__time4"]);
        bwA4T0.push(d["age4Data__time0"]);
        bwA4T1.push(d["age4Data__time1"]);
        bwA4T2.push(d["age4Data__time2"]);
        bwA4T3.push(d["age4Data__time3"]);
        bwA4T4.push(d["age4Data__time4"]);
        //time

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

        console.log(agei);

        var tempdata = data.filter(() => true);
        //remove null or 0 values
        if(!nulldata){
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













d3.csv('data-fixed.csv').then( function(data) {
    parsedData = parseData(data);

    //update graph
});