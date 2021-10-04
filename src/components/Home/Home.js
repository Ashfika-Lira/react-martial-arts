import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/1_lCDDvo_18bOxFukltpkFkQ.jpeg'
import img2 from '../../images/depositphotos_74227151-stock-photo-couple-training-in-martial-arts.jpg'
import img3 from '../../images/Learn+Martial+Arts.jpg'
import GetService from  '../../reactDynamic/getService';
import Services from '../Services/Services';

const Home = () => {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };

   const servicesAll = GetService()
   return (
      <div>
         <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={img1}
                     alt="First slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={img2}
                     alt="Second slide"
                  />
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className="d-block w-100"
                     src={img3}
                     alt="Third slide"
                  />
               </Carousel.Item>
            </Carousel>
         </div>
         <div>
            <h1 className="heading py-2 text-light bg-success">Our most liked services</h1>
            <div className="row row-cols-lg-4 row-cols-1 mt-4 ms-1">
               {
                  servicesAll.slice(0, 4).map(services => <Services key={services.key} services={services}></Services>)
               }
            </div>
         </div>
      </div>
   );
};

export default Home;