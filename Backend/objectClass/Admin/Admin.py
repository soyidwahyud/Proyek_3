from flask import Flask, render_template, Blueprint
from flask import jsonify, request
from flask_jwt_extended import create_access_token
from ..run import db, jwt, bcrypt

admin = Blueprint('admin',__name__)

# READ
@admin.route('/admin', methods=['GET'])
def get_all_admin():
    cur = db.connection.cursor()
    cur.execute("SELECT * FROM tbl_admin")
    rv = cur.fetchall()
    return jsonify(rv)

# CREATE
@admin.route('/admin/register', methods=['POST'])
def add_admin():
    cur = db.connection.cursor()

    username_admin = request.get_json()['username_admin']
    email_admin = request.get_json()['email_admin']
    password_admin = bcrypt.generate_password_hash(request.get_json()['password_admin']).decode('utf-8')
    nama_admin = request.get_json()['nama_admin']

    cur.execute("INSERT INTO tbl_admin (id_admin,username_admin,email_admin,password_admin,nama_admin) "
                " SELECT MAX(id_admin)+1, "
                "'" + str(username_admin) + "', "
                "'" + str(email_admin) + "', "
                "'" + str(password_admin) + "', "
                "'" + str(nama_admin) + "' " +
                "FROM tbl_admin")

    db.connection.commit()
    result = \
        {
            'username_admin': username_admin,
            'email_admin' : email_admin,
            'password_admin': password_admin,
            'nama_admin': nama_admin
        }

    return jsonify({"result":result})

# Login
@admin.route('/admin/login', methods=['POST'])
def login():
    cur = db.connection.cursor()
    username_admin = request.get_json()['username_admin']
    password_admin = request.get_json()['password_admin']
    result = ""

    cur.execute("SELECT * FROM tbl_admin where username_admin = '" + str(username_admin) + "'")
    rv = cur.fetchone()

    # if bcrypt.check_password_hash(rv['password_admin'], password_admin):
    #     access_token = create_access_token(
    #         identity={'id_admin': rv['id_admin'],
    #                   'username_admin': rv['username_admin'],
    #                   'email_admin': rv['email_admin'],
    #                   'nama_admin': rv['nama_admin']})
    #     result = jsonify({"result": access_token})
        # result = jsonify({"result": "SUKSES ANJING"})
    if bcrypt.check_password_hash(rv['password_admin'], password_admin):

        result = jsonify({"result": "SUKSES!!"})
    else:
        result = jsonify({"error": "Invalid username and password"})

    return result

# Update
@admin.route('/admin/<id_admin>', methods=['PUT'])
def update_admin(id_admin):
    cur = db.connection.cursor()
    # id_buku = request.get_json()['id_buku']
    username_admin = request.get_json()['username_admin']
    password_admin = bcrypt.generate_password_hash(request.get_json()['password_admin']).decode('utf-8')
    # password_admin = request.get_json()['password_admin']
    nama_admin = request.get_json()['nama_admin']

    cur.execute("UPDATE tbl_admin SET username_admin = '"+ str(username_admin) + "',"
                             + "password_admin = MD5('" + str(password_admin) + "'),"
                             + "nama_admin ='" + str(nama_admin)
                             + "'WHERE id_admin=" + id_admin)

    db.connection.commit()

    result = \
        {
            'id_admin': id_admin,
            'username_admin': username_admin,
            'password_admin': password_admin,
            'nama_admin': nama_admin
        }

    return jsonify({"result":result})

# DELETE
@admin.route('/admin/<id_admin>', methods=['DELETE'])
def delete_admin(id_admin):
    cur = db.connection.cursor()
    response = cur.execute("DELETE FROM tbl_admin where id_admin=" + id_admin)
    db.connection.commit()

    if response> 0:
        result = {'message' : 'record deleted'}
    else:
        result = {'message' : 'no record found'}
    return jsonify({"result": result})

# if __name__ == '__main__':
#     app.run()
