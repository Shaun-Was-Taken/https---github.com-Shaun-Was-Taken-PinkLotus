"use client";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindowF,
} from "@react-google-maps/api";
import { useState } from "react";

export default function Intro() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDlMzZ9LdJWT47X3YyJA - WNwvSe_qd3yTU",
  });
  const pos = { lat: 38.93998718261719, lng: -95.26199340820312 };

  const [showInfoWindow, setShowInfoWindow] = useState(false);

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "initial" }}>
      <GoogleMap
        center={pos}
        zoom={15}
        mapContainerStyle={{
          width: "100%",
          height: "100%",
        }}
      >
        <Marker position={pos} onClick={() => setShowInfoWindow(true)} />
        {showInfoWindow && (
          <InfoWindowF
            position={pos}
            onCloseClick={() => setShowInfoWindow(false)}
          >
            <div>
              <h3>Pink Lotus</h3>
              <p>2429 Iowa St. Suite A Lawrence, KS 66046</p>
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0aFTQ3nnG2zLf4vAKQalSi39Oc1SlYFzorY5Cd-ZtHUENN-Pva2OD6wn5C01ayLAm4rakfv7F1">
                Book An Appointment
              </a>
              <p></p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=2429%20Iowa%20St.%20Suite%20A%20Lawrence,%20KS%2066046">
                Directions
              </a>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </div>
  );
}
