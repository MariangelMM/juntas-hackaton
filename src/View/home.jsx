import React from 'react';
import Header from '../Components/header';

const Home = () => {
    return (
        <div>
            <div>
                <Header />
            </div>

            <div id="carouselExampleSlidesOnly" className="carousel slide " data-ride="carousel">
                <div className="carousel-inner carousel-juntas">
                    <div className="carousel-item active">
                        <img src="https://i.imgur.com/KOmFeoI.jpg" className="d-block w-100" alt="imagen" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div className="carousel-item carousel">
                        <img src="https://i.imgur.com/ERMCcwX.jpg" className="d-block w-100" alt="imagen" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>ksfjaskjfas</h5>
                            <p>asfhasfj sadfjalsjf</p>
                        </div>
                    </div>
                    <div className="carousel-item carousel">
                        <img src="https://i.imgur.com/HDL00UJ.jpg" className="d-block w-100" alt="imagen" />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Home;