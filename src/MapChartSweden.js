import React, { useState } from "react";
import styled from 'styled-components';
import {
  ComposableMap as UCM,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

import useSweden from "./hooks/useSweden";

const ComposableMap = styled(UCM)`
  max-height: calc(100vh - 170px);
  width: 100vw;
`;

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

const MapChartSweden = () => {
  const [position, setPosition] = useState({ coordinates: [10, 62], zoom: 15 });
  const emissions = useSweden();
  const [selectedValue, setSelectedValue] = useState('emissions');
  
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

  function handleMoveEnd(position) {
    setPosition(position);
  }

  function determineMarkerColour(emissionValue) {
    if (emissionValue < 100) {
        //green
      return "#248f24";
    } else if (emissionValue => 100 && emissionValue < 1000) {
      //yellow
      return "#c49743";
    } else if (emissionValue >= 1000) {
      //red
      return "#ff1a1a";
    }
  }

  function buildMarkers(dataArray, type) {
    console.log("building markers with ", type, dataArray)
    if (dataArray.length > 0) {
      return dataArray.map((e, keyAsIndex) => <Marker key={keyAsIndex} coordinates={[e.longitude, e.latitude]}>
        <circle r="0.1" fill={determineMarkerColour(e.emissions)}/>
      </Marker>)
    }
  }

  return (
    // <div id="body">
    <div>
    <div id="mapContainer">
    <h1>
        OCO2 Emissions by Tonnes - annual combined <br/> Sweden | 2017
    </h1>
        <ComposableMap>
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={handleMoveEnd}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.filter(d => d.properties.REGION_UN === "Europe" &&
                  d.properties.SUBREGION === "Northern Europe" &&
                  d.properties.NAME === "Sweden").map(geo => (
                    <Geography key={geo.rsmKey} geography={geo} />
                  ))
              }
            </Geographies>
            {buildMarkers(emissions)}
          </ZoomableGroup>
        </ComposableMap>
        {/* legend */}
        <div style={{ width: '500px', padding: '20px'}}>
      <svg><rect width="100" height="40" fill="#248f24" stroke-width="3" stroke="rgb(0,0,0)" x="30px" />
      <text x="45" y="25" font-family="Verdana" font-size="12" fill="white"> &lt;100</text>
        <rect width="100" height="40" fill="#c49743" stroke-width="3" stroke="rgb(0,0,0)" x="130px"/>
      <text x="145" y="25" font-family="Verdana" font-size="12" fill="white"> 100&lt;x&lt;1000</text>
        <rect width="100" height="40" fill="#ff1a1a" stroke-width="3" stroke="rgb(0,0,0)" x="230px"/>
      <text x="245" y="25" font-family="Verdana" font-size="12" fill="white"> &gt;1000</text>
      </svg>
      
      
    </div>
      </div>
    </div>
  );
};

export default MapChartSweden;