import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import useSessionTransitionState from '../hooks/useSessionTransitionState';

const SwiperSection = ({ children }) => {
    const swiperRef = useRef(null);
    const { onNextSession, onPrevSession } = useSessionTransitionState();

    const handleMousewheel = (event) => {
        console.log("handleMousewheel");

        if (swiperRef.current) {
            console.log("swiperRef.current", swiperRef.current);
            const swiper = swiperRef.current.swiper;

            if (event.deltaY > 0) {
                console.log("swiper.isEnd", swiper.isEnd);
                if (swiper.isEnd) {
                    onNextSession();
                } else {
                    swiper.slideNext();
                }
            } else { // Scroll up
                console.log("swiper.isBeginning", swiper.isBeginning);
                if (swiper.isBeginning) {
                    onPrevSession();
                } else {
                    swiper.slidePrev();
                }
            }
        }
    };

    return (
        <Swiper
            ref={swiperRef}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            onTouchMove={handleMousewheel}
            onWheel={handleMousewheel}
            autoplay={false}
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
