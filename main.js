let parsedData;
let nulldata = false;
let selectedPlot;
var dataGroup = [];
var xLabels = [];




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
    if(selectedPlot === "eventTime")updateEvent();
}

//parsed data - organize data
function parseData(data){
    //for each row of the data, organize the columns
    data.forEach( d => {
        //let id = d.uuid; //TODO: make id list
        //TODO: AI choice decision
        //TODO: manual calls

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


d3.csv('data-fixed.csv').then( function(data) {
    parsedData = parseData(data);

    //update graph in parseData
});