#libraries
from flask import Flask, request, jsonify, json
from flask_mysqldb import MySQL
from flask_bcrypt import Bcrypt
from flask_cors import CORS

import yaml #authentication file

app = Flask(__name__)

#Configure db
db = yaml.load(open('db.yaml'), Loader=yaml.FullLoader)
app.config['MYSQL_HOST'] = db['mysqlHost'] #Host
app.config['MYSQL_USER'] = db['mysqlUser'] #User
app.config['MYSQL_PASSWORD'] = db['mysqlPassword'] #Password
app.config['MYSQL_DB'] = db['mysqlDB'] #Database Name

mysql = MySQL(app)
bcrpyt = Bcrypt(app)
CORS(app)

#register register api
@app.route('/api/register', methods=['POST'])
def register():
    cur = mysql.connection.cursor()
    username = request.get_json()['username']

    cur.execute("INSERT INTO users (username) VALUES ('" +
    username + "')")

    mysql.connection.commit()

    output = {
        "state": True,
    }
    return jsonify({"result": output})

#login register api
@app.route('/api/login', methods=['POST'])
def login():
    cur = mysql.connection.cursor()
    username = request.get_json()['username']

    cur.execute("SELECT user_id FROM users WHERE username = '" +
    username + "'")

    mysql.connection.commit()
    data = cur.fetchall()
    cur.close()
    data = {'userID': data[0][0]}

    return jsonify(data)

#set all events api
@app.route('/api/setEventsOnMap', methods=['GET'])
def setEventsOnMap():
    #input values
    cur = mysql.connection.cursor()

    #SQL
    cur.execute("SELECT * FROM events")

    mysql.connection.commit()

    data = cur.fetchall() #data from the query

    if data:
        output = [] #new array to store our formatted data
        for i in range(len(data)):
            output.append({
                "eventID": data[i][0],
                "eventName": data[i][1],
                "locationID": data[i][2],
                "locationName": data[i][3],
                "locationAddress": data[i][4],
                "longitude": data[i][5],
                "latitude": data[i][6],
            })

    return jsonify(output)

#search all events in location api
@app.route('/api/searchLocationEvents', methods=['POST'])
def searchLocationEvents():
    #input values
    cur = mysql.connection.cursor()
    longitude = request.get_json()['longitude']
    latitude = request.get_json()['latitude']

    #SQL
    cur.execute("SELECT * FROM events WHERE longitude = " +
    str(longitude) + "AND LATITUDE = " + str(latitude))

    mysql.connection.commit()

    data = cur.fetchall()

    #formatting data into json
    if data:
        data = {
            "eventID": data[0][0],
            "eventName": data[0][1],
            "locationID": data[0][2],
            "locationName": data[0][3],
            "locationAddress": data[0][4],
            "longitude": data[0][5],
            "latitude": data[0][6],
        }

    return jsonify(data)

#storeEvent api
@app.route('/api/storeEvent', methods=['POST'])
def storeEvent():
    cur = mysql.connection.cursor()

    #request data
    eventName = request.get_json()['eventName']
    locationID = request.get_json()['locationID']
    locationName = request.get_json()['locationName']
    locationAddress = request.get_json()['locationAddress']
    longitude = request.get_json()['longitude']
    latitude = request.get_json()['latitude']

    #SQL
    cur.execute("INSERT INTO events (eventName, locationID, locationName, locationAddress, longitude, latitude)" +
    "VALUES ('" +
    eventName + "','" + locationID + "','" +locationName + "','" + locationAddress + "','" +
    str(longitude)+ "','" +str(latitude) + "')")

    mysql.connection.commit()

    return jsonify({"result": True})

#main
if __name__ == '__main__':
    app.run(debug=True)