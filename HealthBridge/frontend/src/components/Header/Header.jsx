import { useEffect, useRef, useContext } from 'react';
import logo from '../../assets/images/logo.png';
import doctorImg02 from '../../assets/images/doctor-img02.png';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.jsx';
import { BiMenu } from 'react-icons/bi';

// --------------------------------------- Navigation Links Data ---------------------------------------

const navLinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/doctors',
    display: 'Book a Doctor',
  },
  {
    path: '/services',
    display: 'Services',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
];

// ---------------------------------------- Default photo URL -----------------------------------------------------
const defaultPhoto = doctorImg02;

// ---------------------------------------- Header Component ----------------------------------------

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(AuthContext);

  // ---------------------------------------- Handle Sticky Header ----------------------------------------

  const handleSticky = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    handleSticky();
    return () => window.removeEventListener('scroll', handleSticky);
  });

  // ---------------------------------------- Toggle Menu ----------------------------------------

  const toggleMenu = () => menuRef.current.classList.toggle('display_menu');

  // ---------------------------------------- Render ----------------------------------------

  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className='container'>
        <div className='flex items-center justify-between'>
          
          {/* ------------------ Logo Section ---------------------- */}
          <div>
            <img src={logo} alt='Logo' />
          </div>
          {/* ------------------ Logo Section End ---------------------- */}

          {/* ------------------ Navigation Section ---------------------- */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[3rem]'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                        : 'text-textColor text-[16px] leading-7 font-[500]'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* ------------------ Navigation Section End ---------------------- */}

          {/* ------------------ Navigation Right ---------------------- */}
          <div className='flex items-center gap-4'>
            {token && user ? (
              <div>
                <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>
                  <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                    <img src={user?.photo || defaultPhoto} className='w-full rounded-full' alt='User' />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to='/login'>
                <button
                  className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center
                  justify-center rounded-[50px]'
                >
                  Login
                </button>
              </Link>
            )}

            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>
          </div>
          {/* ------------------ Navigation Right End ---------------------- */}
        </div>
      </div>
    </header>
  );
};

// ----------------------------------------- Export -----------------------------------------
// ----------------------------------------- -----------------------------------------
export default Header;
// ----------------------------------------- -----------------------------------------
