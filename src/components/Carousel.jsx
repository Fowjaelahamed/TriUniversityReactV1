import React from "react";
import carouselImage1 from "../images/carousel-images/pexels-photo-1.jpeg";
import carouselImage2 from "../images/carousel-images/forest-trees.jpg";
import carouselImage3 from "../images/carousel-images/pexels-photo.jpeg";

function Carousel(){
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">

            <div className="carousel-item active">
                <img src={carouselImage1} className="d-block w-100" height="500px" alt="..."/>
                <div className="container ">
                    <div className="carousel-caption ">
                        <h1 className="banner-text-size">The purpose of our lives is to be happy.</h1>
                        <button type="button" className="btn btn-primary">Apply</button>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src={carouselImage2} className="d-block w-100" height="500px" alt="..."/>
                <div className="container ">
                    <div className="carousel-caption ">
                        <h1 className="banner-text-size">Get busy living or get busy dying.</h1>
                        <button type="button" className="btn btn-primary">Apply</button>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src={carouselImage3} className="d-block w-100" height="500px" alt="..."/>
                <div className="container ">
                    <div className="carousel-caption ">
                        <h1 className="banner-text-size">Never let the fear of striking out keep you from playing the game.</h1>
                        <button type="button" className="btn btn-primary">Apply</button>
                    </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    );
}
export default Carousel;