import React, {FC} from "react";
import './style.css'

const Header: FC = () => {
    return (
        <div className="bg-[var(--header-color)] fixed top-0 left-0 right-0 z-50">
            <div className="max-w-360 h-20 mx-auto">
                <div className="flex items-center justify-between">
                    <h1 className="text-[48px] gap-75 pl-14">Portfolio</h1>
                    <div className="flex justify-end text-[36px] gap-16 pr-10">
                        <nav>Home</nav>
                        <nav>About</nav>
                        <nav>Works</nav>
                        <nav>Skills</nav>
                        <nav>Form</nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header