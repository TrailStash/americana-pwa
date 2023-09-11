import MapView from "@trailstash/map-view";
import Americana from "@trailstash/stylejs-americana";
import "@trailstash/map-view/dist/index.css"

const config = {
  map: {
    container: "map",
    style: new Americana(),
    zoom: 4,
    center: [-100, 40],
    attributionControl: false,
  },
  controls: [
    {
      position: "bottom-right",
      type: "GeolocateControl",
      options: {
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      },
    },
    {
      position: "bottom-right",
      type: "NavigationControl",
    },
    {
      type: "ScaleControl",
      options: {
        unit: "imperial",
      },
    },
    { type: "AutoClosingAttributionControl", position: "top-right" },
  ],
  PersistView: true,
};
const view = new MapView(config);

// register service worker for PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then(function (registration) {
    registration.update();
    console.log("Service Worker Registered");
  });
}
