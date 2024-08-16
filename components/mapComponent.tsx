// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import React from "react";

// export default function mapboxMap(props) {

//   // access token
//   const key: any = 'pk.eyJ1Ijoic2hlbGJ5LWdyZWVuIiwiYSI6ImNrMHNobWdrNTAwZW8zYnA5czQ5cWh4ankifQ.TWYVyG-n0cmhTGvKg31eow';

//   // this is where the map instance will be stored after initialization
//   const [map, setMap] = React.useState<mapboxgl.Map>();

//   const mapNode = React.useRef(null);

//   React.useEffect(() => {
//     const node = mapNode.current;

//     if (typeof window === "undefined" || node === null) return;

//     mapboxgl.accessToken = key;
    
//     // map's basic settings
//     const mapboxMap = new mapboxgl.Map({
//       container: node,
//       style: "mapbox://styles/mapbox/light-v11",
//       center: [-96, 37.5],
//       interactive: true,
//       zoom: 4
//     });

//     // load layer
//     mapboxMap.on("load", function () {
//       // import layer
//       mapboxMap.addSource("states", {
//         type: "geojson",
//         data:
//           "https://raw.githubusercontent.com/shelbygreen/map-sandbox/main/sun-bucks-participation-080624.geojson",
//         generateId: true,
//       });

//       // add styling
//       mapboxMap.addLayer({
//         id: "states-fill",
//         type: "fill",
//         source: "states",
//         layout: {},
//         paint: {
//             'fill-color': [
//               'match',
//               ['get', 'Participation Type'],
//               'Not participating',
//               '#C65743',
//               'Participating',
//               '#69B362',
//               'Tribes within the state are participating',
//               '#EEB481',
//               'Plans to participate',
//               '#EEE381',
//               '#ccc', // other
//           ],
//           "fill-outline-color": "#3C403B"
//           // "circle-stroke-color": "#fff",
//           // "circle-stroke-width": 1
//         },
//       });
//     });

//     setMap(mapboxMap);

//     return () => {
//       mapboxMap.remove();
//     };

//   }, []);

//   return (
//     <div>
//       <div ref={mapNode} style={{ height: "75vh" }} />
//     </div>
//   )
// };

import React, { FC, useLayoutEffect, useCallback } from 'react';
import * as fs from 'fs';
import * as d3 from 'd3';
import * as topojson from 'topojson';
// import us from '../../../../Repositories/data/geospatial/states-albers-10m.json';
import * as statesMap from '../../../../Repositories/data/geospatial/states-albers-10m.json';

// export default function mapboxMap() { 
//     const path = d3.geoPath();

//     // import csv
//     const participation = d3.csvParse(fs.readFileSync("/Users/shelbygreen/Repositories/data/national/sun-bucks-participation-080624.csv", { encoding: 'utf8'}), function (d) {
//         // 'd' is an object representing a row in the CSV
//         return {
//           State: d.State,
//           Abbreviation: d.Abbreviation, 
//           FIPS: d.FIPS, // Convert to a number
//           Participation: d["Participation Type"]
//         };
//     })

//     // console.log(participation)
  
//     // creates a new dataset with just state name & geoid/FIPS id
//     const namemap = new Map(us.objects.states.geometries.map(d => [d.properties.name, d.id]))

//     // creates a new dataset with participation type of each state
//     const valuemap = new Map(participation.map(d => [namemap.get(d.State), d.Participation ]));

//     // initializing the map with a single color
//     const initialColor = "#EEE9E9"; // #E5E9E4
  
//     // color scheme
//     const colorMap = {
//     "Not participating": "#EE5656", // #E5E9E4
//     "Participating": "#AED1A9", // #AED1A9
//     "Tribes within the state are participating": "#AED1A9",   // #AED1A9
//     "Plans to participate": "#EE5656" // #E5E9E4
//     };
  
//     const width = 975/2;  
//     const height = 610/2;
//     const smallStates = ['Connecticut', 'Maryland', 'New Hampshire', 'Delaware', 'District of Columbia', 'New Jersey', 'Massachusetts', 'Rhode Island']
  
//     // The statemesh is just the internal borders between states, i.e.,
//     // everything but the coastlines and country borders. This avoids an
//     // additional stroke on the perimeter of the map, which would otherwise
//     // mask intricate features such as islands and inlets. (Try removing
//     // the last argument to topojson.mesh below to see the effect.)
//     const statemesh = topojson.mesh(us, us.objects.states, (a, b) => a !== b);
  
//     // size of the map
//     const svg = d3.select("body")
//         .append("svg")
//         .attr("width", 975)
//         .attr("height", 610)
//         .attr("viewBox", [0, 0, 975, 610])
//         .attr("style", "max-width: 100%; height: auto;");
  
//     svg.append("rect")
//       .attr("width", "100%")
//       .attr("height", "100%")
//       .attr("fill", "#fff5de");
  
//     // adding states to the map
//     const states = svg.append("g")
//       .selectAll("path")
//       .data(topojson.feature(us, us.objects.states).features)
//       .join("path")
//       .attr("fill", initialColor)  // Start with all states in the initial color
//       .attr("d", path);
  
//     // styling - state border
//     svg.append("path")
//         .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
//         .attr("fill", "none")
//         .attr("stroke", "white")
//         .attr("stroke-linejoin", "round")
//         .attr("stroke-width", "4px")
//         .attr("d", path);
  
//     // Add text to the center of each state
//       svg.append("g")
//         .selectAll("text")
//         .data(topojson.feature(us, us.objects.states).features)
//         .join("text")
//         .attr("x", d => path.centroid(d)[0])  // X value path.centroid(d) calculates the geographic center (centroid)
//         .attr("y", d => path.centroid(d)[1])  // Y value path.centroid(d) calculates the geographic center (centroid)
//         .attr("text-anchor", "middle") // ensures that the text is centered horizontally around the x coordinate
//         .attr("font-size", d => (smallStates.includes(d.properties.name) ) ? "0px" : "20px")
//         .attr("fill", "gray")  
//         .text(d =>  stateAbbreviation.get(d.properties.name))
//         .attr("font-family", "Helvetica")
//         .style("font-weight","bold");
  
//         // .attr("fill", (d) => { 
//       //   const participationType = valuemap.get(d.id);
//       //   return participationType ? colorMap[participationType] : "white";
//       // })
  
//     // styling - state (animated via function to change the color of each state one by one)
//     function updateStateColors() {
//       states.each(function(d, i) {
//         const statePath = d3.select(this);
//         const participationType = valuemap.get(d.id);
  
//         // Set a timeout to change the color after a delay
//         setTimeout(() => {
//           statePath.transition()
//             .duration(500) // fade in
//             .attr("fill", participationType ? colorMap[participationType] : initialColor);
//         }, i * 200);  // Delay each state by 100ms multiplied by its index, original: 100
//       });
//     }
  
//     // Start the color change
//     updateStateColors();
  
//     return svg.node();

// }

export default function mapboxMap() {

    const projection = d3.geoAlbersUsa().scale(1300).translate([487.5, 305])
    const path = d3.geoPath();
    //@ts-ignore
    const us = statesMap.default;
    //@ts-ignore
    // const data = cities.default;

    const mapWidth = 975; // 975
    const mapHeight = 610; // 610

    const rotate = useCallback((option1, option2, option3) => {
        return `rotate(${360 * (option2 / option3.length)})translate(${200}, ${200})rotate(${-360 * (option2 / option3.length)})`
    }, [mapWidth, mapHeight]);

    const translateLongLat = useCallback((option1, option2, option3) => {
        return `translate(${option3[option2].getAttribute('originalx') - (mapWidth / 2)}, 
    ${option3[option2].getAttribute('originaly') - (mapHeight / 2)})`
    }, []);

    useLayoutEffect(() => {
        if (d3) {
            d3.selectAll('#parentG > g')
                .transition()
                .attr('transform', rotate)
                .duration(2000)
                .transition()
                .duration(2000)
                .attr('transform', translateLongLat)
        }
    }, [d3]);

    const map = <svg viewBox={`0 0 ${mapWidth} ${mapHeight}`}>
        <path fill='#E5E9E4' d={`${path(topojson.feature(us, us.objects.nation))}`}></path>
        <path fill='none' stroke='#fff' strokeWidth='4px' strokeLinejoin='round' strokeLinecap='round' d={`${path(topojson.mesh(us, us.objects.states, (a, b) => a !== b))}`}></path>

    </svg>

    return <div>{map}</div>
}