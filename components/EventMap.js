import Image from "next/image";
import { useState, useEffect } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import Geocode from "react-geocode";
export default function EventMap({ evt }) {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewport, setViewport] = useState({
    latitude: 40.712772,
    longitude: -73.935242,
    width: "100%",
    height: "500px",
    zoom: 12,
  });
  useEffect(() => {
    Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLEMAP_API_TOKEN);
    // Get latitude & longitude from address.
    Geocode.fromAddress(evt.address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLat(lat);
        setLng(lng);
        setViewport({ ...viewport, latitude: lat, longitude: lng });
        setLoading(false);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  if (loading) return false;
  console.log(lat, lng);
  return <div>map</div>;
}
