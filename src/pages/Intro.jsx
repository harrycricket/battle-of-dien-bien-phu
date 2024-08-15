import { useEffect } from "react";
import { preLoaderAnim } from "../animations/animation";

const Intro = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);

    return (
        <div
            className="preloader fixed inset-0 z-[1000] flex items-center justify-center text-white"
            style={{
                backgroundImage: `url('/intro.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div
                className="absolute inset-0 bg-[#c7252e] opacity-70"
                style={{
                    backgroundColor: 'rgba(199, 37, 46, 0.5)',
                }}
            ></div>

            <div className="relative z-10">
                <div className="texts-container flex items-center justify-between h-15 w-full font-extrabold text-lg">
                    <span className="text-5xl">Chiến&nbsp;</span>
                    <span className="text-5xl">dịch&nbsp;</span>
                    <span className="text-5xl">Điện&nbsp;</span>
                    <span className="text-5xl">Biên&nbsp;</span>
                    <span className="text-5xl">Phủ&nbsp;</span>
                </div>
                <div className="texts-container flex items-center justify-center h-15 w-full font-extrabold text-lg">
                    <span className="text-5xl">VNR202&nbsp;</span>
                    <span className="text-5xl">-&nbsp;</span>
                    <span className="text-5xl">FPT&nbsp;</span>
                    <span className="text-5xl">University&nbsp;</span>
                </div>
            </div>
        </div>
    );
}

export default Intro;