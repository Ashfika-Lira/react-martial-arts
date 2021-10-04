import React from 'react';
import GetService from '../../reactDynamic/getService';
import Services from '../Services/Services';

const Courses = () => {
   const servicesAll = GetService();
   return (
      <div>
         <h2 className="heading py-2 text-light bg-success ps-4 text-center">Our most liked services</h2>
         <div className="row row-cols-lg-4 row-cols-1 mt-5 gy-4">
            {
               servicesAll.map(services => <Services services={services}></Services>)
            }
         </div>
      </div>
   );
};

export default Courses;