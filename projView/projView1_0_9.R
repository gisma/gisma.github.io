## ---- eval = FALSE, warning=FALSE, message=FALSE, fig.width=9.47---------
#  install_github("environmentalinformatics-marburg/mapview", ref = "develop")

## ---- warning=FALSE, message=FALSE---------------------------------------
NASA=list(service="NASA",                                             # name of the list
L.tileLayer="https://map1{s}.vis.earthdata.nasa.gov/wmts-antarctic/", # base address <ResourceURL>
# layer list is structured like the path of the url in this case: <ows:Identifier>,<TileMatrixSet>
layer=list(layer=list(list("BlueMarble_ShadedRelief_Bathymetry",path=list("EPSG3031_500m"))
)), # end single layer url
format="image/jpg",#<Format>
tileSize="512",   # min resolution  EPSG:3031 examples
subdomains="abc", # default
noWrap ="true",   # default
attribution="<a href='https://wiki.earthdata.nasa.gov/display/GIBS'> NASA EOSDIS GIBS</a> &nbsp;|| &nbsp; <a href='https://github.com/kartena/Proj4Leaflet'> Proj4Leaflet</a> | Projection: <a href='http://spatialreference.org/ref/epsg/wgs-84-antarctic-polar-stereographic/'> EPSG3031</a>",
params=list(t_epsg="EPSG:3031", # you have to comile this by your own with respect to the data providers
t_srs="+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs", # proj4 string taken from: href='http://spatialreference.org/ref/epsg/wgs-84-antarctic-polar-stereographic
mapCenter=list(cLat="-90",  #see example map EPSG:3031 examples
cLon="0"),                  #see example map EPSG:3031 examples
initialZoom="1",            #EPSG:3031 examples: Please note that the "top tile" (i.e., zoom level 0) is not currently supported by GIBS.
zoomLevels="5",             # zoom/levels EPSG:3031 examples
resolution="256",           # = minresolution EPSG:3031 examples
ovlBounds=list(minx="-4194304", ## <ows:LowerCorner>
miny="-4194304",                ## <ows:LowerCorner>
maxx="4194304",                 ## <ows:UpperCorner>
maxy="4194304"),                ## <ows:UpperCorner>
origin=list(olx="-4194304",    ## <ows:LowerCorner> firstvalue minx
oly="4194304"),                ## <ows:UpperCorner> lastvalue maxy
relUrl=""                      ## obsolete used for local tiles
))


## ---- warning=FALSE, message=FALSE, fig.width=9.47-----------------------
library(mapview)
library(raster)

 # load data of the arctic stations
 data("campsQ2")

 # put the above list into a wrapping list called oblLayer
 ovlLayer<-list(
    NASA=list(service="NASA",                                             # name of the list
              L.tileLayer="https://map1{s}.vis.earthdata.nasa.gov/wmts-antarctic/", # base address <ResourceURL>
              # layer list is structured like the path of the url in this case: <ows:Identifier>,<TileMatrixSet>
              layer=list(layer=list(list("BlueMarble_ShadedRelief_Bathymetry",path=list("EPSG3031_500m"))
              )), # end single layer url
              format="image/jpg",#<Format>
              tileSize="512",   # min resolution  EPSG:3031 examples
              subdomains="abc", # default
              noWrap ="true",   # default
              attribution="<a href='https://wiki.earthdata.nasa.gov/display/GIBS'> NASA EOSDIS GIBS</a> &nbsp;|| &nbsp; <a href='https://github.com/kartena/Proj4Leaflet'> Proj4Leaflet</a> | Projection: <a href='http://spatialreference.org/ref/epsg/wgs-84-antarctic-polar-stereographic/'> EPSG3031</a>",
              params=list(t_epsg="EPSG:3031", # you have to comile this by your own with respect to the data providers
                          t_srs="+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs", # proj4 string taken from: href='http://spatialreference.org/ref/epsg/wgs-84-antarctic-polar-stereographic
                          mapCenter=list(cLat="-90",  #see example map EPSG:3031 examples
                                         cLon="0"),                  #see example map EPSG:3031 examples
                          initialZoom="1",            #EPSG:3031 examples: Please note that the "top tile" (i.e., zoom level 0) is not currently supported by GIBS.
                          zoomLevels="5",             # zoom/levels EPSG:3031 examples
                          resolution="256",           # = minresolution EPSG:3031 examples
                          ovlBounds=list(minx="-4194304", ## <ows:LowerCorner>
                                         miny="-4194304",                ## <ows:LowerCorner>
                                         maxx="4194304",                 ## <ows:UpperCorner>
                                         maxy="4194304"),                ## <ows:UpperCorner>
                          origin=list(olx="-4194304",    ## <ows:LowerCorner> firstvalue minx
                                      oly="4194304"),                ## <ows:UpperCorner> lastvalue maxy
                          relUrl=""                      ## obsolete used for local tiles
              ))
    
)
 
 # map it
 mapview::projView(campsQ2, , map.types= "ovlLayer$NASA")

## ---- warning=FALSE, message=FALSE, fig.width=9.47-----------------------
 
### use the visEarthPole function as a plugin
projView(campsQ2, map.types= "ovlLayer$NASA",
                  internalList =TRUE,
                  externalList = c("arctic-nasa","visEarthPole(groupList='1000',dateString='2014-02-04',createList = TRUE)"))
                  

