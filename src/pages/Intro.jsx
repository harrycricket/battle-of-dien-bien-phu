import { useEffect, useState } from "react";
import { preLoaderAnim } from "../animations/animation";

const Intro = () => {
    const [audio] = useState(new Audio('/typing.mp3'));

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const handleUserInteraction = () => {
            audio.play().catch((error) => {
                console.log('Audio play failed:', error);
            });
            document.body.removeEventListener('click', handleUserInteraction);
        };

        // document.body.addEventListener('click', handleUserInteraction);

        preLoaderAnim(() => {
            document.body.style.overflow = '';
        });

        return () => {
            document.body.removeEventListener('click', handleUserInteraction);
            audio.pause();
            audio.currentTime = 0;
        };
    }, [audio]);

    return (
        <div
            className="preloader fixed inset-0 z-[1000] flex flex-col items-center justify-center text-white bg-PrimaryBgTien"
        >
            <div
                className="absolute inset-0 opacity-70"
            ></div>

            <div className="relative z-10 flex flex-col items-center">
                <img
                    src="1954.png"
                    alt="1954"
                    className="mb-6 h-[80vh] w-auto"
                />

                <div className="texts-container text-3xl uppercase text-black flex flex-wrap items-center justify-center h-15 w-full font-extrabold text-lg">
                    <span>
                        <span>M</span>
                        <span>ộ</span>
                        <span>t</span>
                        &nbsp;
                    </span>

                    <span>
                        <span>d</span>
                        <span>ự</span>
                        &nbsp;
                    </span>

                    <span>
                        <span>á</span>
                        <span>n</span>
                        &nbsp;
                    </span>

                    <span>
                        <span>đ</span>
                        <span>ư</span>
                        <span>ợ</span>
                        <span>c</span>
                        &nbsp;
                    </span>

                    <span>
                        <span>t</span>
                        <span>h</span>
                        <span>ự</span>
                        <span>c</span>
                        &nbsp;
                    </span>

                    <span>
                        <span>h</span>
                        <span>i</span>
                        <span>ệ</span>
                        <span>n</span>
                        &nbsp;
                    </span>

                    <span>
                        <span>b</span>
                        <span>ở</span>
                        <span>i</span>
                        &nbsp;
                    </span>

                    <span>
                        <span>s</span>
                        <span>i</span>
                        <span>n</span>
                        <span>h</span>
                        &nbsp;
                    </span>

                    <span>
                        <span>v</span>
                        <span>i</span>
                        <span>ê</span>
                        <span>n</span>
                        &nbsp;
                    </span>

                    <span>
                        <span className="text-[#084e9c]">F</span>
                        <span className="text-[#f27123]">P</span>
                        <span className="text-[#51b748]">T</span>
                        &nbsp;
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Intro;
