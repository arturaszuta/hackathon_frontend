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
import useOdiac from "./hooks/useOdiac";
import Radio from "@material-ui/core/radio"
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from "@material-ui/core/FormControlLabel"

const ComposableMap = styled(UCM)`
  max-height: calc(100vh - 170px);
  width: 100vw;
`;

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

const MapChart = () => {
  const [position, setPosition] = useState({ coordinates: [-104.404259, 56.755051], zoom: 5 });
  const emissions = useEmissions();
  const odiac = useOdiac();
  const [filter, setFilter] = useState("emissions");

  const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);
  
    const [selectedValue, setSelectedValue] = useState('emissions');
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

  function handleMoveEnd(position) {
    setPosition(position);
  }

  function determineMarkerSize(emissionValue, type) {
        if (emissionValue < 100) {
      return 2;
    } else if (emissionValue => 100 && emissionValue < 1000) {
      return 3;
    } else if (emissionValue >= 1000) {
      return 4;
    }
  }

  function determineMarkerColour(emissionValue, type) {
    if (emissionValue < 100 && type == "emissions") {
      //return "#fad48e";
      //green
      return "#248f24";
    } else if (emissionValue => 100 && emissionValue < 1000 && type == "emissions") {
      //yellow
      return "#c49743";
    } else if (emissionValue >= 1000 && type == "emissions") {
      //return "#9c6705";
      //red
      return "#ff1a1a";
    } 

   if (emissionValue < 100 && type == "odiac") {
      //return "#fad48e";
      //green
      return "#248f24";
    } else if (emissionValue => 100 && emissionValue < 1000 && type == "odiac") {
      //yellow
      return "#248f24";
    } else if (emissionValue >= 1000 && type == "odiac") {
      //return "#9c6705";
      //red
      return "#248f24";
    }
  }

  function determineOpacity(emissionValue, type) {
    if (emissionValue < 100) {
      return 0.4;
    } else if (emissionValue => 100 && emissionValue < 1000) {
      return 0.6;
    } else if (emissionValue >= 1000) {
      return 0.8;
    }
  }

  function buildMarkers(dataArray, type) {
    console.log("building markers with ", type, dataArray)
    if (dataArray.length > 0) {
      return dataArray.map((e, keyAsIndex) => <Marker key={keyAsIndex} coordinates={[e.longitude, e.latitude]}>
        <circle r={determineMarkerSize(type == "emissions" ? e.emissions : e.odiak, type)} 
          fill={determineMarkerColour(type == "emissions" ? e.emissions : e.odiak, type)}
          fillOpacity={determineOpacity(type == "emissions" ? e.emissions : e.odiak)}/>
      </Marker>)
    }
  }



  return (
    // <div id="body">
    <div>
    <div id="mapContainer">
    <div style={{ width: '500px', backgroundColor: 'whiteSmoke', padding: '20px'}}>
    <FormControlLabel value="emissions" control={      <Radio
        checked={selectedValue === 'emissions'}
        onChange={handleChange}
        value="emissions"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />} label="Canadian Facility CO Emissions - 2017" />
      <FormControlLabel value="odiac" control={      <Radio
        checked={selectedValue === 'odiac'}
        onChange={handleChange}
        value="odiac"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />} label="ODIAC CO2 Emissions - 2017" />

    </div>
    {selectedValue == "emissions" &&<h1>
        CO Emissions by Tonnes - annual combined <br/> Canada | 2017
    </h1>}
    {selectedValue == "odiac" &&<h1>
        CO2 Emissions by Tonnes - Monthly Total <br/> Canada | 2017
    </h1>}
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
            {selectedValue == "emissions" ? buildMarkers(emissions, "emissions") : ""}
            {selectedValue == "odiac" ? buildMarkers(odiac, "odiac") : ""}

          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
};

export default MapChart;


