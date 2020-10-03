import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

const MapChart = () => {
  return (
    <ComposableMap
    //   projection="geoAzimuthalEqualArea"
      
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
          .filter(d => d.properties.REGION_UN === "Americas" && 
                       d.properties.SUBREGION === "Northern America" &&
                       d.properties.NAME === "Canada")
          .map(geo => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;