from flask import Flask, render_template
from flask import jsonify, request
from flask import Blueprint, abort
from flask_mysqldb import MySQL
from flask_cors import CORS
from ..Config import Config as cfg
from ..run import db

nilai_buku = Blueprint('nilai_buku',__name__)

# READ
@nilai_buku.route('/nilai_buku', methods=['GET'])
def get_all_nilai_buku():
    cur = db.connection.cursor()
    cur.execute("SELECT id_nilai_buku, kode_buku, nama_buku, kode, nama_kriteria, bobot, nilai_buku "
                "FROM tbl_nilai_buku as nb "
                "INNER JOIN tbl_buku as b "
                "ON nb.id_buku = b.id_buku "
                "INNER JOIN tbl_kriteria as k "
                "ON nb.id_kriteria = k.id_kriteria")
    rv = cur.fetchall()
    return jsonify(rv)

# READ id buku
@nilai_buku.route('/nilai_buku/buku', methods=['GET'])
def get_id_penulis():
    cur = db.connection.cursor()
    cur.execute("SELECT id_buku, nama_buku FROM tbl_buku")

    db.connection.commit()

    rv = cur.fetchall()
    return jsonify(rv)

# READ id kriteria
@nilai_buku.route('/nilai_buku/kriteria', methods=['GET'])
def get_id_kriteria():
    cur = db.connection.cursor()
    cur.execute("SELECT id_kriteria, kode FROM tbl_kriteria")

    db.connection.commit()

    rv = cur.fetchall()
    return jsonify(rv)

# CREATE
@nilai_buku.route('/nilai_buku', methods=['POST'])
def add_nilai_buku():
    cur = db.connection.cursor()

    id_buku = request.get_json()['id_buku']
    id_kriteria = request.get_json()['id_kriteria']
    nilai_buku = request.get_json()['nilai_buku']

    cur.execute(
        "INSERT INTO tbl_nilai_buku (id_nilai_buku,id_buku,id_kriteria,nilai_buku) "
        " SELECT MAX(id_nilai_buku)+1, "
        "'" + str(id_buku) + "', "
        "'" + str(id_kriteria) + "', "
        "'" + str(nilai_buku) + "' " +
        "FROM tbl_nilai_buku")

    db.connection.commit()
    result = \
        {

            'id_buku': id_buku,
            'id_kriteria' : id_kriteria,
            'nilai_buku' : nilai_buku
        }

    return jsonify({"result":result})

# Update
@nilai_buku.route('/nilai_buku/<id_nilai_buku>', methods=['PUT'])
def update_nilai_buku(id_nilai_buku):
    cur = db.connection.cursor()

    id_buku = request.get_json()['id_buku']
    id_kriteria = request.get_json()['id_kriteria']
    nilai_buku = request.get_json()['nilai_buku']

    cur.execute("UPDATE tbl_nilai_buku SET id_buku = '"+ str(id_buku) + "',"
                                          "id_kriteria ='" + str(id_kriteria) + "',"
                                          "nilai_buku ='" + str(nilai_buku) + "'"
                                          + "WHERE id_nilai_buku=" + id_nilai_buku)

    db.connection.commit()

    result = \
        {
            'id_nilai_buku': id_nilai_buku,
            'id_buku': id_buku,
            'id_kriteria' : id_kriteria,
            'nilai_buku' : nilai_buku
        }

    return jsonify({"result":result})

# DELETE
@nilai_buku.route('/nilai_buku/<id_nilai_buku>', methods=['DELETE'])
def delete_nilai_buku(id_nilai_buku):
    cur = db.connection.cursor()
    response = cur.execute("DELETE FROM tbl_nilai_buku where id_nilai_buku=" + id_nilai_buku)
    db.connection.commit()

    if response> 0:
        result = {'message' : 'record deleted'}
    else:
        result = {'message' : 'no record found'}
    return jsonify({"result": result})