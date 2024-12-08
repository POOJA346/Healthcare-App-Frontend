import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { HiStar } from 'react-icons/hi';
import brownskin from '../../assets/images/brownskin.jpeg';
import wasabi from '../../assets/images/wasabi.jpeg';

const IndianTestimonials = ({ testimonials }) => {
  return (
    <section>
      <div className='container'>
        <div className='mt-[30px] lg:mt-[55px]'>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className='py-[30px] px-5 rounded-[13px]'>
                  <div className='flex items-center space-x-10'>
                    <img src={item?.image} className='w-16 h-16 rounded-full object-fit' alt='logo' />
                    <div>
                      <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>{item.name}</h4>
                      <div className='flex items-center gap-[2px]'>
                        {[...Array(item.stars)].map((_, index) => (
                          <HiStar key={index} className='text-yellowColor w-[18px] h-5' />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    {item.content}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const indianTestimonials = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      stars: 5,
      content: "I consulted Dr. Mitali Jain for my skin issues and I am very satisfied. She helped me to resolve my problem.",
      image : "https://images.unsplash.com/photo-1609770653328-a4d1dd377970?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: 'Priya Patel',
      stars: 4,
      content: "I consulted Dr. Archana Goyal for my skin problems. She gave me good advice and I saw improvement in my condition.",
      image : "https://images.unsplash.com/photo-1624610260210-0597342d0e3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: 'Amit Kumar',
      stars: 5,
      content: "Dr. Neelima Singh solved my hair problem. I am very happy with her advice and I commend her.",
      image : "https://images.unsplash.com/photo-1534339480783-6816b68be29c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: 'Anjali Gupta',
      stars: 3,
      content: "I consulted Dr. Vinod Sharma for my skin issues. I have seen some improvement with his advice, but I am not entirely satisfied.",
      image : "https://images.unsplash.com/photo-1626193082710-a16206f819f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      name: 'Sneha Singh',
      stars: 4,
      content: "I consulted Dr. Rajeshwari Yadav for my facial issues. She gave me good advice and I am happy with her remedies.",
      image : "https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <IndianTestimonials testimonials={indianTestimonials} />
  );
};

export default Testimonials;
