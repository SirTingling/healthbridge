import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import featureImg from '../assets/images/feature-img.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import faqImg from '../assets/images/faq-img.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'
import DoctorList from '../components/Doctors/DoctorList'
import FaqList from '../components/Faq/FaqList'
import Testimonial from '../components/Testimonial/Testimonial'

const Home = () => {
  return <>
    {/* ----------------------- Main menu --------------------------- */}

     <section className='hero_section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
            <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
                {/*  ------------------- Hero -------------------------- */}
                <div className='lg:w-[570px]'>
                    <h1  className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
                    md:leading-[70px] '>
                    All Have Access To Health Care
                    </h1>

                    <p className='text_para'>
                    We believe in a future where every individual, regardless of background or location, has access to 
                    comprehensive health care services. Our mission is to make health care accessible, affordable, and 
                    equitable, ensuring that no one is left behind in receiving the care they deserve.
                    </p>

                    <Link to='/doctors'>
                        <button className='btn'>Book an Appointment</button>
                    </Link>

                    
                    {/* ---------------------------- Sub fields ------------------------------------ */}
                <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5
                        lg:gap-[30px]'>
                    <div>
                        <h2 className='text-[36x] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                        text-headingColor'>30+
                        </h2>
                        <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                        <p className='text_para'>Care Sites Globally</p>
                    </div>

                    <div>
                        <h2 className='text-[36x] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                        text-headingColor'>10+
                        </h2>
                        <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                        <p className='text_para'>Years of Experience</p>
                    </div>

                    <div>
                        <h2 className='text-[36x] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                        text-headingColor'>99%
                        </h2>
                        <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                        <p className='text_para'>Patient Satisfaction Rate</p>
                    </div>
                
                </div>

            </div>

                    {/* ---------------------------- doctors frame ------------------------------------ */}
                    <div className='flex gap-[30px] justify-end'>
                        <div>
                            <img className='w-full' src={heroImg01} alt="" />
                        </div>
                        <div className='mt-[30px]'>
                            <img className='w-full mb-[30px]' src={heroImg02} alt="" />
                            <img className='w-full' src={heroImg03} alt="" />
                        </div>
                    </div>
                    {/* ---------------------------- doctors frame end ------------------------------------ */}
            </div>
        </div>
     </section>


                    {/* ---------------------------- The Process ------------------------------------ */}
                
    <section>
            <div className='container'>
                <div className='lg:w-[470px] mx-auto'>
                    <h2 className='heading text-center'>
                        Providing The Best Medicial Services
                    </h2>

                    <p className='text_para text-center'>
                    At our facility, we are committed to providing the best medical services available. 
                    Our team of dedicated professionals employs the latest advancements in medical technology and 
                    practices.
                    </p>

                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

                {/* ----------------------- First Selection --------------------------------------  */}
                <div className='py-[30px] px-5'>
                    <div className='flex items-center justify-center'>
                        <img src={icon01} alt=""/>
                    </div>


                    <div className='mt-[30px]'>
                        <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                            Schedule a Doctor
                        </h2>

                        <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                        We pride ourselves on delivering top-tier medical services to all our patients. Our approach 
                        combines cutting-edge treatments with compassionate care.
                        </p>

                        <Link to='/doctors' 
                        className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                        mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                            <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                        </Link>

                    </div>
                </div>

                {/* ----------------------- Second Selection --------------------------------------  */}
                <div className='py-[30px] px-5'>
                    <div className='flex items-center justify-center'>
                        <img src={icon02} alt=""/>
                    </div>


                    <div className='mt-[30px]'>
                        <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                            Find a Location
                        </h2>

                        <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                        Discover the convenience of our multiple healthcare facilities located across the region. 
                        Whether you need urgent care, routine check-ups, or specialized treatment
                        </p>

                        <Link to='/doctors' 
                        className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                        mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                            <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                        </Link>

                    </div>
                </div>

                {/* ----------------------- Third Selection --------------------------------------  */}
                <div className='py-[30px] px-5'>
                    <div className='flex items-center justify-center'>
                        <img src={icon03} alt=""/>
                    </div>


                    <div className='mt-[30px]'>
                        <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                            Book Appointment
                        </h2>

                        <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                        Scheduling your next medical appointment is just a few clicks away. 
                        Our user-friendly online booking system allows you to choose the time and doctor that best fit 
                        your schedule and needs.
                        </p>

                        <Link to='/doctors' 
                        className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                        mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                            <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                        </Link>

                    </div>
                </div>

            </div>
        
    </section>

    {/* --------------------------------------------- The About Section ----------------------------------------------- */}
    <About /> 
        {/* ------------------------------- End of About Section ------------------------------------- */}

    {/* ------------------------------- The Services Section ------------------------------------- */}
    <section>
        <div className='container'>
            <div className='xl:w-[470px] mx-auto'>
                <h2 className='heading text-center'>
                    Our Medical Services
                </h2>

                <p className='text_para text-center'>
                    World-class care for everyone. Our health system offers unmatched, 
                    expert health care.
                </p>
            </div>

            <ServiceList />

        </div>
    </section>
    {/* ------------------------------- End of The Services Section ------------------------------------- */}

    {/* ------------------------------- The Features Section ------------------------------------- */}

    <section>
        <div className='container'>
            <div className='flex items-center justify-between flex-col lg:flex-row'>
                {/* ------------------------------- ------------------------------------- */}
                <div className='xl:w-[670px]'>
                    <h2 className='heading'>
                        Get Virtual Treatment <br />anytime.
                    </h2>

                    <ul className='pl-4'>
                        <li className='text_para'>
                            1. Schedule the appointment directly.
                        </li>

                        <li className='text_para'>
                            2. Contact your physician.
                        </li>

                        <li className='text_para'>
                            3. View our physicians accepting new patients, use the
                            online scheduler to book an appointment.
                        </li>
                    </ul>

                    <Link to="/">
                        <button className='btn'>
                            Learn more
                        </button>
                    </Link>
                </div>

                {/* ------------------------------- featured images ------------------------------------- */}
                <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
                    <img src={featureImg} className='w-3/4' alt='' />
                

                <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px]
                md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-[6px] lg:gap-3'>
                            <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor
                            font-[600]'>
                                Mon, 13
                            </p>

                            <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor
                            font-[400]'>
                                9:00AM
                            </p>

                        </div>

                        <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor
                        rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                            <img src={videoIcon} alt='' />
                        </span>

                    </div>

                    <div className='w-[65px] lg:w-[96px] bg-[#CCF] py-1 px-2 lg:py-[6px] lg:px-[10px]
                    text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-purpleColor font-[500] mt-2 lg:mt-4
                    rounded-full'>
                        Appointment
                    </div>

                    <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                        <img src={avatarIcon} alt='' />

                        <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700]
                        text-headingColor'>
                            John Doe
                        </h4>
                    </div>

                </div>
                </div>
            </div>
        </div>
    </section>
    {/* ------------------------------- End of The Features Section ------------------------------------- */}

    {/* ------------------------------- Doctors Section ------------------------------------- */}
    <section>
        <div className='container'>
            <div className='xl:w-[470px] mx-auto'>
                <h2 className='heading text-center'>
                    Our Great Doctors
                </h2>

                <p className='text_para text-center'>
                Exceptional health care accessible to everyone. Our system is renowned for its 
                expert care and unmatched quality.
                </p>

            </div>

            <DoctorList />

        </div>
    </section>
    {/* ------------------------------- End of Doctors Section ------------------------------------- */}

    {/* ------------------------------- FAQ Section ------------------------------------- */}
    <section>
        <div className='container'>
            <div className='flex justify-between gap-[50px] lg:gap-0'>
                <div className='w-1/2 hidden md:block'>
                    <img src={faqImg} alt="" />
                </div>

                <div className='w-full md:w-1/2'>
                    <h2 className='heading'>
                        Frequently asked questions
                    </h2>

                    <FaqList />

                </div>
            </div>
        </div>
    </section>
    {/* ------------------------------- End of FAQ Section ------------------------------------- */}

    {/* ------------------------------- Testimonial Section ------------------------------------- */}
    <section>
        <div className='container'>
            <div className='xl:w-[470px] mx-auto'>
                <h2 className='heading text-center'>
                    Our Testimonials
                </h2>

                <p className='text_para text-center'>
                    Take a look at what our patients have to say about our services and doctors.
                </p>
            </div>

            <Testimonial />

        </div>
    </section>
    {/* ------------------------------- End of Testimonial Section ------------------------------------- */}
    </>
}

export default Home;