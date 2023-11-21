import geopandas as gpd
import pandas as pd
from shapely.geometry import Point, shape

print('data processing')
gdf1 = gpd.read_file(r"/Users/harshgarg/Desktop/DEFRA/priorityhabitatsgrasslandinventoryupdateaug2019.geojson")
gdf2 = gpd.read_file(r"/Users/harshgarg/Desktop/DEFRA/Priority_Habitats_Inventory_England_7375124169757603116.geojson")
gdf = pd.concat([gdf1.to_crs(gdf2.crs)['geometry'], gdf2['geometry']], axis = 0)
gdf = gpd.GeoDataFrame(gdf, columns = ['geometry']).reset_index(drop=True)
print('data processed')