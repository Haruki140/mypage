import {useState, useEffect, FC} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './style.css'
import { Elements, pairElements } from "type";


const Header: FC = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const [elements, setElements] = useState<Elements>({
        homeElement: null,
        aboutElement: null,
        workElement: null,
        skillElement: null,
        contactElement: null,
    });
    const location = useLocation();
    const navigate = useNavigate();


    const menu: pairElements[] = [
        {
            title: "Home",
            idx: elements.homeElement,
        },
        {
            title: "About",
            idx: elements.aboutElement,
        },
        {
            title: "Works",
            idx: elements.workElement,
        },
        {
            title: "Skills",
            idx: elements.skillElement,
        },
        {
            title: "Contact",
            idx: elements.contactElement,
        }
    ];

    useEffect(() => {
        const home = document.getElementById("Home");
        const about = document.getElementById("About");
        const work = document.getElementById("Works");
        const skill = document.getElementById("Skills");
        const contact = document.getElementById("Contact");

        setElements({
            homeElement: home,
            aboutElement: about,
            workElement: work,
            skillElement: skill,
            contactElement: contact,
        })

        const backPhase = async () => {
            const title = localStorage.getItem("title");
            localStorage.removeItem("title");
            if (title) {
                const newElement = document.getElementById(title)
                if (newElement) {
                    handleNav({title: title, idx: newElement});
                }
            }
        }

        if (localStorage.getItem("title")) backPhase();
        
    }, [location.pathname])

    const handleNav = (element: pairElements) => {
        if (location.pathname === "/detail") {
            localStorage.setItem("title", element.title);
            navigate("/");
            return;
        }
        
        if (element.idx) {
            if (element.title === "Home") {
                  window.scroll({
                    top: 0,
                    behavior: "smooth",
                });
            } else {
                element.idx.scrollIntoView({
                    behavior: "smooth",
                })
            }
        }
    }

    return (
        <div className="bg-[var(--header-color)] fixed top-0 left-0 right-0 z-50 shadow-lg/20">
            <div className="max-w-360 h-20 mx-auto">
                <div className="flex items-center justify-between h-full">
                    <h1 className="lg:text-5xl mobile:text-[40px] tiny:text-4xl text-3xl gap-75 lg:pl-14 mobile:pl-8 pl-3">Haruki140</h1>
                    <div className="hidden md:flex md:justify-end lg:text-[32px] md:text-[28px] xl:gap-16 lg:gap-10 gap-6 lg:pr-10 pr-4">
                        {menu.map(m => {
                            return (
                                <nav key={m.title} className="hover:cursor-pointer hover:text-[var(--hover-text-color)] hover:translate-y-[-3px] transition duration-300" onClick={() => handleNav(m)}>
                                    {m.title}
                                </nav>
                            )
                        })}
                    </div>
                    <div className="md:hidden mobile:pr-10 pr-3">
                        <button 
                            type="button"
                            className="flex flex-col justify-center items-center"
                            onClick={() => setIsOpenMenu(!isOpenMenu)}
                        >
                            {!isOpenMenu ? (
                                <svg width="35" height="30" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="45" height="7" rx="5" fill="#123458" />
                                    <rect y="14" width="45" height="7" rx="4" fill="#123458" />
                                    <rect y="28" width="45" height="7" rx="4" fill="#123458" />
                                </svg>
                            ) : (
                                <svg width="35" height="30" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="34.0724" y="39.524" width="48.1857" height="7.70971" rx="3.85486" transform="rotate(-135 34.0724 39.524)" fill="#3E5771"/>
                                    <rect x="0.475891" y="34.5484" width="48.1857" height="7.70971" rx="3.85486" transform="rotate(-45 0.475891 34.5484)" fill="#3E5771"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {!isOpenMenu ? (
                <></>
            ) : (
                <div className="md:hidden flex flex-col tiny:text-3xl text-2xl tiny:px-8 px-3 py-3 gap-2 border-t-2 border-[var(--text-color)]">
                    {menu.map(m => {
                        return (
                            <nav 
                                key={m.title}
                                className="hover:cursor-pointer hover:bg-[var(--hover-header-color)]"
                                onClick={() => {
                                    setIsOpenMenu(false);
                                    handleNav(m);
                                }}
                            >
                                {m.title}
                            </nav>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Header