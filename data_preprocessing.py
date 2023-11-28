import geopandas as gpd
import pandas as pd
from shapely.geometry import Point, shape
import time

crs_num = 27700

print('data processing')
start = time.time()

gdf1 = gpd.read_file(r"C:\Users\HarshGarg\Desktop\DEFRA\data\National_Parks_England.geojson")
np_time = time.time()
print('National parks loaded in ', np_time - start)
print('National parks data shape is ', gdf1.shape)
gdf2 = gpd.read_file(r"C:\Users\HarshGarg\Desktop\DEFRA\data\Ramsar_England.geojson")
ramsar_time = time.time()
print('Ramsar loaded in ', ramsar_time - np_time)
print('Ramsar data shape is ', gdf2.shape)
gdf3 = gpd.read_file(r"C:\Users\HarshGarg\Desktop\DEFRA\data\SSSI_England.geojson")
sssi_time = time.time()
print('SSSI loaded in ', sssi_time - ramsar_time)
print('SSSI data shape is ', gdf3.shape)

gdf1.to_crs(crs_num)
gdf2.to_crs(crs_num)
gdf3.to_crs(crs_num)

gdf1['type'] = 'np'
gdf2['type'] = 'ramsar'
gdf3['type'] = 'sssi'

gdf = pd.concat([gdf1[['geometry','type']], gdf2[['geometry','type']], gdf3[['geometry','type']]], axis = 0)
gdf = gdf.reset_index(drop=True)
print('data processed')
print('time taken ', time.time() - start)