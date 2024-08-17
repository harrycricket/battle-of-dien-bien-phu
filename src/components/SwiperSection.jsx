import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Swiper } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperSection = ({ children }) => {
    const swiperRef = useRef(null);

    const handleMousewheel = (event) => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;

            if (event.deltaY > 0) {
                if (swiper.isEnd) {
                    // onNext(); // Call the function to switch component
                } else {
                    swiper.slideNext();
                }
            } else { // Scroll up
                if (swiper.isBeginning) {
                    // onPrevPage(); // Call the function to switch to the previous page/component
                } else {
                    swiper.slidePrev();
                }
            }
        }
    };

    return (
        <Swiper
            ref={swiperRef}
            modules={[Mousewheel, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            mousewheel={{ forceToAxis: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            onTouchMove={handleMousewheel}
        >
            {children}
        </Swiper>
    );
};

// Define propTypes
SwiperSection.propTypes = {
    children: PropTypes.node.isRequired, // Define 'children' as required and of type 'node'
};

export default SwiperSection;
