// Importing necessary assets and components
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

{/* ------------------------------------------------------------------------- */}

// Social media links data
const socialLinks = [
  {
    path: "https://www.youtube.com",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://github.com",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

{/* ------------------------------------------------------------------------- */}

// Quick links data grouped
const quickLinks = [
  {
    title: "Quick Links",
    links: [
      { path: "/home", display: "Home" },
      { path: "/", display: "About Us" },
      { path: "/services", display: "Services" },
      { path: "/", display: "Blog" },
    ],
  },
  {
    title: "I want to:",
    links: [
      { path: "/find-a-doctor", display: "Find a Doctor" },
      { path: "/", display: "Request an Appointment" },
      { path: "/", display: "Find a Location" },
      { path: "/", display: "Get a Opinion" },
    ],
  },
  {
    title: "Support",
    links: [
      { path: "/", display: "Donate" },
      { path: "/contact", display: "Contact Us" },
    ],
  },
];

{/* ------------------------------------------------------------------------- */}
{/* ------------------------ FOOTER SECTION OF HEALTHBRIDGE ---------------------- */}
{/* ------------------------------------------------------------------------- */}

// Footer component
const Footer = () => {
  // Getting current year
  const year = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          {/* ------------------------------------------------------------------------- */}
          {/* Logo and copyright section */}
          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright © {year} HealthBridge
            </p>
            {/* ------------------------------------------------------------------------- */}

            {/* Social media links */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="w-[36px] h-[36px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-[#0067FF] hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          {/* ------------------------------------------------------------------------- */}

          {/* Quick links */}
          {quickLinks.map((group, index) => (
            <div key={index}>
              <h2 className="text-[20px] leading-[30px] font-[700] text-headingColor mb-6">
                {group.title}
              </h2>
              <ul>
                {group.links.map((item, i) => (
                  <li key={i} className="mb-4">
                    <Link
                      className="text-[16px] leading-7 font-[400] text-textColor"
                      to={item.path}
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* ------------------------------------------------------------------------- */}
        </div>
      </div>
    </footer>
  );
};

{/* --------------------------- END OF FOOTER ---------------------------------------------- */}
{/* --------------------------- ------------- ---------------------------------------------- */}
export default Footer;
{/* ------------------------------------------------------------------------------------------- */}
