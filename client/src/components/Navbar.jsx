import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//react icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, []);

    //navItems here
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" },
    ]

    return (

        <header style={{ width: '100%', backgroundColor: 'transparent', position: 'fixed', top: '0', left: '0', right: '0', transitionProperty: 'all', transitionTimingFunction: 'ease-in', transitionDuration: '300ms' }}>

            <nav style={{
                backgroundColor: isSticky ? '#ffffff' : 'transparent',
                boxShadow: isSticky ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
                paddingTop: '1rem',
                paddingBottom: '1rem',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                '@media (minWidth: 1024px)': {
                    paddingLeft: '6rem',
                    paddingRight: '6rem'
                },
                ...(isSticky ? { position: 'sticky', top: '0', left: '0', right: '0', backgroundColor: '#3182CE' } : {})
            }}>

                <div className='flex justify-between items-center text-base gap-8'>

                    {/*logo*/}
                    <Link to="/" style={{ fontSize: '2rem', fontWeight: 'bold', color: 'blue', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <img src={"https://assets.localretailconnect.com/rw-assets/northlandbookstore.com/17703/logo.png"} style={{ display: 'inline-block ',width: '150px', height: 'auto' }} />
                    </Link>

                    {/* nav item for large devices*/}
                    <ul style={{ gap: '1.5rem', display: 'flex', listStyle: 'none', padding: '0' }}>

                        {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link to={path} style={{ display: 'block', fontSize: '1rem', color: '#000000', textTransform: 'uppercase', cursor: 'pointer' }}
                                    onMouseEnter={(e) => e.target.style.color = '#007bff'}
                                    onMouseLeave={(e) => e.target.style.color = '#000000'}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* btn for small devices*/}
                    <div style={{ gap: '1.5rem', display: 'flex', listStyle: 'none', alignItems: 'center' }}>
                        <button>

                            {/* <button><FaBarsStaggered className='w-5 hover:text-blue-700' /></button> */}
                            <FaBarsStaggered className='icon' style={{ width: '1.25rem', color: 'black' }}
                                onMouseOver={(e) => e.target.style.color = '#007bff'}
                                onMouseOut={(e) => e.target.style.color = 'black'} />
                        </button>
                    </div>

                    {/* menu btn for the mobile devices
                    <div style={{ display: 'none' }}>
                        <button onClick={toggleMenu}>
                            {/* isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black'/>   
                            {isMenuOpen ? (
                                <FaXmark style={{ height: '1.25rem', width: '1.25rem', color: '#000000' }} />
                            ) : (
                                <FaBarsStaggered style={{ height: '1.25rem', width: '1.25rem', color: '#000000' }} />
                            )}
                        </button>
                    </div> */}
                </div>
            </nav>
        </header>
    )
}

export default Navbar