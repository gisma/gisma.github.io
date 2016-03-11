function loadLayers(){
var baseLayers = {};
var overlayLayers = {};
baseLayers['BlueMarble_ShadedRelief_Bathymetry'] =  L.tileLayer('https://map1{s}.vis.earthdata.nasa.gov/wmts-antarctic/BlueMarble_ShadedRelief_Bathymetry/default/EPSG3031_500m/{z}/{y}/{x}.jpg',{
layer: 'BlueMarble_ShadedRelief_Bathymetry',
format: "image/jpg",
tileSize: 512,
subdomains: "abc",
noWrap:true,
attribution: "<a href='https://wiki.earthdata.nasa.gov/display/GIBS'> NASA EOSDIS GIBS</a> &nbsp;|| &nbsp; <a href='https://github.com/kartena/Proj4Leaflet'> Proj4Leaflet</a> | Projection: <a href='http://spatialreference.org/ref/epsg/wgs-84-antarctic-polar-stereographic/'> EPSG3031</a>",
});
return{overlayLayers: overlayLayers, baseLayers: baseLayers,defaultLayer: 'BlueMarble_ShadedRelief_Bathymetry' }
};
