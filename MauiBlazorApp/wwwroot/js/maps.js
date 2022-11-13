
const key = '<MAPBOX-KEY>';
const defaultContainer = 'map';
const defaultStyle = 'mapbox://styles/mapbox/streets-v11';

/** 
 * Show a simple map
 */
function displayMapJS() {

    mapboxgl.accessToken = key
    new mapboxgl.Map({
        container: defaultContainer,
        style: defaultStyle,
        center: [-3.007208155925328, 39.161296491274676],
        zoom: 12
    });
}

/**
 * Show a map with a region drawing from a geojson
 */
function displayMapPolygonJS() {

    mapboxgl.accessToken = key
    const map = new mapboxgl.Map({
        container: defaultContainer,
        style: defaultStyle,
        center: [-68.137343, 45.137451],
        zoom: 5
    });

    map.on('load', () => {
        map.addSource('maine', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': [
                        [
                            [-67.13734, 45.13745],
                            [-66.96466, 44.8097],
                            [-68.03252, 44.3252],
                            [-69.06, 43.98],
                            [-70.11617, 43.68405],
                            [-70.64573, 43.09008],
                            [-70.75102, 43.08003],
                            [-70.79761, 43.21973],
                            [-70.98176, 43.36789],
                            [-70.94416, 43.46633],
                            [-71.08482, 45.30524],
                            [-70.66002, 45.46022],
                            [-70.30495, 45.91479],
                            [-70.00014, 46.69317],
                            [-69.23708, 47.44777],
                            [-68.90478, 47.18479],
                            [-68.2343, 47.35462],
                            [-67.79035, 47.06624],
                            [-67.79141, 45.70258],
                            [-67.13734, 45.13745]
                        ]
                    ]
                }
            }
        });

        // Add a new layer to visualize the polygon.
        map.addLayer({
            'id': 'maine',
            'type': 'fill',
            'source': 'maine', // reference the data source
            'layout': {},
            'paint': {
                'fill-color': '#0080ff', // blue color fill
                'fill-opacity': 0.5
            }
        });
        // Add a black outline around the polygon.
        map.addLayer({
            'id': 'outline',
            'type': 'line',
            'source': 'maine',
            'layout': {},
            'paint': {
                'line-color': '#000',
                'line-width': 3
            }
        });
    });
}

/**
 * Show a map marker with a popup message when the user click on it
 */
function displayMapMarkerJS(dotNetHelper) {

    mapboxgl.accessToken = key
    const monument = [-77.0353, 38.8895];
    const map = new mapboxgl.Map({
        container: defaultContainer,
        style: defaultStyle,
        center: monument,
        zoom: 15
    });

    // create the popup
    const popup = new mapboxgl.Popup({ offset: 25, closeButton: false }).setText(
        'Lorem ipsum dolor sit amet consectetur adipiscing, elit habitasse velit sodales cubilia non, sem in nostra magna eros.'
    );

    // create DOM element for the marker
    const el = document.createElement('div');
    el.id = 'marker';
    // create the marker
    const marker = new mapboxgl.Marker(el)
        .setLngLat(monument)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
    
    marker.getElement().addEventListener('click', () => dotNetHelper.invokeMethodAsync('MethodFromJS', 'MARKER OPENED!'));
}

/**
 * Show a map with user realtime location
 */
function displayMapLocationJS() {

    mapboxgl.accessToken = key
    const map = new mapboxgl.Map({
        container: defaultContainer,
        style: defaultStyle,
        center: [-3.007208155925328, 39.161296491274676],
        zoom: 12
    });

    // Add geolocate control to the map.
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        })
    );
}