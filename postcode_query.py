import geopandas as gpd
import pandas as pd
from shapely.geometry import Point, shape
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

@app.route('/api/data', methods=['POST'])
def handle_data():
    try:
        gdf1 = gpd.read_file(r"/Users/harshgarg/Desktop/DEFRA/priorityhabitatsgrasslandinventoryupdateaug2019.geojson")
        gdf2 = gpd.read_file(r"/Users/harshgarg/Desktop/DEFRA/Priority_Habitats_Inventory_England_7375124169757603116.geojson")
        gdf = pd.concat([gdf1.to_crs(gdf2.crs)['geometry'], gdf2['geometry']], axis = 0)
        gdf = gpd.GeoDataFrame(gdf, columns = ['geometry']).reset_index(drop=True)
        
        data = request.get_json()
        print('received data:', data)
        print('easting', data['easting'])
        print('northing', data['northing'])
        coordinates = Point(data['easting'], data['northing'])

        is_inside = 'False'
        for index, polygon in gdf.iterrows():
            if shape(polygon['geometry']).contains(coordinates):
                is_inside = 'True'
                break
        return is_inside
    except Exception as e:
        return e

if __name__ == '__main__':
    app.run(debug=True)