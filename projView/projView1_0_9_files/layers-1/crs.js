var initialZoom =  1 ;
var mapCenter = [-90,0];
var crs =  new L.Proj.CRS("EPSG:3031","+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs",
{resolutions: [8192,4096,2048,1024,512,256],
origin: [-4194304,4194304],
bounds: L.bounds([-4194304,-4194304],[4194304,4194304])
});
