import React, {useState, FC} from "react";
import './style.css'

const Header: FC = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    return (
        <div className="bg-[var(--header-color)] fixed top-0 left-0 right-0 z-50">
            <div className="max-w-360 h-20 mx-auto">
                <div className="flex items-center justify-between h-full">
                    <h1 className="lg:text-[48px] text-[40px] gap-75 lg:pl-14 pl-8">Portfolio</h1>
                    <div className="hidden sm:flex sm:justify-end lg:text-[32px] md:text-[28px] sm:text-[24px] xl:gap-16 lg:gap-10 md:gap-6 gap-4 lg:pr-10 pr-4">
                        <nav>Home</nav>
                        <nav>About</nav>
                        <nav>Works</nav>
                        <nav>Skills</nav>
                        <nav>Form</nav>
                    </div>
                    <div className="sm:hidden pr-10">
                        <button 
                            type="button"
                            className="flex flex-col justify-center items-center"
                            onClick={() => setIsOpenMenu(!isOpenMenu)}
                        >
                            {!isOpenMenu ? (
                                <svg width="40" height="30" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="45" height="7" rx="5" fill="#123458" fill-opacity="0.80"/>
                                    <rect y="14" width="45" height="7" rx="4" fill="#123458" fill-opacity="0.80"/>
                                    <rect y="28" width="45" height="7" rx="4" fill="#123458" fill-opacity="0.80"/>
                                </svg>
                            ) : (
                                <svg width="40" height="30" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="34.0724" y="39.524" width="48.1857" height="7.70971" rx="3.85486" transform="rotate(-135 34.0724 39.524)" fill="#3E5771"/>
                                    <rect x="0.475891" y="34.5484" width="48.1857" height="7.70971" rx="3.85486" transform="rotate(-45 0.475891 34.5484)" fill="#3E5771"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header