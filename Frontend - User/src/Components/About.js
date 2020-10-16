import React from 'react';
import '../style.css';
import logo from '../assets/img/Logo.png';

const Card = (props) => {
	return(
    	<div class="col-md-5 mx-auto">
     		<div class="card profile-card-5">
          		<div class="card-img-block">
              		<img class="card-img-top" src={logo}></img>
            		<h1>{props.name}</h1>
            		<p>{props.kelas}</p>
				</div>
      		</div>
    	</div>
	)
}

const About=()=>{
	return(
		<Card name="PT. Waskita Karya"
			kelas="Online Library"/>
	)

}

export default About;