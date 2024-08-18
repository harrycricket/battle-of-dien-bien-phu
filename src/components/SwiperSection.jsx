import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import useSessionTransitionState from '../hooks/useSessionTransitionState';
function booleanXOR(a, b) {
    return (a || b) && !(a && b);
}
const SwiperSection = ({ index, children }) => {
    const swiperRef = useRef(null);
    const isBeginningRef = useRef(true);
    const isEndRef = useRef(false);
    const isSliding = useRef(false);
    const { index: currentIndex, getIsBeginning, getIsEnd, setIsBeginning, setIsEnd } = useSessionTransitionState();

    const handleWheel = (event) => {
        if (swiperRef.current && !isSliding.current) {
            const swiper = swiperRef.current.swiper;
            console.log("REF ", isBeginningRef.current, isEndRef.current);
            console.log("STATE ", getIsBeginning(index), getIsEnd(index));

            if (event.deltaY < 0 && !getIsEnd(index)) {
                swiper.slidePrev();
                isSliding.current = true;
            }

            if (event.deltaY > 0 && !getIsBeginning(index)) {
                swiper.slideNext();
                isSliding.current = true;
            }


            setIsBeginning(index, isBeginningRef.current && swiper.isBeginning)
            setIsEnd(index, isEndRef.current && swiper.isEnd);


            isBeginningRef.current = booleanXOR(swiper.isBeginning, getIsBeginning(index));
            isEndRef.current = booleanXOR(swiper.isEnd, getIsEnd(index));
            console.log("isEndRef.current ", isEndRef.current);


            setTimeout(() => {
                isSliding.current = false;
            }, 500);
        }
    };

    useEffect(() => {
        if (currentIndex == index)
            document.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            document.removeEventListener('wheel', handleWheel);
        };
    }, [currentIndex == index, isSliding]);

    return (
        <Swiper className="swiper-no-swiping"
            ref={swiperRef}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={false}
            keyboard={true}
            simulateTouch={false}
        >
            {children}
        </Swiper>
    );
};

// Define propTypes
SwiperSection.propTypes = {
    index: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
};

export default SwiperSection;
