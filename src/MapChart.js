import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

import api from "./api";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

const MapChart = () => {
  const [position, setPosition] = useState({ coordinates: [-104.404259, 56.755051], zoom: 3 });
  const [emissions, setEmissions] = useState([]);

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }

  function determineMarkerSize (emissionValue) {
    if(emissionValue < 100) {
      return 1;
    } else if (emissionValue => 100 && emissionValue < 1000) {
      return 2;
    } else if(emissionValue >= 1000) {
      return 3;
    }
  }

  function determineMarkerColour (emissionValue) {
    if(emissionValue < 100) {
      return "#fad48e";
    } else if (emissionValue => 100 && emissionValue < 1000) {
      return "#c49743";
    } else if(emissionValue >= 1000) {
      return "#9c6705";
    }
  }

  function buildMarkers(dataArray, type) {
    if(type = "emissions" && dataArray.length > 0) {
      return  dataArray.map(e => <Marker coordinates={[e.longitude, e.latitude]}>
      <circle r={determineMarkerSize(e.emissions)} 
              fill={determineMarkerColour(e.emissions)} 
              fill-opacity="0.4"/>
    </Marker>)
    }
  }

  useEffect(async () => {
    const response = await api.getEmissions();
    setEmissions(response.data)
  }, [])


  return (
    <div id="mapContainer">
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
  );
};

export default MapChart;


