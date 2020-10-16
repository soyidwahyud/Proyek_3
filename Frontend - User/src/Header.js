import React from 'react';
import logo from './assets/img/Logo.png';
import help from './assets/img/Help.png';
import login from './assets/img/Login.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
  return (
    <div className="App-header">
      <div className="container">
        <div className="row">
          <div className="col-sm-1">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-sm-9">
            <div className="perpustakaan">
              <b>PERPUSTAKAAN</b>
            </div>
            <div className="Perusahaan">
              PT. Waskita Karya(PERSERO), Tbk
            </div>
          </div>
          <div className="col-sm info">
            <img src={help} className="Help-logo float-right" alt="logo" />
            Help
          </div>
          <div className="col-sm info">
            <img src={login} className="Login-logo float-right" alt="logo" />
            <a href="login" className="sign-in">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
