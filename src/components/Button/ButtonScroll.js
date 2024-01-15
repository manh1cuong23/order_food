import { useState } from 'react';
import { IoMdArrowDropupCircle } from 'react-icons/io';

function ButtonScroll() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div>
            {/* 👇️ scroll to top on button click */}
            <button
                onClick={scrollToTop}
                style={{
                    display: visible ? 'inline' : 'none',
                    position: 'fixed',
                    padding: '1rem 2rem',
                    fontSize: '30px',
                    bottom: '40px',
                    right: '40px',
                    color: 'black',
                    background: 'transparent',
                    textAlign: 'center',
                    cursor: 'pointer',
                }}
            >
                <IoMdArrowDropupCircle />
            </button>
        </div>
    );
}

export default ButtonScroll;
