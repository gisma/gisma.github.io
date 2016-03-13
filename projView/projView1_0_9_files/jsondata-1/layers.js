function loadLayers(){
var baseLayers = {};
var overlayLayers = {};
var defaultLayer  =  L.tileLayer('https://map1{s}.vis.earthdata.nasa.gov/wmts-antarctic/BlueMarble_ShadedRelief_Bathymetry/default/EPSG3031_500m/{z}/{y}/{x}.jpg',{
format: "image/jpg",
tileSize: 512,
subdomains: "abc",
minZoom: 0,
maxZoom: 5,
noWrap: true,
attribution: "<a href='https://wiki.earthdata.nasa.gov/display/GIBS'> NASA EOSDIS GIBS</a> &nbsp;|| &nbsp; <a href='https://github.com/kartena/Proj4Leaflet'> Proj4Leaflet</a> | Projection: <a href='http://spatialreference.org/ref/epsg/wgs-84-antarctic-polar-stereographic/'> EPSG3031</a>",
});
overlayLayers['AMSR2_Sea_Ice_Brightness_Temp_6km_89H'] =  L.tileLayer('https://map1{s}.vis.earthdata.nasa.gov/wmts-antarctic/AMSR2_Sea_Ice_Brightness_Temp_6km_89H/default/2014-02-04/EPSG3031_1km/{z}/{y}/{x}.jpg',{
format: "image/jpg",
tileSize: 512,
subdomains: "abc",
minZoom: 0,
maxZoom: 5,
noWrap: true,
attribution: "<a href='https://wiki.earthdata.nasa.gov/display/GIBS'> NASA EOSDIS GIBS</a> &nbsp;|| &nbsp; <a href='https://github.com/kartena/Proj4Leaflet'> Proj4Leaflet</a> | Projection: <a href='http://spatialreference.org/ref/epsg/wgs-84-antarctic-polar-stereographic/'> EPSG3031</a>",
});
overlayLayers['MODIS_Terra_Snow_Cover'] =  L.tileLayer('https://map1{s}.vis.earthdata.nasa.gov/wmts-antarctic/MODIS_Terra_Snow_Cover/default/2014-02-04/EPSG3031_1km/{z}/{y}/{x}.jpg',{
format: "image/jpg",
tileSize: 512,
subdomains: "abc",
minZoom: 0,
maxZoom: 5,
noWrap: true,
attribution: "<a href='https://wiki.earthdata.nasa.gov/display/GIBS'> NASA EOSDIS GIBS</a> &nbsp;|| &nbsp; <a href='https://github.com/kartena/Proj4Leaflet'> Proj4Leaflet</a> | Projection: <a href='http://spatialreference.org/ref/epsg/wgs-84-antarctic-polar-stereographic/'> EPSG3031</a>",
});
baseLayers['BlueMarble_ShadedRelief_Bathymetry'] = defaultLayer;
return{overlayLayers: overlayLayers, baseLayers: baseLayers,defaultLayer: defaultLayer }
};
