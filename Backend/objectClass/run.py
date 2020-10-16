from flask import Flask, render_template
from flask import jsonify, request
from flask_mysqldb import MySQL
from flask_cors import CORS
from flask_mysqldb import MySQL
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token
from flask_jwt_extended import JWTManager

db = MySQL()
bcrypt = Bcrypt()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    cors = CORS(app, resources=r'/*')

    app.config['MYSQL_HOST'] = 'localhost'
    app.config['MYSQL_USER'] = 'root'
    app.config['MYSQL_PASSWORD'] = ''
    app.config['MYSQL_DB'] = 'elibrary_waskita'
    app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
    app.config["UPLOADS"] = 'D:\Kuliah\TI-4E\Proyek 3'
    app.config["JWT_SECRET_KEY"] = 'secret'

    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)

    from objectClass.Admin.Admin import admin

    from objectClass.Level.Level import level
    from objectClass.Jabatan.Jabatan import jabatan
    from objectClass.User.User import user

    from objectClass.Jenis_Buku.Jenis import jenis
    from objectClass.Penulis.Penulis import penulis
    from objectClass.Penerbit.Penerbit import penerbit
    from objectClass.Buku.Buku import buku
    from objectClass.Nilai_Buku.Nilai_Buku import nilai_buku
    from objectClass.Kriteria.Kriteria import kriteria
    from objectClass.Pilihan_Kriteria.Pilihan_Kriteria import pil_kriteria

    app.register_blueprint(admin)

    app.register_blueprint(level)
    app.register_blueprint(jabatan)
    app.register_blueprint(user)

    app.register_blueprint(jenis)
    app.register_blueprint(penulis)
    app.register_blueprint(penerbit)
    app.register_blueprint(buku)
    app.register_blueprint(nilai_buku)
    app.register_blueprint(kriteria)
    app.register_blueprint(pil_kriteria)

    return app