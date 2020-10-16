from flask import jsonify, request
from flask import Blueprint, abort
from ..run import db

jabatan = Blueprint('jabatan',__name__)

# READ
@jabatan.route('/jabatan', methods=['GET'])
def get_all_jabatan():
    cur = db.connection.cursor()
    cur.execute("SELECT * FROM tbl_jabatan")
    rv = cur.fetchall()
    return jsonify(rv)

# CREATE
@jabatan.route('/jabatan', methods=['POST'])
def add_jabatan():
    cur = db.connection.cursor()

    jabatan = request.get_json()['jabatan']

    cur.execute(
        "INSERT INTO tbl_jabatan (id_jabatan,jabatan) "
        " SELECT MAX(id_jabatan)+1, "
        "'" + str(jabatan) + "' " +
        "FROM tbl_jabatan")

    db.connection.commit()
    result = \
        {

            'jabatan'   : jabatan
        }

    return jsonify({"result" : result})

# Update
@jabatan.route('/jabatan/<id_jabatan>', methods=['PUT'])
def update_jabatan(id_jabatan):
    cur = db.connection.cursor()

    jabatan = request.get_json()['jabatan']

    cur.execute("UPDATE tbl_jabatan SET jabatan = '"+ str(jabatan) + "'"
                             + "WHERE id_jabatan=" + id_jabatan)

    db.connection.commit()

    result = \
        {
            'id_jabatan': id_jabatan,
            'jabatan': jabatan,
        }

    return jsonify({"result":result})

# DELETE
@jabatan.route('/jabatan/<id_jabatan>', methods=['DELETE'])
def delete_jabatan(id_jabatan):
    cur = db.connection.cursor()
    response = cur.execute("DELETE FROM tbl_jabatan where id_jabatan=" + id_jabatan)
    db.connection.commit()

    if response> 0:
        result = {'message' : 'record deleted'}
    else:
        result = {'message' : 'no record found'}
    return jsonify({"result": result})
