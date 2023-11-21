import geopandas as gpd
import pandas as pd
from shapely.geometry import Point, shape

crs_num = 27700

print('data processing')

gdf1 = gpd.read_file(r"C:\Users\HarshGarg\Desktop\DEFRA\data\National_Parks_England.geojson")
print('National parks loaded')
gdf2 = gpd.read_file(r"C:\Users\HarshGarg\Desktop\DEFRA\data\Ramsar_England.geojson")
print('Ramsar loaded')
gdf3 = gpd.read_file(r"C:\Users\HarshGarg\Desktop\DEFRA\data\SSSI_England.geojson")
print('SSSI loaded')

gdf1.to_crs(crs_num)
gdf2.to_crs(crs_num)
gdf3.to_crs(crs_num)

gdf1['type'] = 'np'
gdf2['type'] = 'ramsar'
gdf3['type'] = 'sssi'

gdf = pd.concat([gdf1[['geometry','type']], gdf2[['geometry','type']], gdf3[['geometry','type']]], axis = 0)
gdf = gdf.reset_index(drop=True)
print('data processed')