
const key = 'pk.eyJ1IjoiYWxpbmFyZXM5NCIsImEiOiJjbGFlNzFrMmIwcmd2M3BzNGNqMWVoYXlqIn0.g0zgrvsqzVkjd1yoScwWig';

function displayMapJS() {

    mapboxgl.accessToken = key
    new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-3.007208155925328, 39.161296491274676],
        zoom: 12
    });
}

//window.displayMapWithPolygonJS = () => {

//    mapboxgl.accessToken = key
//    const map = new mapboxgl.Map({
//        container: 'map',
//        style: 'mapbox://styles/mapbox/streets-v11',
//        center: [-68.137343, 45.137451],
//        zoom: 5
//    });

//    map.on('load', () => {
//        map.addSource('maine', {
//            'type': 'geojson',
//            'data': {
//                'type': 'Feature',
//                'geometry': {
//                    'type': 'Polygon',
//                    'coordinates': [
//                        [
//                            [-67.13734, 45.13745],
//                            [-66.96466, 44.8097],
//                            [-68.03252, 44.3252],
//                            [-69.06, 43.98],
//                            [-70.11617, 43.68405],
//                            [-70.64573, 43.09008],
//                            [-70.75102, 43.08003],
//                            [-70.79761, 43.21973],
//                            [-70.98176, 43.36789],
//                            [-70.94416, 43.46633],
//                            [-71.08482, 45.30524],
//                            [-70.66002, 45.46022],
//                            [-70.30495, 45.91479],
//                            [-70.00014, 46.69317],
//                            [-69.23708, 47.44777],
//                            [-68.90478, 47.18479],
//                            [-68.2343, 47.35462],
//                            [-67.79035, 47.06624],
//                            [-67.79141, 45.70258],
//                            [-67.13734, 45.13745]
//                        ]
//                    ]
//                }
//            }
//        });
//}