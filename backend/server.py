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
    firstname = request.get_json()['firstname']
    lastname = request.get_json()['lastname']
    username = request.get_json()['username']
    password = bcrpyt.generate_password_hash(request.get_json()['password']).decode('utf-8') #encrypted

    cur.execute("INSERT INTO users (username, firstname, lastname, password) VALUES ('" +
    username +"','" + firstname + "','" + lastname + "','" +password+"')")

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
    password = request.get_json()['password']

    cur.execute("SELECT userID, password FROM users WHERE username = '" +
    username + "'")

    mysql.connection.commit()
    data = cur.fetchall()
    cur.close()
    data = {
        'userID': data[0][0],
        'password': bcrpyt.check_password_hash(data[0][1], password)
    }

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

    output = [] #new array to store our formatted data
    if data:
        for i in range(len(data)):
            output.append({
                "eventID": data[i][0],
                "hostID": data[i][1],
                "eventName": data[i][2],
                "locationID": data[i][3],
                "locationName": data[i][4],
                "locationAddress": data[i][5],
                "longitude": data[i][6],
                "latitude": data[i][7],
            })
    return jsonify(output)

#search all events in location api
@app.route('/api/searchLocationEvents', methods=['POST'])
def searchLocationEvents():
    #input values
    cur = mysql.connection.cursor()
    userID = request.get_json()['hostID'] #hostID = userID since userID will be host if user decides to host
    longitude = request.get_json()['longitude']
    latitude = request.get_json()['latitude']

    #SQL
    cur.execute("SELECT DISTINCT e.*, u.username, COUNT(a.userID) AS guestCount, " +
    "CASE WHEN EXISTS (SELECT * FROM Attend ar WHERE ar.eventID = e.eventID AND ar.userID = "+str(userID)+") THEN 1 ELSE 0 END AS status " +
    "FROM Events e " +
    "LEFT JOIN Attend a ON e.eventID = a.eventID " +
    "INNER JOIN Users u ON u.userID = e.hostID " +
    "WHERE e.longitude = " + str(longitude) + "AND e.latitude = " + str(latitude) +
    "GROUP BY e.eventID")

    mysql.connection.commit()

    data = cur.fetchall()

    #formatting data into json
    output = [] #new array to store our formatted data
    if data:
        for i in range(len(data)):
            output.append({
                "eventID": data[i][0],
                "hostID": data[i][1],
                "eventName": data[i][2],
                "locationID": data[i][3],
                "locationName": data[i][4],
                "locationAddress": data[i][5],
                "longitude": data[i][6],
                "latitude": data[i][7],
                "hostName": data[i][8],
                "guestCount": data[i][9],
                "status": data[i][10]
            })
    return jsonify(output)

#join event of the user
@app.route('/api/joinEvent', methods=['POST'])
def joinEvent():
    #input values
    cur = mysql.connection.cursor()
    userID = request.get_json()['userID']
    eventID = request.get_json()['eventID']

    #SQL
    cur.execute("REPLACE INTO attend(userID, eventID) VALUES (" + str(userID) + "," +str(eventID) + ")")

    mysql.connection.commit()

    return jsonify({"result": True})

#storeEvent api
@app.route('/api/storeEvent', methods=['POST'])
def storeEvent():
    cur = mysql.connection.cursor()

    #request data
    hostID = request.get_json()['hostID']
    eventName = request.get_json()['eventName']
    locationID = request.get_json()['locationID']
    locationName = request.get_json()['locationName']
    locationAddress = request.get_json()['locationAddress']
    longitude = request.get_json()['longitude']
    latitude = request.get_json()['latitude']

    #SQL
    #query 1) update event location if data exist. else add data
    cur.execute(
    "REPLACE INTO events SET hostID = " +
    str(hostID) + ",eventName = '" + eventName + "', locationID = '" + locationID + "', locationName = '"+
    locationName + "', locationAddress = '" + locationAddress + "', longitude = '" + str(longitude) + "', latitude = '" + str(latitude) + "'")

    #query 2) grab all events happening in my location
    cur.execute("SELECT * FROM events WHERE longitude = " +
    str(longitude) + "AND LATITUDE = " + str(latitude))

    mysql.connection.commit()
    data = cur.fetchall()

    #formatting data into json
    output = [] #new array to store our formatted data
    if data:
        for i in range(len(data)):
            output.append({
                "eventID": data[i][0],
                "hostID": data[i][1],
                "eventName": data[i][2],
                "locationID": data[i][3],
                "locationName": data[i][4],
                "locationAddress": data[i][5],
                "longitude": data[i][6],
                "latitude": data[i][7],
            })
    return jsonify(output)

#event information location api
@app.route('/api/editEventInfo', methods=['POST'])
def editEventInfo():
    #input values
    cur = mysql.connection.cursor()
    eventID = request.get_json()['eventID']
    eventName = request.get_json()['eventName']

    #SQL
    cur.execute("UPDATE events SET eventName = '" + eventName + "' WHERE eventID = '" + str(eventID) + "'")

    mysql.connection.commit()

    return jsonify({"result": True})

#grabbing users information in  a particular event
@app.route('/api/getEventUsers', methods=['POST'])
def getEventUsers():
    #input values
    cur = mysql.connection.cursor()
    eventID = request.get_json()['eventID']

    #SQL
    cur.execute("SELECT u.userID, u.username "+
    "FROM Attend a " +
    "LEFT JOIN Users u ON a.userID = u.userID " +
    "WHERE a.eventID = " + str(eventID) + " " )

    mysql.connection.commit()
    data = cur.fetchall()

    #formatting data into json
    output = [] #new array to store our formatted data
    if data:
        for i in range(len(data)):
            output.append({
                "userID": data[i][0],
                "username": data[i][1],
            })
    return jsonify(output)

#remove user from attend (leave event)
@app.route('/api/leaveEvent', methods=['POST'])
def leaveEvent():
    #input values
    cur = mysql.connection.cursor()
    userID = request.get_json()['userID']
    eventID = request.get_json()['eventID']

    #SQL
    cur.execute("DELETE FROM Attend WHERE userID = " + str(userID) + " AND eventID = " + str(eventID))

    mysql.connection.commit()

    return jsonify({"result": True})

#delete event and all its foreign key
@app.route('/api/deleteEvent', methods=['POST'])
def deleteEvent():
    #input values
    cur = mysql.connection.cursor()
    eventID = request.get_json()['eventID']

    #SQL
    cur.execute("DELETE FROM Events WHERE eventID = " + str(eventID))

    mysql.connection.commit()

    return jsonify({"result": True})

#Profile
#get user information
@app.route('/api/getUserInfo', methods=['POST'])
def getUserInfo():
    #input values
    cur = mysql.connection.cursor()
    userID = request.get_json()['userID']

    #SQL
    cur.execute("SELECT u.userID, u.username, "+
    "e.locationName AS hostEventName, e.locationAddress AS hostEventAddress, " +
    "g.locationName AS guestEventName, g.locationAddress AS guestEventAddress " +
    "FROM users u " +
    "LEFT JOIN Attend a ON u.userID = a.userID " +
    "LEFT JOIN Events e ON e.hostID = u.userID " +
    "LEFT JOIN Events g ON g.eventID = a.eventID " +
    "WHERE u.userID =6;")

    mysql.connection.commit()
    data = cur.fetchall()

    #formatting data into json
    output = [] #new array to store our formatted data
    if data:
        output.append({
            "userID": data[0][0],
            "username": data[0][1],
            "hostEventName": data[0][2],
            "hostEventAddress": data[0][3],
            "guestEventName": data[0][4],
            "guestEventAddress": data[0][5],
        })
    return jsonify(output)


#main
if __name__ == '__main__':
    app.run(debug=True)