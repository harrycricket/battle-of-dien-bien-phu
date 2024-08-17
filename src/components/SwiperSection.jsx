import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import useSessionTransitionState from '../hooks/useSessionTransitionState';

const SwiperSection = ({ index, children }) => {
    const swiperRef = useRef(null);
    const { setIsBeginning, setIsEnd } = useSessionTransitionState();

    const handleWheel = (event) => {
        if (swiperRef.current) {
            if (event.deltaY > 0) {
                swiperRef.current.swiper.slideNext(); // Scroll down - next slide
            } else {
                swiperRef.current.swiper.slidePrev(); // Scroll up - previous slide
            }
        }
    };

    useEffect(() => {
        document.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            document.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <Swiper
            ref={swiperRef}
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={(swiper) => {
                setIsBeginning(index, swiper.isBeginning);
                setIsEnd(index, swiper.isEnd);
                console.log("swiper of " + index + " : ", swiper.isBeginning, swiper.isEnd)
            }}
            onSlideChange={(swiper) => {
                setIsBeginning(index, swiper.isBeginning);
                setIsEnd(index, swiper.isEnd);
                console.log("swiper of " + index + " : ", swiper.isBeginning, swiper.isEnd)
            }}
            autoplay={false}
            // mousewheel={true}
            keyboard={true}
        >
            {children}
        </Swiper>
    );
};

// Define propTypes
SwiperSection.propTypes = {
    index: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired, // Define 'children' as required and of type 'node'
};

export default SwiperSection;
