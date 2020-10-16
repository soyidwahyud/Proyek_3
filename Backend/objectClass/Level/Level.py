from flask import Flask, render_template
from flask import jsonify, request
from flask import Blueprint, abort
from flask_mysqldb import MySQL
from flask_cors import CORS
from ..Config import Config as cfg
from ..run import db

level = Blueprint('level',__name__)

# READ
@level.route('/level', methods=['GET'])
def get_all_level():
    cur = db.connection.cursor()
    cur.execute("SELECT * FROM tbl_level")
    rv = cur.fetchall()
    return jsonify(rv)

# CREATE
@level.route('/level', methods=['POST'])
def add_level():
    cur = db.connection.cursor()
    id_level = request.get_json()['id_level']
    level = request.get_json()['level']

    cur.execute\
        ("INSERT INTO tbl_level (id_level, level) VALUES('"
         + str(id_level) + "','" + str(level) +"')")

    db.connection.commit()
    result = \
        {
            'id_level': id_level,
            'level': level
        }

    return jsonify({"result":result})

# Update
@level.route('/level/<id_level>', methods=['PUT'])
def update_level(id_level):
    cur = db.connection.cursor()

    level = request.get_json()['level']

    cur.execute("UPDATE tbl_level SET level = '"+ str(level) + "'"
                             + "WHERE id_level=" + id_level)

    db.connection.commit()

    result = \
        {
            'id_level': id_level,
            'level': level,
        }

    return jsonify({"result":result})

# DELETE
@level.route('/level/<id_level>', methods=['DELETE'])
def delete_level(id_level):
    cur = db.connection.cursor()
    response = cur.execute("DELETE FROM tbl_level where id_level=" + id_level)
    db.connection.commit()

    if response> 0:
        result = {'message' : 'record deleted'}
    else:
        result = {'message' : 'no record found'}
    return jsonify({"result": result})

# if __name__ == '__main__':
#     level.run()
