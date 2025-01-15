// import * as d3 from 'd3';
// import React, { useRef, useEffect } from 'react';
// // import dataFile from '../data/Republican-Agree-Score-from-Session2024.csv';
// import dataFile from '../data/Senate-Select-Divisive-Bills-from-Session2024.csv'

// // wrap function
// function wrap(
//   text,
//   width,
//   dyAdjust,
//   lineHeightEms,
//   lineHeightSquishFactor,
//   splitOnHyphen,
//   centreVertically
// ) {
//   // Use default values for the last three parameters if values are not provided.
//   if (!lineHeightEms) lineHeightEms = 1.05;
//   if (!lineHeightSquishFactor) lineHeightSquishFactor = 1;
//   if (splitOnHyphen == null) splitOnHyphen = true;
//   if (centreVertically == null) centreVertically = true;

//   text.each(function () {
//     var text = d3.select(this),
//       x = text.attr("x"),
//       y = text.attr("y");

//     var words = [];
//     text
//       .text()
//       .split(/\s+/)
//       .forEach(function (w) {
//         if (splitOnHyphen) {
//           var subWords = w.split("-");
//           for (var i = 0; i < subWords.length - 1; i++)
//             words.push(subWords[i] + "-");
//           words.push(subWords[subWords.length - 1] + " ");
//         } else {
//           words.push(w + " ");
//         }
//       });

//     text.text(null); // Empty the text element

//     // `tspan` is the tspan element that is currently being added to
//     var tspan = text.append("tspan");

//     var line = ""; // The current value of the line
//     var prevLine = ""; // The value of the line before the last word (or sub-word) was added
//     var nWordsInLine = 0; // Number of words in the line
//     for (var i = 0; i < words.length; i++) {
//       var word = words[i];
//       prevLine = line;
//       line = line + word;
//       ++nWordsInLine;
//       tspan.text(line.trim());
//       if (tspan.node().getComputedTextLength() > width && nWordsInLine > 1) {
//         // The tspan is too long, and it contains more than one word.
//         // Remove the last word and add it to a new tspan.
//         tspan.text(prevLine.trim());
//         prevLine = "";
//         line = word;
//         nWordsInLine = 1;
//         tspan = text.append("tspan").text(word.trim());
//       }
//     }

//     var tspans = text.selectAll("tspan");

//     var h = lineHeightEms;
//     // Reduce the line height a bit if there are more than 2 lines.
//     if (tspans.size() > 2)
//       for (var i = 0; i < tspans.size(); i++) h *= lineHeightSquishFactor;

//     tspans.each(function (d, i) {
//       // Calculate the y offset (dy) for each tspan so that the vertical centre
//       // of the tspans roughly aligns with the text element's y position.
//       var dy = i * h + dyAdjust;
//       if (centreVertically) dy -= ((tspans.size() - 1) * h) / 2;
//       d3.select(this)
//         .attr("y", y)
//         .attr("x", x)
//         .attr("dy", dy + "em");
//     });
//   });
// }

// // Margin convention
// const margin = { top: 100, right: 0, bottom: 100, left: 125 }
// const width = 700
// const height = 400

// // Plot dimensions
// const svgWidth = width + margin.left + margin.right;
// const svgHeight = height + margin.top + margin.bottom;

// // Define y axis (data)
// // const bills = ["Transportation", "School Choice", "Child Exploitation Offenses", "Exposures of First Responders to Fentanyl and Fentanyl Analogs"]
// const bills = ["Pub. Rec./Investigations by the Department of Legal Affairs", "Pretrial Detention Hearings", "Historical Preservation Programs", "Student Transportation Safety"]

// // Define x axis position
// const xPositionScale = d3.scaleLinear()
//   .domain([0, 120])
//   .range([0, width - 200])
//   .clamp(true);

// // Define y axis position
// const yPositionScale = d3.scalePoint()
//   // .domain(party)
//   .domain(bills)
//   .range([0, height]);

// // tick labels
// const tickLabels = ['Yes','No','Missed Vote']

// // Create Dot Plot
// export default function dotPlot() {

//   // initialize
//   const ref = useRef();
//   const [data, setData] = React.useState([]);

//   // set the data
//   useEffect(() => {
    
//     // call in data
//     d3.csv(dataFile).then((datapoints) => {

//       console.log("about to store the data")
//       // modify the data
//       datapoints.forEach(d => {
//         // d.x = xPositionScale(d.agreePct);
//         d.x = xPositionScale(d.voteScore);
//         // d.y = yPositionScale(d.party);
//         d.y = yPositionScale(d.title);
//         d.name_upper = d.name.toLocaleUpperCase()
        
//         if (d.voteScore == 0) {
//           d.color2 = "green";
//         } else if (d.voteScore == 100) {
//           d.color2 = "red";
//         } else {
//           d.color2 = "grey";
//         }
//       });

//       // set data
//       console.log("set the data")
//       setData(datapoints);

//     });

//     return () => undefined;
//   }, []);

//   // create plot
//   useEffect(() => {

//   // plot
//   const svg = d3.select(ref.current)
//    .attr("width", svgWidth)
//    .attr("height", svgHeight)
//    .append("g")
//    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//   // search
//   d3.select("#input").on('keyup', function() {
//     var searchTerm = d3.select("#input").property("value").toLocaleUpperCase()
//     console.log(searchTerm)
//     d3.selectAll("circle").attr('fill', d => colorScale(d.color))
//     d3.selectAll("circle").filter(d => d.name_upper.indexOf(searchTerm) == -1).attr('fill', '#bdbdbd')
//   })
    
//     // Define color scale for the points
//     const colorScale = d3.scaleOrdinal()
//       .domain(["green", "red","blue","purple","grey"])
//       .range(["#067d00", "#EA0000","#0022EA","#9B30FF","#575757"]);

//     // Force simulation to prevent overlap
//     // const forceX = d3.forceX(d => xPositionScale(d.agreePct)).strength(5)
//     const forceX = d3.forceX(d => xPositionScale(d.voteScore)).strength(5)
//     // const forceY = d3.forceY(d => yPositionScale(d.party)).strength(1)
//     const forceY = d3.forceY(d => yPositionScale(d.title)).strength(1)
//     const forceCollide = d3.forceCollide(d => 7)
//     const simulation = d3.forceSimulation()
//       .force("overlap", forceCollide)
//       .force("y", forceY)
//       .force("x", forceX);

//     // Create tooltip
//     const tooltip = d3
//       .select("body")
//       .append("div")
//       .attr("class", "svg-tooltip")
//       .style("position", "absolute")
//       .style("border-style", "solid")
//       .style("border-color", "#717070")
//       .style("border-width", "1px")
//       .style("font-family", "Helvetica Neue")
//       .style("color", "black")
//       .style("padding", ".6rem")
//       .style("text-overflow", "ellipsis")
//       .style("white-space", "pre")
//       .style("line-height", "1em")
//       .style("z-index", "300")
//       .style("background", "white")
//       .style("visibility", "hidden");

//     console.log("calling the data for the dots")
    
//     // Set position of dots
//     svg.selectAll('circle')
//       .data(data)
//       .join('circle')
//       .attr("id", "circleBasicTooltip")
//       .attr('r', 4)
//       .attr('cx', d => xPositionScale(d.voteScore))
//       .attr('fill', d => colorScale(d.color2))
//       // .attr('cy', d => yPositionScale(d.party));
//       .attr('cy', d => yPositionScale(d.title));


//     // Draw the y axis
//     svg.selectAll('text')
//       // .data(party)
//       .data(bills)
//       .join('text')
//       // .attr('text-anchor', 'end')
//       .attr("text-anchor", 'start')
//       .attr("x", -120)
//       .style("font-size", 14)
//       .style("font-family", "Helvetica Neue")
//       .attr('y', d => yPositionScale(d))
//       .attr('dx', 0)
//       .text(d => d)
//       .call(wrap, 50, 0.05, 0.85, 1, true, true)

//     // Create x axis scale
//     const x = d3.scaleLinear()
//       // .domain([80, 100])
//       .domain([0, 120])
//       .range([0, width - 200]);
//       // .range([0, width - 400]);
      
//     // Draw the x axis
//     svg
//     .append("g")
//     // .attr("transform", "translate(0,-50)") // height between dots and x axis
//     .attr("transform", "translate(0,-50)") // height between dots and x axis
//     .style("font-size", 14)
//     .style("font-family", "Helvetica Neue")
//     .attr("color","#717070")
//     // .call(d3.axisBottom(x))
//     .call(d3.axisTop(x).tickValues([0, 100, 120]).tickFormat(function(d,i){ return tickLabels[i] })); // axis styling
//     // .call(d3.axisBottom(x).tickSize(3).tickFormat(d => d).tickValues([0, 100, 120])); // axis styling
    
//     // Add simulation to the circles
//     simulation.nodes(data)
//       .on('tick', ticked)
//     function ticked() {
//       svg.selectAll('circle')
//         .attr("cx", d => d.x)
//         .attr("cy", d => d.y)
//     };

//     // Trigger tooltip
//     d3.selectAll("circle")
//       .on("mouseover", function(e, d) {
//         d3.select(this)
//           .attr('stroke-width', '2')
//           .attr("stroke", "black");
//         tooltip
//           .style("visibility", "visible")
//           // .text(`Name: ${d.name}\nParty: ${d.party}\nDistrict: ${d.district}\nAgree Score: ${d.agreePct}%`);
//           .text(`Name: ${d.name}\nParty: ${d.party}\nDistrict: ${d.district}\nVote on ${d.bill}: ${d.vote_desc}`);
//       })
//       .on("mousemove", function(e) {
//         tooltip
//           .style("top", e.pageY - 10 + "px")
//           .style("left", e.pageX + 10 + "px");
//       })
//       .on("mouseout", function() {
//         d3.select(this).attr('stroke-width', '0');
//           tooltip.style("visibility", "hidden");
//     });

//   }, [data]);

//   return <div>
//     <input
//       id="input"
//       type="text"
//       placeholder="Search for a representative"
//       className="w-80 pl-4 pr-4 h-10 border border-gray-200 focus:border-gray-500 bg-white box-border text-lg"></input>
//     <svg ref={ref}></svg>
//     </div>
  
// }


import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';
import dataFile from '../data/House-Republican-Agree-Score-from-Session2024.csv';

// Margin convention
const margin = { top: 100, right: 0, bottom: -100, left: 25 }
const width = 800
const height = 150

// Plot dimensions
const svgWidth = width + margin.left + margin.right;
const svgHeight = height + margin.top + margin.bottom;

// Define y axis (data)
const party = ["Democrat", "R"] // throwaway - the actual labels will be silenced in the plot.

// Define x axis position
const xPositionScale = d3.scaleLinear()
.domain([80, 100])
.range([0, width - 200])
.clamp(true);

// Define y axis position
const yPositionScale = d3.scalePoint()
    .domain(party)
    .range([0, height]);

// Create Dot Plot
export default function dotPlot() {

  // initialize
  const ref = useRef();
  const [data, setData] = React.useState([]);

  // set the data
  useEffect(() => {
    
    // call in data
    d3.csv(dataFile).then((datapoints) => {

      console.log("about to store the data")
      // modify the data
      datapoints.forEach(d => {
      d.x = xPositionScale(d.agreePct);
      d.y = yPositionScale(d.party);
      d.name_upper = d.name.toLocaleUpperCase()
      });

      // set data
      console.log("set the data")
      setData(datapoints);
    });

    return () => undefined;
  }, []);

  // create plot
  useEffect(() => {

  // plot
  const svg = d3.select(ref.current)
   .attr("width", svgWidth)
   .attr("height", svgHeight)
   .append("g")
   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  // search
  d3.select("#input1").on('keyup', function() {
    var searchTerm = d3.select("#input1").property("value").toLocaleUpperCase()
    console.log(searchTerm)
    d3.selectAll("circle").attr('fill', d => colorScale(d.color))
    d3.selectAll("circle").filter(d => d.name_upper.indexOf(searchTerm) == -1).attr('fill', '#bdbdbd')
  })
    
    // Define color scale for the points
    const colorScale = d3.scaleOrdinal()
      .domain(["red","blue","purple","grey"])
      .range(["#EA0000","#0022EA","#9B30FF","#575757"]);

    // Force simulation to prevent overlap
    const forceX = d3.forceX(d => xPositionScale(d.agreePct)).strength(5)
    const forceY = d3.forceY(d => yPositionScale(d.party)).strength(1)
    const forceCollide = d3.forceCollide(d => 7)
    const simulation = d3.forceSimulation()
      .force("overlap", forceCollide)
      .force("y", forceY)
      .force("x", forceX);

    // Create tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "svg-tooltip")
      .style("position", "absolute")
      .style("border-style", "solid")
      .style("border-color", "#717070")
      .style("border-width", "1px")
      .style("font-family", "Helvetica Neue")
      .style("color", "black")
      .style("padding", ".6rem")
      .style("text-overflow", "ellipsis")
      .style("white-space", "pre")
      .style("line-height", "1em")
      .style("z-index", "300")
      .style("background", "white")
      .style("visibility", "hidden");

    // Draw the y axis
    // svg.selectAll('text')
    //   .data(party)
    //   .join('text')
    //   .attr("text-anchor", 'start')
    //   .attr("x", -120)
    //   .style("font-size", 14)
    //   .style("font-family", "Helvetica Neue")
    //   .attr('y', d => yPositionScale(d))
    //   .attr('dx', 0)
    //   .text(d => d)

    console.log("calling the data for the dots")
    // Set position of dots
    svg.selectAll('circle')
      .data(data)
      .join('circle')
      .attr("id", "circleBasicTooltip")
      .attr('r', 4)
      .attr('cx', d => xPositionScale(d.agreePct))
      .attr('fill', d => colorScale(d.color))
      .attr('cy', d => yPositionScale(d.party));

    // Create x axis scale
    const x = d3.scaleLinear()
      .domain([80, 100])
      .range([0, width - 200]);
      
    // Draw the x axis
    svg
    .append("g")
    .attr("transform", "translate(0,-50)") // height between dots and x axis
    .style("font-size", 14)
    .style("font-family", "Helvetica Neue")
    .attr("color","#717070")
    .call(d3.axisTop(x).tickSize(5).tickFormat(d => d + "%").tickValues([80, 85, 90, 95, 100])); // axis styling

    // Add simulation to the circles
    simulation.nodes(data)
      .on('tick', ticked)
    function ticked() {
      svg.selectAll('circle')
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
    };

    // Trigger tooltip
    d3.selectAll("circle")
      .on("mouseover", function(e, d) {
        d3.select(this)
          .attr('stroke-width', '2')
          .attr("stroke", "black");
        tooltip
          .style("visibility", "visible")
        .text(`Name: ${d.name}\nParty: ${d.party}\nDistrict: ${d.district}\nAgree Score: ${d.agreePct}%`);
      })
      .on("mousemove", function(e) {
        tooltip
          .style("top", e.pageY - 10 + "px")
          .style("left", e.pageX + 10 + "px");
      })
      .on("mouseout", function() {
        d3.select(this).attr('stroke-width', '0');
          tooltip.style("visibility", "hidden");
    });

  }, [data]);

  return <div id="plot1">
    <input
      id="input1"
      type="text"
      placeholder="Search for a representative"
      className="w-80 pl-4 pr-4 h-10 border border-gray-200 focus:border-gray-500 bg-white box-border text-lg">
    </input>
    <svg ref={ref}></svg>
    </div>
  
}