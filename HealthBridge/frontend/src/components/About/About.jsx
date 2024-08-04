import React from 'react';
import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png';
import { Link } from 'react-router-dom';

/* ---------------------------- About Component ----------------------------- */
const About = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
          
          {/* -------------------------- Feature Images -------------------------- */}
          <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
            <img src={aboutImg} alt="" />
            <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
              <img src={aboutCardImg} alt='' />
            </div>
          </div>
          {/* ----------------------- End of Feature Images ---------------------- */}

          {/* ------------------------------ Content ----------------------------- */}
          <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
            <h2 className='heading'> Where Expertise Meets Compassionate Care </h2>
            <p className='text_para'>
              Now more than ever, our communities require compassion and dedicated support, and our families need 
              steadfast care. At HealthBridge, we are devoted to fostering healthier communities through comprehensive 
              and empathetic health services.
            </p>
            <p className='text_para mt-[30px]'>
              In these challenging times, the need for compassion and support in our communities has never been 
              greater, and the demands on our families continue to grow. At HealthBridge, we are deeply committed to 
              enhancing community health by providing exceptional care and comprehensive support services.
            </p>
            <Link to="/">
              <button className='btn'>Learn more</button>
            </Link>
          </div>
          {/* ------------------------- End of Content -------------------------- */}
          
        </div>   
      </div>
    </section>
  );
};
/* ---------------------------- About Component ----------------------------- */
/* ----------------------------  ----------------------------- */
export default About;
/* ----------------------------  ----------------------------- */
/* ----------------------------  ----------------------------- */
