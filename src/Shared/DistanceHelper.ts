import { Position } from "./Run";
import { Loader } from "@googlemaps/js-api-loader";
import { GOOGLEMAPSAPIKEY } from "./APIKeys";

const loader = new Loader({
  apiKey: GOOGLEMAPSAPIKEY,
});

let directionService: google.maps.DirectionsService;
loader.load().then(
  (r) => {
    directionService = new google.maps.DirectionsService();
  },
  (reason) => {
    console.log(reason);
  }
);

export function calculateDistance(
  x: Position,
  y: Position,
  callback: (
    response: google.maps.DirectionsResult,
    status: google.maps.DirectionsStatus
  ) => void
) {
  const route: google.maps.DirectionsRequest = {
    origin: x,
    destination: y,
    travelMode: google.maps.TravelMode["WALKING"],
  };

  directionService.route(route, callback);
}
