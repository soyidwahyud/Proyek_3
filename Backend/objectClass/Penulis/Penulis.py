from flask import jsonify, request
from flask import Blueprint, abort
from ..run import db

penulis = Blueprint('penulis',__name__)

# READ
@penulis.route('/penulis', methods=['GET'])
def get_all_penulis():
    cur = db.connection.cursor()
    cur.execute("SELECT * FROM tbl_penulis")
    rv = cur.fetchall()
    return jsonify(rv)

# CREATE
@penulis.route('/penulis', methods=['POST'])
def add_penulis():
    cur = db.connection.cursor()

    penulis = request.get_json()['penulis']

    cur.execute(
        "INSERT INTO tbl_penulis (id_penulis,penulis) "
        " SELECT MAX(id_penulis)+1, "
        "'" + str(penulis) + "' " +
        "FROM tbl_penulis")

    db.connection.commit()
    result = \
        {

            'penulis'   : penulis
        }

    return jsonify({"result" : result})

# Update
@penulis.route('/penulis/<id_penulis>', methods=['PUT'])
def update_penulis(id_penulis):
    cur = db.connection.cursor()

    penulis = request.get_json()['penulis']

    cur.execute("UPDATE tbl_penulis SET penulis = '"+ str(penulis) + "'"
                             + "WHERE id_penulis =" + id_penulis)

    db.connection.commit()

    result = \
        {
            'id_penulis': id_penulis,
            'penulis': penulis,
        }

    return jsonify({"result":result})

# DELETE
@penulis.route('/penulis/<id_penulis>', methods=['DELETE'])
def delete_penulis(id_penulis):
    cur = db.connection.cursor()
    response = cur.execute("DELETE FROM tbl_penulis where id_penulis=" + id_penulis)
    db.connection.commit()

    if response> 0:
        result = {'message' : 'record deleted'}
    else:
        result = {'message' : 'no record found'}
    return jsonify({"result": result})