function loadLayers(){
var baseLayers = {};
var overlayLayers = {};
var defaultLayer  =  L.tileLayer.wms('http://dev.caff.is:8080/geoserver/ows',{
format: "image/png",
layers: 'arctic_sdi:LandSurfaceTemperature',
minZoom: 0,
maxZoom: 12,
continiuousWorld: true,
transparent: true,
attribution: " | &copy; <a href=' http://www.arcticbiodiversity.is>Arctic Biodiversity Assessment</a> |<a href='http://download.geofabrik.de/'> geofabrik/osm</a> | Projection: <a href='http://spatialreference.org/ref/epsg/3575'> EPSG:3575</a>",
});
overlayLayers['arctic_sdi:SeaSurfaceTemperature'] =  L.tileLayer.wms('http://dev.caff.is:8080/geoserver/ows',{
format: "image/png",
layers: 'arctic_sdi:SeaSurfaceTemperature',
minZoom: 0,
maxZoom: 12,
continiuousWorld: true,
transparent: true,
attribution: " | &copy; <a href=' http://www.arcticbiodiversity.is>Arctic Biodiversity Assessment</a> |<a href='http://download.geofabrik.de/'> geofabrik/osm</a> | Projection: <a href='http://spatialreference.org/ref/epsg/3575'> EPSG:3575</a>",
});
baseLayers['arctic_sdi:LandSurfaceTemperature'] = defaultLayer;
return{overlayLayers: overlayLayers, baseLayers: baseLayers,defaultLayer: defaultLayer }
};
