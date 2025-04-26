import React, {FC} from "react";
import './style.css'

const Header: FC = () => {
    return (
        <div className="max-w-360 mx-auto">
            <div className="h-20 bg-[var(--header-color)] flex items-center justify-between">
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
    )
}

export default Header