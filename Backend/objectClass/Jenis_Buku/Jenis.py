from flask import jsonify, request
from flask import Blueprint, abort
from ..run import db

jenis = Blueprint('jenis',__name__)

# READ
@jenis.route('/jenis', methods=['GET'])
def get_all_jenis():
    cur = db.connection.cursor()
    cur.execute("SELECT * FROM tbl_jenis")
    rv = cur.fetchall()
    return jsonify(rv)

# CREATE
@jenis.route('/jenis', methods=['POST'])
def add_jenis():
    cur = db.connection.cursor()

    jenis_buku = request.get_json()['jenis_buku']

    cur.execute(
        "INSERT INTO tbl_jenis (id_jenis,jenis_buku) "
        " SELECT MAX(id_jenis)+1, "
        "'" + str(jenis_buku) + "' " +
        "FROM tbl_jenis")
    db.connection.commit()
    result = \
        {

            'jenis_buku'   : jenis_buku
        }

    return jsonify({"result" : result})

# Update
@jenis.route('/jenis/<id_jenis>', methods=['PUT'])
def update_jenis(id_jenis):
    cur = db.connection.cursor()

    jenis_buku = request.get_json()['jenis_buku']

    cur.execute("UPDATE tbl_jenis SET jenis_buku = '"+ str(jenis_buku) + "'"
                             + "WHERE id_jenis =" + id_jenis)

    db.connection.commit()

    result = \
        {
            'id_jenis': id_jenis,
            'jenis_buku': jenis_buku,
        }

    return jsonify({"result":result})

# DELETE
@jenis.route('/jenis/<id_jenis>', methods=['DELETE'])
def delete_jenis(id_jenis):
    cur = db.connection.cursor()
    response = cur.execute("DELETE FROM tbl_jenis where id_jenis=" + id_jenis)
    db.connection.commit()

    if response> 0:
        result = {'message' : 'record deleted'}
    else:
        result = {'message' : 'no record found'}
    return jsonify({"result": result})