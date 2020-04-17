import React from 'react';
import Header from '../Components/header';

const Home = () => {
    return (
        <div>
            <div>
                <Header />
            </div>

            <div id="carouselExampleSlidesOnly" className="carousel slide  " data-ride="carousel">
                <div className="carousel-inner carousel-juntas">
                    <div className="carousel-item active">
                        <img src="https://i.imgur.com/gGxAYPo.png " className="d-block w-100" alt="imagen" />
                        <div className="carousel-caption d-none d-md-block">

                        </div>
                    </div>
                    <div className="carousel-item carousel">
                        <img src="https://i.imgur.com/PbQfT8Y.png " className="d-block w-100" alt="imagen" />
                        <div className="carousel-caption d-none d-md-block">

                        </div>
                    </div>
                    <div className="carousel-item carousel">
                        <img src="https://i.imgur.com/ZLje0Q4.png " className="d-block w-100" alt="imagen" />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Home;


