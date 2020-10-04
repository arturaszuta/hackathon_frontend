import React, { useState } from "react";
import styled from 'styled-components';
import {
  ComposableMap as UCM,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

import useEmissions from "./hooks/useEmissions";

const ComposableMap = styled(UCM)`
  max-height: calc(100vh - 170px);
  width: 100vw;
`;

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

const MapChart = () => {
  const [position, setPosition] = useState({ coordinates: [-104.404259, 56.755051], zoom: 3 });
  const emissions = useEmissions();

  function handleMoveEnd(position) {
    setPosition(position);
  }

  function determineMarkerSize(emissionValue) {
    if (emissionValue < 100) {
      return 1;
    } else if (emissionValue => 100 && emissionValue < 1000) {
      return 2;
    } else if (emissionValue >= 1000) {
      return 3;
    }
  }

  function determineMarkerColour(emissionValue) {
    if (emissionValue < 100) {
      //return "#fad48e";
      //green
      return "#248f24";
    } else if (emissionValue => 100 && emissionValue < 1000) {
      //yellow
      return "#c49743";
    } else if (emissionValue >= 1000) {
      //return "#9c6705";
      //red
      return "#ff1a1a";
    }
  }

  function buildMarkers(dataArray, type) {
    if (type === "emissions" && dataArray.length > 0) {
      return dataArray.map((e, keyAsIndex) => <Marker key={keyAsIndex} coordinates={[e.longitude, e.latitude]}>
        <circle r={determineMarkerSize(e.emissions)}
          fill={determineMarkerColour(e.emissions)}
          fill-opacity="0.4" />
      </Marker>)
    }
  }



  return (
    <div id="body">
      <div id="mapContainer">
        <h1>
          CO Emissions by Tonnes <br /> Canada | 2018
        </h1>
        {/* <svg>
      <rect width="100" height="40" fill="#248f24" stroke-width="3" stroke="rgb(0,0,0)" x="30px" />
      <rect width="100" height="40" fill="#c49743" stroke-width="3" stroke="rgb(0,0,0)" x="130px"/>
      <rect width="100" height="40" fill="#ff1a1a" stroke-width="3" stroke="rgb(0,0,0)" x="230px"/>
    </svg> */}
        <ComposableMap>
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={handleMoveEnd}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.filter(d => d.properties.REGION_UN === "Americas" &&
                  d.properties.SUBREGION === "Northern America" &&
                  d.properties.NAME === "Canada").map(geo => (
                    <Geography key={geo.rsmKey} geography={geo} />
                  ))
              }
            </Geographies>
            {buildMarkers(emissions, "emissions")}

          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
};

export default MapChart;


