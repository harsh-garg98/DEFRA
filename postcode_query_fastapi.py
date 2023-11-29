from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from shapely.geometry import Point, shape
import geopandas as gpd
import time

from data_preprocessing import gdf

app = FastAPI()

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/data")
def read_root():
    try:
        start = time.time()
        print('Querying')

        data = request.get_json()
        print('received data from user:', data)
        coordinates = Point(data['easting'], data['northing'])
        print('coordinates in easting northing of the postcode are:', coordinates)

        is_inside = ['False','False','False']
        for index, polygon in gdf.iterrows():
            if shape(polygon['geometry']).contains(coordinates):
                if polygon['type']=='np':
                    is_inside[0] = 'True'
                elif polygon['type']=='ramsar':
                    is_inside[1] = 'True'
                elif polygon['type']=='sssi':
                    is_inside[2] = 'True'

        print('Query finished in ', time.time() - start)
        return is_inside
    except Exception as e:
        return e