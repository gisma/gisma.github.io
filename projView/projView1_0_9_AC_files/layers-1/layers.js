function loadLayers(){
var baseLayers = {};
var overlayLayers = {};
var defaultLayer  =  L.tileLayer('http://{s}.tiles.arcticconnect.org/osm_3571/{z}/{x}/{y}.png',{
format: "image/png",
minZoom: 1,
maxZoom: 18,
tileSize: 256,
continiuousWorld: false,
transparent: false,
noWrap: true,
subdomains: "abc",
tms: false,
attribution: "Map &copy; <a href='http://arcticconnect.org'>ArcticConnect</a>. Data &copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors",
});
baseLayers['osm_3571'] = defaultLayer;
return{overlayLayers: overlayLayers, baseLayers: baseLayers,defaultLayer: defaultLayer }
};
