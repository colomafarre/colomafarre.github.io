library(leaflet)
library(raster)
library(ggmap)
library(dplyr)
library(maptools)
library(rgdal)
library(RColorBrewer)

# Dataframe of places we have been
df <- data_frame(
  place = c('Manhiça, Spain')
)

# Get lat/lng
location <- geocode(df$place)
location_full <- geocode(df$place, output = 'all')
df <- cbind(df, location)

# Manually create vector of countries
df$country <- c('MOZ')
countries <- df$country

# This chunk gets shapefile(s) from the GADM
# database and uses their standardized notation
# rather than the questionable notation of our location_level_
# columns to create geographies


# Get shapefile(s) for the country 
# Make a temporary list to put polygons into
poly_list <- list()

# Get polygons for the country(countries) of this originator
for (i in 1:length(countries)){
  # Get the spatialpolygonsdataframe for the country
  x = getData('GADM', 
              country = toupper(substr(countries[i], 1, 3)), 
              level = 0)
  # Ensure standard formatting of feature IDs
  x <-  spChFIDs(x, paste(x$ID_0, sep = ""))
  # Plug each country into a list
  poly_list[[i]] <- x
}
# If there's only one country, pop it out of the list and keep it as map
# Otherwise, bind all the individual country files into one
if(length(poly_list) == 1){
  polys <- poly_list[[1]]
} else {
  polys <- do.call('spRbind', poly_list)
}

# Get a gg compatible version of polys
polys_gg <- fortify(polys, region = 'OBJECTID')
polys_gg <- 
  polys_gg %>%
  left_join(polys@data %>%
              rename(id = OBJECTID) %>%
              mutate(id = as.character(id)) %>%
              dplyr::select(id, ID_0) %>%
              rename(region = ID_0),
            by = 'id')

colors <- colorRampPalette(brewer.pal(9, 'Spectral'))(length(countries))

# Map types we like
maps <- c('NASAGIBS.ViirsEarthAtNight2012',
          'CartoDB.DarkMatter',
          'Esri.DeLorme',
          'Stamen.Toner')

l <-
  leaflet(polys) %>%
  addPolygons(color = NA, opacity = 0, fill = FALSE) %>%
  addProviderTiles(maps[4]) %>%
  addCircleMarkers(lat = df$lat,
                   lng = df$lon,
                   col = 'yellow',
                   popup = df$place) #%>%
  # addPolygons(color = colors)

library(htmlwidgets)
saveWidget(l, file='map_widget.html')
