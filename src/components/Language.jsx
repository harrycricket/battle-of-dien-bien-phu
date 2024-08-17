import { useState, useEffect } from "react";
import { GrLanguage } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { switchToJapanese, switchToVietnamese } from "../redux/LanguageSlice";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState("context");
    const dispatch = useDispatch();
    const language = useSelector((state) => state.language.language);

    const handleMouseEnter = () => {
        setShowMenu(true);
    };

    const handleMouseLeave = () => {
        setShowMenu(false);
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveMenu(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <header className="navbar">            
            <nav className="flex-1 flex flex-col items-center gap-6">
                <a
                    href="#context"
                    className={`${activeMenu === "context" ? "text-primaryTextColor" : ""} hover:text-primaryTextColor`}
                    onClick={() => handleMenuClick("context")}
                >
                    Bối cảnh
                </a>
                <a
                    href="#battle"
                    className={`${activeMenu === "battle" ? "text-primaryTextColor" : ""} hover:text-primaryTextColor`}
                    onClick={() => handleMenuClick("battle")}
                >
                    Các trận đánh
                </a>
                <a
                    href="#conclusion"
                    className={`${activeMenu === "conclusion" ? "text-primaryTextColor" : ""} hover:text-primaryTextColor`}
                    onClick={() => handleMenuClick("conclusion")}
                >
                    Tổng kết
                </a>
                <a
                    href="#hero"
                    className={`${activeMenu === "hero" ? "text-primaryTextColor" : ""} hover:text-primaryTextColor`}
                    onClick={() => handleMenuClick("hero")}
                >
                    Các vị anh hùng
                </a>
            </nav>
            <div
                className="relative flex items-center justify-center mt-10"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button className="text-2xl hover:text-primaryTextColor">
                    <GrLanguage />
                </button>
                {showMenu && (
                    <div className="absolute top-full mt-2 right-0 w-40 bg-white border border-grey shadow-lg rounded-md z-50">
                        <div className="absolute top-[-12px] left-0 w-full h-3 bg-transparent rounded-t-md"></div>
                        <ul className="text-black text-lg">
                            {language === 'jp' ? (
                                <>
                                    <li className="p-2 hover:text-primaryTextColor cursor-pointer" onClick={() => dispatch(switchToVietnamese())}>Vietnamese</li>
                                    <li className="p-2 text-primaryTextColor hover:text-primaryTextColor cursor-pointer" onClick={() => dispatch(switchToJapanese())}>Japanese</li>
                                </>
                            ) : (
                                <>
                                    <li className="p-2 text-primaryTextColor hover:text-primaryTextColor cursor-pointer" onClick={() => dispatch(switchToVietnamese())}>Vietnamese</li>
                                    <li className="p-2 hover:text-primaryTextColor cursor-pointer" onClick={() => dispatch(switchToJapanese())}>Japanese</li>
                                </>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;