import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchToJapanese, switchToVietnamese } from "../redux/LanguageSlice";
import { LuLanguages } from "react-icons/lu";

const Language = () => {
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();
    const language = useSelector((state) => state.language.language);

    const handleMouseEnter = () => {
        setShowMenu(true);
    };

    const handleMouseLeave = () => {
        setShowMenu(false);
    };

    return (
        <header>
            <div
                className="fixed flex items-center justify-center m-3 z-50 top-0 right-0"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button className="text-2xl hover:text-primaryTextColor">
                    <LuLanguages />
                </button>
                {showMenu && (
                    <div className="absolute top-full mt-2 right-0 w-40 bg-white bg-opacity-40 backdrop-blur-sm border border-grey shadow-lg rounded-md z-50">
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

export default Language;