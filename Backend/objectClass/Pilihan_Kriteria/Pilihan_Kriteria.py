from flask import Flask, render_template
from flask import jsonify, request
from flask import Blueprint, abort
from flask_mysqldb import MySQL
from flask_cors import CORS
from ..Config import Config as cfg
from ..run import db

pil_kriteria = Blueprint('pil_kriteria',__name__)

# READ
@pil_kriteria.route('/pil_kriteria', methods=['GET'])
def get_all_kriteria():
    cur = db.connection.cursor()
    cur.execute("SELECT * FROM tbl_pil_kriteria")
    rv = cur.fetchall()
    return jsonify(rv)

# CREATE
@pil_kriteria.route('/pil_kriteria', methods=['POST'])
def add_kriteria():
    cur = db.connection.cursor()

    id_pil_kriteria = request.get_json()['id_pil_kriteria']
    id_kriteria = request.get_json()['id_kriteria']
    nama_pil_kriteria = request.get_json()['nama_kriteria']
    nilai = request.get_json()['nilai']
    urutan_order = request.get_json()['urutan_order']

    cur.execute\
        ("INSERT INTO tbl_pilihan_kriteria (id_pil_kriteria, id_kriteria, nama_pil_kriteria, nilai, urutan_order) VALUES('"
            + str(id_pil_kriteria) + "',"
        "'" + str(id_kriteria) + "',"
        "'" + str(nama_pil_kriteria) +"',"
        "'" + str(nilai) + "',"
        "'" + str(urutan_order) +"')")

    db.connection.commit()
    result = \
        {
            'id_pil_kriteria' : id_pil_kriteria,
            'id_kriteria': id_kriteria,
            'nama_pil_kriteria' : nama_pil_kriteria,
            'nilai' : nilai,
            'urutan_order' : urutan_order
        }

    return jsonify({"result":result})

# Update
@pil_kriteria.route('/pil_kriteria/<id_pil_kriteria>', methods=['PUT'])
def update_pil_kriteria(id_pil_kriteria):
    cur = db.connection.cursor()

    id_kriteria = request.get_json()['id_kriteria']
    nama_pil_kriteria = request.get_json()['nama_kriteria']
    nilai = request.get_json()['nilai']
    urutan_order = request.get_json()['urutan_order']

    cur.execute("UPDATE tbl_pilihan_kriteria SET id_kriteria = '"+ str(id_kriteria) + "',"
                                          "nama_pil_kriteria ='" + str(nama_pil_kriteria) + "',"
                                          "nilai ='" + str(nilai) + "',"                                          
                                          "urutan_order ='" + str(urutan_order) + "'"
                                          + "WHERE id_pil_kriteria=" + id_pil_kriteria)

    db.connection.commit()

    result = \
        {
            'id_pil_kriteria': id_pil_kriteria,
            'id_kriteria': id_kriteria,
            'nama_pil_kriteria': nama_pil_kriteria,
            'nilai': nilai,
            'urutan_order': urutan_order
        }

    return jsonify({"result":result})

# DELETE
@pil_kriteria.route('/pil_kriteria/<id_pil_kriteria>', methods=['DELETE'])
def delete_pil_kriteria(id_pil_kriteria):
    cur = db.connection.cursor()
    response = cur.execute("DELETE FROM tbl_pilihan_kriteria where id_pil_kriteria=" + id_pil_kriteria)
    db.connection.commit()

    if response> 0:
        result = {'message' : 'record deleted'}
    else:
        result = {'message' : 'no record found'}
    return jsonify({"result": result})