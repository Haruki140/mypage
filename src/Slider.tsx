import React, { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const photoData = [
    {
        uri: "./src/assets/home.jpg",
        alt: 1,
    },
    {
        uri: './src/assets/test2.png',
        alt: 2,
    }
]

const Slider: FC = () => {
    return (
        <Swiper
            autoplay={{
            delay: 2500,
            }}
            spaceBetween={10}
            speed={1000}
            centeredSlides={true}
            slidesPerView={1}
            modules={[Autoplay]}
            loop={true}
        >
            {photoData.map(photo => {
                return (
                    <SwiperSlide>
                        <img className="h-70 w-70 rounded-xl object-cover" src={photo.uri} alt={photo.uri} />
                    </SwiperSlide>
                )
            })
            }
        </Swiper>
    )
}

export default Slider;