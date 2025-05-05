import {FC} from 'react';

function getCurrentYear() {
    const date = new Date()
    const year = date.getFullYear()
    return year
}

const Footer: FC = () => {
    const currenYear = getCurrentYear()
    return (
        <div className='h-12 bg-[var(--header-color)] text-center py-3'>
            <span className='block max-w-screen-xl mx-auto text-lm'>
                © {currenYear} Haruki140 All Right Reserved
            </span>
        </div>
    )
}

export default Footer;