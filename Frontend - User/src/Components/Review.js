import React from 'react';
import '../review.css';


const Review = (props) => {
	return(
        <div className="buku-background">
          <div className="review-page">
            <div className="review-title row">
                <div className="review-judul">Penilaian buku {props.Judul}</div>
            </div>
            <div className="review-buku">
                <img className="review-cover col-sm-4" src={props.Gambar} alt="gambar"></img>
                <div className="review-info col-sm-4">
                    <div className="review-kategori1">Jumlah Halaman Pada Buku </div>
                    <div className="review-kategori2">Sasaran Buku Jelas dan Spesifik</div>
                    <div className="review-kategori3">Penjelasan Tujuan Penulisan Buku</div>
                    <div className="review-kategori4">Hal Baru pada Buku tersebut</div>
                    <div className="review-kategori5">Informasi Fiktif pada Buku</div>
                </div>
                <div className="review-info col-sm-4">
                    <div  className="review-grid">
                        <select name="review-input1" id="review-input1">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                        </select>
                    </div>
                    <div  className="review-grid">
                        <select name="review-input2" id="review-input2">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                        </select>
                    </div>
                    <div  className="review-grid">
                        <select name="review-input3" id="review-input3">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                        </select>
                    </div>
                    <div  className="review-grid">
                        <select name="review-input4" id="review-input4">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                        </select>
                    </div>
                    <div className="review-grid">
                        <select name="review-input5" id="review-input5">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="review-rating">*Rating 1 - 10</div>
            <div className="review-button row">
                <a href="" className="review-submit btn"><b>Submit</b></a>
            </div>
          </div>
        </div>
		)
}



export default Review;