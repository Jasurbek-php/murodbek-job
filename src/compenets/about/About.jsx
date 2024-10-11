import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./About.css"; // CSS kod shu faylda bo'ladi

const About = () => {
    const [activeSlide, setActiveSlide] = useState(null);

    const images = [
        "https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?cs=srgb&dl=pexels-atbo-66986-245240.jpg&fm=jpg", 
        "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", 
        "https://media.npr.org/assets/img/2020/04/23/gettyimages-656544055-fe4c8329eb06318947affe3906b7ca4f0a1252c6-s1100-c50.jpg", 
    ];

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: false,
      cssEase: "ease-in-out",
      beforeChange: () => setActiveSlide(null),
      afterChange: (index) => setActiveSlide(index),
    };

    return (
        <div className="slider-container">
            <div className="text-section">
                <h1>Bizning Ajoyib Slayderimizga Xush Kelibsiz</h1>
                <p>
                    Bu slayderda siz dunyoning eng chiroyli manzaralarini ko'rishingiz mumkin. 
                    Har bir slayd o'ziga xos go'zallik va animatsion o'tish bilan ta'minlangan. 
                    Har doim yangi va qiziqarli kontent qo'shilib turadi!
                </p>
                <button className="more-info-btn">Ko'proq Ma'lumot Olish</button>
            </div>
            <div className="slider-section">
                <Slider {...sliderSettings}>
                    {images.map((image, index) => (
                        <div key={index} className={`slide ${activeSlide === index ? 'active' : ''}`}>
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default About;
