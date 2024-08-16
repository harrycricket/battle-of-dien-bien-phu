import { useState, useEffect } from "react";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState("context");

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveMenu(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <header className="navbar">
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col justify-center items-center p-4 text-white">
                    <a
                        href="#home"
                        className={`vertical-text text-base uppercase ${activeMenu === "home" ? "border-l-[2.5px] border-yellow" : ""} hover:border-l-[2.5px] hover:border-yellow`}
                        onClick={() => handleMenuClick("home")}
                    >
                        Điện Biên Phủ
                    </a>
                </div>
                <nav className="flex flex-col items-center gap-6 text-white p-4">
                    <a
                        href="#context"
                        className={`vertical-text text-sm uppercase ${activeMenu === "context" ? "border-l-[2.5px] border-yellow" : ""} hover:border-l-[2.5px] hover:border-yellow`}
                        onClick={() => handleMenuClick("context")}
                    >
                        Bối cảnh
                    </a>
                    <a
                        href="#battle"
                        className={`vertical-text text-sm uppercase ${activeMenu === "battle" ? "border-l-[2.5px] border-yellow" : ""} hover:border-l-[2.5px] hover:border-yellow`}
                        onClick={() => handleMenuClick("battle")}
                    >
                        Các trận đánh
                    </a>
                    <a
                        href="#hero"
                        className={`vertical-text text-sm uppercase ${activeMenu === "hero" ? "border-l-[2.5px] border-yellow" : ""} hover:border-l-[2.5px] hover:border-yellow`}
                        onClick={() => handleMenuClick("hero")}
                    >
                        Các vị anh hùng
                    </a>
                    <a
                        href="#conclusion"
                        className={`vertical-text text-sm uppercase ${activeMenu === "conclusion" ? "border-l-[2.5px] border-yellow" : ""} hover:border-l-[2.5px] hover:border-yellow`}
                        onClick={() => handleMenuClick("conclusion")}
                    >
                        Tổng kết
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
