from flask import jsonify, request
from flask import Blueprint, abort
from werkzeug.utils import secure_filename
from ..run import db

buku = Blueprint('buku',__name__)


# READ
@buku.route('/buku', methods=['GET'])
def get_all_buku():
    cur = db.connection.cursor()
    cur.execute("SELECT id_buku, kode_buku, nama_buku, jenis_buku, nama_penerbit, penulis, gambar, userfile  "
                "FROM tbl_buku as b "
                "INNER JOIN tbl_jenis as j "
                "on b.id_jenis = j.id_jenis "
                "INNER JOIN tbl_penerbit as p1 "
                "on b.id_penerbit = p1.id_penerbit " 
                "INNER JOIN tbl_penulis as p2 "
                "on b.id_penulis = p2.id_penulis ")

    db.connection.commit()

    rv = cur.fetchall()
    return jsonify(rv)

# READ Specific book
@buku.route('/buku/<id_buku>', methods=['GET'])
def get_spesific_buku(id_buku):
    cur = db.connection.cursor()
    cur.execute("SELECT id_buku, kode_buku, nama_buku, jenis_buku, nama_penerbit, penulis, gambar, userfile  "
                "FROM tbl_buku as b "
                "INNER JOIN tbl_jenis as j "
                "on b.id_jenis = j.id_jenis "
                "INNER JOIN tbl_penerbit as p1 "
                "on b.id_penerbit = p1.id_penerbit " 
                "INNER JOIN tbl_penulis as p2 "
                "on b.id_penulis = p2.id_penulis "
                "WHERE id_buku="+id_buku)

    db.connection.commit()

    rv = cur.fetchall()
    return jsonify(rv)

# READ id jenis buku
@buku.route('/buku/jenis', methods=['GET'])
def get_id_jenis():
    cur = db.connection.cursor()
    cur.execute("SELECT id_jenis, jenis_buku FROM tbl_jenis")

    db.connection.commit()

    rv = cur.fetchall()
    return jsonify(rv)

# READ id penulis
@buku.route('/buku/penulis', methods=['GET'])
def get_id_penulis():
    cur = db.connection.cursor()
    cur.execute("SELECT id_penulis, penulis FROM tbl_penulis")

    db.connection.commit()

    rv = cur.fetchall()
    return jsonify(rv)

# READ id penerbit
@buku.route('/buku/penerbit', methods=['GET'])
def get_id_penerbit():
    cur = db.connection.cursor()
    cur.execute("SELECT id_penerbit, nama_penerbit FROM tbl_penerbit")

    db.connection.commit()

    rv = cur.fetchall()
    return jsonify(rv)

# CREATE
@buku.route('/buku', methods=['GET','POST'])
def add_buku():
    if request.method == 'POST':
        cur = db.connection.cursor()

        kode_buku = request.get_json()['kode_buku']
        nama_buku = request.get_json()['nama_buku']
        id_jenis = request.get_json()['id_jenis']
        id_penerbit = request.get_json()['id_penerbit']
        id_penulis = request.get_json()['id_penulis']

        #gambar
        gambar = request.get_json()['gambar']
        # gambar = request.files()['gambar']
        # gambar.save(secure_filename(gambar.filename))
        # newGambar = add_user(gambar.filename)

        #file
        userfile = request.get_json()['userfile']
        # userfile = request.files()['userfile']
        # userfile.save(secure_filename(userfile.filename))

        cur.execute(
            "INSERT INTO tbl_buku (id_buku,kode_buku,nama_buku,id_jenis,id_penerbit, id_penulis, gambar, userfile) "
            " SELECT MAX(id_buku)+1, "
            "'" + str(kode_buku) + "', "
            "'" + str(nama_buku) + "', "
            "'" + str(id_jenis) + "', "
            "'" + str(id_penerbit) + "', "
            "'" + str(id_penulis) + "', "
            "'" + str(gambar) + "', "
            "'" + str(userfile) + "' " +
            "FROM tbl_buku")

        db.connection.commit()
        result = \
            {

                'kode_buku': kode_buku,
                'nama_buku'   : nama_buku,
                'id_jenis'   : id_jenis,
                'id_penerbit'       : id_penerbit,
                'id_penulis'        : id_penulis,
                'gambar'      : gambar,
                'userfile'          : userfile
            }

        return jsonify({"result" : result})

# Update
@buku.route('/buku/<id_buku>', methods=['PUT'])
def update_buku(id_buku):
    cur = db.connection.cursor()
    kode_buku = request.get_json()['kode_buku']
    nama_buku = request.get_json()['nama_buku']
    id_jenis = request.get_json()['id_jenis']
    id_penerbit = request.get_json()['id_penerbit']
    id_penulis = request.get_json()['id_penulis']
    gambar = request.get_json()['gambar']
    userfile = request.get_json()['userfile']

    cur.execute("UPDATE tbl_buku SET kode_buku = '" + str(kode_buku) + "',"
                + "nama_buku  ='" + str(nama_buku) + "',"
                + "id_jenis  ='" + str(id_jenis) + "',"
                + "id_penerbit   ='" + str(id_penerbit) + "',"
                + "id_penulis ='" + str(id_penulis) + "',"
                + "gambar     ='" + str(gambar) + "',"
                + "userfile       ='" + str(userfile)
                + "'WHERE id_buku=" + id_buku)

    db.connection.commit()
    result = \
        {
            'id_buku'         : id_buku,
            'kode_buku': kode_buku,
            'nama_buku'   : nama_buku,
            'id_jenis'   : id_jenis,
            'id_penerbit'       : id_penerbit,
            'id_penulis'        : id_penulis,
            'gambar'      : gambar,
            'userfile'          : userfile
        }

    return jsonify({"result": result})

# DELETE
@buku.route('/buku/<id_buku>', methods=['DELETE'])
def delete_buku(id_buku):
    cur = db.connection.cursor()
    response = cur.execute("DELETE FROM tbl_buku where id_buku=" + id_buku)
    db.connection.commit()

    if response> 0:
        result = {'message' : 'record deleted'}
    else:
        result = {'message' : 'no record found'}
    return jsonify({"result": result})
