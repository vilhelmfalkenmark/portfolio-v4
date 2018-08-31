import React from "react";
import myMarker from "assets/images/myMarker.png";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import { styles } from "./GoogleMapsStyles.js";

const GoogleMaps = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: 59.363598, lng: 18.074851 }}
      defaultOptions={{
        scrollwheel: false,
        styles: styles,
        zoomControl: true,
        draggable: true,
        disableDefaultUI: true
      }}
    >
      {props.isMarkerShown && (
        <Marker
          position={{ lat: 59.363598, lng: 18.074851 }}
          icon={{
            url: myMarker, // pass your image here
            scaledSize: { width: 70, height: 45 },
            size: { width: 70, height: 45 }
          }}
        />
      )}
    </GoogleMap>
  ))
);

export default GoogleMaps;
