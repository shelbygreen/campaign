import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';
import dataFile from '../data/Both-Republican-Agree-Score-from-Session2024.csv';

// Margin convention
const margin = { top: 100, right: -150, bottom: 50, left: 100 }
const width = 700
const height = 100

// Plot dimensions
const svgWidth = width + margin.left + margin.right;
const svgHeight = height + margin.top + margin.bottom;

// Define y axis (data)
const chamber = ["House", "Senate"]

// Define x axis position
const xPositionScale = d3.scaleLinear()
.domain([80, 100])
.range([0, width - 200])
.clamp(true);

// Define y axis position
const yPositionScale = d3.scalePoint()
    .domain(chamber)
    .range([0, height]);

// Create Dot Plot
export default function dotPlot2() {

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
      d.y = yPositionScale(d.chamber);
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
  d3.select("#class2").on('keyup', function() {
    var searchTerm = d3.select("#class2").property("value").toLocaleUpperCase()
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
    const forceY = d3.forceY(d => yPositionScale(d.chamber)).strength(1)
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
    svg.selectAll('text')
      .data(chamber)
      .join('text')
      .attr("text-anchor", 'start')
      .attr("x", -100)
      .style("font-size", 14)
      .style("font-family", "Helvetica Neue")
      .attr('y', d => yPositionScale(d))
      .attr('dx', 0)
      .text(d => d)

    console.log("calling the data for the dots")
    // Set position of dots
    svg.selectAll('circle')
      .data(data)
      .join('circle')
      .attr("id", "circleBasicTooltip")
      .attr('r', 4)
      .attr('cx', d => xPositionScale(d.agreePct))
      .attr('fill', d => colorScale(d.color))
      .attr('cy', d => yPositionScale(d.chamber));

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

  return <div>
    <input
      id="input"
      className="search2"
      type="text"
      placeholder="Search for a representative"
      className="w-80 pl-4 pr-4 h-10 border border-gray-200 focus:border-gray-500 bg-white box-border text-lg">
    </input>
    <svg ref={ref}></svg>
    </div>
  
}