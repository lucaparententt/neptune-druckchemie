// oApp.to(MapsPage);
hBoxMap.setVisible(true);
ScrollContainer1.setVisible(false);
let appointments = modelCustomers.getData().filter((app) => app.lat && app.lon);
appointments = appointments.map(function (app) {
    app.customerId = app.customerId;
    app.lineno = 10;
    app.desc = app.companyName;
    app.status=  'Initial';
    app.long= Number(parseFloat(app.lon).toFixed(4));// Number(app.lon);
    app.lat=  Number(parseFloat(app.lat).toFixed(4));//Number(app.lat);
    app.geofenceradius= 3000;
    return app;
});
orderheaders = appointments;
await showMap();
map.setView(new L.LatLng(mapcenterlat, mapcenterlong), mapzoom);

// require([
//     "esri/Map",
//     "esri/views/MapView"
// ], function(Map, MapView) {

//     var map = new Map({
//         basemap: "topo-vector"
//     });

//     var view = new MapView({
//         container: map.getDomRef(),
//         map: map,
//         center: [-118.71511, 24.09042], //longitude, latitude
//         zoom: 11
//     }})
