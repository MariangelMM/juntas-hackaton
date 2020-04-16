import React from 'react';
import Header from '../Components/header';

const Home = () => {
    return (
        <div>
            <div>
                <Header />
            </div>

            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://i.imgur.com/cQHWKIC.jpg " class="d-block w-100" alt="imagen" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.imgur.com/Bw9JNAZ.jpg" class="d-block w-100" alt="imagen" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>ksfjaskjfas</h5>
                            <p>asfhasfj sadfjalsjf</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.imgur.com/cQHWKIC.jpg " class="d-block w-100" alt="imagen" />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Home;