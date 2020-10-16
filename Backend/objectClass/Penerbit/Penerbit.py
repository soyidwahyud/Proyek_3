from flask import jsonify, request
from flask import Blueprint, abort
from ..run import db

penerbit = Blueprint('penerbit',__name__)

# READ
@penerbit.route('/penerbit', methods=['GET'])
def get_all_penerbit():
    cur = db.connection.cursor()
    cur.execute("SELECT * FROM tbl_penerbit")
    rv = cur.fetchall()
    return jsonify(rv)

# CREATE
@penerbit.route('/penerbit', methods=['POST'])
def add_penerbit():
    cur = db.connection.cursor()

    nama_penerbit = request.get_json()['nama_penerbit']

    cur.execute(
        "INSERT INTO tbl_penerbit (id_penerbit,nama_penerbit) "
        " SELECT MAX(id_penerbit)+1, "
        "'" + str(nama_penerbit) + "' " +
        "FROM tbl_penerbit")

    db.connection.commit()
    result = \
        {

            'nama_penerbit'   : nama_penerbit
        }

    return jsonify({"result" : result})

# Update
@penerbit.route('/penerbit/<id_penerbit>', methods=['PUT'])
def update_penerbit(id_penerbit):
    cur = db.connection.cursor()

    nama_penerbit = request.get_json()['nama_penerbit']

    cur.execute("UPDATE tbl_penerbit SET nama_penerbit = '"+ str(nama_penerbit) + "'"
                             + "WHERE id_penerbit =" + id_penerbit)

    db.connection.commit()

    result = \
        {
            'id_penerbit': id_penerbit,
            'nama_penerbit': nama_penerbit,
        }

    return jsonify({"result":result})

# DELETE
@penerbit.route('/penerbit/<id_penerbit>', methods=['DELETE'])
def delete_penerbit(id_penerbit):
    cur = db.connection.cursor()
    response = cur.execute("DELETE FROM tbl_penerbit where id_penerbit=" + id_penerbit)
    db.connection.commit()

    if response> 0:
        result = {'message' : 'record deleted'}
    else:
        result = {'message' : 'no record found'}
    return jsonify({"result": result})