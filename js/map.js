var map;
var initialize = function initialize () {
  map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 17,
    center: {lat: 59.939062, lng: 30.321300},
  });
  
  var marker = new google.maps.Marker ({
    position: new google.maps.LatLng(59.938781, 30.323150),
    map: map,
    icon: "img/map-marker.png"
  });
};

google.maps.event.addDomListener(window, "load", initialize);