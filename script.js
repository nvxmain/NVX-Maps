mapboxgl.accessToken = 'pk.eyJ1Ijoic2Fpb24iLCJhIjoiY2tvaTQ1a2JoMDhuaTJ3cDhmb3JzNHVrOSJ9.8ZQxHn9YaV-UD4_d_beMfg';
var forHtml = [];

navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: true });

function success(position) {
  setup([position.coords.longitude, position.coords.latitude], 'mapbox://styles/mapbox/streets-v11');
  forHtml = [position.coords.longitude, position.coords.latitude];
}

function error() {
  setup([77, 28], 'mapbox://styles/mapbox/streets-v11');
  forHtml = [77, 28];
}

function setup(center, style) {
  var map = new mapboxgl.Map({
    container: 'map',
    style: style,
    center: center,
    zoom: 15
  });

  map.addControl(new mapboxgl.NavigationControl());

  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken
    }), 'bottom-right'
  );

map.addControl(
new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
mapboxgl: mapboxgl
    }), "top-left"
  );

  var marker1 = new mapboxgl.Marker()
    .setLngLat(center)
    .addTo(map);
}