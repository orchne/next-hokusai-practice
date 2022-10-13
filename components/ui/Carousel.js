import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <>
        <Slider {...settings}>
            {props.data.map(item => {
                return(
                    <div key={item.id}>
                        <div 
                        className="carrousel_wrapper" 
                        style={{
                            background: `url(/images/arts/${item.name}) no-repeat`
                        }}>
                            <div>
                                {item.title}
                            </div>
                        </div>
                    </div>
            )})}
        </Slider>
    </>
  )
}

export default Carousel