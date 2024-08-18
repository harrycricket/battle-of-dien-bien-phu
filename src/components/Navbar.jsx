// import { useEffect } from "react";
import { useEffect, useState } from "react";
import useSessionTransitionState from "../hooks/useSessionTransitionState";
import { IoHome } from "react-icons/io5";

const Navbar = () => {
    const { index, setTransiting, getSession, setSession } = useSessionTransitionState();

    const handleMenuClick = (menu) => {
        setSession(menu);
    };

    useEffect(() => {
        setTransiting(true);

        const position = index * window.innerHeight;
        window.scrollTo({
            top: position,
            behavior: 'smooth',
        });

        const scrollTimeout = setTimeout(() => {
            setTransiting(false);
        }, 500);

        return () => {
            clearTimeout(scrollTimeout);
        };
    }, [index]);

    // useEffect(() => {
    //     const sections = document.querySelectorAll("section");
    //     const options = {
    //         root: null,
    //         rootMargin: "0px",
    //         threshold: 0.1,
    //     };

    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 setSession(entry.target.id);
    //             }
    //         });
    //     }, options);

    //     sections.forEach((section) => {
    //         observer.observe(section);
    //     });

    //     return () => {
    //         sections.forEach((section) => {
    //             observer.unobserve(section);
    //         });
    //     };
    // }, []);

    return (
        <header className="navbar">
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col justify-center items-center p-4 text-white">
                    <a
                        // href="#"
                        className={`vertical-text text-base uppercase ${getSession() === "home" ? "border-l-[2.5px] border-yellow" : ""} hover:border-l-[2.5px] hover:border-yellow`}
                        onClick={() => handleMenuClick("home")}
                    >
                        <IoHome size={24} style={{ transform: 'rotate(90deg)' }} className="opacity-60"/>
                    </a>
                </div>
                <nav className="flex flex-col items-center gap-6 text-white p-4">
                    <a
                        // href="#"
                        className={`vertical-text text-sm uppercase ${getSession() === "context" ? "border-l-[2.5px] border-yellow" : ""} hover:border-l-[2.5px] hover:border-yellow`}
                        onClick={() => handleMenuClick("context")}
                    >
                        Bối cảnh
                    </a>
                    <a
                        // href="#"
                        className={`vertical-text text-sm uppercase ${getSession() === "battle" ? "border-l-[2.5px] border-yellow" : ""} hover:border-l-[2.5px] hover:border-yellow`}
                        onClick={() => handleMenuClick("battle")}
                    >
                        Các đợt tấn công
                    </a>
                    <a
                        // href="#tactic"
                        className={`vertical-text text-sm uppercase ${getSession() === "tactic" ? "border-l-[2.5px] border-yellow" : ""} hover:border-l-[2.5px] hover:border-yellow`}
                        onClick={() => handleMenuClick("tactic")}
                    >
                        Phương châm tác chiến
                    </a>
                    <a
                        // href="#"
                        className={`vertical-text text-sm uppercase ${getSession() === "summary" ? "border-l-[2.5px] border-yellow" : ""} hover:border-l-[2.5px] hover:border-yellow`}
                        onClick={() => handleMenuClick("summary")}
                    >
                        Tổng kết
                    </a>
                    {/* <a
                        href="#hero"
                        className={`vertical-text text-sm uppercase ${getSession() === "hero" ? "border-l-[2.5px] border-yellow" : ""} hover:border-l-[2.5px] hover:border-yellow`}
                        onClick={() => handleMenuClick("hero")}
                    >
                        Các vị anh hùng
                    </a> */}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
