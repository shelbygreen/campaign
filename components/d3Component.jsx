// import { useRef, useEffect } from 'react'
// import * as d3 from 'd3'
// import * as precincts from '../data/Leon-County-Precincts-081724.json';
// // import * as precincts from '../data/NYC_Police_Precincts.geojson'

// export default function d3Map (props) {

//     // const { geoJson } = props

//     // import geojson data
//     const geoJson = precincts.default;

//     // store a reference to the SVG element that contains our map
//     const svgRef = useRef()
  
//     const renderMap = (mapData, path) => {
//       d3.select(svgRef.current)
//         // select the path elements that are going to be rendered
//         .selectAll('path')
//         // rendered data - precincts
//         .data(mapData.features)
//         .enter()
//         // join the precinct data to the path element
//         .append('path')
//         // give each path element a 'd' attribute that corresponds to the path string previously generated
//         // this is how we define each precinct’s shape
//         // .attr('ID', d => `precinct-${d.properties['Precinct']}`)
//         .attr('ID', d => `precinct-${d.properties['PRECINCT']}`)
//         .attr('d', path)
//         .attr('stroke', '#000000')
//         .attr('stroke-width', '.2')
//         .attr('fill', 'transparent')
//     }
    
//     useEffect(() => {
  
//       // get the height and width of the bounding SVG element
//       const height = svgRef.current.clientHeight
//       const width = svgRef.current.clientWidth
  
//       // scale the projection based on the height & width
//       const projection = d3.geoMercator().fitExtent([[0,0], [width, height]], geoJson)
//       // const projection = d3.geoAlbers().fitSize([height, width], geoJson)
  
//       // generate the path
//       const pathGenerator = d3.geoPath().projection(projection) 

//       // if the GeoJSON data is present, render the map
//       if (geoJson) {
//         renderMap(geoJson, pathGenerator)
//       }
//     }, [geoJson])
  
//     return (
//       <div className='wrapper'>
//         <svg 
//           className='precincts-map' 
//           ref={svgRef} 
//           height={500} 
//           width={500}
//           style={{marginTop: '2em'}}
//         />
//       </div>
//     )
// }