
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

    document.getElementById("description").innerHTML = "To further analyze the amount of time that players needed to progress in the game, we plotted an event graph in D3 of the final run of several playtesters, which is shown in Figure 4.11 below. (Unfortunately, due to data collection issues, the last decision of each age was lost.) Each row represents the timeline of a player’s run-through of the game, with each dot presenting when a decision was made. Each age is a different color, and the first dot in each age is bigger to represent when the first decision in each age was made." +
        "<br><br>When hovering any point (decision) in any playtester’s timeline, a small box listing what age the player was in, at what time the decision was made (in seconds), and the amount of almost every statistic they had at the time is detailed. This makes it possible to observe specific details about player choices at any point in time." +
        "<br><br>There are a few key observations that can be drawn from the event graph in terms of time management in the game. One obvious thing to note is that some players made decisions more quickly than others, which confirms the variety of responses we got from players before with the graphs and quotes about having enough time. However, we noticed this difference especially after the start of the second age. To highlight an example, playtester 9 shows just how much more time they took to make some of their decisions compared to playtester 8 did by comparing the first few ages in their gameplay. Playtester 9 had large gaps of time in between finishing the first age and deciding on the second age, and they hadn’t even finished the second age by the time playtester 8 finished the third age." +
        "<br><br>Another interesting thing to note is that some of the playtesters shown here did not complete the game on their last run through. Specifically, a few of them lost the game at the end of the first age. Playtesters 2 and 3 ran out of hunger curiously right in between the first and second ages during their final experience with the game. Playtester 6 also lost the game at that same spot, although it is not shown in the figure. However, notice the exact times at which those three players made decisions are not the same, so the amount of time they had to make the decisions may not have been as much of a factor as one would initially believe." +
        "<br><br>One final observation to make is that on their last gameplay session, a player (playtester 0) who was skillful in using JavaScript decided to experiment with the automation function. This playtester wanted to explore the automation to its fullest and used it to run the choose() command automatically. We did not expect players to use the automation functionality for this, and were very surprised to find that the method essentially broke the game. Playtester 0 was able to zoom through all 20 prompts and finish the game in less than 30 seconds.";

    et_vis();
    //update a descriptor text to the bottom of the page/plot
}


//http://bl.ocks.org/bunkat/2338034
function et_vis(){

    //hide checkbox & text
    document.getElementById("dataCheck").style.display = "none";
    document.getElementById("checkboxtext").style.display = "none";


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
        width = 4000 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom,
        eventHeight = (height*7.3) - (orderedIDs.length * 7);

    //scales
    var x = d3.scaleLinear()
        .domain([0, 1000])
        .range([0, width]);

    var y2 = d3.scaleLinear()
        .domain([0, ids.length])
        .range([0, eventHeight]);


    svg = d3.select("#vis")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
        // .append("g")
        // .attr("transform",  "translate(" + margin.left + "," + margin.top + ")");


    var event = svg.append("g")
        .attr("transform", "translate(" + margin.right + "," + margin.top + ")")
        .attr("width", width)
        .attr("height", eventHeight+10)
        .attr("class", "event");


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


    let acount = 0;
    //for each set of time/details in dataGroup
    dataGroup.forEach(data => {

        var tempdata = JSON.parse(JSON.stringify(data));
        for( var v = tempdata.data.length-1; v--;){
            if ((tempdata.data[v].time > 900 ) || (tempdata.data[v].hunger === 0) ) tempdata.data.splice(v, 1);
        //&& tempdata.data[v].hunger === null


        }
        //go thru again?
        for( var v = tempdata.data.length-1; v--;){
            if ((tempdata.data[v].time > 900 ) || (tempdata.data[v].hunger === 0) ) tempdata.data.splice(v, 1);
            //&& tempdata.data[v].hunger === null
            if ((tempdata.data[v].time > 900 )  ) tempdata.data.splice(v, 1);
            if ((tempdata.data[v].time > 900 )  ) tempdata.data.splice(v, 1);
            if ((tempdata.data[v].time > 900 )  ) tempdata.data.splice(v, 1);
            if ((tempdata.data[v].time > 900 )  ) tempdata.data.splice(v, 1);
            if ((tempdata.data[v].time > 900 )  ) tempdata.data.splice(v, 1);
            if ((tempdata.data[v].time > 900 )  ) tempdata.data.splice(v, 1);
            if ((tempdata.data[v].time > 900 )  ) tempdata.data.splice(v, 1);
            if ((tempdata.data[v].time > 900 )  ) tempdata.data.splice(v, 1);

            //welp its removing any duplicates? i guess? idk?

            // console.log(tempdata.data[v].time);
            // console.log(tempdata.data[v].hunger);
        }


        //i dont know what firebase did
        //it be weird
        //also javascript. heck javascript

        console.log(tempdata);

        //event item rects
        event.append("g").selectAll("eventItems")
            .data(tempdata.data)
            .enter().append("circle")
            .attr("class", "eventItem" + tempdata.class)
            .attr("cx", function(d) {return x(d.time)+50})
            .attr("cy", y2(tempdata.class + .5) - 5)
            .attr("r", function(d){
                acount++;
                if(acount == 1 || acount == 6 || acount == 11 || acount == 16 || acount == 21  ){
                    console.log(acount);
                    return 9;
                }
                else{return 6; }
            })

            .attr("style",function (d) {
                if(d.age == "Stone Age") return "fill: palevioletred";
                if(d.age == "Metal Age") return "fill: orange";
                if(d.age == "Conquering Age") return "fill: olivedrab";
                if(d.age == "Industrial Age") return "fill: mediumaquamarine";
                if(d.age == "Space Age") return "fill: steelblue";
            })
            .style("opacity", 0.5)
            .on("mouseover", function(d) {
                d3.select(this).style("stroke","black")
                    .style("stroke-opacity",1);
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
                d3.select(this).style("stroke-opacity",0);
                div.transition()
                    .duration(500)
                    .style("opacity", 0);
            });
        acount = 0;

        //details here

    });

}