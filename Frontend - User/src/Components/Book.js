import React from 'react';
import '../style.css';


const Book = (props) => {
	return(
        <div className="buku-background col-sm-4">
          <div className="buku-page">
            <img className="buku-cover" src={props.Gambar} alt="gambar"></img>
            <div className="buku-info">
              <div className="buku-judul"><b>{props.Judul}</b></div>
              <div className="buku-kategori">{props.Kategori}</div>
              <div className="buku-penerbit">{props.Penerbit}</div>
              <div className="buku-penulis">{props.Penulis}</div>
            </div>
            <div className="buku-button">
            <a href={props.LinkReview} className="buku-review btn btn-primary btn-warning">Review</a>
            <a href={props.Link} target="_blank" className="buku-read btn">Read</a>
            </div>
          </div>
        </div>
		)
}



export default Book;
