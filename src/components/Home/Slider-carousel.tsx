import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <div className="slider-container">
            <Slider className="w-96px p-4 text-center text-white font-bold text-xl" {...settings} >
                
                    <div className="bg-purple-500">
                        <h3>1</h3>
                    </div>
                    <div className="bg-purple-500">
                        <h3>2</h3>
                    </div>
                    <div className="bg-purple-500">
                        <h3>3</h3>
                    </div>
                    <div className="bg-purple-500">
                        <h3>4</h3>
                    </div>
                    <div className="bg-purple-500">
                        <h3>5</h3>
                    </div>
                    <div className="bg-purple-500">
                        <h3>6</h3>
                    </div>
                    <div className="bg-purple-500">
                        <h3>7</h3>
                    </div>
                    <div className="bg-purple-500">
                        <h3>8</h3>
                    </div>
                    <div className="bg-purple-500">
                        <h3>9</h3>
                    </div>
                
            </Slider>
        </div>
    );
}

export default Carousel;