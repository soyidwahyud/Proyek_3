import React, {Component} from "react";
import Post from "../Components/Keranjang";
import NumberFormat from 'react-number-format';

class PostKeranjang extends Component{
    state = {
        listKeranjang:[]
    }
    index = 1

    ambilDataDariServerAPI = () =>{
        fetch('http://localhost:3002/keranjang')
            .then(response=>response.json())
            .then(jsonHasilAmbilDariAPI =>{
                this.setState({
                    listKeranjang:jsonHasilAmbilDariAPI
                })
            })
    }
    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    render(){
        return(
    <div className="container">
		<div className="card mt-1">
			<div className="card-body">
				<h2 className="text-center my-4">Keranjang Saya</h2>
				<table className="table table-bordered table-striped">
					<thead>
						<tr border>
							<th width="1" className="text-center">No.</th>
							<th className="text-center">ID Produk</th>
                            <th className="text-center">Nama</th>
							<th className="text-center">Harga</th>
                            <th className="text-center">Qty</th>
                            <th className="text-center">Subtotal</th>
						</tr>
					</thead>
					<tbody>    
                    {
                        this.state.listKeranjang.map(keranjang => {
                            return <Post key={keranjang.id}
                                        id = {this.index++}
                                        idproduk={keranjang.id}
                                        nama={keranjang.nama}
                                        harga={keranjang.harga}
                                        stok={keranjang.stok}/>
                        })
                    }
                    <tr>
                        <th colSpan="5" className="text-right">Total : </th>
                        <Total produk= {this.state.listKeranjang}/>
                    </tr>
                    </tbody>
				</table>
			</div>
		</div>
	</div>
        )
    }
}

const Total = ({produk}) => (
    <th><NumberFormat value= 
        {produk.reduce((sum,i) => (
            sum += i.harga * i.stok
        ),0)}
         displayType={'text'} thousandSeparator={true} prefix={' Rp '}></NumberFormat>
    </th>
)
export default PostKeranjang