from flask import Flask, request, jsonify
from flask_cors import CORS
from data_preprocessing import gdf
from shapely.geometry import Point, shape
import geopandas as gpd

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

@app.route('/api/data', methods=['POST'])
def handle_data():
    try:
        data = request.get_json()
        print('received data from user:', data)
        coordinates = Point(data['easting'], data['northing'])
        print('coordinates in easting northing of the postcode are:', coordinates)

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