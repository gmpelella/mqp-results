let parsedData;
let nulldata = false;
let selectedPlot;
let dataGroup = [];
var xLabels = [];

let ids = [];
let orderedIDs=[];
var selectedIDs = [
    "c30d5c55-c469-433e-99cd-fed5d9a50992",
    "511c7364-a0a2-492a-8bf3-9d8e2af34309",
    "2156677c-1710-46ec-b351-8f882b177319", //
    "bd36f52c-b907-48ba-8bd5-06b762f16ffc", //
    "dc888d28-39f4-4e7a-b55f-c9657d57b729", //
    "c7a7b051-73e9-4e73-8473-d0ba40331dd8", //
    "cd6e71ce-7b44-47ea-851d-3cae1f111da5",
    "b3ccfe3e-67b0-4999-81dd-af0a45cb4eae", //
    "8c577227-76e3-42ac-a117-873131e8e2ef", //
    "1355814f-bd43-42a7-bb5b-2506bb04d51b", //
    "1cf463ed-cecd-4c03-b46c-faad664dd7c4",
    "75d3061b-bdf1-4d2d-a98c-76c779d0564c", //
    "1c218270-dfe8-4c63-8fd0-1b3e7e37f24a",
    "87bdd9da-dc26-491c-b120-95d9e249eaa8",
    "803f9136-d124-49f0-9343-8d6eb5ff5b25", //
    "643b2249-3dc2-4d02-ae84-b99421de4205", //
    "4adabd01-b5fa-4f03-a25c-39903be64125"];
let ETperID=[];


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
        //id list is made at the bottom
        //TODO: AI choice decision
        //TODO: manual calls

        //TODO: make time/60 to fit in plot?
        //TODO: just kinda make sure relevant data is capped at 1
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

        ids.push(d["uuid"]);

        //event stuff
        for(var v=0;v<=ids.length;v++){
            if(selectedIDs.includes(d["uuid"])){
                //console.log("pushing to event timeline id list");
                //console.log(d["uuid"]);
                orderedIDs.push(d["uuid"]);
                ETperID.push([
                    //age 0
                    {age:"Stone Age",time:60-d["age0Data__time0"],
                        hunger:d["age0Data__hunger0"], military:d["age0Data__military0"], science:d["age0Data__science0"], security:d["age0Data__security0"]},
                    {age:"Stone Age",time:60*2-d["age0Data__time0"]-d["age0Data__time1"],
                        hunger:d["age0Data__hunger1"], military:d["age0Data__military1"], science:d["age0Data__science1"], security:d["age0Data__security1"]},
                    {age:"Stone Age",time:60*3-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"],
                        hunger:d["age0Data__hunger2"], military:d["age0Data__military2"], science:d["age0Data__science2"], security:d["age0Data__security2"]},
                    {age:"Stone Age",time:60*4-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"],
                        hunger:d["age0Data__hunger3"], military:d["age0Data__military3"], science:d["age0Data__science3"], security:d["age0Data__security3"]},
                    {age:"Stone Age",time:60*5-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"],
                        hunger:d["age0Data__hunger4"], military:d["age0Data__military4"], science:d["age0Data__science4"], security:d["age0Data__security4"]},
                    //age1
                    {age:"Metal Age",time:60*6-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"],
                        hunger:d["age1Data__hunger0"], military:d["age1Data__military0"], science:d["age1Data__science0"], security:d["age1Data__security0"]},
                    {age:"Metal Age",time:60*7-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"],
                        hunger:d["age1Data__hunger1"], military:d["age1Data__military1"], science:d["age1Data__science1"], security:d["age1Data__security1"]},
                    {age:"Metal Age",time:60*8-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"]-d["age1Data__time2"],
                        hunger:d["age1Data__hunger2"], military:d["age1Data__military2"], science:d["age1Data__science2"], security:d["age1Data__security2"]},
                    {age:"Metal Age",time:60*9-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"]-d["age1Data__time2"]-d["age1Data__time3"],
                        hunger:d["age1Data__hunger3"], military:d["age1Data__military3"], science:d["age1Data__science3"], security:d["age1Data__security3"]},
                    {age:"Metal Age",time:60*10-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"]-d["age1Data__time2"]-d["age1Data__time3"]-d["age1Data__time1"],
                        hunger:d["age1Data__hunger4"], military:d["age1Data__military4"], science:d["age1Data__science4"], security:d["age1Data__security4"]},
                    //age2
                    {age:"Conquering Age",time:60*11-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"]-d["age1Data__time2"]-d["age1Data__time3"]-d["age1Data__time1"]-d["age2Data__time0"],
                        hunger:d["age2Data__hunger0"], military:d["age2Data__military0"], science:d["age2Data__science0"], security:d["age2Data__security0"]},
                    {age:"Conquering Age",time:60*12-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"]-d["age1Data__time2"]-d["age1Data__time3"]-d["age1Data__time1"]-d["age2Data__time0"]-d["age2Data__time1"],
                        hunger:d["age2Data__hunger1"], military:d["age2Data__military1"], science:d["age2Data__science1"], security:d["age2Data__security1"]},
                    {age:"Conquering Age",time:60*13-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"]-d["age1Data__time2"]-d["age1Data__time3"]-d["age1Data__time1"]-d["age2Data__time0"]-d["age2Data__time1"]-d["age2Data__time2"],
                        hunger:d["age2Data__hunger2"], military:d["age2Data__military2"], science:d["age2Data__science2"], security:d["age2Data__security2"]},
                    {age:"Conquering Age",time:60*14-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"]-d["age1Data__time2"]-d["age1Data__time3"]-d["age1Data__time1"]-d["age2Data__time0"]-d["age2Data__time1"]-d["age2Data__time2"]-d["age2Data__time3"],
                        hunger:d["age2Data__hunger3"], military:d["age2Data__military3"], science:d["age2Data__science3"], security:d["age2Data__security3"]},
                    {age:"Conquering Age",time:60*15-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"]-d["age1Data__time2"]-d["age1Data__time3"]-d["age1Data__time1"]-d["age2Data__time0"]-d["age2Data__time1"]-d["age2Data__time2"]-d["age2Data__time3"]-d["age2Data__time2"],
                        hunger:d["age2Data__hunger4"], military:d["age2Data__military4"], science:d["age2Data__science4"], security:d["age2Data__security4"]},
                    //age3
                    {age:"Industrial Age",time:60*16-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"]-d["age1Data__time2"]-d["age1Data__time3"]-d["age1Data__time1"]-d["age2Data__time0"]-d["age2Data__time1"]-d["age2Data__time2"]-d["age2Data__time3"]-d["age2Data__time2"]-d["age3Data__time0"],
                        hunger:d["age3Data__hunger0"], military:d["age3Data__military0"], science:d["age3Data__science0"], security:d["age3Data__security0"]},
                    {age:"Industrial Age",time:60*17-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"]-d["age1Data__time2"]-d["age1Data__time3"]-d["age1Data__time1"]-d["age2Data__time0"]-d["age2Data__time1"]-d["age2Data__time2"]-d["age2Data__time3"]-d["age2Data__time2"]-d["age3Data__time0"]-d["age3Data__time1"],
                        hunger:d["age3Data__hunger1"], military:d["age3Data__military1"], science:d["age3Data__science1"], security:d["age3Data__security1"]},
                    {age:"Industrial Age",time:60*18-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"]-d["age1Data__time2"]-d["age1Data__time3"]-d["age1Data__time1"]-d["age2Data__time0"]-d["age2Data__time1"]-d["age2Data__time2"]-d["age2Data__time3"]-d["age2Data__time2"]-d["age3Data__time0"]-d["age3Data__time1"]-d["age3Data__time2"],
                        hunger:d["age3Data__hunger2"], military:d["age3Data__military2"], science:d["age3Data__science2"], security:d["age3Data__security2"]},
                    {age:"Industrial Age",time:60*19-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"]-d["age1Data__time2"]-d["age1Data__time3"]-d["age1Data__time1"]-d["age2Data__time0"]-d["age2Data__time1"]-d["age2Data__time2"]-d["age2Data__time3"]-d["age2Data__time2"]-d["age3Data__time0"]-d["age3Data__time1"]-d["age3Data__time2"]-d["age3Data__time3"],
                        hunger:d["age3Data__hunger3"], military:d["age3Data__military3"], science:d["age3Data__science3"], security:d["age3Data__security3"]},
                    {age:"Industrial Age",time:60*20-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"]-d["age1Data__time2"]-d["age1Data__time3"]-d["age1Data__time1"]-d["age2Data__time0"]-d["age2Data__time1"]-d["age2Data__time2"]-d["age2Data__time3"]-d["age2Data__time2"]-d["age3Data__time0"]-d["age3Data__time1"]-d["age3Data__time2"]-d["age3Data__time3"]-d["age3Data__time3"],
                        hunger:d["age3Data__hunger4"], military:d["age3Data__military4"], science:d["age3Data__science4"], security:d["age3Data__security4"]},
                    //age4
                    {age:"Space Age",time:60*21-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"]-d["age1Data__time2"]-d["age1Data__time3"]-d["age1Data__time1"]-d["age2Data__time0"]-d["age2Data__time1"]-d["age2Data__time2"]-d["age2Data__time3"]-d["age2Data__time2"]-d["age3Data__time0"]-d["age3Data__time1"]-d["age3Data__time2"]-d["age3Data__time3"]-d["age3Data__time3"]-d["age4Data__time0"],
                        hunger:d["age4Data__hunger0"], military:d["age4Data__military0"], science:d["age4Data__science0"], security:d["age4Data__security0"]},
                    {age:"Space Age",time:60*22-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"]-d["age1Data__time2"]-d["age1Data__time3"]-d["age1Data__time1"]-d["age2Data__time0"]-d["age2Data__time1"]-d["age2Data__time2"]-d["age2Data__time3"]-d["age2Data__time2"]-d["age3Data__time0"]-d["age3Data__time1"]-d["age3Data__time2"]-d["age3Data__time3"]-d["age3Data__time3"]-d["age4Data__time0"]-d["age4Data__time1"],
                        hunger:d["age4Data__hunger1"], military:d["age4Data__military1"], science:d["age4Data__science1"], security:d["age4Data__security1"]},
                    {age:"Space Age",time:60*23-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"]-d["age1Data__time2"]-d["age1Data__time3"]-d["age1Data__time1"]-d["age2Data__time0"]-d["age2Data__time1"]-d["age2Data__time2"]-d["age2Data__time3"]-d["age2Data__time2"]-d["age3Data__time0"]-d["age3Data__time1"]-d["age3Data__time2"]-d["age3Data__time3"]-d["age3Data__time3"]-d["age4Data__time0"]-d["age4Data__time1"]-d["age4Data__time2"],
                        hunger:d["age4Data__hunger2"], military:d["age4Data__military2"], science:d["age4Data__science2"], security:d["age4Data__security2"]},
                    {age:"Space Age",time:60*24-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"]-d["age1Data__time2"]-d["age1Data__time3"]-d["age1Data__time1"]-d["age2Data__time0"]-d["age2Data__time1"]-d["age2Data__time2"]-d["age2Data__time3"]-d["age2Data__time2"]-d["age3Data__time0"]-d["age3Data__time1"]-d["age3Data__time2"]-d["age3Data__time3"]-d["age3Data__time3"]-d["age4Data__time0"]-d["age4Data__time1"]-d["age4Data__time2"]-d["age4Data__time3"],
                        hunger:d["age4Data__hunger3"], military:d["age4Data__military3"], science:d["age4Data__science3"], security:d["age4Data__security3"]},
                    {age:"Space Age",time:60*25-d["age0Data__time0"]-d["age0Data__time1"]-d["age0Data__time2"]-d["age0Data__time3"]-d["age0Data__time0"]-d["age1Data__time0"]-d["age1Data__time1"]-d["age1Data__time2"]-d["age1Data__time3"]-d["age1Data__time1"]-d["age2Data__time0"]-d["age2Data__time1"]-d["age2Data__time2"]-d["age2Data__time3"]-d["age2Data__time2"]-d["age3Data__time0"]-d["age3Data__time1"]-d["age3Data__time2"]-d["age3Data__time3"]-d["age3Data__time3"]-d["age4Data__time0"]-d["age4Data__time1"]-d["age4Data__time2"]-d["age4Data__time3"]-d["age4Data__time4"],
                        hunger:d["age4Data__hunger4"], military:d["age4Data__military4"], science:d["age4Data__science4"], security:d["age4Data__security4"]}
                ]);
                break;
            }
        }


    });
    //on startup, do the box&whisker visual with general ages / stats
    updateBigData();
    //updateEvent();
}




d3.csv('data-fixed.csv').then( function(data) {
    parsedData = parseData(data);
    //update graph in parseData
});