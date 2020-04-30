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

#setting location api
@app.route('/api/location', methods=['POST'])
def location():
    cur = mysql.connection.cursor()
    latitude = request.get_json()['latitude']
    longitude = request.get_json()['longitude']

    cur.execute("INSERT INTO pointer (latitude, longitude) VALUES ('" +
    str(latitude) + "','" + str(longitude) + "')")

    mysql.connection.commit()

    result = {
        "latitude" : latitude,
        "longitude" : longitude
    }
    return jsonify({"result": result})

#main
if __name__ == '__main__':
    app.run(debug=True)