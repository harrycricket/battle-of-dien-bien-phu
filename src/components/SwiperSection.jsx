import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import useSessionTransitionState from '../hooks/useSessionTransitionState';

const SwiperSection = ({ index, children }) => {
    const swiperRef = useRef(null);
    const isSliding = useRef(false);
    const { index: currentIndex, transiting, setSliding, setIsBeginning, setIsEnd } = useSessionTransitionState();

    const handleWheel = (event) => {
        event.preventDefault();
        // console.log("index : " + index + " - transiting " + transiting + " - sliding " + sliding);
        if (!transiting && !isSliding.current && index == currentIndex && swiperRef.current) {
            const swiper = swiperRef.current.swiper;

            if (event.deltaY < 0 && !swiper.isBeginning) {
                setSliding(true);
                isSliding.current = true;
                swiper.slidePrev();
                // console.log("index : " + index + " - onprev " + swiper.activeIndex);
            }

            if (event.deltaY > 0 && !swiper.isEnd) {
                setSliding(true);
                isSliding.current = true;
                swiper.slideNext();
                // console.log("index : " + index + " - onnext " + swiper.activeIndex);
            }

            setIsBeginning(index, swiper.isBeginning);
            setIsEnd(index, swiper.isEnd);
            setTimeout(() => {
                setSliding(false);
                isSliding.current = false;
            }, 500);
        }
    };

    useEffect(() => {
        setIsBeginning(index, true);
        setIsBeginning(index, false);
    }, [])
    useEffect(() => {
        if (currentIndex == index)
            document.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            document.removeEventListener('wheel', handleWheel);
        };
    }, [currentIndex, transiting, isSliding]);

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
