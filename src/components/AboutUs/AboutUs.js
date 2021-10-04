import React from 'react';

const AboutUs = () => {
	return (
      <div>
         <h2 className="heading py-2 text-dark ps-4 text-center">Our Services</h2>
         <div className='row row-cols-lg-2 row-cols-1 m-5'>
            <div className="col-lg-7 col-sm-12">
               <p className="fs-5">We provide  many courses of different Kung Fu style. Basically, Traditional Kung Fu is our core subject. The founder & chief instructor is Ostad Abdullah Al Monsur. He is a Double Degree Black Belt Holder in Kung Fu and 2nd Duan holder in Chinese Wushu. He is one of the leading Kung Fu Master in Bangladesh.  He started learning Kung Fu from his child hood. He has a lot of achievement in his Martial Arts career. He knows many styles of Martial Arts including Sort Kung Fu, Animal Kung Fu, Drunken Kung Fu, Wing Chun Kung Fu, Tai chi, Jeet Kun Du, Street Fighting, Wushu Etc.</p>
               <h3>Our Facilities</h3>
               <ul>
                  <li>Practical Self-Defense</li>
                  <li>Increase Awareness.</li>
                  <li>Effective Escape Techniques</li>
                  <li>Practical Unlocking System</li>
                  <li>Using Body as Weapon</li>
               </ul>
            </div>
            <div className="col-lg-5 col-sm-12">
               <img className="img-fluid" src={'https://static9.depositphotos.com/1178962/1085/v/600/depositphotos_10851370-stock-illustration-fighting-silhouette.jpg'} alt="" />
            </div>
         </div>
      </div>
   );
};

export default AboutUs;
