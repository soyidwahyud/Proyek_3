from flask import jsonify, request
from flask import Blueprint, abort
from flask_jwt_extended import create_access_token
from ..run import db, jwt, bcrypt

user = Blueprint('user',__name__)

# READ
@user.route('/user', methods=['GET'])
def get_all_user():
    cur = db.connection.cursor()
    cur.execute("SELECT id_user, username_user, email_user, password_user, nama_user, jabatan, alamat, telp "
                "FROM tbl_user as u "
                "INNER JOIN tbl_jabatan as j "
                "ON u.id_jabatan = j.id_jabatan ")

    db.connection.commit()

    rv = cur.fetchall()
    return jsonify(rv)

# READ id jabatan
@user.route('/user/jabatan', methods=['GET'])
def get_id_jabatan():
    cur = db.connection.cursor()
    cur.execute("SELECT id_jabatan, jabatan FROM tbl_jabatan ")

    db.connection.commit()

    rv = cur.fetchall()
    return jsonify(rv)

# CREATE
@user.route('/user/register', methods=['POST'])
def add_user():
    cur = db.connection.cursor()

    username_user = request.get_json()['username_user']
    email_user = request.get_json()['email_user']
    password_user = bcrypt.generate_password_hash(request.get_json()['password_user']).decode('utf-8')
    nama_user = request.get_json()['nama_user']
    id_jabatan = request.get_json()['id_jabatan']
    alamat = request.get_json()['alamat']
    telp = request.get_json()['telp']

    cur.execute("INSERT INTO tbl_user (id_user,username_user,email_user,password_user,nama_user, id_jabatan, alamat, telp) "
                " SELECT MAX(id_admin)+1, "
                "'" + str(username_user) + "', "
                "'" + str(email_user) + "', "
                "'" + str(password_user) + "', "
                "'" + str(nama_user) + "', "
                "'" + str(id_jabatan) + "', "
                "'" + str(alamat) + "', "
                "'" + str(telp) + "' " +
                "FROM tbl_user")

    db.connection.commit()
    result = \
        {

            'username_user'   : username_user,
            'email_user': email_user,
            'password_user'   : password_user,
            'nama_user'       : nama_user,
            'id_jabatan'      : id_jabatan,
            'alamat'          : alamat,
            'telp'            : telp
        }

    return jsonify({"result" : result})

# Login
@user.route('/user/login', methods=['POST'])
def login():
    cur = db.connection.cursor()
    username_user = request.get_json()['username_user']
    password_user = request.get_json()['password_user']
    result = ""

    cur.execute("SELECT * FROM tbl_user where username_user = '" + str(username_user) + "'")
    rv = cur.fetchone()

    if bcrypt.check_password_hash(rv['password_user'], password_user):
        access_token = create_access_token(
            identity={'id_user': rv['id_user'],
                      'username_user': rv['username_user'],
                      'email_user': rv['email_user'],
                      'nama_user': rv['nama_user'],
                      'id_jabatan' : rv['id_jabatan'],
                      'alamat' : rv['alamat'],
                      'telp' : rv['telp']})
        result = jsonify({"result": access_token})
        # result = jsonify({"result": "SUKSES ANJING"})
    else:
        result = jsonify({"error": "Invalid username and password"})

    return result

# Update
@user.route('/user/<id_user>', methods=['PUT'])
def update_user(id_user):
    cur = db.connection.cursor()
    username_user = request.get_json()['username_user']
    email_user = request.get_json()['email_user']
    # password_user = request.get_json()['password_user']
    password_user = bcrypt.generate_password_hash(request.get_json()['password_user']).decode('utf-8')
    nama_user = request.get_json()['nama_user']
    id_jabatan = request.get_json()['id_jabatan']
    alamat = request.get_json()['alamat']
    telp = request.get_json()['telp']

    cur.execute("UPDATE tbl_user SET username_user = '" + str(username_user) + "',"
                + "email_user = '" + str(email_user) + "',"
                + "password_user = '" + str(password_user) + "',"
                + "nama_user  ='" + str(nama_user) + "',"
                + "id_jabatan ='" + str(id_jabatan) + "',"
                + "alamat     ='" + str(alamat) + "',"
                + "telp       ='" + str(telp)
                + "'WHERE id_user=" + id_user)

    db.connection.commit()
    result = \
        {
            'id_user': id_user,
            'username_user': username_user,
            'email_user' : email_user,
            'password_user': password_user,
            'nama_user': nama_user,
            'id_jabatan': id_jabatan,
            'alamat': alamat,
            'telp': telp
        }

    return jsonify({"result": result})

# DELETE
@user.route('/user/<id_user>', methods=['DELETE'])
def delete_user(id_user):
    cur = db.connection.cursor()
    response = cur.execute("DELETE FROM tbl_user where id_user=" + id_user)
    db.connection.commit()

    if response> 0:
        result = {'message' : 'record deleted'}
    else:
        result = {'message' : 'no record found'}
    return jsonify({"result": result})