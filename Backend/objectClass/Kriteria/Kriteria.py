from flask import Flask, render_template
from flask import jsonify, request
from flask import Blueprint, abort
from flask_mysqldb import MySQL
from flask_cors import CORS
from ..Config import Config as cfg
from ..run import db

kriteria = Blueprint('kriteria',__name__)

# READ
@kriteria.route('/kriteria', methods=['GET'])
def get_all_kriteria():
    cur = db.connection.cursor()
    cur.execute("SELECT id_nilai_buku, nama_buku, kode, nilai_buku "
                "FROM tbl_nilai_buku as nb "
                "INNER JOIN tbl_buku as b "
                "ON nb.id_buku = b.id_buku "
                "INNER JOIN tbl_kriteria as k  "
                "ON nb.id_kriteria = k.id_kriteria ")
    
    rv = cur.fetchall()
    return jsonify(rv)

# CREATE
@kriteria.route('/kriteria', methods=['POST'])
def add_kriteria():
    cur = db.connection.cursor()

    kode = request.get_json()['kode']
    nama_kriteria = request.get_json()['nama_kriteria']
    bobot = request.get_json()['bobot']
    tipe_kriteria = request.get_json()['tipe_kriteria']

    cur.execute(
        "INSERT INTO tbl_kriteria (id_kriteria,kode,nama_kriteria,bobot,tipe_kriteria) "
        " SELECT MAX(id_kriteria)+1, "
        "'" + str(kode) + "', "
        "'" + str(nama_kriteria) + "', "
        "'" + str(bobot) + "', "
        "'" + str(tipe_kriteria) + "' " +
        "FROM tbl_kriteria")

    db.connection.commit()
    result = \
        {

            'kode': kode,
            'nama_kriteria' : nama_kriteria,
            'bobot' : bobot,
            'tipe_kriteria' : tipe_kriteria
        }

    return jsonify({"result":result})

# Update
@kriteria.route('/kriteria/<id_kriteria>', methods=['PUT'])
def update_kriteria(id_kriteria):
    cur = db.connection.cursor()

    kode = request.get_json()['kode']
    nama_kriteria = request.get_json()['nama_kriteria']
    bobot = request.get_json()['bobot']
    tipe_kriteria = request.get_json()['tipe_kriteria']

    cur.execute("UPDATE tbl_kriteria SET kode = '"+ str(kode) + "',"
                                          "nama_kriteria ='" + str(nama_kriteria) + "',"
                                          "bobot         ='" + str(bobot) + "',"
                                          "tipe_kriteria ='" + str(tipe_kriteria) + "'"
                                          + "WHERE id_kriteria=" + id_kriteria)

    db.connection.commit()

    result = \
        {
            'id_kriteria': id_kriteria,
            'kode': kode,
            'nama_kriteria' : nama_kriteria,
            'bobot' : bobot,
            'tipe_kriteria' : tipe_kriteria,
        }

    return jsonify({"result":result})

# DELETE
@kriteria.route('/kriteria/<id_kriteria>', methods=['DELETE'])
def delete_kriteria(id_kriteria):
    cur = db.connection.cursor()
    response = cur.execute("DELETE FROM tbl_kriteria where id_kriteria=" + id_kriteria)
    db.connection.commit()

    if response> 0:
        result = {'message' : 'record deleted'}
    else:
        result = {'message' : 'no record found'}
    return jsonify({"result": result})