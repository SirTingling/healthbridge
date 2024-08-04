import React from 'react';
import { services } from './../../assets/data/services';
import ServiceCard from './ServiceCard';
// -----------------------------------------------------------------------------------------------------------
// ---------------------------------------- ServiceList Component ----------------------------------------

const ServiceList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {/* Map through the services array and render a ServiceCard for each service */}
      {services.map((item, index) => (
        <ServiceCard item={item} index={index} key={index} />
      ))}
    </div>
  );
};

// ----------------------------------------- Export -----------------------------------------
// -----------------------------------------------------------------------------------------------------------
export default ServiceList;
// -----------------------------------------------------------------------------------------------------------