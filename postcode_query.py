import geopandas as gpd
import pandas as pd
from shapely.geometry import Point, shape

gdf1 = gpd.read_file(r"C:\Users\HarshGarg\Desktop\DEFRA\priorityhabitatsgrasslandinventoryupdateaug2019.geojson")
gdf2 = gpd.read_file(r"C:\Users\HarshGarg\Desktop\DEFRA\Priority_Habitats_Inventory_England_7375124169757603116.geojson")

gdf = pd.concat([gdf1.to_crs(gdf2.crs)['geometry'], gdf2['geometry']], axis = 0)

gdf = gpd.GeoDataFrame(gdf, columns = ['geometry']).reset_index(drop=True)

def check_point_location(point, gdf = gdf):
    is_inside = False
    for index, polygon in gdf.iterrows():
        if shape(polygon['geometry']).contains(point):
            is_inside = True
            break
    return is_inside