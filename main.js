let parsedData;

//parsed data - organize data
function parseData(data){
    //for each row of the data, organize the columns
    data.forEach( d => {
        let id = d.uuid;

        //need to make sure all the values except the uuid is counted as an int - not string

        //wait do i need this here? // i dont think so
        //age 0: stone age
        let age0choice0 = {
            hunger: d.age0Data__hunger0,
            military: d.age0Data__military0,
            population: d.age0Data__population0,
            science: d.age0Data__science0,
            security: d.age0Data__security0,
            time: d.age0Data__time0};
        let age0choice1 = {
            hunger: d.age0Data__hunger1,
            military: d.age0Data__military1,
            population: d.age0Data__population1,
            science: d.age0Data__science1,
            security: d.age0Data__security1,
            time: d.age0Data__time1};
        let age0choice2 = {
            hunger: d.age0Data__hunger2,
            military: d.age0Data__military2,
            population: d.age0Data__population2,
            science: d.age0Data__science2,
            security: d.age0Data__security2,
            time: d.age0Data__time2};
        let age0choice3 = {
            hunger: d.age0Data__hunger3,
            military: d.age0Data__military3,
            population: d.age0Data__population3,
            science: d.age0Data__science3,
            security: d.age0Data__security3,
            time: d.age0Data__time3};
        let age0choice4 = {
            hunger: d.age0Data__hunger4,
            military: d.age0Data__military4,
            population: d.age0Data__population4,
            science: d.age0Data__science4,
            security: d.age0Data__security4,
            time: d.age0Data__time4};
        //age 1: metal age
        let age1choice0 = {
            hunger: d.age1Data__hunger0,
            military: d.age1Data__military0,
            population: d.age1Data__population0,
            science: d.age1Data__science0,
            security: d.age1Data__security0,
            time: d.age1Data__time0};
        let age1choice1 = {
            hunger: d.age1Data__hunger1,
            military: d.age1Data__military1,
            population: d.age1Data__population1,
            science: d.age1Data__science1,
            security: d.age1Data__security1,
            time: d.age1Data__time1};
        let age1choice2 = {
            hunger: d.age1Data__hunger2,
            military: d.age1Data__military2,
            population: d.age1Data__population2,
            science: d.age1Data__science2,
            security: d.age1Data__security2,
            time: d.age1Data__time2};
        let age1choice3 = {
            hunger: d.age1Data__hunger3,
            military: d.age1Data__military3,
            population: d.age1Data__population3,
            science: d.age1Data__science3,
            security: d.age1Data__security3,
            time: d.age1Data__time3};
        let age1choice4 = {
            hunger: d.age1Data__hunger4,
            military: d.age1Data__military4,
            population: d.age1Data__population4,
            science: d.age1Data__science4,
            security: d.age1Data__security4,
            time: d.age1Data__time4};
        //age 2: conquering age
        let age2choice0 = {
            hunger: d.age2Data__hunger0,
            military: d.age2Data__military0,
            population: d.age2Data__population0,
            science: d.age2Data__science0,
            security: d.age2Data__security0,
            time: d.age2Data__time0};
        let age2choice1 = {
            hunger: d.age2Data__hunger1,
            military: d.age2Data__military1,
            population: d.age2Data__population1,
            science: d.age2Data__science1,
            security: d.age2Data__security1,
            time: d.age2Data__time1};
        let age2choice2 = {
            hunger: d.age2Data__hunger2,
            military: d.age2Data__military2,
            population: d.age2Data__population2,
            science: d.age2Data__science2,
            security: d.age2Data__security2,
            time: d.age2Data__time2};
        let age2choice3 = {
            hunger: d.age2Data__hunger3,
            military: d.age2Data__military3,
            population: d.age2Data__population3,
            science: d.age2Data__science3,
            security: d.age2Data__security3,
            time: d.age2Data__time3};
        let age2choice4 = {
            hunger: d.age2Data__hunger4,
            military: d.age2Data__military4,
            population: d.age2Data__population4,
            science: d.age2Data__science4,
            security: d.age2Data__security4,
            time: d.age2Data__time4};
        //age 3: industrial age
        let age3choice0 = {
            hunger: d.age3Data__hunger0,
            military: d.age3Data__military0,
            population: d.age3Data__population0,
            science: d.age3Data__science0,
            security: d.age3Data__security0,
            time: d.age3Data__time0};
        let age3choice1 = {
            hunger: d.age3Data__hunger1,
            military: d.age3Data__military1,
            population: d.age3Data__population1,
            science: d.age3Data__science1,
            security: d.age3Data__security1,
            time: d.age3Data__time1};
        let age3choice2 = {
            hunger: d.age3Data__hunger2,
            military: d.age3Data__military2,
            population: d.age3Data__population2,
            science: d.age3Data__science2,
            security: d.age3Data__security2,
            time: d.age3Data__time2};
        let age3choice3 = {
            hunger: d.age3Data__hunger3,
            military: d.age3Data__military3,
            population: d.age3Data__population3,
            science: d.age3Data__science3,
            security: d.age3Data__security3,
            time: d.age3Data__time3};
        let age3choice4 = {
            hunger: d.age3Data__hunger4,
            military: d.age3Data__military4,
            population: d.age3Data__population4,
            science: d.age3Data__science4,
            security: d.age3Data__security4,
            time: d.age3Data__time4};
        //age 4: space age
        let age4choice0 = {
            hunger: d.age4Data__hunger0,
            military: d.age4Data__military0,
            population: d.age4Data__population0,
            science: d.age4Data__science0,
            security: d.age4Data__security0,
            time: d.age4Data__time0};
        let age4choice1 = {
            hunger: d.age4Data__hunger1,
            military: d.age4Data__military1,
            population: d.age4Data__population1,
            science: d.age4Data__science1,
            security: d.age4Data__security1,
            time: d.age4Data__time1};
        let age4choice2 = {
            hunger: d.age4Data__hunger2,
            military: d.age4Data__military2,
            population: d.age4Data__population2,
            science: d.age4Data__science2,
            security: d.age4Data__security2,
            time: d.age4Data__time2};
        let age4choice3 = {
            hunger: d.age4Data__hunger3,
            military: d.age4Data__military3,
            population: d.age4Data__population3,
            science: d.age4Data__science3,
            security: d.age4Data__security3,
            time: d.age4Data__time3};
        let age4choice4 = {
            hunger: d.age4Data__hunger4,
            military: d.age4Data__military4,
            population: d.age4Data__population4,
            science: d.age4Data__science4,
            security: d.age4Data__security4,
            time: d.age4Data__time4};
    })
}















d3.csv('data-fixed.csv').then( function(data) {
    parsedData = parseData(data);

    //update graph
});