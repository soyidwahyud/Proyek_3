import React, {Component} from "react";
import Book from "../Components/Book";
import "./PostCollection.css"

class PostCollection extends Component{
    state = {
        ListGadget:[]
    }

    ambilDataDariServerAPI = () =>{
        fetch('http://localhost:3001/gadgetList')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    ListGadget: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    getDataProduk = (data) => {
        fetch(`http://localhost:3001/gadgetList/${data}`, { method: "GET" })
            .then(response => response.json())
            .then(res => {
                var Produk = { ...this.state.insertKeranjang };
                Produk["id"] = res["id"];
                Produk["Judul"] = res["Judul"];
                Produk["Kategori"] = res["Kategori"];
                Produk["Penerbit"] = res["Penerbit"];
                Produk["Penulis"] = res["Penulis"];
                Produk["Link"] = res["Link"];
                Produk["stok"] = 1;
                this.setState({
                    insertKeranjang: Produk
                });
            })
            .then(() => {
                this.handleCekKeranjang(data);
            })
            .then(() => {
                this.handleUpdateStok(data);
            })
            .then(() => {
                this.handleBeli();
            });
    };

    handleCekKeranjang = data => {
        fetch(`http://localhost:3002/keranjang/${data}`, { method: "GET" }).then(
            response => {
                if (response.ok) {
                    response.json().then(res => {
                        this.handleUpdateKeranjang(data, res);
                        this.ambilDataDariServerAPI();
                    });
                } else {
                    this.handleBeli();
                }
            }
        );
    };

    handleUpdateKeranjang = (data, res) => {
        fetch(`http://localhost:3002/keranjang/${data}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Judul: res["Judul"],
                Kategori: res["Kategori"],
                Penerbit: res["Penerbit"],
                Penulis: res["Penulis"],
                Link: res["Link"]
            })
        });
    };

    handleBeli = () => {
        fetch('http://localhost:3002/keranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    handleUpdateStok = data => {
        fetch(`http://localhost:3001/gadgetList/${data}`, { method: "GET" }).then(
            response => {
                response.json().then(res => {
                    fetch(`http://localhost:3001/gadgetList/${data}`, {
                        method: "PUT",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            Gambar: res["Gambar"],
                            Judul: res["Judul"],
                            Kategori: res["Kategori"],
                            Penerbit: res["Penerbit"],
                            Penulis: res["Penulis"],
                            Link: res["Link"]
                        })
                    });
                    this.ambilDataDariServerAPI();
                });
            }
        );
    };

    render(){
        return(
        <div className="halaman container">
            <div className="card mt-1 row">
                <div className="card-body">
                    <h2 className="text-left book-list" >Book List</h2>
                    <div className="card-segment row">
                    {
                        this.state.ListGadget.map(buku => {
                            return <Book key={buku.id}
                                        id={buku.id}
                                        Gambar = {buku.Gambar}
                                        Judul={buku.Judul}
                                        Kategori={buku.Kategori}
                                        Penerbit={buku.Penerbit}
                                        Penulis={buku.Penulis}
                                        Link={buku.Link}/>
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default PostCollection