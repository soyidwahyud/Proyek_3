import React from 'react';
import '../assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../style.css'

const Home = (props) => {
	return(
    <section id="hero" class="d-flex justify-cntent-center align-items-center">
      <div id="heroCarousel" class="container carousel carousel-fade" data-ride="carousel">
        <div class="carousel-item active">
          <br></br>
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Online Library</span></h2>
            <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
