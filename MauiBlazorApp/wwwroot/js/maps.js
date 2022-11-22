
const defaultContainer = 'map';
const defaultStyle = 'mapbox://styles/mapbox/streets-v11';
let mapLayers;

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

/**
 * Load the main layer map
 */
function loadMainLayer() {
    mapboxgl.accessToken = key
    mapLayers = new mapboxgl.Map({
        container: defaultContainer,
        style: defaultStyle,
        center: [-122.486052, 37.830348],
        zoom: 13
    });

    const nav = new mapboxgl.NavigationControl({
        visualizePitch: false,
        showZoom: false
    });
    mapLayers.addControl(nav, 'top-left');

    // Add an image to use as a custom marker
    mapLayers.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        (error, image) => {
            if (error) throw error;
            mapLayers.addImage('custom-marker', image);

        }
    );

    // Add an image to use as a custom marker
    mapLayers.loadImage(
        'https://www.gravatar.com/avatar/0e9b085a0746e26b87414cde7ba6369f?s=50',
        (error, image) => {
            if (error) throw error;
            mapLayers.addImage('custom-marker2', image);

        }
    );
}

/**
 * Show a route with geojson
 */
function toggleLineLayer() {
    const sourceId = 'route';
    if (deleteSource(sourceId)) {
        return;
    }
    mapLayers.addSource(sourceId, {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    [-122.483696, 37.833818],
                    [-122.483482, 37.833174],
                    [-122.483396, 37.8327],
                    [-122.483568, 37.832056],
                    [-122.48404, 37.831141],
                    [-122.48404, 37.830497],
                    [-122.483482, 37.82992],
                    [-122.483568, 37.829548],
                    [-122.48507, 37.829446],
                    [-122.4861, 37.828802],
                    [-122.486958, 37.82931],
                    [-122.487001, 37.830802],
                    [-122.487516, 37.831683],
                    [-122.488031, 37.832158],
                    [-122.488889, 37.832971],
                    [-122.489876, 37.832632],
                    [-122.490434, 37.832937],
                    [-122.49125, 37.832429],
                    [-122.491636, 37.832564],
                    [-122.492237, 37.833378],
                    [-122.493782, 37.833683]
                ]
            }
        }
    });
    mapLayers.addLayer({
        'id': sourceId,
        'type': 'line',
        'source': sourceId,
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#888',
            'line-width': 8
        }
    }, mapLayers.getLayer('points') ? 'points' : undefined);
}

function addPointsLayer() {
    const sourceId = 'points';
    if (deleteSource(sourceId)) {
        return;
    }

    // Add a GeoJSON source with 2 points
    mapLayers.addSource(sourceId, {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    // feature for Mapbox DC
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-122.4861, 37.828802]
                    },
                    'properties': {
                        'title': 'Icon1'
                    }
                },
                {
                    // feature for Mapbox SF
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-122.49125, 37.832429]
                    },
                    'properties': {
                        'title': 'Icon2'
                    }
                },
                {
                    // feature for Mapbox SF
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-122.483696, 37.833818]
                    },
                    'properties': {
                        'title': 'Icon3'
                    }
                }
            ]
        }
    });

    // Add a symbol layer
    mapLayers.addLayer({
        'id': sourceId,
        'type': 'symbol',
        'source': sourceId,
        'layout': {
            //'icon-image': 'custom-marker',
            'icon-image': [
                'match',
                ["string", ["get", "title"]],
                'Icon2',
                'custom-marker2',
                "custom-marker" //default
            ],
            // get the title name from the source's "title" property
            'text-field': ['get', 'title'],
            'text-font': [
                'Open Sans Semibold',
                'Arial Unicode MS Bold'
            ],
            'text-offset': [0, 1.25],
            'text-anchor': 'top'
        }
    });
}

function addCompassLayer() {
    const cssHide = 'hide-compass';
    const compass = document.getElementsByClassName('mapboxgl-ctrl-compass')[0];
    if (compass.classList.contains(cssHide)) {
        compass.classList.remove(cssHide);
    }
    else {
        compass.classList.add(cssHide);
    }
}

function changeZoom(isEnabled) {
    changeHandler(isEnabled === 'ENABLE', 'doubleClickZoom');
    changeHandler(isEnabled === 'ENABLE', 'scrollZoom');
}

function changeRotation(isEnabled) {
    mapLayers.touchZoomRotate.enable();
    if (isEnabled === 'ENABLE') {
        mapLayers.touchZoomRotate.enableRotation();
    }
    else {
        mapLayers.touchZoomRotate.disableRotation();
    }
}

function changeInactive(isEnabled) {
    changeHandler(isEnabled === 'ENABLE', 'boxZoom');
    changeHandler(isEnabled === 'ENABLE', 'scrollZoom');
    changeHandler(isEnabled === 'ENABLE', 'dragPan');
    changeHandler(isEnabled === 'ENABLE', 'dragRotate');
    changeHandler(isEnabled === 'ENABLE', 'keyboard');
    changeHandler(isEnabled === 'ENABLE', 'doubleClickZoom');
    changeHandler(isEnabled === 'ENABLE', 'touchZoomRotate');
}

function setZoom(zoom) {
    mapLayers.zoomTo(zoom);
}

function setRotation(value) {
    mapLayers.setBearing(value);
}

function setCenter(lat, lon) {
    mapLayers.flyTo({
        center: [lat, lon],
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
}

function getLayers() {
    return JSON.stringify(mapLayers.getStyle().layers);
}

function changeHandler(enable, handlerName) {
    if (enable) {
        mapLayers[handlerName].enable();
    }
    else {
        mapLayers[handlerName].disable();
    }
}

function deleteSource(sourceId) {
    let layerRemoved = false;
    if (mapLayers.getLayer(sourceId)) {
        layerRemoved = true;
        mapLayers.removeLayer(sourceId);
    }
    if (mapLayers.getSource(sourceId)) {
        layerRemoved = true;
        mapLayers.removeSource(sourceId);
    }

    return layerRemoved;
}